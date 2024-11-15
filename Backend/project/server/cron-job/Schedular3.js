/*  Delete Takes which having in database more than 180 days */

const cron = require("node-cron");
const fs = require("fs");
const path = require("path");
const archive = require("./data/archive.json");

const houseKeeping = () => {
  let presentDate = new Date().getTime();

  let last180daysTasks = archive.filter((item) => {
    let itemDate = new Date(item.date).getTime();
    return Math.floor((presentDate - itemDate) / (1000 * 60 * 60 * 24)) <= 180;
  });


  fs.writeFileSync(
    path.join(__dirname, "data", "archive.json"),
    JSON.stringify(last180daysTasks),
    "utf-8"
  );
  console.log("Tasks older than 180 days removed successfully");
};
cron.schedule("1 0 * * *", houseKeeping);  // run every day at 12:01 am once
