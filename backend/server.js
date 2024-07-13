const express = require('express');
const cors = require("cors");
// const { createExpressMiddleware } = require("@trpc/server/adapters/express");
const searchRouter = require("./routers/messengerSearch");
const { initSocket } = require("./controllers/socketController");
// const { authRouter } = require("./routers/authRouter");
const dotenv = require("dotenv");
// const { userRouter } = require("./routers/userRouter");
// const { readFileSync } = require("fs");
// const path = require("path");
const http = require("http").createServer;
// const { connect } = require("./lib/dbConnect");
// const { router: trpcRouter } = require("./trpc");

dotenv.config();

const Replicate = require("replicate");

//   const isDev = process.env.NODE_ENV !== "production";

  const app = express();

  app.use(express.json());
  app.use(cors());
  const server = http(app);

  // Initialize socket.io
  initSocket(server);

  // Init Replicate AI
  const replicate = new Replicate({
    // auth: "r8_HyCVh6nbO3VkqJkMvLIvDVLs2lzfS3b3rnJE1",
    auth: process.env.REPLICATE_TOKEN,
  });

  app.get("/api", (req, res) => {
    res.json({
      message: "Hello world",
    });
  });

  app.use("/api/v1/auth", require('./routers/authRouter'));
  app.use("/api/v1/user", require('./routers/userRouter'));
  app.use("/api", searchRouter);
//   app.use(
//     "/trpc",
//     createExpressMiddleware({
//       router: trpcRouter,
//     })
//   );

//   if (isDev) {
//     app.use("*", async (req, res, next) => {
//       const url = req.originalUrl;

//       try {
//         // 1. Read index.html
//         let template = readFileSync(
//           path.resolve(process.cwd(), "index.html"),
//           "utf-8"
//         );

//         // 2. Send the rendered HTML back.
//         res.status(200).set({ "Content-Type": "text/html" }).end(template);
//       } catch (e) {
//         next(e);
//       }
//     });
//   } else {
//     app.use(express.static(path.resolve(process.cwd(), "dist")));
//   }

  require('./dbconnect');
  server.listen(process.env.PORT, () => {
    console.log(`Server is listening on ${process.env.PORT}!`);
  });

