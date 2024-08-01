import app from './app'
import { port } from './config'
import dotenv from 'dotenv' 

dotenv.config({}) ;

app.listen(port, ()=>{
    console.info(`Server running on PORT ${port}`)
})