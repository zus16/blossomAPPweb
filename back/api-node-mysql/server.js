const express = require('express')
const mysql2 = require('mysql2')
const exconn = require('express-myconnection')
const routes = require('./routes')
const cors = require('cors')

const app = express()
app.set('port',process.env.PORT || 9000)

const dboptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Contra_mySQL16!!',
    database: 'expotec2023cancerdemama',
}
    
//Obtener direcciones

app.use(exconn(mysql2, dboptions, 'single'))
app.use(express.json())
app.use(cors())

app.get('/', (req,res)=>{
    res.send('esta es mi API')
})

app.use('/api', routes)

app.listen(app.get('port'), ()=>{
    console.log('server en el puerto', app.get('port'))
})