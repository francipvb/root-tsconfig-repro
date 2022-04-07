import express from "express";

const app = express()
  .use(express.query({}))
  .use(express.json());

export default app;
