const express = require ('express');
const exphbs = require("express-handlebars");
const app = express();
const path = require("path");
const morgan = require("morgan");


app.set("port", process.env.PORT || 4000);
app.set('views',path.join(__dirname, 'views'));
app.engine(".hbs", exphbs.engine({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaultLayout: "main",
    extname: ".hbs",
    helpers: require("./libs/helpers.js")
  })
);

app.set('view engine', '.hbs');

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:false}))
//Routes
app.use(require('./routes/index.routes'));


app.use(express.static(path.join(__dirname, "public")));

module.exports = app; 


/*





app.set("view engine", ".hbs");


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(require("./routes/index"));



module.exports = app;
*/