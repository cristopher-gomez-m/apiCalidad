import { getConnection } from "./../database/database.js";

export const getBooks = async (req, res) => {
	try {
		const connection = await getConnection();
		const query = "SELECT * from books";
		const [rows] = await connection.promise().query(query);
        res.json(rows);
	} catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
};
