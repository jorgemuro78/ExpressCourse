const express = require('express');
const { route } = require('.');
const router =express.Router();

router.get('/users/signin', (req, res) =>{
    res.send('Ingresando a la app');
});

router.get('/users/signup', (req, res) =>{
    res.send('Formulario de autenticación');
});

module.exports = router;