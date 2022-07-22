const express = require("express");
const chats = require("./data/data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const color = require("colors");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();
app.use(express.json());

dotenv.config();
connectDB();

app.get("/", (req, res) => {
  res.send("hwllow duniya");
});

// app.get("/api/chat", (req, res) => {
//   res.send(chats);
// });

// app.get("/api/chat/:id", (req, res) => {
//   res.send(chats.find((chat) => chat._id == req.params.id));
// });

app.use("/api/user", userRoutes);
app.use('/api/chat',chatRoutes);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server is listening on port ${PORT}`.bgBlue));
