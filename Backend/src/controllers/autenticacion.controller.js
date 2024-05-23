import { pool } from "../database/conexion.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// Función para validar usuario
export const validarUser = async (req, res) => {
    try {
        const { correo, password } = req.body;
        const sql = `SELECT * FROM users WHERE email = ?`; // Uso de parámetros preparados
        const [rows] = await pool.query(sql, [correo]);
        
        if (rows.length === 0) {
            return res.status(404).json({ message: "Correo incorrecto" });
        }

        const user = rows[0]; // Obtener el primer usuario de los resultados
        const validPassword = await bcrypt.compare(password, user.password);
        
        if (!validPassword) {
            return res.status(404).json({ message: "Contraseña incorrecta" });
        }

        const token = jwt.sign({ id: user.id }, process.env.AUT_SECRET, {
            expiresIn: process.env.AUT_EXPIRET,
        });

        res.status(200).json({ user, token, message: "Usuario validado con éxito" });
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor: " + error });
    }
};

// Middleware para verificar el token del usuario
export const verificarUserToken = async (req, res, next) => {
    try {
        const token_client = req.headers["token"];
        
        if (!token_client) {
            return res.status(404).json({ message: "No autorizado ☢️" });
        }

        jwt.verify(token_client, process.env.AUT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: "Token no válido" });
            } else {
                console.log(decoded);
                next();
            }
        });
    } catch (error) {
        res.status(500).json({ message: error });
    }
};
