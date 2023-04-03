const express = require("express");
const app = express();
const bp = require("body-parser");

app.use(express.json());
const db = require('./models');
app.use(bp.urlencoded({ extends: false }))

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

const projectRouter = require('./routes/project.routes');
app.use("/projects", projectRouter);


// we will always recreate the tables before the server is started
db.sequelize.sync().then(() => {
    app.listen(4000, () => {
        console.log("Server running on port 4000");
    }); 
});
