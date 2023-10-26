import express from "express"
import {getCourse} from "../data_gen/course_gen.js"
import { mesureTime } from "../index.js"

const coursesRouter = express.Router()

coursesRouter.get('/', (req, res)=>{
    res.json([getCourse(10)])
})

coursesRouter.get('/:id', (req, res)=>{
    const courseId = parseInt(req.params.id)
    res.json(getCourse(courseId))
})

export {coursesRouter}