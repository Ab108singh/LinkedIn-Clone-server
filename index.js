require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connectDB");
const userRouter = require("./routes/user.routes");
const postRouter = require("./routes/post.routes");
const swaggerui = require("swagger-ui-express");
const path = require("path");
const errorMiddleware = require("./middlewares/errorMiddleware");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve("./uploads")));

app.use(
    "/api/v1/docs",
    swaggerui.serve,
    swaggerui.setup(require("./swagger-docs.json"))
);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/posts", postRouter);

app.get("/", (req, res, next) => {
    res.send("Server is Up and Running!");
});

app.use(errorMiddleware);

connectDB().then(() => {
    app.listen(8000, () => {
        console.log("Listeing on PORT 8000");
    });
});
