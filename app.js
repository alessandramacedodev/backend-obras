require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const obraRoutes = require('./routes/obraRoutes');
const fiscalizacaoRoutes = require('./routes/fiscalizacaoRoutes');

const app = express();
const PORT = process.env.PORT || 3000; // define a porta de forma flexível

app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Rota de teste
app.get('/', (req, res) => {
  res.send('API de Obras e Fiscalizações rodando');
});

// Rotas principais
app.use('/obras', obraRoutes);
app.use('/fiscalizacoes', fiscalizacaoRoutes);

// Tratamento global de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ mensagem: 'Erro interno no servidor' });
});

// Conexão com MongoDB e start do servidor
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Servidor rodando em: http://localhost:${PORT}`)
    );
  })
  .catch(err => {
    console.error("Erro ao conectar no MongoDB:", err.message);
  });
