import express from "express";
import cors from "cors";
import compression from "compression";
import { createServer } from "http";

const PORT = 3000

const app = express();
app.use(cors());
app.use(compression());

app.get("/", (_, res) => {
  res.send("Ya funciona el programa OSA");
});

const httpServer =  createServer(app);

httpServer.listen(
    {
       port: PORT
    },
    () => console.log(`Server running at http://localhost:${PORT}`)
      
)
