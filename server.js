const express= require('express')
const {json}= require('body-parser')
const app = express();
const session = require('express-session');
const port=8085;
const corsOptions={
  origin: 'http://localhost:8085'
};
const sessionConfig = require('./server/sessionConfig.js');
const profileCtrl =require('./server/controllers/profileCtrl');
const userCtrl= require('./server/controllers/userCtrl');



app.use(json());

app.use(session(sessionConfig));
app.get('/api/profiles', profileCtrl.getFriends);
app.post('/api/login', userCtrl.login);

//app.use(cors(corsOptions))
app.use(express.static(__dirname + '/public'));
//app.get('api/', userCtrl.ygvgvb){
//console.log (__dirname)




app.listen(port, () => console.log(`express listening on ${port}`) );
