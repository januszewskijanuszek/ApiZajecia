import express from "express"
import cors from "cors"
import {createServer} from "node:http"
import {studentsRouter} from "./routes/students.js"
import { coursesRouter } from "./routes/courses.js"

import axios from "axios"
import { getStudnet } from "./data_gen/student_gen.js"

export const app = express();
export const server = createServer(app)

app.use(cors({
    origin: "*"
}))
app.use('/students', studentsRouter)
app.use('/courses', coursesRouter)

server.listen(3000, ()=>{
    console.log("Server is running on port:3000")

    const TRYES = 10

    const studentsTime = mesureTime('/students', TRYES)
    const coursesTime = mesureTime('/courses', TRYES)
    console.log("Students  response on " + TRYES + " " + studentsTime)
    console.log("Courses response on " + TRYES + " " + coursesTime)
})

export const mesureTime = (req, num) => {
    // const fs = require('fs');
    // fs.writeFile("students.txt", getStudnet(10))
    const start = Date.now()
    for(let i = 0 ; i < num ; i++){
        axios.get(`http://localhost:3000${req}`)
    }
    const end = Date.now()
    return (end - start)
}