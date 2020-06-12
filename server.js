const express = require("express");
const app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
const cors = require("cors");
app.use(cors({ optionSuccessStatus: 200 })); // some legacy browsers choke on 204

// static
app.use(express.static("public"));

// index
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// whoami API
app.get("/api/whoami", (req, res) => {
  // IP address
  const ipaddress = req.ip;
  // language
  const language = req.get("accept-language");
  // Software
  const software = req.get("user-agent");
  // Output
  res.json({ ipaddress, language, software });
});

// listener
const listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
