const mongoose = require('mongoose');

const FiscalizacaoSchema = new mongoose.Schema({
  data:  { type: Date, required: true },
  status: { type: String, required: true },
  observacoes: String,
  localizacao: {
    lat: Number,
    long: Number
  },
  foto: String,
  obra: { type: mongoose.Schema.Types.ObjectId, ref: 'Obra', required: true }
});

module.exports = mongoose.model('Fiscalizacao', FiscalizacaoSchema);
