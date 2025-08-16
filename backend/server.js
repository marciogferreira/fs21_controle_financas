const express = require('express');
const asyncMigrations = require('./src/database/migration.js')
const PublicRoute = require('./src/routes/PublicRoute.js');
const PrivateRoute = require('./src/routes/PrivateRoute.js');
const cors = require('cors')

const app = express()
app.use(cors({
    origin: '*'
}));
app.use(express.json()) // Autorizando o Uso de request.body
// Migrations
asyncMigrations()
app.get('/', (request, response) => {
    return response.send("Servidor Online com NodeJS + Express!")
})
app.use(PublicRoute)
app.use(PrivateRoute)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Servidor executando na porta 3000");
})