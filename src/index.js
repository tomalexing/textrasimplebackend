const VERSION = '{%VERSION%}';


import express from 'express';
import bodyParser from 'body-parser';
import fs from 'mz/fs';
import gzipStatic from 'connect-gzip-static';
import {production, escapeJSONString} from './utils.js';

const app = express();
const port = 9000;
var router = express.Router();
app.disable('x-powered-by');
// we need link   

router.param('user_id', function(req, res, next, id) {
  // sample user, would actually fetch from DB, etc...
  req.user = {
    id: id,
    name: 'TJ'
  };
  next();
});

router.route('/users/:user_id')
.all(function(req, res, next) {
  // runs for all HTTP verbs first
  // think of it as route specific middleware!
  next();
})
.get(function(req, res, next) {
  res.json(req.user);
})
.put(function(req, res, next) {
  // just an example of maybe updating the user
  req.user.name = req.params.name;
  // save user ... etc
  res.json(req.user);
})
.post(function(req, res, next) {
  next(new Error('not implemented'));
})
.delete(function(req, res, next) {
  next(new Error('not implemented'));
});
var avatar, UsersList1, UsersList2;
  try{
      (async () => {
        avatar =  await fs.readFile(__dirname + '/assets/9631913.jpeg' );
        UsersList1 = [
          {
            uuid: "qwerqwerqwer",
            nickname: "aaaa", 
            type: 'u',
            email: 'nickmy@yandex.ru',
            avatar: 'data:image/png;base64,' + avatar.toString('base64').slice(),
            title: "Инна Константинопольская",
            content: "Создать запрос на перевод Создатьзапросна переводСоздать запроснапереводСоздать запросна d",
            publishTime: new Date().toISOString(),
            registrationTime: new Date(new Date() - 10000),
            startWorkingTime: new Date(new Date() - 1000000).toISOString(),
            duration: 1341,
            letterNumber: 213,
            from: "RUS",
            to: "ENG",
            cost: "$0.33",
            isPersonal: false
          },
          {
            uuid: "lkhgghk",
            nickname: "zfdfsddf",
            email: 'helpme@yandex.ru',
            avatar: avatar,
            type: 'c',
            title: "Создать запрос на перевод",
            content: "Создать запрос на перевод",
            publishTime: new Date().toISOString(),
            startWorkingTime: new Date().toISOString(),
            registrationTime: new Date(new Date() - 10065500),
            duration: 431241,
            letterNumber: 123,
            from: "ENG",
            to: "CHN",
            cost: "$11.33",
            isPersonal: true
          },
          {
            uuid: "vnbmnbmhg",
            nickname: "alex",
            email: 'yiyiyiyi@mail.ru',
            avatar: avatar,
            type: 't',
            title: "Создать запрос на перевод",
            content: "Создать запрос на перевод Создатьзапросна переводСоздать запроснапереводСоздать запросна d",
            publishTime: new Date().toISOString(),
            startWorkingTime: new Date(new Date() - 1000000).toISOString(),
            registrationTime: new Date(new Date() - 10000000),
            duration: 1341,
            letterNumber: 213,
            from: "RUS",
            to: "ENG",
            cost: "$0.33",
            isPersonal: false
          },
          {
            uuid: "bertu",
            nickname: "rgsgfgsa",
            email: 'yiyiyiyi@mail.ru',
            avatar: avatar,
            type: 'u',
            title: "Создать запрос на перевод",
            content: "Создать запрос на перевод",
            publishTime: new Date().toISOString(),
            startWorkingTime: new Date().toISOString(),
            registrationTime: new Date(new Date() - 10),
            duration: 431241,
            letterNumber: 123,
            from: "ENG",
            to: "CHN",
            cost: "$11.33",
            isPersonal: true
          },
          {
            uuid: "wasdffeq",
            nickname: "bfsbs",
            email: 'dsgsgsgdg@mail.ru',
            avatar: avatar,
            type: 'c',
            title: "Создать запрос на перевод",
            content: "Создать запрос на перевод Создатьзапросна переводСоздать запроснапереводСоздать запросна d",
            publishTime: new Date().toISOString(),
            startWorkingTime: new Date(new Date() - 1000000).toISOString(),
            registrationTime: new Date(new Date() - 1000),
            duration: 1341,
            letterNumber: 213,
            from: "RUS",
            to: "ENG",
            cost: "$0.33",
            isPersonal: false
          },
          {
            uuid: "wasgfasrq",
            nickname: "asdasdas",
            email: 'mtnbvcx@mail.ru',
            avatar: avatar,
            type: 'c',
            title: "Создать запрос на перевод",
            content: "Создать запрос на перевод",
            publishTime: new Date().toISOString(),
            startWorkingTime: new Date().toISOString(),
            registrationTime: new Date(new Date() - 1000000),
            duration: 431241,
            letterNumber: 123,
            from: "ENG",
            to: "CHN",
            cost: "$11.33",
            isPersonal: true
          }
        ];
        UsersList2 = [
            {
              uuid: "qwerqwerqwer",
              nickname: "aaaa",
              type: 'g',
              email: 'nickmy@yandex.ru',
              avatar: avatar,
              title: "Инна Константинопольская",
              content: "Создать запрос на перевод Создатьзапросна переводСоздать запроснапереводСоздать запросна d",
              publishTime: new Date().toISOString(),
              registrationTime: new Date(new Date() - 10000),
              startWorkingTime: new Date(new Date() - 1000000).toISOString(),
              duration: 1341,
              letterNumber: 213,
              from: "RUS",
              to: "ENG",
              cost: "$0.33",
              isPersonal: false
            },
            {
              uuid: "lkhgghk",
              nickname: "zfdfsddf",
              email: 'helpme@yandex.ru',
              avatar: avatar,
              type: 'o',
              title: "Создать запрос на перевод",
              content: "Создать запрос на перевод",
              publishTime: new Date().toISOString(),
              startWorkingTime: new Date().toISOString(),
              registrationTime: new Date(new Date() - 10065500),
              duration: 431241,
              letterNumber: 123,
              from: "ENG",
              to: "CHN",
              cost: "$11.33",
              isPersonal: true
            },
            {
              uuid: "vnbmnbmhg",
              nickname: "alex",
              email: 'yiyiyiyi@mail.ru',
              avatar: avatar,
              type: 'p',
              title: "Создать запрос на перевод",
              content: "Создать запрос на перевод Создатьзапросна переводСоздать запроснапереводСоздать запросна d",
              publishTime: new Date().toISOString(),
              startWorkingTime: new Date(new Date() - 1000000).toISOString(),
              registrationTime: new Date(new Date() - 10000000),
              duration: 1341,
              letterNumber: 213,
              from: "RUS",
              to: "ENG",
              cost: "$0.33",
              isPersonal: false
            },
            {
              uuid: "bertu",
              nickname: "rgsgfgsa",
              email: 'yiyiyiyi@mail.ru',
              avatar: avatar,
              type: 'p',
              title: "Создать запрос на перевод",
              content: "Создать запрос на перевод",
              publishTime: new Date().toISOString(),
              startWorkingTime: new Date().toISOString(),
              registrationTime: new Date(new Date() - 10),
              duration: 431241,
              letterNumber: 123,
              from: "ENG",
              to: "CHN",
              cost: "$11.33",
              isPersonal: true
            },
            {
              uuid: "wasdffeq",
              nickname: "bfsbs",
              email: 'dsgsgsgdg@mail.ru',
              avatar: avatar,
              type: 'g',
              title: "Создать запрос на перевод",
              content: "Создать запрос на перевод Создатьзапросна переводСоздать запроснапереводСоздать запросна d",
              publishTime: new Date().toISOString(),
              startWorkingTime: new Date(new Date() - 1000000).toISOString(),
              registrationTime: new Date(new Date() - 1000),
              duration: 1341,
              letterNumber: 213,
              from: "RUS",
              to: "ENG",
              cost: "$0.33",
              isPersonal: false
            },
            {
              uuid: "wasgfasrq",
              nickname: "asdasdas",
              email: 'mtnbvcx@mail.ru',
              avatar: avatar,
              type: 'g',
              title: "Создать запрос на перевод",
              content: "Создать запрос на перевод",
              publishTime: new Date().toISOString(),
              startWorkingTime: new Date().toISOString(),
              registrationTime: new Date(new Date() - 1000000),
              duration: 431241,
              letterNumber: 123,
              from: "ENG",
              to: "CHN",
              cost: "$11.33",
              isPersonal: true
            }
        ];
      })()
      }catch(err){
        err => console.trace(err.stack)
  }

app.use((req,res,next) => {
  console.log('req '+ req.originalUrl +' at '+ (new Date).toISOString());
  next();
})
app.use( 
  gzipStatic(__dirname + '/assets',{
    maxAge: production? 1000 * 60 * 60 * 24 * 365 : 0
  })
)


app.get('/check', (req, res) => res.send('OK'));

app.get('/users', (req, res)=>{
  res.send(JSON.stringify(UsersList1))
})

// router.get('/appeals', (req, res)=>{
//   res.send(JSON.stringify(UsersList2))
// })
app.use(router);
app.use(bodyParser.json());
app.listen(port, () => {
  console.log(`Server running on port ${port}, version:${VERSION}`);
}); 
