const fs = require('mz/fs');
const babel = require('babel-core');
const glob = require('glob');
const {AsyncArray} = require('./async_array.js')
const package = require('./../package.json');
const path = require('path');
const respawn = require('respawn');
var chokidar = require('chokidar');
 

console.log("Start building ....")

Promise.all([
    transpileJS(),
    copyStatic()
]).then(_ => Promise.resolve(copyAssets()))
  .then(_ => Promise.resolve(serverStart()))
  .then(_ => console.log('Done'))
  .catch(err => console.trace(err.stack))
  
const templateData = {
  'VERSION': package.version,   
};


const babelConfig = {
  presets: ["babili", "stage-0", "latest"],
  plugins: ["transform-runtime"]
};

const paths = {
  root: path.dirname(__dirname, '..'),
  serverScripts:{
    dest: path.resolve(__dirname, '..', 'dist'),
    src: path.resolve(__dirname, '..', 'src')
  }
}

// SETUP FOR SERVER
const serverProcess = respawn(['node', `${paths.serverScripts.dest}/index.js`]);

//SIGNALs from  
serverProcess.on('stdout', data => console.log(data.toString('utf-8')));
serverProcess.on('stderr', data => console.log(data.toString('utf-8')));
serverProcess.on('warn', data => console.log(data.toString('utf-8')));

process.on('SIGINT', () => {
  console.log('SIGINT');
  serverProcess.stop(() => {
    console.log('serverProcess stop');
    process.exit();
  });
});

process.on('uncaughtException', () => {
  serverProcess.stop();
});
 
// END

chokidar.watch(`${paths.serverScripts.src}/index.js`, {ignored: /[\/\\]\./}).on('all', (event, path) => {
  console.log('Server restart...')
  Promise.all([
    transpileJS(),
    copyStatic()
  ]).then(_ => Promise.resolve(copyAssets()))
    .then(_ => Promise.resolve(serverRestart()))
    .then(_ => console.log('Done'))
    .catch(err => console.trace(err.stack))
});

var files;
function filesWithPatterns (filesPatterns) {
    if(!files){
    files = AsyncArray.from(new Promise((resolve, reject) => glob("src/**", {dot: true}, (err, files) => err ? reject(err) : resolve(files))))
            .map( async file => file.substr(4));
    }
    return files.filter(async file => filesPatterns.some(regexp => regexp.test(file)))
}

async function copyStatic(){
    return filesWithPatterns([/\.json$/i, /\.png$/i, , /\.ico$/i, /\.jpe?g$/i]).
            map( async file => copy(`src/${file}`,`dist/${file}`)).
            array
}

async function copyAssets(){
    return filesWithPatterns([/(?:(assets)\/)(.)+\.js$/i]).
            map( async file => copy(`src/${file}`,`dist/${file}`)).
            array

}


async function transpileJS(){
   return filesWithPatterns([/\.js$/i])
        .map(async file => { return file})
        .map(async file => ({name: file, contents: await fs.readFile(`src/${file}`)}))
        .map(async file => Object.assign(file, {contents: file.contents.toString('utf-8')}))
        .map(async file => {
        for(const [key, val] of Object.entries(templateData)) {
            file.contents = file.contents.replace(`{%${key}%}`, val);
        }
        return file;
        })
        .map(async file => Object.assign(file, {code: babel.transform(file.contents, babelConfig).code}))
        // .map(async file => Object.assign(file, {code: file.contents, map: ''}))
        .map(async file => {
        const dir = path.dirname(file.name);
        await mkdirAll(`dist/${dir}`);
        await fs.writeFile(`dist/${file.name}`, file.code);
        })
        .array;
};

async function serverStart() {
    await serverProcess.start();
}

async function serverRestart() {
    await serverProcess.stop()
    await serverProcess.start();

}

async function mkdirAll(dir) {
  const elems = dir.split(path.delimiter);
  await elems.reduce(async (p, newPath) => {
    const oldPath = await p;
    const newDir = path.join(oldPath, newPath);
    await fs.mkdir(newDir).catch(_ => {});
    return newDir;
  }, Promise.resolve(''));
}

async function copy(from, to) {
  const data = await fs.readFile(from);
  const dir = path.dirname(to);
  await mkdirAll(dir);
  await fs.writeFile(to, data);
}
