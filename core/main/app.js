import express from "express";
import cors from "cors";
import path from "path";
import { URL } from "url";
const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "PUT", "POST", "DELETE"],
  })
);
app.use(express.json());
app.use(express.static(path.join(process.cwd(), "build")));

app.get("*", (req, res) => {
  const myUrlWithParams = new URL("http:/localhost:8000");
  myUrlWithParams.searchParams.append("referTo", "dashboard");
  res.redirect(`/${myUrlWithParams.search}`);
});

export default app;
