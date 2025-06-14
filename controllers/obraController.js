const Obra = require('../models/Obra');
const sendEmail = require('../utils/sendEmail');

// Criar Obra
const criarObra = async (req, res) => {
  try {
    const novaObra = new Obra(req.body);
    await novaObra.validate();  // validação manual antecipada (opcional, mas recomendado)
    
    const obraSalva = await novaObra.save();

    // Enviar email com detalhes da obra
    await sendEmail(obraSalva); 

    res.status(201).json(obraSalva);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
};

// Listar todas as Obras
const listarObras = async (req, res) => {
  try {
    const obras = await Obra.find();
    res.json(obras);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar obras.' });
  }
};

// Buscar obra por ID
const buscarObra = async (req, res) => {
  try {
    const obra = await Obra.findById(req.params.id);
    if (!obra) {
      return res.status(404).json({ error: 'Obra não encontrada.' });
    }
    res.json(obra);
  } catch (err) {
    res.status(400).json({ error: 'ID inválido.' });
  }
};

// Atualizar obra
const atualizarObra = async (req, res) => {
  try {
    const obra = await Obra.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!obra) {
      return res.status(404).json({ error: 'Obra não encontrada.' });
    }
    res.json(obra);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Deletar obra
const deletarObra = async (req, res) => {
  try {
    const obra = await Obra.findByIdAndDelete(req.params.id);
    if (!obra) {
      return res.status(404).json({ error: 'Obra não encontrada.' });
    }
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ error: 'ID inválido.' });
  }
};

module.exports = {
  criarObra,
  listarObras,
  buscarObra,
  atualizarObra,
  deletarObra
};
