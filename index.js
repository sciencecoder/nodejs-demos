
require('dotenv').config();
const express = require('express');
//require app Routers
const deviceInfoDetectorRouter = require("device-info-detector");
const advancednodeRouter = require("fcc-advanced-node-and-express")

//universal app middleware
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 1000;
app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
/* change code below this line */
// app.use('/public', express.static(process.cwd() + '/public'));
//get Routers and map them to routes

app.get("/", function(req, res) {
  res.send("You have reached the root of nodejs-demos by Adam O. More content coming soon!");
})
app.use("/device-info-detector", deviceInfoDetectorRouter);
app.use("/advancednode", advancednodeRouter);
