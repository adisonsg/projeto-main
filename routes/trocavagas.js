const express   = require('express');
const router    = express.Router();
const Trocavaga = require('../models/Trocavaga');


// rota de teste
router.get('/test', (req, res) => {
  res.send('deu certo');
});


// detalhe da vaga -> view/1, view/2
router.get('/view/:id', (req, res) => Trocavaga.findOne({
  where: {id: req.params.id}
}).then(Trocavaga => {

  res.render('view', {
    Trocavaga
  });

}).catch(err => console.log(err)));


// form da rota de envio
router.get('/add', (req, res) => {
  res.render('add');
})

// form da rota de envio
router.get('/profile', (req, res) => {
  res.render('profile');
})

// form da rota de envio
router.get('/loguin', (req, res) => {
  res.render('loguin');
})

// add vaga via post
router.post('/add', (req, res) => {

  let {responsavel, email, telefone, regiao_origem, escola_origem, grau_instrucao, serie_ano, turno_origem, regiao_destino, escola_destino, turno_destino, new_trocavaga} = req.body;

  // insert
  Trocavaga.create({
    responsavel,
    email,
    telefone,
    regiao_origem,
    escola_origem,
    grau_instrucao,
    serie_ano,
    turno_origem,
    regiao_destino,
    escola_destino,
    turno_destino,
    new_trocavaga
  })
  .then(() => res.redirect('/'))
  .catch(err => console.log(err));

});

module.exports = router

