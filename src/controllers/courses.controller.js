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


export const getCoursesByStudentId = async (req, res) => {
	try {
		const connection = await getConnection();
		const {estudiante_id} = req.params;
		const query = `SELECT cursos_formados.id as curso_formado_id,cursos.nombre as curso,materias.nombre AS materia
		FROM cursos
		JOIN cursos_formados ON cursos.id = cursos_formados.curso_id
		JOIN horarios_formados ON cursos_formados.id = horarios_formados.curso_formado_id
		JOIN estudiantes ON horarios_formados.estudiante_id = estudiantes.id
		JOIN materias ON cursos_formados.materia_id = materias.id
		WHERE estudiantes.id = ?`;
		const [rows] = await connection.execute(query,[estudiante_id]);
        if(rows.length>0){
			res.json(rows);
		}
		else{
			res.status(404).json({message:"El estudiante no existe"});
		}
	} catch (error) {
        console.log(error);
         res.status(500).json({ message: "ocurrio un error"});
		}
}; 

export const getCoursesByTeacherId = async (req, res) => {
	try {
		const connection = await getConnection();
		const {docente_id} = req.params;
		const query = `SELECT cursos_formados.id as curso_formado_id,cursos.nombre as curso,materias.nombre AS materia
		FROM cursos
		JOIN cursos_formados ON cursos.id = cursos_formados.curso_id
		JOIN docentes ON cursos_formados.docente_id = docentes.id
		JOIN materias ON cursos_formados.materia_id = materias.id
		WHERE docentes.id = ?`;
		const [rows] = await connection.execute(query,[docente_id]);
        if(rows.length>0){
			res.json(rows);
		}
		else{
			res.status(404).json({message:"El profesor no existe"});
		}
	} catch (error) {
        console.log(error);
         res.status(500).json({ message: "ocurrio un error"});
		}
}; 


export const getCourseGradingByStudentId = async (req, res) => {
	try {
		const connection = await getConnection();
		const {estudiante_id} = req.params;
		const query = `SELECT cursos.nombre as curso, materias.nombre AS materia,horarios_formados.promedio,horarios_formados.asistencia
		FROM cursos
		JOIN cursos_formados ON cursos.id = cursos_formados.curso_id
		JOIN horarios_formados ON cursos_formados.id = horarios_formados.curso_formado_id
		JOIN estudiantes ON horarios_formados.estudiante_id = estudiantes.id
		JOIN materias ON cursos_formados.materia_id = materias.id
		WHERE estudiantes.id = ?`;
		const [rows] = await connection.execute(query,[estudiante_id]);
        if(rows.length>0){
			res.json(rows);
		}
		else{
			res.status(404).json({message:"El estudiante no existe"});
		}
	} catch (error) {
        console.log(error);
         res.status(500).json({ message: "ocurrio un error"});
		}
}; 