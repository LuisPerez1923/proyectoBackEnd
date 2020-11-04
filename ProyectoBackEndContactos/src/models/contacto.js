const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const contactoSchema = new Schema ({
    nombre: String,
    numAdress: Number,
    celNumber: Number,
    relacion: String,
    /*
    title: String,
    description: String,
    status: {
        type: Boolean,
        default: false
    }
    */
});

module.exports = mongoose.model('contactos', contactoSchema);