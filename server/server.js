require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const server = require("http").createServer(app);

//rotas
const clientRouter = require("./routers/clientRouter.js");
const enterpriseRouter = require("./routers/enterpriseRouter.js");

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded());
app.set("trust proxy", 1);

app.use("/client", clientRouter);
app.use("/enterprise", enterpriseRouter);

app.use(cors("*"));

app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).send("Internal Server Error");
});

server.listen(process.env.PORT, () => {
  console.log(`Server running at `, process.env.PORT);
});
