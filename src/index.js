const VERSION = '{%VERSION%}';


import express from 'express';
import bodyParser from 'body-parser';
import fs from 'mz/fs';
import gzipStatic from 'connect-gzip-static';
import {production, escapeJSONString} from './utils.js';
import cors from 'cors';
import url from 'url';
import http from "http";
const app = express();
const port = 9000;
var admin = express.Router(),
    user = express.Router();
    
var corsOptions = {
  origin: (origin, cb) => {
    if (!origin) {
      cb(null, false);
      return;
    }
    const u = url.parse(origin);
    cb(null, u.hostname == 'localhost' || u.hostname == '127.0.0.1');
  },
  maxAge: 60 * 60 * 24,
  allowedHeaders: ['Content-Type','Authorization'],
  credentials: true
}

app.use(cors(corsOptions));
admin.use(cors(corsOptions));

app.disable('x-powered-by');
// we need link   
var avatar, UsersList1, UsersList2, HistoryUsers, MessageForHistory;
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
            isPersonal: false,
            historyId: 'sadsdasdasd'
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
            isPersonal: true,
            historyId: 'qqqqqqqq'
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
            isPersonal: false,
            historyId: '222222222'
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
            isPersonal: true,
            historyId: 'rrrrrrrrrr'
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
            isPersonal: false,
            historyId: 'tyyyyyyyyyyy'
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
            isPersonal: true,
            historyId: 'ddddddsasdad'
          }
        ];
        UsersList2 = [
            {
              uuid: "mnbbmbn",
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
              uuid: "iurtiurt",
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
              uuid: "fhgjmfhgm",
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
              uuid: "wreyhdfc",
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
              uuid: "rjtygdbd",
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
              uuid: "yhnyhnyhn",
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
        HistoryUsers = [
          {
              uuid: "yhnyhnyhn",
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
          },
          {
              uuid: "ccccdcdcdcddxc",
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
          }]
        ;
        MessageForHistory = [
          {
            uuid: "alex",
            nickname: "alex",
            avatar: avatar,
            title: "Создать запрос на перевод",
            content: "Создать запрос на перевод Создать запросна переводСоздать запроснапереводСоздать запросна d",
            contentFull: "Создать запрос на перевод Создать запросна переводСоздать запроснапереводСоздать запросна d",
            opened: false,
            publishTime: new Date(new Date() - 100000).toISOString(),
            startWorkingTime: new Date().toISOString(),
            duration: 24441,
            letterNumber: 213,
            startTime: "12:32",
            from: "RUS",
            to: "ENG",
            cost: "$0.33",
            postType: 'post'
          },
          {
            uuid: "alex_alex",
            nickname: "alex_alex",
            avatar: avatar,
            title: "Создать запрос на перевод",
            content: "Создать запрос на перевод",
            contentFull: "Создать запрос на перевод Создатьзапросна переводСоздать запроснапереводСоздать запросна d",
            publishTime: new Date(new Date() - 100000).toISOString(),
            startWorkingTime: new Date(new Date() - 100000).toISOString(),
            duration: 634,
            startTime: "12:32",
            letterNumber: 213,
            opened: false,
            from: "ENG",
            to: "CHN",
            cost: "$11.33",
            postType: 'reply'
          }
        ];
      })()
  }
  catch(err){
        err => console.trace(err.stack)
  }
app.use('/', (req, res, next) => {
  console.log(req.method + ': ' + req.originalUrl); 
  next()
});
app.use(
  gzipStatic(__dirname + '/assets',{
    maxAge: production? 1000 * 60 * 60 * 24 * 365 : 0
  })
)

// Admin routers
admin.use(bodyParser.json());
admin.use(bodyParser.urlencoded({
  extended: true
}))

admin.post('/user', function(req, res) {
  res.json({
    id: req.body.id,
    value: UsersList1.find(o => o.uuid === req.body.id)
  });
});


admin.post('/appeal', function(req, res) {
  res.json({
    id: req.body.id,
    value: UsersList2
  });
});

admin.get('/check', (req, res) => res.send('OK'));

admin.get('/users', (req, res)=>{
  res.send(JSON.stringify(UsersList1.map(o => o.uuid)))
})

admin.get('/history', (req, res)=>{
  res.send(JSON.stringify(UsersList1.map(o => o.historyId)))
})

admin.post('/historyrooms', function(req, res) {

  res.json({
    id: req.body.id,
    value: ['yhnyhnyhn', 'ccccdcdcdcddxc']
  });
});

admin.post('/historyroom', function(req, res) {
  res.json({
    id: req.body.id,
    value: HistoryUsers.find(o => o.uuid === req.body.id)
  });
});


admin.post('/historymassage', function(req, res) {
  res.json({
    id: req.body.id,
    value: MessageForHistory
  });
});


admin.get('/appeals', (req, res)=>{
  res.send(JSON.stringify(UsersList2.map(o => o.uuid)))
})

const Searching = [
  {
    uuid: 'wqefeq',
    avatar: avatar,
    title: 'Создать запрос на перевод',
    content: 'Создать запрос на перевод Создатьзапросна переводСоздать запроснапереводСоздать запросна d',
    publishTime: (new Date).toISOString(),
    startWorkingTime: (new Date(new Date - 1000000)).toISOString(),
    duration: 1341,
    letterNumber: 213,
    from: 'RUS',
    to: 'ENG',
    cost: '$0.33'
  },
  {
    uuid: 'wqerq',
    avatar: avatar,
    title: 'Создать запрос на перевод',
    content: 'Создать запрос на перевод',
    publishTime: (new Date).toISOString(),
    startWorkingTime: (new Date).toISOString(),
    duration: 431241,
    letterNumber: 123,
    from: 'ENG',
    to: 'CHN',
    cost: '$11.33'
  }
]
const Users = {
  'wqefeq': {
    uuid: 'alex',
    nickname: 'alex',
    avatar: avatar,
    title: 'Создать запрос на перевод',
    content: 'Создать запрос на перевод Создать запросна переводСоздать запроснапереводСоздать запросна d',
    contentFull: 'Создать запрос на перевод Создать запросна переводСоздать запроснапереводСоздать запросна d',
    opened: false,
    publishTime: (new Date(new Date - 100000)).toISOString(),
    startWorkingTime: (new Date).toISOString(),
    duration: 241,
    letterNumber: 213,
    startTime: '12:32',
    from: 'RUS',
    to: 'ENG',
    cost: '$0.33'
  }, 
  'wqerq': {
    uuid: 'alex_alex',
    nickname: 'alex_alex',
    avatar: avatar,
    title: 'Создать запрос на перевод',
    content: 'Создать запрос на перевод',
    contentFull: 'ффффффСоздать запрос на перевод Создатьзапросна переводСоздать запроснапереводСоздать запросна d Создать запрос на перевод Создатьзапросна переводСоздать запроснапереводСоздать запросна d Создать запрос на перевод Создатьзапросна переводСоздать запроснапереводСоздать запросна d Создать запрос на перевод Создатьзапросна переводСоздать запроснапереводСоздать запросна d Создать запрос на перевод Создатьзапросна переводСоздать запроснапереводСоздать запросна d',
    publishTime: (new Date(new Date - 100000)).toISOString(),
    startWorkingTime: (new Date(new Date - 100000)).toISOString(),
    duration: 634,
    startTime: '12:32',
    letterNumber: 213,
    opened: false,
    from: 'ENG',
    to: 'CHN',
    cost: '$11.33'
  }
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}))

app.all('*',(request, response, next) => {
    var options = {
      "method": "POST",
      "hostname": "api-textra.iondigi.com",
      "port": "80",
      "path": request.originalUrl,
      "headers": {
        "content-type": "application/json",
        "cache-control": "no-cache",  }
    };

  var req = http.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
      chunks.push(chunk);
    });

    res.on("end", function () {
      var body = Buffer.concat(chunks);
      response.json(body.toString());
      next();
    });
  });
  req.write(JSON.stringify(request.body));
  req.end();
  
})

// user routers
user.use(bodyParser.json());
user.use(bodyParser.urlencoded({
  extended: true
}))
user.get('/mylist', (req, res) => {
   res.send(JSON.stringify(Searching.map(o => o.uuid)))
})
app.use('/admin', admin);
app.use('/dashboard', user);
app.listen(port, () => {
  console.log(`Server running on port ${port}, version:${VERSION}`);
}); 


