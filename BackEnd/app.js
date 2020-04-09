const express       = require('express');
const app           = express();
const cors          = require('cors');
const bodyParser    = require('body-parser');
const command       = require('./Services/command')

console.clear();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

command.databaseConnection();
 
// geri dondurulecek degeri otomatik yapacak
app.use(command.ResponseModify);
app.use(command.TokenKontrol);

app.use('/users',       require('./Controller/user.controller'));
app.use('/todo',       require('./Controller/todo.controller'));


// app.use('/firma',       require('./Controller/firma.controller'));



app.get('/', async function (req, res) {
  return req.returnTemplate("ismail çetin ", "esai", 200)
})
 

const port = 4500// process.env.NODE_ENV === 'production' ? 80 : process.env.PORT;
const server = app.listen(port, function () {
  console.log('Server listening on port ' + port);
});