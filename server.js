const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const exphbs = require('express-handlebars'); 

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const apiRoutes = require('./app/routing/apiRoutes.js');
const htmlRoutes = require('./app/routing/htmlRoutes.js');
htmlRoutes(app);
apiRoutes(app);

app.set('port', (process.env.PORT || 3000));

app.listen(process.env.PORT || 3000, () => {
    console.log('App listening on port', process.env.PORT || 3000);
});


