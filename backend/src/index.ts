import express from 'express'
import { router } from './routes/authors';

const LOCAL_PORT = 4000;


const app = express()

app.use(express.json())

app.use(router)

app.listen(LOCAL_PORT, () => {
  console.log(`Se está ejecutando el servidor en el puerto localhost:${LOCAL_PORT}`)
})