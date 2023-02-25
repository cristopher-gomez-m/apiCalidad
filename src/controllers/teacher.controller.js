import { getConnection } from "./../database/database.js";

export const getBooks = async (req, res) => {
	try {
		const connection = await getConnection();
		const id=req.params.id;
		const [rows] = await connection.promise().execute('SELECT * from docentes where id=?',[id]);
		if(rows.length>0){
			res.json(rows);
		}
		else{
			res.status(404).json({message:"Ese estudiante no existe"});
		}
	} catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
};