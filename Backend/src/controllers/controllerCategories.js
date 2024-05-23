import { pool } from "../database/conexion.js";
import { validationResult } from "express-validator";


export const registrar = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name } = req.body;
        const sql = "INSERT INTO categories (name) VALUES (?)";
        const [result] = await pool.query(sql, [name]);

        res.status(201).json({ message: "Categoría creada con éxito", categoria: { id: result.insertId, name } });
    } catch (error) {
        res.status(500).json({ message: "Error del servidor", error: error.message });
    }
};


export const listar = async (req, res) => {
    try {
        const sql = "SELECT * FROM categories";
        const [result] = await pool.query(sql);

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: "Error del servidor", error: error.message });
    }
};


export const actualizar = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { id } = req.params;
        const { name } = req.body;
        const sql = "UPDATE categories SET name = ? WHERE id = ?";
        const [result] = await pool.query(sql, [name, id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Categoría no encontrada" });
        }

        res.status(200).json({ message: "Categoría actualizada con éxito" });
    } catch (error) {
        res.status(500).json({ message: "Error del servidor", error: error.message });
    }
};
export const buscar = async (req, res) => {
    try {
        const categoriaId = req.params.id; 
        
        
        const sql = "SELECT id, name FROM categories WHERE id = ?";
        const [rows] = await pool.query(sql, [categoriaId]);

        // Verificar si se encontró alguna categoría
        if (rows.length === 0) {
            return res.status(404).json({ message: "No se encontró ninguna categoría con el ID especificado" });
        }

        
        const categoria = rows[0];
        res.status(200).json(categoria);
    } catch (error) {
       
        res.status(500).json({ message: "Error en el servidor: " + error });
    }
};


export const eliminar = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = "DELETE FROM categories WHERE id = ?";
        const [result] = await pool.query(sql, [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Categoría no encontrada" });
        }

        res.status(200).json({ message: "Categoría eliminada con éxito" });
    } catch (error) {
        res.status(500).json({ message: "Error del servidor", error: error.message });
    }
};
