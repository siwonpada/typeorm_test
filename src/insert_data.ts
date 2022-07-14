import { Photo } from "./entity/Photo";
import { AppDataSource } from "./data-source";

AppDataSource.initialize().then( async () => {
    const photo = new Photo();
    photo.name = "My picture"
    photo.description = "This is my picture"
    photo.filename = "my_picture.jpg"
    photo.views = 2
    photo.isPublished = true

    AppDataSource.manager.save(photo).then(()=>{
        console.log("Photo has been saved. Photo id is", photo.id);
    })
})

