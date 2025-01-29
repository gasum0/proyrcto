const db = require('../config/db');

// Obtener todas las tareas
exports.getTasks = (req, res) => {
    db.query('SELECT * FROM tasks', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

// Obtener una tarea por ID
exports.getTaskById = (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM tasks WHERE id = ?', [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'Tarea no encontrada' });
        }
        res.json(results[0]);
    });
};

// Crear una tarea
exports.createTask = (req, res) => {
    const { project_id, description, priority_id, status_id, due_date } = req.body;
    if (!description || !project_id) {
        return res.status(400).json({ message: 'Descripción y ID de proyecto son obligatorios' });
    }
    db.query('INSERT INTO tasks (project_id, description, priority_id, status_id, due_date) VALUES (?, ?, ?, ?, ?)', 
        [project_id, description, priority_id, status_id, due_date], 
        (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json({ message: 'Tarea creada', id: results.insertId });
        });
};

// Actualizar una tarea
exports.updateTask = (req, res) => {
    const { id } = req.params;
    const { project_id, description, priority_id, status_id, due_date } = req.body;
    db.query('UPDATE tasks SET project_id = ?, description = ?, priority_id = ?, status_id = ?, due_date = ? WHERE id = ?', 
        [project_id, description, priority_id, status_id, due_date, id], 
        (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json({ message: 'Tarea actualizada' });
        });
};

// Eliminar una tarea
exports.deleteTask = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM tasks WHERE id = ?', [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Tarea eliminada' });
    });
};
