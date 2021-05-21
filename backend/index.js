// const express = require('express');
// const app = express();
// const mysql =require('mysql');
// const cors = require('cors');
// const port = process.env.PORT || 5001

// app.use(cors());
// app.use(express.json);

// const db = mysql.createConnection({
//     user:"root",
//     password:"",
//     host: "localhost",
//     database:"project402"
// })

// db.connect(function(err){
//     if (err) throw err;
//     console.log("Connect!");
// });

// app.get('/groups',(req,res)=>{
//     console.log("Kuy out")
//     db.query('SELECT * FROM groups',(err,result)=>{
//         if (err) {
//             console.log(err);
//         } else {
//             res.send(result);
//         }
//     })
// })

// app.listen('5001',()=>{
//     console.log('Server running on port 5001')
// })
const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const cors = require('cors');

const app = express()
const port = process.env.PORT || 5001

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

// MySQL
const db = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'project402'
})

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
app.post('/username/login', (req, res) => {
    const username = req.body.username;
  const password = req.body.password;
    db.getConnection((err, connection) => {

        connection.query('SELECT * from username WHERE id && pass', (err, result) => {
            connection.release() // return the connection to pool

            if(result[0].id == username) {
                if(result[0].pass == password){
                    res.send(result[0]);
                }
            } else {
                console.log(err)
            }

        })
    })
})
// router.route('/').post((req, res) => {
//     const username = req.body.username;
//     const password = req.body.password;
//     console.log("Username",username);
//     Username.find({id:username})
//       .then(data =>{ 
//        // console.log("type",data[0].type); 
//         if(data[0].id == username){
//           if(data[0].pass == password){
//             res.send(data[0])
            
//             //console.log(data[0].id);
//           }
//         }
//       })

app.get('/groups', (req, res) => {

    db.getConnection((err, connection) => {

        connection.query('SELECT * from groups', (err, result) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(result)
            } else {
                console.log(err)
            }

        })
    })
})

app.get('/username', (req, res) => {

    db.getConnection((err, connection) => {

        connection.query('SELECT * from username', (err, result) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(result)
            } else {
                console.log(err)
            }

        })
    })
})





// app.post('/groups/add',(req,res)=>{
//     const groupname = req.body.groupname;
//     const memberfirstname = req.body.memberfirstname;
//     const memberlastname = req.body.memberlastname;
//     const advisorfirstname = req.body.advisorfirstname;
//     const advisorlastname = req.body.advisorlastname;
//     console.log("groupname", groupname);
//     db.getConnection((err,connection)=>{
//         connection.query(
//             "INSERT INTO groups( groupname, memberfirstname, memberlastname,advisorfirstname,advisorlastname) VALUES(?,?,?,?,?)",
//                 [groupname, memberfirstname, memberlastname,advisorfirstname,advisorlastname],
//                 (err, result) => {
//                     connection.release() // return the connection to pool
//                     if(err){
//                         console.log(err);
//                     }else{
//                         res.send("Values inserted");
//                     }
//       }
//         )
//     })
// } )
app.post('/groups/add',(req,res) => {
    const groupname = req.body.groupname;
    const memberfirstname = req.body.memberfirstname;
    const memberlastname = req.body.memberlastname;
    const advisorfirstname = req.body.advisorfirstname;
    const advisorlastname = req.body.advisorlastname;
    console.log("groupname", groupname);
    db.getConnection((err, connection) => {

        connection.query( "INSERT INTO groups( groupname, memberfirstname, memberlastname,advisorfirstname,advisorlastname) VALUES(?,?,?,?,?)",
        [groupname, memberfirstname, memberlastname,advisorfirstname,advisorlastname],
        (err, result) => {
            connection.release() // return the connection to pool

            if(err) {
               console.log(err);
            } else {
                res.send("Valuses inserted");
            }

        })
    })
}
)

app.put('/group/update1/', (req, res) => {
        const id = req.body.id;
        const groupname = req.body.groupname;
    db.getConnection((err, connection) => {

        connection.query("UPDATE groups SET groupname = ? WHERE id = ?",[groupname,id] ,(err, result) => {
            connection.release() // return the connection to pool
            if(err) {
                console.log(err);
             } else {
                 res.send(result);
             }

        })
    })
})

app.put('/group/update2/', (req, res) => {
    const id = req.body.id;
    const memberfirstname = req.body.memberfirstname;
db.getConnection((err, connection) => {

    connection.query("UPDATE groups SET memberfirstname = ? WHERE id = ?",[memberfirstname,id] ,(err, result) => {
        connection.release() // return the connection to pool
        if(err) {
            console.log(err);
         } else {
             res.send(result);
         }

    })
})
})

app.put('/group/update3/', (req, res) => {
    const id = req.body.id;
    const memberlastname = req.body.memberlastname;
db.getConnection((err, connection) => {

    connection.query("UPDATE groups SET memberlastname = ? WHERE id = ?",[memberlastname,id] ,(err, result) => {
        connection.release() // return the connection to pool
        if(err) {
            console.log(err);
         } else {
             res.send(result);
         }

    })
})
})

app.put('/group/update4/', (req, res) => {
    const id = req.body.id;
    const advisorfirstname = req.body.advisorfirstname;
db.getConnection((err, connection) => {

    connection.query("UPDATE groups SET advisorfirstname = ? WHERE id = ?",[advisorfirstname,id] ,(err, result) => {
        connection.release() // return the connection to pool
        if(err) {
            console.log(err);
         } else {
             res.send(result);
         }

    })
})
})

app.put('/group/update5/', (req, res) => {
    const id = req.body.id;
    const advisorlastname = req.body.advisorlastname;
db.getConnection((err, connection) => {

    connection.query("UPDATE groups SET advisorlastname = ? WHERE id = ?",[advisorlastname,id] ,(err, result) => {
        connection.release() // return the connection to pool
        if(err) {
            console.log(err);
         } else {
             res.send(result);
         }

    })
})
})

app.delete('/group/delete/:id', (req, res) => {
    const id = req.params.id ;
    db.getConnection((err, connection) => {

        connection.query("DELETE FROM groups WHERE id = ?",id, (err, result) => {
            connection.release() // return the connection to pool

            if(err) {
                console.log(err);
             } else {
                 res.send(result);
             }

        })
    })
})


// Get a beer by ID
app.get('/:id', (req, res) => {

    db.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('SELECT * from groups WHERE id = ?', [req.params.id], (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(rows)
            } else {
                console.log(err)
            }

        })
    })
})

// Delete a records / beer
app.delete('/:id', (req, res) => {

    db.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('DELETE from beers WHERE id = ?', [req.params.id], (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`Beer with the Record ID: ${[req.params.id]} has been removed.`)
            } else {
                console.log(err)
            }

        })
    })
})


// Add a record / beer
app.post('', (req, res) => {

    db.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const params = req.body

        connection.query('INSERT INTO beers SET ?', params , (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`Beer with the name: ${params.name} has been added.`)
            } else {
                console.log(err)
            }

        })

        console.log(req.body)
    })
})


// Update a record / beer
app.put('', (req, res) => {

    db.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const { id, name, tagline, description, image } = req.body

        connection.query('UPDATE beers SET name = ?, tagline = ?, description = ?, image = ? WHERE id = ?', [name, tagline, description, image, id] , (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`Beer with the name: ${name} has been added.`)
            } else {
                console.log(err)
            }

        })

        console.log(req.body)
    })
})



// Listen on enviroment port or 5000
app.listen(port, () => console.log(`Listen on port ${port}`))