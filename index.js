const express = require("express");
const app = express();

app.use(express.json());
const db = require('./models');


const cors = require("cors");

// this helps with permissions, * is wild meaning any origin can affect the api
app.use(cors({
    origin:'*'
}));

// // routes
// const userRouter = require('./routes/Users');
// app.use("/users", userRouter);

const authRouter = require('./routes/auth.routes');
app.use("/auth", authRouter);

const userRouter = require('./routes/user.routes');
app.use("/user", userRouter);

// we will always recreate the tables before the server is started
db.sequelize.sync().then(() => {
    app.listen(4000, () => {
        console.log("Server running on port 4000");
    }); 
});
