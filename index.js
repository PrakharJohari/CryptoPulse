import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.render("index.ejs")
  });

app.get("/home",(req,res)=>{
  res.render("index.ejs")
});

app.get("/features",(req,res)=>{
  res.render("features.ejs")
});

app.get("/pricing",(req,res)=>{
  res.render("pricing.ejs")
});

app.get("/faqs",(req,res)=>{
  res.render("faqs.ejs")
});

app.get("/about",(req,res)=>{
  res.render("about.ejs")
});

  
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  