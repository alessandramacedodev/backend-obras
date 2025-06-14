const Fiscalizacao = require('../models/Fiscalizacao');

const criarFiscalizacao = async (req, res) => {
  const fiscalizacao = await Fiscalizacao.create(req.body);
  res.status(201).json(fiscalizacao);
};

const listarFiscalizacoes = async (req, res) => {
  const fiscalizacoes = await Fiscalizacao.find();
  res.json(fiscalizacoes);
};

const listarPorObra = async (req, res) => {
  const fiscalizacoes = await Fiscalizacao.find({ obra: req.params.id });
  res.json(fiscalizacoes);
};

const atualizarFiscalizacao = async (req, res) => {
  const f = await Fiscalizacao.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(f);
};

const deletarFiscalizacao = async (req, res) => {
  await Fiscalizacao.findByIdAndDelete(req.params.id);
  res.status(204).end();
};

module.exports = {
  criarFiscalizacao,
  listarFiscalizacoes,
  listarPorObra,
  atualizarFiscalizacao,
  deletarFiscalizacao
};
