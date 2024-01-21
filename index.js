const express = require("express");
const app = express();

const PORT = 2000;

app.get("/", (req, res) => {
    console.log("default route");

    res.send("Hello World !");
})

app.get("/Products", (req, res) => {
    console.log("production route");

    res.send([{id : 1, name:"product1"}, {id: 2, age:"product2"}, {id: 3, gender:"product3"}]);
})


app.listen(PORT, () => { console.log(`app is running on ${PORT}`);
})