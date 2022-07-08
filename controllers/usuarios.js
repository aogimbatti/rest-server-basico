const { response } = require('express');

const usuariosGet = (req = request, res = response) => {

    const { q = '', nombre = '', apikey = '' } = req.query;

    res.json({
        msg: 'get API - Controlador',
        q,
        nombre,
        apikey
    });
};

const usuariosPut = (req = request, res = response) => {

    const { id } = req.params;

    res.json({
        msg: 'put API - Controlador',
        id: id
    });
}

const usuariosPost = (req = request, res = response) => {
    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API - Controlador',
        nombre,
        edad
    });
}

const usuariosDelete = (req = request, res = response) => {
    const { id } = req.params;

    res.json({
        msg: 'delete API - Controlador',
        id
    });
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}