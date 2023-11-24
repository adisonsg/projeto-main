const express = require('express');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const User = require('../models/User'); // Certifique-se de ter este modelo de usuário
const router = express.Router();

module.exports = function(app) {
    // Rota de login
    router.get('/login', (req, res) => {
        res.render('login'); // Certifique-se de ter uma view 'login'
    });

    router.post('/login', passport.authenticate('local', {
        successRedirect: '/',    
        failureRedirect: '/login', 
        failureFlash: false       
    }));

    // Rota de logout
    router.get('/logout', (req, res) => {
        req.logout();
        res.redirect('/login');
    });

    // Rota para registro
    router.get('/register', (req, res) => {
        res.render('register'); // Certifique-se de ter uma view para isso
    });

    // Rota para processar o registro
    router.post('/register', async (req, res) => {
        try {
            const { nome, email, cpf, dataNascimento, password } = req.body;
            // Verificar se o usuário (CPF) já existe
            const userExists = await User.findOne({ where: { cpf } });
            if (userExists) {
                return res.render('register', { error: 'Usuário já existe.' });
            }
            // Hash da senha
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            // Criar novo usuário
            await User.create({
                nome,
                email,
                cpf,
                dataNascimento,
                password: hashedPassword
            });
            res.redirect('/login'); // Redireciona para a página de login após o registro
        } catch (error) {
            console.error('Erro ao criar usuário:', error);
            res.render('register', { error: 'Erro ao criar o usuário. Por favor, tente novamente.' });
        }

        console.log("Dados recebidos:", req.body);
    });
    
// Rota de login
router.get('/login', (req, res) => {
  res.render('login'); // Certifique-se de ter uma view 'login'
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',    // Redireciona para a página inicial após login bem-sucedido
  failureRedirect: '/login', // Redireciona de volta para a página de login se falhar
  failureFlash: false       // Configuração para mensagens de erro, se necessário
}));

// Rota de logout
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/login');
});

// Rota para solicitar redefinição de senha
router.get('/forgot-password', (req, res) => {
res.render('forgot-password'); // Certifique-se de ter uma view para isso
});

// Rota para processar a solicitação de redefinição de senha
router.post('/forgot-password', (req, res) => {
// Aqui você implementaria a lógica para enviar o e-mail
res.send('Instruções para redefinir a senha foram enviadas por e-mail.');
});

// Rota para o formulário de redefinição de senha
router.get('/reset-password/:token', (req, res) => {
// Verificar o token e mostrar o formulário de redefinição
res.render('reset-password', { token: req.params.token });
});

// Rota para processar a redefinição de senha
router.post('/reset-password/:token', (req, res) => {
// Aqui você implementaria a lógica de redefinição de senha
res.send('Senha redefinida com sucesso.');
});

app.use('/auth', router);
};

