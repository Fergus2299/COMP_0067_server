const express = require("express");
const app = express();

app.use(express.json());
const db = require('./models');


// routes
const userRouter = require('./routes/Users');
app.use("/users", userRouter);

//

// we will always recreate the tables before the server is started
db.sequelize.sync().then(() => {
    app.listen(4000, () => {
        console.log("Server running on port 4000");
    });
});

