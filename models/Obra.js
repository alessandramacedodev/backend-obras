const mongoose = require('mongoose');

const ObraSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  responsavel: {
    type: String,
    required: true
  },
  dataInicio: {
    type: Date,
    required: true
  },
  dataFim: {
    type: Date
  },
  localizacao: {
    lat: {
      type: Number,
      required: true
    },
    long: {
      type: Number,
      required: true
    }
  },
  descricao: {
    type: String
  },
  foto: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        
        return /^data:image\/(png|jpeg|jpg|gif);base64,/.test(value);
      },
      message: props => `${props.value} não é uma base64 válido de imagem.`
    }
  }
});

module.exports = mongoose.model('Obra', ObraSchema);
