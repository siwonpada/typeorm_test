import { Photo } from "../entity/Photo";
import { AppDataSource } from "../data-source";

AppDataSource.initialize().then( async () => {
    const data_id = 4
    const photoRepository = AppDataSource.getRepository(Photo)
    const photoToRemove = await photoRepository.findOneBy({
        id:data_id,
    })
    await photoRepository.remove(photoToRemove)
    console.log(`data(id = ${data_id}) is removed!`)
})

const remove_data = async (data_id: number) => {
    const photoRepository = AppDataSource.getRepository(Photo)
    const photoToRemove = await photoRepository.findOneBy({
        id:data_id,
    })
    await photoRepository.remove(photoToRemove)
}