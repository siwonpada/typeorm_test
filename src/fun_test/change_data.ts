import { Photo } from "../entity/Photo";
import { AppDataSource } from "../data-source";

AppDataSource.initialize().then( async () => {
    const data_id = 1
    const photoRepository = AppDataSource.getRepository(Photo)
    const photoToUpdate = await photoRepository.findOneBy({
        id:data_id,
    })
    photoToUpdate.name = "Me, my friends and polar bears"
    await photoRepository.save(photoToUpdate)
    console.log(`data(id = ${data_id}) is changed!`)
})

const change_data = async(data_id: number,name:string, description: string, filename:string, views:number, isPublished:boolean) => {
    const photoRepository = AppDataSource.getRepository(Photo)
    const photoToUPdate = await photoRepository.findOneBy({
        id:data_id,
    })
    photoToUPdate.name = name;
    photoToUPdate.description = description;
    photoToUPdate.filename = filename;
    photoToUPdate.views = views;
    photoToUPdate.isPublished = isPublished;
    await photoRepository.save(photoToUPdate)
}