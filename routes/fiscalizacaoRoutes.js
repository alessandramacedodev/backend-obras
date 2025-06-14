const express = require('express');
const router = express.Router();
const controller = require('../controllers/fiscalizacaoController');

router.post('/', controller.criarFiscalizacao);
router.get('/', controller.listarFiscalizacoes);
router.get('/obra/:id', controller.listarPorObra);
router.put('/:id', controller.atualizarFiscalizacao);
router.delete('/:id', controller.deletarFiscalizacao);

module.exports = router;
