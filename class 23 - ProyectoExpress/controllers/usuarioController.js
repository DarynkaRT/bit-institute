const Usuario = require("../models/Usuario");


exports.crearUsuario = async(req, res) => {
    try {
        let usuario;
        console.log(req.body)
        usuario = new Usuario(req.body);
        await usuario.save();
        res.send(usuario);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... Hay un error, comuniquese con soporte');
    }
}

exports.obtenerUsuarios = async(req, res) => {
    try {
        console.log(req.body)
        const usuario = await Usuario.findOne({corre: req.body.correo, password: req.body.password});
        
        res.json(usuario);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... Hay un error, comuniquese con soporte');
    }
}


exports.actualizarUsuario = async(req, res) => {
    try {
        const { nombre, apellido, edad, correo, password, telefono, direccion } = req.body
        let usuario = await Usuario.findById(req.params.id);

        if (!usuario) {
            res.status(404).json({ mensaje: 'No se encuentra el usuario' });
        }

        usuario.nombre = nombre;
        usuario.apellido = apellido;
        usuario.edad = edad;
        usuario.correo = correo;
        usuario.password = password;
        usuario.telefono = telefono;
        usuario.direccion = direccion;

        usuario = await Usuario.findOneAndUpdate({ _id: req.params.id }, usuario, { new: true });
        res.json(usuario)
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... Hay un error, comuniquese con soporte');
    }
}

exports.eliminarUsuario = async(req, res) => {
    try {
        let usuario = await Usuario.findById(req.params.id)
        if (!usuario) {
            res.status(404).json({ mensaje: 'No se encuentra el usuario' });
        }
        await Usuario.findOneAndRemove({ _id: req.params.id })
        res.json({ mensaje: 'El usuario fue eliminado exitosamente' });
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... Hay un error, comuniquese con soporte');
    }
}
