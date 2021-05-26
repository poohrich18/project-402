const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");

const port = process.env.PORT || 5001;

const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());
const corsOptions = {
  origin: "http://localhost:3000/",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// MySQL
const db = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "project402",
});

// Get all beers
// app.get('/groups', (req, res) => {

//     pool.getConnection((err, connection) => {
//         if(err) throw err
//         console.log(`connected as id ${connection.threadId}`)

//         connection.query('SELECT * from groups', (err, rows) => {
//             connection.release() // return the connection to pool

//             if(!err) {
//                 res.send(rows)
//             } else {
//                 console.log(err)
//             }

//         })
//     })
// })

app.post("/username/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }
    db.getConnection((err, connection) => {
      connection.query(
        "INSERT INTO username (id, pass) VALUES (?,?)",
        [username, hash],
        (err, result) => {
          connection.release();
          console.log(err);
        }
      );
    });
  });
});

const verifyJWT = (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    res.send("I want token ,pleas give me next time");
  } else {
    jwt.verify(token, "jwtSecret", (err, decoded) => {
      if (err) {
        res.json({ auth: false, message: "YOu Fail to Oauth" });
      } else {
        req.Username_id = decoded.id;
        next();
      }
    });
  }
};

app.get("/username/isUserAuth", verifyJWT, (req, res) => {
  res.send("Verify Complete");
});





//log in
app.post("/username/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  db.getConnection((err, connection) => {
    connection.query(
      "SELECT * from username WHERE id = ? && pass =?",
      [username, password],
      (err, result) => {
        connection.release(); // return the connection to pool

        if (result[0].id == username) {
          if (result[0].pass == password) {
            console.log("aa", result[0].type);
            res.send(result[0]);
          }
        } else {
          console.log(err);
        }
      }
    );
  });
});

//log in
// app.post("/username/login2", (req, res) => {
//   const username = req.body.username;
//   const password = req.body.password;
//   db.getConnection((err, connection) => {
//     connection.query(
//       "SELECT * FROM username WHERE id = ?;",
//       username,
//       (err, result) => {
//         if (err) {
//           res.send({ err: err });
//         }

//         if (result.length > 0) {
//           bcrypt.compare(password, result[0].pass, (error, response) => {
//             if (response) {
//               const id = result[0].Username_id;
//               const token = jwt.sign({ id }, "jwtSecret", {
//                 expiresIn: 300,
//               });

//               console.log(req.session.id);
//               req.session.username = result;

//               res.json({ auth: true, token: token, result: result });
//             } else {
//               res.json({
//                 auth: false,
//                 message: "Wrong username/password combination!",
//               });
//             }
//           });
//         } else {
//           res.json({ auth: false, message: "User doesn't exist" });
//         }
//       }
//     );
//   });
// });

// Show all group
app.get("/groups", (req, res) => {
  db.getConnection((err, connection) => {
    connection.query("SELECT * from groups", (err, result) => {
      connection.release(); // return the connection to pool

      if (!err) {
        res.send(result);
      } else {
        console.log(err);
      }
    });
  });
});

app.get("/showgroups", (req, res) => {
  db.getConnection((err, connection) => {
    connection.query("SELECT * from projectDB", (err, result) => {
      connection.release(); // return the connection to pool

      if (!err) {
        res.send(result);
      } else {
        console.log(err);
      }
    });
  });
});

app.get("/username", (req, res) => {
  db.getConnection((err, connection) => {
    connection.query("SELECT * from username", (err, result) => {
      connection.release(); // return the connection to pool

      if (!err) {
        res.send(result);
      } else {
        console.log(err);
      }
    });
  });
});



app.get("/advisor", (req, res) => {
  db.getConnection((err, connection) => {
    connection.query("SELECT * from advisor", (err, result) => {
      connection.release(); // return the connection to pool

      if (!err) {
        res.send(result);
      } else {
        console.log(err);
      }
    });
  });
});

app.get("/studentscore", (req, res) => {
  db.getConnection((err, connection) => {
    connection.query("SELECT * from studentscore", (err, result) => {
      connection.release(); // return the connection to pool

      if (!err) {
        res.send(result);
      } else {
        console.log(err);
      }
    });
  });
});

app.get("/score/nng", (req, res) => {
    db.getConnection((err, connection) => {

      connection.query("SELECT * FROM projectdb WHERE Comm1 = 'nng' OR Comm2 = 'nng' OR Comm3 = 'nng' OR AdvId= 'nng'", (err, result) => {
        connection.release(); // return the connection to pool
        
        if (!err) {
          res.send(result);
          
        } else {
          console.log(err);
        }
      });
    });
  });
  
  app.get("namegroup/nng", (req, res) => {
    db.getConnection((err, connection) => {

      connection.query("SELECT * FROM projectdb WHERE Comm1 = 'nng' OR Comm2 = 'nng' OR Comm3 = 'nng' OR AdvId= 'nng'", (err, result) => {
        connection.release(); // return the connection to pool
        
        if (!err) {
          res.send(result);
          
        } else {
          console.log(err);
        }
      });
    });
  });

//Add grop
app.post("/groups/add", (req, res) => {
  const groupname = req.body.groupname;
  const memberfirstname = req.body.memberfirstname;
  const memberlastname = req.body.memberlastname;
  const advisorfirstname = req.body.advisorfirstname;
  const advisorlastname = req.body.advisorlastname;
  console.log("groupname", groupname);
  db.getConnection((err, connection) => {
    connection.query(
      "INSERT INTO groups( groupname, memberfirstname, memberlastname,advisorfirstname,advisorlastname) VALUES(?,?,?,?,?)",
      [
        groupname,
        memberfirstname,
        memberlastname,
        advisorfirstname,
        advisorlastname,
      ],
      (err, result) => {
        connection.release(); // return the connection to pool

        if (err) {
          console.log(err);
        } else {
          res.send("Valuses inserted");
        }
      }
    );
  });
});

app.post("/groups/add2", (req, res) => {
  const groupname = req.body.groupname;
  const membername = req.body.membername;
  const advisorname = req.body.advisorname;

  console.log("memname", membername);
  console.log("groupname", groupname);
  db.getConnection((err, connection) => {
    connection.query(
      "INSERT INTO groups(groupname,membername,advisorname) VALUES(?,?,?)",
      [groupname, membername, advisorname],
      (err, result) => {
        connection.release(); // return the connection to pool

        if (err) {
          console.log(err);
        } else {
          res.send("Valuses inserted");
        }
      }
    );
  });
});

app.put("/group/update1/", (req, res) => {
  const id = req.body.id;
  const groupname = req.body.groupname;
  db.getConnection((err, connection) => {
    connection.query(
      "UPDATE projectdb SET ProjNameTH = ? WHERE id = ?",
      [groupname, id],
      (err, result) => {
        connection.release(); // return the connection to pool
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });
});

app.put("/group/update2/", (req, res) => {
  const id = req.body.id;
  const memberfirstname = req.body.memberfirstname;
  db.getConnection((err, connection) => {
    connection.query(
      "UPDATE projectdb SET ProjNameEN = ? WHERE id = ?",
      [memberfirstname, id],
      (err, result) => {
        connection.release(); // return the connection to pool
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });
});

app.put("/group/update3/", (req, res) => {
  const id = req.body.id;
  const memberlastname = req.body.memberlastname;
  db.getConnection((err, connection) => {
    connection.query(
      "UPDATE projectdb SET Std_Name_1 = ? WHERE id = ?",
      [memberlastname, id],
      (err, result) => {
        connection.release(); // return the connection to pool
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });
});

app.put("/group/update4/", (req, res) => {
  const id = req.body.id;
  const advisorfirstname = req.body.advisorfirstname;
  db.getConnection((err, connection) => {
    connection.query(
      "UPDATE groupsprojectdb SET  Std_Name_2 = ? WHERE id = ?",
      [advisorfirstname, id],
      (err, result) => {
        connection.release(); // return the connection to pool
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });
});

app.put("/group/update5/", (req, res) => {
  const id = req.body.id;
  const advisorlastname = req.body.advisorlastname;
  db.getConnection((err, connection) => {
    connection.query(
      "UPDATE projectdb SET Adv_Id = ? WHERE id = ?",
      [advisorlastname, id],
      (err, result) => {
        connection.release(); // return the connection to pool
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });
});

// Delete group
app.delete("/group/delete/:id", (req, res) => {
  const id = req.params.id;
  db.getConnection((err, connection) => {
    connection.query(
      "DELETE FROM projectdb WHERE id = ?",
      id,
      (err, result) => {
        connection.release(); // return the connection to pool

        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });
});

// Get a beer by ID
app.get("/:id", (req, res) => {
  db.getConnection((err, connection) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);

    connection.query(
      "SELECT * from groups WHERE id = ?",
      [req.params.id],
      (err, rows) => {
        connection.release(); // return the connection to pool

        if (!err) {
          res.send(rows);
        } else {
          console.log(err);
        }
      }
    );
  });
});

// Delete a records / beer
app.delete("/:id", (req, res) => {
  db.getConnection((err, connection) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);

    connection.query(
      "DELETE from beers WHERE id = ?",
      [req.params.id],
      (err, rows) => {
        connection.release(); // return the connection to pool

        if (!err) {
          res.send(
            `Beer with the Record ID: ${[req.params.id]} has been removed.`
          );
        } else {
          console.log(err);
        }
      }
    );
  });
});

// Add a record / beer
app.post("", (req, res) => {
  db.getConnection((err, connection) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);

    const params = req.body;

    connection.query("INSERT INTO beers SET ?", params, (err, rows) => {
      connection.release(); // return the connection to pool

      if (!err) {
        res.send(`Beer with the name: ${params.name} has been added.`);
      } else {
        console.log(err);
      }
    });

    console.log(req.body);
  });
});

// Update a record / beer
app.put("", (req, res) => {
  db.getConnection((err, connection) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);

    const { id, name, tagline, description, image } = req.body;

    connection.query(
      "UPDATE beers SET name = ?, tagline = ?, description = ?, image = ? WHERE id = ?",
      [name, tagline, description, image, id],
      (err, rows) => {
        connection.release(); // return the connection to pool

        if (!err) {
          res.send(`Beer with the name: ${name} has been added.`);
        } else {
          console.log(err);
        }
      }
    );

    console.log(req.body);
  });
});

// Listen on enviroment port or 5000
app.listen(port, () => console.log(`Listen on port ${port}`));
