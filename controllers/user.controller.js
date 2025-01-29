const db = require('../config/db');

// Obtener todos los usuarios
exports.getUsers = (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

// Obtener un usuario por ID
exports.getUserById = (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM users WHERE id = ?', [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(results[0]);
    });
};

// Crear un usuario
exports.createUser = (req, res) => {
    const { name, email, date_hired } = req.body;
    if (!name || !email) {
        return res.status(400).json({ message: 'Nombre y correo son obligatorios' });
    }
    db.query('INSERT INTO users (name, email, date_hired) VALUES (?, ?, ?)', 
        [name, email, date_hired], 
        (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json({ message: 'Usuario creado', id: results.insertId });
        });
};

// Actualizar un usuario
exports.updateUser = (req, res) => {
    const { id } = req.params;
    const { name, email, date_hired } = req.body;
    db.query('UPDATE users SET name = ?, email = ?, date_hired = ? WHERE id = ?', 
        [name, email, date_hired, id], 
        (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json({ message: 'Usuario actualizado' });
        });
};

// Eliminar un usuario
exports.deleteUser = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM users WHERE id = ?', [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Usuario eliminado' });
    });
};
