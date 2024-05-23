import { pool } from "../database/conexion.js";
import { validationResult } from "express-validator";
import bcrypt from "bcrypt";

// REGISTRAR-USUARIOS
export const registrar = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log('Errores de validación:', errors.array());
            return res.status(400).json(errors.array());
        }

        const { fullname, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10); 

        let sql = `INSERT INTO users (fullname, email, password) VALUES (?, ?, ?)`;
        const [rows] = await pool.query(sql, [fullname, email, hashedPassword]);

        if (rows.affectedRows > 0) {
            res.status(200).json({ 'status': 200, 'message': 'Felicidades, el registro fue un éxito' });
        } else {
            res.status(404).json({ 'status': 404, 'message': 'Error, el registro fue denegado' });
        }

    } catch (error) {
        res.status(500).json({ 'status': 500, 'message': 'ERROR SERVIDOR: ' + error });
    }
}

// LISTAR-USUARIOS
export const listar = async (req, res) => {
    try {
        let sql = 'SELECT * FROM users';
        const [result] = await pool.query(sql);

        if (result.length > 0) {
            return res.status(200).json(result);
        } else {
            return res.status(404).send({ 'message': 'Error, No hay registros de usuario' });
        }

    } catch (error) {
        res.status(500).json({ 'status': 500, 'message': 'ERROR SERVIDOR: ' + error });
    }
}

// ACTUALIZAR-USUARIO
export const actualizar = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log('Errores de validación:', errors.array());
            return res.status(400).json(errors.array());
        }

        const { id } = req.params;
        const { fullname, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        let sql = `UPDATE users SET fullname = ?, email = ?, password = ? WHERE id = ?`;
        const [rows] = await pool.query(sql, [fullname, email, hashedPassword, id]);

        if (rows.affectedRows > 0) {
            res.status(200).json({ 'status': 200, 'message': 'Usuario actualizado exitosamente' });
        } else {
            res.status(404).json({ 'status': 404, 'message': 'Error, usuario no encontrado' });
        }

    } catch (error) {
        res.status(500).json({ 'status': 500, 'message': 'ERROR SERVIDOR: ' + error });
    }
}

// BUSCAR-USUARIO-POR-ID
export const buscarPorId = async (req, res) => {
    try {
        const { id } = req.params;
        let sql = `SELECT * FROM users WHERE id = ?`;
        const [result] = await pool.query(sql, [id]);

        if (result.length > 0) {
            return res.status(200).json(result[0]);
        } else {
            return res.status(404).json({ 'message': 'Error, usuario no encontrado' });
        }

    } catch (error) {
        res.status(500).json({ 'status': 500, 'message': 'ERROR SERVIDOR: ' + error });
    }
}

// ELIMINAR-USUARIO
export const eliminar = async (req, res) => {
    try {
        const { id } = req.params;
        let sql = `DELETE FROM users WHERE id = ?`;
        const [rows] = await pool.query(sql, [id]);

        if (rows.affectedRows > 0) {
            res.status(200).json({ 'status': 200, 'message': 'Usuario eliminado exitosamente' });
        } else {
            res.status(404).json({ 'status': 404, 'message': 'Error, usuario no encontrado' });
        }

    } catch (error) {
        res.status(500).json({ 'status': 500, 'message': 'ERROR SERVIDOR: ' + error });
    }
}
