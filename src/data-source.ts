import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "mariadb",
    host: "localhost",
    port: 3306,
    username: "mariadb_test_admin",
    password: "admin",
    database: "mariadb_test",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
