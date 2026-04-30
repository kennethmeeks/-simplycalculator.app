import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";

dotenv.config();

async function startServer() {
  const app = express();

  app.use(helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
  }));
  
  app.use(cors({
     origin: true,
     credentials: true
  }));

  app.use(express.json({ limit: '10kb' }));

  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", mode: "production" });
  });

  return app;
}

const app = await startServer();
export default app;
