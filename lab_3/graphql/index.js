// 26.10.2023
import cors from "cors"
import {ApolloServer} from "@apollo/server"
import { expressMiddleware } from "@apollo/server/express4"
import express from "express"

const typeDefs = ` #graphql
    type Student {
        id:Int
        name: String
    }
    type Query{
        students(id: Int): [Student]
    }
`
// Resolve importacja jsona związany z typami tym querry
// jaki mammy punk wejsiowy, do czego możemy strzelać
// Skąd wyciągac dane
const resolvers = { 
    Query:{
        students: () => students, // daj mi tylko liste studentów
        // Jakie zapytanie do bazy danych w graphql
        student: (parent, args) => students.find(s => s.id == args.id)
    }
}

const server = new ApolloServer({typeDefs, resolvers})
await server.start()

const app = express()
app.use('/graphql', cors(), express.json(), expressMiddleware(server))

app.use(cors({
    origin: '*'
}))

app.listen(8989, () => {
    console.log("started of localhost:8989")
})