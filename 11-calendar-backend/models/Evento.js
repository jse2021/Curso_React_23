const {Schema,model} = require('mongoose');

const EventoSchema = Schema({

    title: {
        type: String,
        required: true,
    },
    notes: {
        type: String,
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        require: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref:'Usuario',
        required: true
    }
});

/**
 * CONFIGURACIONES ADICIONALES
 * modificacion campos, sobrescribir serializador json
 *para que no ponga "_id", quitar version __v
 */
 EventoSchema.method('toJSON',function(){
    const{__v, _id, ...object} = this.toObject();
    object.id = _id;
    return object;
 });


module.exports = model('Evento', EventoSchema);