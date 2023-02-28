import { getConnection } from "./../database/database.js";

export const getCourses = async (req, res) => {
	try {
		const connection = await getConnection();
		const {curso} = req.params;
		const query = `SELECT cursos_formados.id, materias.nombre AS materia, cursos.nombre AS curso, hora_inicio, docentes.nombres AS docente
		FROM cursos_formados
		INNER JOIN materias ON cursos_formados.materia_id = materias.id
		INNER JOIN cursos ON cursos_formados.curso_id = cursos.id
		INNER JOIN docentes ON cursos_formados.docente_id = docentes.id
		WHERE cursos.nombre = ?`;
		const [rows] = await connection.execute(query,[curso]);
        if(rows.length>0){
			res.json(rows);
		}
		else{
			res.status(404).json({message:"El curso no existe"});
		}
	} catch (error) {
        console.log(error);
         res.status(500).json({ message: "ocurrio un error"});
    }
};