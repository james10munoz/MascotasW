import { pool } from "../database/conexion.js";
import { validationResult } from "express-validator";

// Crear un nuevo género
export const registrarGenero = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name } = req.body;
        const sql = "INSERT INTO genders (name) VALUES (?)";
        const [result] = await pool.query(sql, [name]);

        res.status(201).json({ message: "Género creado con éxito", genero: { id: result.insertId, name } });
    } catch (error) {
        res.status(500).json({ message: "Error del servidor", error: error.message });
    }
};

// Obtener todos los géneros
export const listarGeneros = async (req, res) => {
    try {
        const sql = "SELECT * FROM genders";
        const [result] = await pool.query(sql);

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: "Error del servidor", error: error.message });
    }
};

// Actualizar un género por su ID
export const actualizarGenero = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { id } = req.params;
        const { name } = req.body;
        const sql = "UPDATE genders SET name = ? WHERE id = ?";
        const [result] = await pool.query(sql, [name, id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Género no encontrado" });
        }

        res.status(200).json({ message: "Género actualizado con éxito" });
    } catch (error) {
        res.status(500).json({ message: "Error del servidor", error: error.message });
    }
};


export const buscar = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = "SELECT * FROM genders WHERE id = ?";
        const [result] = await pool.query(sql, [id]);

        if (result.length === 0) {
            return res.status(404).json({ message: "Género no encontrado" });
        }

        res.status(200).json(result[0]);
    } catch (error) {
        res.status(500).json({ message: "Error del servidor", error: error.message });
    }
};


export const eliminar = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = "DELETE FROM genders WHERE id = ?";
        const [result] = await pool.query(sql, [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Género no encontrado" });
        }

        res.status(200).json({ message: "Género eliminado con éxito" });
    } catch (error) {
        res.status(500).json({ message: "Error del servidor", error: error.message });
    }
};
