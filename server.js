const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const exphbs = require('express-handlebars'); 

const app = express();

const public = require('path').join(__dirname,'/app/public');

app.use(express.static(public));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.text());
// app.use(bodyParser.json({type:'application/vnd.api+json'}));

const apiRoutes = require('./app/routing/apiRoutes.js');
const htmlRoutes = require('./app/routing/htmlRoutes.js');
htmlRoutes(app);
apiRoutes(app);

app.set('port', (process.env.PORT || 3000));

app.listen(process.env.PORT || 3000, () => {
    console.log('App listening on port', process.env.PORT || 3000);
});


