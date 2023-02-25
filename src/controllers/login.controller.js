import { getConnection } from "./../database/database.js";

export const getCrendentials = async (req, res) => {
	try {
        const correo = req.body.cedula;
        const password = req.body.password;
		const connection = await getConnection();
		const query = `select * from docentesp where cedula = ? and password= ?
        union
        select * from estudiantesp where cedula = ? and password= ?`;
		const [rows] = await connection.promise().execute(query,[correo,password,correo,password]);
        if(rows.length>0){
			res.json(rows);
		}
		else{
			res.status(404).json({message:"El usuario o contraseña es incorrecto"});
		}
	} catch (error) {
        console.log(error);
         res.status(500).json({ message: "ocurrio un error"});
    }
};
