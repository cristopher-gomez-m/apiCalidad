import { getConnection } from "./../database/database.js";

export const getCrendentials = async (req, res) => {
	try {
		const connection = await getConnection();
		const query = `select cedula,password from docentes
        union
        select cedula,password from estudiantes`;
		const [rows] = await connection.promise().query(query);
        res.json(rows);
	} catch (error) {
        return res.status(500).json({ message: "No existe ese usuario o contraseña" });
    }
};
