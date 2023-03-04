import { getConnection } from "./../database/database.js";

export const gethomeworkByStudentId = async (req, res) => {
	try {
		const connection = await getConnection();
		const estudianteId=req.params.estudianteId;
		const query = `SELECT et.id, t.nombre, t.descripcion, et.estado_tarea, et.calificacion, et.fecha_envio
        FROM estudiante_tarea et
        INNER JOIN tareas t ON et.tarea_id = t.id
        WHERE et.estudiante_id =?`;
		const [rows] = await connection.execute(query,[estudianteId]);
		if(rows.length>0){
			res.json(rows);
		}
		else{
			res.status(404).json({message:"Ese estudiante no existe"});
		}
	} catch (error) {
		console.log(error);
        return res.status(500).json({ message: "Something goes wrong" });
    }
};

export const getHomeworksByFormedCourseId = async (req, res) => {
	try {
		const connection = await getConnection();
		const cursoFormadoId=req.params.cursoFormadoId;
		const query = `SELECT * FROM tareas WHERE curso_formado_id =?`;
		const [rows] = await connection.execute(query,[cursoFormadoId]);
		if(rows.length>0){
			res.json(rows);
		}
		else{
			res.status(404).json({message:"Ese curso no existe"});
		}
	} catch (error) {
		console.log(error);
        return res.status(500).json({ message: "Something goes wrong" });
    }
};