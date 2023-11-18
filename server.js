const express = require('express')
const app = express()

app.use(express.json());
app.use("view engine", "ejs")
app.use(express.static("public"))
app.use(express.urlencoded)
app.get("/", (req, res) =>{
    res.send("Hi")
})
app.post("/" ,(req, res) => {
    console.log(req.body);
    res.send(req.body)
})
app.listen(3000)