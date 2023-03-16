const express = require("express");
const app = express();

app.use(express.json());
const db = require('./models');
const {Programs} = require('./models')


const cors = require("cors");

// this helps with permissions, * is wild meaning any origin can affect the api
app.use(cors({
    origin:'*'
}));

// routes
const userRouter = require('./routes/Users');
app.use("/users", userRouter);

// we will always recreate the tables before the server is started
db.sequelize.sync().then(() => {
    app.listen(4000, () => {
        console.log("Server running on port 4000");
    }); 
});

// Programs.bulkCreate([
//   {name: "su"},
//   {name: "machine_learning"},
//   {name: "statistical_comp"},
//   {name: "core_cs"},
//   {name: "ai"},
// ],{updateOnDuplicate:["name"]});