require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;


//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');

//Servir contenido estático
app.use(express.static('public') );

  

//Rutas
  app.get('/', (req, res) => {
    res.render('home', {
      nombre: 'Gonzalo Amaya',
      titulo: 'Curso de Node'
    });
  });


  app.get('/generic', (req, res) => {
    res.render('generic',{
      nombre: 'Gonzalo Amaya',
      titulo: 'Curso de Node'
    })
  });
  
  app.get('/elements', (req, res) => {
    res.render('elements',{
      nombre: 'Gonzalo Amaya',
      titulo: 'Curso de Node'
    })
  });


app.get('*', (req, res) => {
    res.render('')
  });

  //Mensaje a consola
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });