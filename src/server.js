const express = require('express');
const next = require('next');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';

const server = express();

server.use(require('cors')());
server.use(express.json());

// Rota para lidar com o envio do formulário de contato
server.post('/send', (req, res, next) => {
  const nome = req.body.nome;
  const email = req.body.email;
  const mensagem = req.body.mensagem;

  require('./services/mailService')(nome, email, mensagem)
    .then(response => res.json(response))
    .catch(error =>{ 
      console.error(error);
      res.status(500).json(error);
});
   
});

// Configuração do Next.js
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  // Rota para lidar com todas as outras requisições
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.use(express.static(path.join(__dirname, 'build')));

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('Servidor iniciado na porta 3000');
  });
});
