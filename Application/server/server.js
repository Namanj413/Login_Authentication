const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const User = require("./module/userSchema");
const port = process.env.PORT || 8080;
const jwt = require("jsonwebtoken");
const { response } = require("express");
const SECRET_KEY = "hey";
const verifyToken = require("./middleware/verifyToken");

app.use(cors());
app.use(express.json());

const db = require("./db/conn").MongoURL;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Successfully Connected to MongoDB 8080 port"))
  .catch((error) => {
    console.log(error);
  });

app.get("/", async (req, res) => {
  res.send("connecion is live at from app.get /");
});



app.post("/singup", async (req, res) => {
  // const addingUser = new User(req.body);

  const { name, email, phone, password } = req.body;
  if (!name || !email || !phone || !password) {
    return res.status(422).json({ error: "please fill the filed property" });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email already exist" });
    }

    const addUser = new User({ name, email, phone, password });

    

    // await addUser.save();
    const useradded = await addUser.save();
    res.status(201).send(useradded).json({ message: "user registed" });
  } catch (err) {
    console.log(err);
  }
});

app.post("/addmember", async (req, res) => {
  // const addingUser = new User(req.body);

  const { name, email, phone, role, addedby, password } = req.body;
  if (!name || !email || !phone || !password) {
    return res.status(422).json({ error: "please fill the filed property" });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email already exist" });
    }

    const addUser = new User({ name, email, phone, role, addedby, password });

    // await addUser.save();
    const useradded = await addUser.save();
    res.status(201).send(useradded).json({ message: "user registed" });
  } catch (err) {
    console.log(err);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "pls fill the data" });
    }
    const userLogin = await User.findOne({ email: email });

    // Sending role type to React
    const roletype = userLogin.role;
    // console.log(roletype);

    if ((userLogin, roletype)) {
      jwt.sign({ email }, SECRET_KEY, { expiresIn: "30d" }, (err, token) => {
        res.status(200).json({
          token,
          roletype,
        });
      });
    } else {
      res.status(400).json({ error: "Invailed credintials" });
    }
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

//  user verifying with middile ware
app.post("/contact", verifyToken, (req, res) => {
  jwt.verify(req.token, SECRET_KEY, (err, authData) => {
    if (err) {
      res.send({ result: "token is not verified" });
    } else {
      res.status(200).send({
        message: "hey se access",
        authData,
      });
    }
  });
  res.send("hey you have done");
});

// Thakka technical ki video se verify kia no issue
app.get("/memberlist", async (req, res) => {
  try {
    const getStudents = await User.find({ addedby: "admin" });

    res.send(getStudents);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.post("/deletemember", async (req, res) => {
  const { email } = req.body;
  try {
    const deleting = await User.findOneAndDelete({ email: email });
    res.status(201).send(deleting);
  } catch (e) {
    console.log("Server error at 59 line");
  }
});

app.listen(port, () =>
  console.log("API is running on http://localhost:8080/login")
);
