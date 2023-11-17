import express, { Application } from "express";
import env from "dotenv";
import http from "http";
import { Server,Socket } from "socket.io";
import { appConfig } from "./appConfig";
import { dbConfig } from "./utils/DB";
import {DefaultEventsMap} from "socket.io/dist/typed-events"
env.config();

const port: string = process.env.PORT!;
const app: Application = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

appConfig(app)
server.listen(port, () => {
  console.log("A server is connected on port: ",port);
  dbConfig()
});

io.on("channel",async(socket:Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>)=>{
    socket.emit("")
})