import express from "express";

const app = express();

app.use(express.json());
const PORT = 5001;

// writing our first get / api

app.get("/", (req, res) => {
  try {
    res.status(200).json({ msg: "Hello from status code" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

// to create or accept new data from client
app.post("/register", (req, res) => {
  try {
    // to accept data from client
    // we use a method of req
    /// which is req.body;

    let userDataFromClient = req.body;
    console.log(userDataFromClient);
    res.status(201).json({ msg: "your account created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

app.put("/update", (req, res) => {
  try {
    let updatingData = req.body;
    console.log(updatingData);
    res.status(200).json({ msg: "your account is updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

app.delete("/delete", (req, res) => {
  try {
    let deletingData = req.body;
    console.log(deletingData);
    res.status(200).json({ msg: "Your account  has deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

app.get("/cars/:name", (req, res) => {
  try {
    let suhail = req.params.name;
    console.log(suhail);
    res.status(200).json({ msg: suhail });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});
app.listen(PORT, () => {
  console.log(`Server is Running at http://localhost:${PORT}`);
});
