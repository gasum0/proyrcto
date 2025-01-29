const db = require('../config/db');

// Obtener todos los proyectos
exports.getProjects = (req, res) => {
    db.query('SELECT * FROM projects', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

// Obtener un proyecto por ID
exports.getProjectById = (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM projects WHERE id = ?', [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'Proyecto no encontrado' });
        }
        res.json(results[0]);
    });
};

// Crear un proyecto
exports.createProject = (req, res) => {
    const { name, client_id, start_date, end_date } = req.body;
    if (!name) {
        return res.status(400).json({ message: 'El nombre del proyecto es obligatorio' });
    }
    db.query('INSERT INTO projects (name, client_id, start_date, end_date) VALUES (?, ?, ?, ?)', 
        [name, client_id, start_date, end_date], 
        (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json({ message: 'Proyecto creado', id: results.insertId });
        });
};

// Actualizar un proyecto
exports.updateProject = (req, res) => {
    const { id } = req.params;
    const { name, client_id, start_date, end_date } = req.body;
    db.query('UPDATE projects SET name = ?, client_id = ?, start_date = ?, end_date = ? WHERE id = ?', 
        [name, client_id, start_date, end_date, id], 
        (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json({ message: 'Proyecto actualizado' });
        });
};

// Eliminar un proyecto
exports.deleteProject = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM projects WHERE id = ?', [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Proyecto eliminado' });
    });
};
