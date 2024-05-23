import { pool } from "../database/conexion.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/img");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

export const cargarImagen = upload.single("photo");

export const registrarMascota = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { race_id, category_id, gender_id } = req.body;
        const photo = req.file ? req.file.filename : null;

        const sql = "INSERT INTO pets (race_id, category_id, photo, gender_id) VALUES (?, ?, ?, ?)";
        const [result] = await pool.query(sql, [race_id, category_id, photo, gender_id]);

        res.status(201).json({ message: "Mascota registrada con éxito", mascota: { id: result.insertId, race_id, category_id, photo, gender_id } });
    } catch (error) {
        res.status(500).json({ message: "Error del servidor", error: error.message });
    }
};

export const listarMascotas = async (req, res) => {
    try {
        const sql = "SELECT * FROM pets";
        const [result] = await pool.query(sql);

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: "Error del servidor", error: error.message });
    }
};

export const actualizarMascota = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { id } = req.params;
        const { race_id, category_id, gender_id } = req.body;
        const photo = req.file ? req.file.filename : null;

        const sql = "UPDATE pets SET race_id = ?, category_id = ?, photo = ?, gender_id = ? WHERE id = ?";
        const [result] = await pool.query(sql, [race_id, category_id, photo, gender_id, id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Mascota no encontrada" });
        }

        res.status(200).json({ message: "Mascota actualizada con éxito" });
    } catch (error) {
        res.status(500).json({ message: "Error del servidor", error: error.message });
    }
};

export const buscarMascota = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = "SELECT * FROM pets WHERE id = ?";
        const [result] = await pool.query(sql, [id]);

        if (result.length === 0) {
            return res.status(404).json({ message: "Mascota no encontrada" });
        }

        res.status(200).json(result[0]);
    } catch (error) {
        res.status(500).json({ message: "Error del servidor", error: error.message });
    }
};

export const eliminarMascota = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = "DELETE FROM pets WHERE id = ?";
        const [result] = await pool.query(sql, [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Mascota no encontrada" });
        }

        res.status(200).json({ message: "Mascota eliminada con éxito" });
    } catch (error) {
        res.status(500).json({ message: "Error del servidor", error: error.message });
    }
};
