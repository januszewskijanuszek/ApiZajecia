import express from "express"
import { getStudnet } from "../data_gen/student_gen.js";
import { mesureTime } from "../index.js";


const studentsRouter = express.Router();

// Obsługuje żądanie GET na endpoint `/students`
studentsRouter.get('/', (req, res) => {
    res.json([getStudnet(10)])
})

// res = response, co dać w endpoincie
// req = co jest w url

studentsRouter.get('/:id', (req, res)=>{
    const studentId = parseInt(req.params.id)
    const student = getStudnet(studentId)
    res.json(student)
})

export { studentsRouter };