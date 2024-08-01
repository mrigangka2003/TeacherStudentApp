import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors' ;
import {corsUrl} from './config' ;


const app = express();

app.use(express.json({ limit: '10mb' }));
app.use(
  express.urlencoded({ limit: '10mb', extended: true, parameterLimit: 50000 }),
);
app.use(cors({ 
    origin: corsUrl, 
    optionsSuccessStatus: 200 
}));

app.get('/',(req:Request,res:Response)=>{
  res.send('Hey its working again') ;
})


export default app ;