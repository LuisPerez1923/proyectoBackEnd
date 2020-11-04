const express = require('express');
const router = express.Router();

const Contacto = require('../models/contacto'); //Importamos el modelo de la tarea, o el esquema que tiene la forma que vamos a ocupar con la informacion

router.get('/', async (req, res) => { //async marca que si tenemosmetodos asincronos se tendra que esperar para que funcione correctamente, esto nos facilita ya que no es necesario utilizar promesas 'then'
    const contactos = await Contacto.find(); //en metodos asincronos podemos poner await para esperar al proceso, se ve comunmente en operaciones que oncolucren la base de datos como guardar save() o encontrar find()
    res.render('index', {
        contactos //tasks: tasks
    });
});

router.post('/add', async (req, res) => {
    //console.log(new Task(req.body)); //crea un objeto que se puede almacenar dentro de la base de datos
    const contacto = new Contacto(req.body); //nuevo objeto de la "clase" Task (nuevo dato que queremos almacenar en la DB)
    await contacto.save(); //guarda la tarea (objeto) dentro de la base de datos (almacenar el dato)
    res.redirect('/');
});

router.get('/turn/:id', async (req, res) => {
    const { id } = req.params;
    const contacto = await Contacto.findById(id);
    contacto.status = !contacto.status;
    await contacto.save();
    res.redirect('/');
});

router.get('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const contacto = await Contacto.findById(id);
    res.render('edit', {
        contacto
    });
});

router.post('/edit/:id', async (req, res) => {
    const { id } = req.params;
    await Contacto.update({_id: id}, req.body);
    res.redirect('/');
});

router.get('/delete/:id', async (req, res) => {
    //console.log(req.params); //req.params guarda los parametros de la ruta, o guarda los valores de la respuesta
    const { id } = req.params; //nos dice que id va a ser igual al id que viene de req.params
    await Contacto.remove({_id: id}); //_id es un valor que mongo db agrega a nuestro schema las operaciones de bases de datos son asincronas por lo que se usa await
    res.redirect('/');
});



module.exports = router;