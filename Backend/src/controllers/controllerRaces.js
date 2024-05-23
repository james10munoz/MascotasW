import { pool } from "../database/conexion.js";
import { validationResult } from "express-validator";

export const registrarRaza = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name } = req.body;
        const sql = "INSERT INTO races (name) VALUES (?)";
        const [result] = await pool.query(sql, [name]);

        res.status(201).json({ message: "Raza creada con éxito", raza: { id: result.insertId, name } });
    } catch (error) {
        res.status(500).json({ message: "Error del servidor", error: error.message });
    }
};

export const listarRazas = async (req, res) => {
    try {
        const sql = "SELECT * FROM races";
        const [result] = await pool.query(sql);

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: "Error del servidor", error: error.message });
    }
};

export const actualizarRaza = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { id } = req.params;
        const { name } = req.body;
        const sql = "UPDATE races SET name = ? WHERE id = ?";
        const [result] = await pool.query(sql, [name, id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Raza no encontrada" });
        }

        res.status(200).json({ message: "Raza actualizada con éxito" });
    } catch (error) {
        res.status(500).json({ message: "Error del servidor", error: error.message });
    }
};

export const buscarRaza= async (req, res) => {
    try {
        const { id } = req.params;
        const sql = "SELECT * FROM races WHERE id = ?";
        const [result] = await pool.query(sql, [id]);

        if (result.length === 0) {
            return res.status(404).json({ message: "Raza no encontrada" });
        }

        res.status(200).json(result[0]);
    } catch (error) {
        res.status(500).json({ message: "Error del servidor", error: error.message });
    }
};

export const eliminarRaza = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = "DELETE FROM races WHERE id = ?";
        const [result] = await pool.query(sql, [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Raza no encontrada" });
        }

        res.status(200).json({ message: "Raza eliminada con éxito" });
    } catch (error) {
        res.status(500).json({ message: "Error del servidor", error: error.message });
    }
};
