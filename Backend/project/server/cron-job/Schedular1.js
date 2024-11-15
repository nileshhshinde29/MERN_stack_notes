const cron = require('node-cron')

const temp =()=>{
    console.log("this is at schedular 1 in cron job", new Date())
}

cron.schedule("*/5 * * * * *", temp)