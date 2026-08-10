//w01
const express = require("express");
const app = express();
const port = 3000;

//w2
app.get('/about',(req,res)=>{
    res.send("this server belong to me");
});

app.get('/contact',(req,res)=>{
    res.send("091-911-1911"+
        "thailandpolice888@gmail.com");
});

//w3
const students = [
    {"id":"696701","name":"Adam","major":"Nurse"},
    {"id":"696802","name":"Alehandros","major":"Robotic Enginear"},
    {"id":"696903","name":"Alexios","major":"Agriculture"}
];

app.get('/std',(req,res)=>{
    res.send(students);
});

//w4
app.get('/std/:id',(req,res)=>{
    const stdid = req.params.id;
    const std = students.find(e => e.id === stdid);
    res.json(std);
});

//w5
app.get('/sqr',(req,res)=>{
    const num = req.query.num;
    const sqre = num*num;
    res.send("Square area:"+sqre); 
});

//w6
app.get('/grade',(req,res)=>{
    const score = req.query.grade;
    let g = " ";
    if(score>=80){
        g="A";
    }
    else if(score<50){
        g="F";
    }
    else if(score<=59){
        g="D";
    }
    else if(score<=69){
        g="C";
    }
    else if(score<=79){
        g="B";
    }

    res.send("Rules: 80-100 A | 70-79 B | 60-69 C | 50-59 D | <50 F"+
    "<br>Return Grade:"+g);
});

app.listen(port,()=>{
    console.log("Sever renain");
});