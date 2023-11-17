import express, { Application, Request, Response } from "express"
import cors from "cors"

export const appConfig = (app:Application)=>{
    try {
        app.use(express.json())
        app.use(cors())

        .get("/",(req:Request,res:Response)=>{
            try {
                res.status(200).json({
                    message:"Everything is working fine"
                })
            } catch (error) {
                res.status(404).json({
                    message:"Something is wrong"
                })
            }
        })
    } catch (error) {
        console.log("error: ",error)
    }
}