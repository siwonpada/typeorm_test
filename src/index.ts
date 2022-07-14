import { AppDataSource } from "./data-source"
import { Photo } from "./entity/Photo"
import * as express from "express"

const app = express();
const port = 3000;

AppDataSource.initialize().then(async () => {
   
    const savedPhotos = await AppDataSource.manager.find(Photo)

    app.listen(port, ()=>{
        console.log(`express server started on port ${port}`);
    })

    app.get('/',(req:express.Request, res:express.Response)=>{
        res.send(savedPhotos)
    })

}).catch(error => console.log(error))