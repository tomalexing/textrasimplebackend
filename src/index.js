const VERSION = '{%VERSION%}';


import express from 'express';
import bodyParser from 'body-parser';
import fs from 'mz/fs';

const app = express();
const port = 9000;
let avatar;
try{
console.log(__dirname);
(async () => {
  let file =  await fs.readFile(__dirname + '/default-avatar.png', 'utf8');
  avatar = file.toString('base64');
})()

}catch(err){
  err => console.trace(err.stack)
}

app.get('/users',(req, res)=>{

    res.send(JSON.stringify(UsersList1))
})
console.log(JSON.stringify(UsersList1));
const UsersList1 = [
      {
        uuid: "qwerqwerqwer",
        nickname: "aaaa",
        type: 'u',
        email: 'nickmy@yandex.ru',
        avatar: 'avatar',
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

app.use(bodyParser.json());
app.listen(port, () => {
  console.log(`Server running on port ${port}, version:${VERSION}`);
}); 
