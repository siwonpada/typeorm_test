import { Photo } from "./entity/Photo";
import { AppDataSource } from "./data-source";
import { DataSource, Repository} from "typeorm";

class data_handling{
    repository: Repository<Photo>;
    constructor(dataSource:DataSource){
        this.repository = dataSource.getRepository(Photo)
    }

    async change_data(data_id: number,name:string, description: string, filename:string, views:number, isPublished:boolean){
        const dataToUpdate = await this.repository.findOneBy({
            id: data_id,
        })
        dataToUpdate.description = description;
        dataToUpdate.filename = filename;
        dataToUpdate.name = name;
        dataToUpdate.views = views;
        dataToUpdate.isPublished = isPublished;
        await this.repository.save(dataToUpdate)
        console.log(`id: ${data_id} data is changed!`)
    }

    async insert_data(name:string, description: string, filename:string, views:number, isPublished:boolean){
        const dataToinsert = new Photo();
        dataToinsert.description = description;
        dataToinsert.filename = filename;
        dataToinsert.name = name;
        dataToinsert.views = views;
        dataToinsert.isPublished = isPublished;
        await this.repository.save(dataToinsert)
        console.log(`data inserting complete! id is ${dataToinsert.id}`)
    }

    async remove_data(data_id:number){
        const dataToRemove = await this.repository.findOneBy({
            id: data_id,
        })
        await this.repository.remove(dataToRemove)
        console.log(`id: ${data_id} data is removed!`)
    }
}

//run area
AppDataSource.initialize().then(async ()=>{
    const data_edit = new data_handling(AppDataSource);
    data_edit.insert_data("great_pic","greeeeat!!","mypic/great_pic.jpg",1000,true);
}).catch(err => console.log(err))