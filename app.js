import express from "express";
import cors from "cors";

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("It's Working!");
});

app.get("/sample/:num", (req, res) => {
  const { num } = req.params;
  var obj = { tabs: [] };

  for (let i = 1; i <= num; i++) {
    const id = i;
    const name = `Tab ${i}`;
    const text = `Tab ${i} Content Lorem Ipsum`;

    obj.tabs.push({
      id,
      name,
      text,
    });
  }

  res.json(obj);
});

app.listen(port, () => {
  console.log(`Active on http://localhost:${port}`);
});
