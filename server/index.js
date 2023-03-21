const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const oneDay = 1000 * 60 * 60 * 24;
const sessions = require('express-session');
app.use(cookieParser());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
    cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
    })
   );


const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "projectdata",
    
 });

 app.post('/register', (req, res)=> {
    const name = req.body.name;
    const email = req.body.email;
    const dep=req.body.dep;
    const regno=req.body.regno;
    const password = req.body.password;
    const phone=req.body.phone;
    const class1=req.body.class1;
    const sem=req.body.semester;
   // console.log("ho");
    db.execute(
      "INSERT INTO student (name,regno,email, password,dep,phone,semester,class) VALUES (?,?,?,?,?,?,?,?)",
      [name,regno,email, password,dep,phone,sem,class1],
      (err, result)=> {
     // console.log(err);
      //console.log(result);
      res.send(result);
      }
    );
 });
 
 app.post('/registerTeach', (req, res)=> {
  const name = req.body.name;
  const email = req.body.email;
  const dep=req.body.dep;
  const password = req.body.password;
  const phone=req.body.phone;
 // console.log("ho");
  db.execute(
    "INSERT INTO teacher (name,dep,email, password,phone) VALUES (?,?,?,?,?)",
    [name,dep, email, password,phone],
    (err, result)=> {
   // console.log(err);
    //console.log(result);
    res.send(result);
    }
  );
});
 
 app.post('/login', (req, res) => {
   const email = req.body.email;
   const password = req.body.password;
   
   db.execute(
       "SELECT * FROM student WHERE email = ? AND password = ?",
       [email, password],
       (err, result)=> {
           if (err) {
               res.send({err: err});
           }
   
           if (result.length > 0) {

               sessions.email = email;
              
               console.log(result);
               console.log(sessions.email)
         
               res.send( result);
               }
               else{
                res.send(result);
                console.log("Invalid Details!!");
               }
           }
       
   );
  });

  app.post('/loginTeach', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log("Hi");
    db.execute(
        "SELECT * FROM teacher WHERE email = ? AND password = ?",
        [email, password],
        (err, result)=> {
            if (err) {
                res.send({err: err});
            }
    
            if (result.length > 0) 
            {
                sessions.teach_email = email;
                console.log(result);
                res.send( result);
            }

             else{
              res.send(result);
              console.log("Invalid Details!!");
             }
             
            }
        
    );
   });
   app.get('/festdata', (req, res)=> {
    db.execute(
      "Select fid,fname,fdesc from fest",
      (err, result)=> {
      //console.log(err);
      //console.log(result);
      res.send(result);
      }
    );
 });
 app.get('/projdata', (req, res)=> {
  db.execute(
    "Select pid,pname,skill1 from project",
    (err, result)=> {
    //console.log(err);
    //console.log(result);
    res.send(result);
    }
  );
});
app.get('/teachdata', (req, res)=> {
  db.execute(
    "Select name from teacher where email=?",
    [sessions.teach_email],
    (err, result)=> {
    //console.log(err);
    //console.log(result);
    res.send(result);
    }
  );
});

app.post('/getskills', (req, res)=> {
  const askill1 = req.body.advskill1;
  const askill2 = req.body.advskill2;
  const askill3 = req.body.advskill3;
  // session=req.session;
  console.log(sessions.email);
  console.log(askill1);
  console.log(askill2);
  console.log(askill3);
  const iskill1 = req.body.intskill1;
  const iskill2 = req.body.intskill2;
  const iskill3 = req.body.intskill3;
  const bskill1 = req.body.newskill1;
  const bskill2 = req.body.newskill2;
  const bskill3 = req.body.newskill3;

 // console.log("ho");
  db.execute(
    "Update student set adv_skill1=?, adv_skill2=?,adv_skill3=?,int_skill1=?, int_skill2=?,int_skill3=?,newskill1=?, newskill2=?,newskill3=? where email=?",
    [askill1, askill2, askill3,iskill1,iskill2,iskill3,bskill1,bskill2,bskill3,sessions.email],
    (err, result)=> {
     console.log(err);
    //console.log(result);
    res.send(result);
    }
  );
});

app.get('/preview_fest', (req, res) => {


  db.execute(
      "SELECT fname,org,DATE_FORMAT(sdate,'%d-%m-%y') as start FROM fest",
      (err, result)=> {
          if (err) {
              res.send({err: err});
          }
          if (result.length > 0) {
              console.log(result);
              res.send(result);
              }else(res.send({message: "No data found"}));
          }
     )
      });

      app.post('/multicard', (req, res)=> {
          const name = req.body.name;
          const organization= req.body.organization;
          const mode = req.body.mode_1;
          const startdate = req.body.startdate_1;
          const enddate = req.body.enddate_1;
          const description = req.body.Description;
          const type = req.body.Type;
          db.execute(
            "INSERT INTO fest (fname,org,mode,sdate,edate,fdesc,type) VALUES (?,?,?,?,?,?,?)",
            [name,organization,mode,startdate,enddate,description,type],
            (err, result)=> {
              if (err) {
                  res.send({err: err});
                  console.log(err);
              }
      
              if (result.length > 0) {
                  res.send(result);
                  }else(res.send({message: "Wrong username/password combination!"}));
          }
          );
      });
      app.post('/multicard1', (req, res)=> {
          const name = req.body.Name;
          const required= req.body.Required;
          const duration = req.body.duration;
          const startdate = req.body.startdate_1;
          db.execute(
            "INSERT INTO project (pname,duration,skill1,sdate) VALUES (?,?,?,?)",
            [name,duration,required,startdate],
            (err, result)=> {
              if (err) {
                  res.send({err: err});
              }
      
              if (result.length > 0) {
                  res.send(result);
                  }else(res.send({message: "Wrong username/password comination!"}));
          }
          );
      });
  

app.listen(3001, () => {
   console.log("running server");
});