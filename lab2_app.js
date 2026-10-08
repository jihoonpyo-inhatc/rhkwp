const express = require("express");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

const myName = "표지훈";         
const myDept = "정보통신공학과";    
const fFoods = ["마라탕", "우동"];

app.get("/", (req, res) => {
  res.render("lab2", { 
    title: "나의 프로필", 
    name: myName, 
    department: myDept, 
    items: fFoods 
  });
});

app.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
});
