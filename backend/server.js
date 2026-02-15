require("dotenv").config();

const express = require("express");
const cors = require("cors");
const attendees = require("./attendees.json");
const { findMatches } = require("./matcher");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/attendees", (req, res) => {
  res.json(attendees);
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});


app.get("/matches/:name", async (req, res) => {
  const matches = await findMatches(attendees, req.params.name);
  res.json(matches);
});


app.post("/rsvp", async (req, res) => {
  const attendee = req.body;

  attendees.push(attendee);

  const matches = await findMatches(attendees, attendee.name);

  res.json(matches);
});