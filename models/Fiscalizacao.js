const mongoose = require('mongoose');

const FiscalizacaoSchema = new mongoose.Schema({
  data: Date,
  status: String,
  observacoes: String,
  localizacao: {
    lat: Number,
    long: Number
  },
  foto: String,
  obra: { type: mongoose.Schema.Types.ObjectId, ref: 'Obra' }
});

module.exports = mongoose.model('Fiscalizacao', FiscalizacaoSchema);
