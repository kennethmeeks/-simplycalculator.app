import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import { rateLimit } from "express-rate-limit";

dotenv.config();

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many requests, please try again later." }
});

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
  app.use("/api/", apiLimiter);

  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", mode: "production" });
  });

  return app;
}

const app = await startServer();
export default app;
