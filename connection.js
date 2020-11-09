require('dotenv').config()
const mongoose = require('mongoose')
 
const uri= process.env.DB
const db = mongoose.connection

mongoose.connect( uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .catch(err => console.log(err))

db.once('open', _ => {
    console.log('db is connected', uri)
})

db.on('error', err =>{
    console.log(err)
})

