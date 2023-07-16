import express from "express";
 
import path from "path";
import { URL } from "url";
const app = express();
app.use(express.json());
app.use(express.static(path.join(process.cwd(),"build")));




app.get("*", (req, res) => {
    const myUrlWithParams = new URL("https://www.example.dev/");
    myUrlWithParams.searchParams.append("referTo", "dashboard");     
   res.redirect(`/${myUrlWithParams.search}`)  
});

export default app;