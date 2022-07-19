import { AppDataSource } from "./data-source"
import { Photo } from "./entity/Photo"
import * as express from "express"

const app = express();
const port = 3000;

app.set('views', './src/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('./src/public'));

AppDataSource.initialize().then(async () => {

    app.listen(port, ()=>{
        console.log(`express server started on port ${port}`);
    })

    app.get('/', async (req:express.Request, res:express.Response)=>{
        const savedPhotos = await AppDataSource.manager.find(Photo)
        res.send(savedPhotos)
    })

}).catch(error => console.log(error))