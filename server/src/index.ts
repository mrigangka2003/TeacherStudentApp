import express,{Request,Response,NextFunction, Application} from "express"
import dotenv from "dotenv" ;

dotenv.config({}) ;

const app:Application = express() ;
const PORT = process.env.PORT || 8080 ;


app.get('/',(req:Request , res :Response)=>{
    res.send("<center> <h1>Welcome to the server</h1> </center>") ;
})

app.listen(PORT,()=>{
    console.log(`Server is listened on ${PORT}`) ;
})
