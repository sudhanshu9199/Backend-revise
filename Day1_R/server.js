require("dotenv").config();
const express = require("express");
const connectToDB = require("./src/db/db.js");
const noteModel = require("./src/models/noteModel.js");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  console.log("You entered only!");
  res.send("You entered only!");
});

app.post("/note/create", async (req, res) => {
  const { title, content } = req.body;
  console.log("title:", title, "\ncontent:", content);
  await noteModel.create({ title, content });
  res.send("note created!");
});

app.delete("/note/delete/:id", async (req, res) => {
  const noteId = req.params.id;

  await noteModel.findByIdAndDelete(noteId);
  res.send("note deleted!");
});

app.patch("/note/update/:id", async (req, res) => {
  const noteId = req.params.id;

  const { title } = req.body;

  await noteModel.findByIdAndUpdate(
    {
      _id: noteId,
    },
    { title }
  );

  res.json({
    message: "note title updated!",
  });
});

connectToDB();
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`http://localhost${PORT}`);
});
