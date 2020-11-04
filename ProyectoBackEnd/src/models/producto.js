const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const productoSchema = new Schema ({
    nombreP: String,
    precioP: Number,
    descripcionP: String,
    urlImgP: String,
    /*
    title: String,
    description: String,
    status: {
        type: Boolean,
        default: false
    }
    */
});

module.exports = mongoose.model('productos', productoSchema);