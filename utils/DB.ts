import {connect} from "mongoose"
import env from "dotenv"

env.config()
const URL:string = process.env.DB_STRING!
export const dbConfig = ()=>{
    connect(URL).then(()=>{
        console.log()
        console.log("Database connected successfully.")
    })
}