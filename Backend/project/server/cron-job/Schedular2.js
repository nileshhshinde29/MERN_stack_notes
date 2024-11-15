/* The task who having paid status move to archive */

const cron = require('node-cron')
const fs = require('fs')
const path = require("path")
const invoices= require('./data/invoices.json')
const archive= require('./data/archive.json')

const archiveFunction =()=>{

    let pendingTasks= invoices.filter(i=> i.status=="Pending")
    let paidTasks = invoices.filter(i=>i.status=="Paid")
    

    fs.writeFileSync(
       path.join(__dirname, "data","invoices.json"),
       JSON.stringify(pendingTasks),
       "utf-8"
    )

    fs.writeFileSync(
        path.join(__dirname, "data","archive.json"),
        JSON.stringify([...archive,...paidTasks ]),
        "utf-8"
     )
     console.log("Tasks archived successfully")
}
cron.schedule("*/10 * * * * *", archiveFunction)