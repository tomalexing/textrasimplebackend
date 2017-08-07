const VERSION = '{%VERSION%}';


import express from 'express';
import bodyParser from 'body-parser';
import fs from 'mz/fs';
import gzipStatic from 'connect-gzip-static';
import {production, escapeJSONString} from './utils.js';

const app = express();
const port = 9000;
app.disable('x-powered-by');


var avatar, UsersList1;
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
      })()
      }catch(err){
        err => console.trace(err.stack)
  }
app.use( 
  gzipStatic(__dirname + '/assets',{
    maxAge: production? 1000 * 60 * 60 * 24 * 365 : 0
  })
)

app.get('/users', (req, res)=>{


    res.send(JSON.stringify(UsersList1))
  })
  

app.use(bodyParser.json());
app.listen(port, () => {
  console.log(`Server running on port ${port}, version:${VERSION}`);
}); 
