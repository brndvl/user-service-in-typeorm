import { ConnectionOptions } from "typeorm"
import path from 'path'
import dotenv from 'dotenv'

dotenv.config()

const devConfig = {
   "type": "postgres",
   "host": "localhost",
   "port": 5432,
   "username": "postgres",
   "password": process.env.POSTGRES_PASSWORD,
   "database": process.env.POSTGRES_DB,
   "logging": false,
   "entities": [path.join(__dirname, "../entities/**/*.*")],
   "migrations": [path.join(__dirname, "../migrations/**/*.*")],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": path.join(__dirname, "../entities"),
      "migrationsDir": path.join(__dirname, "../migrations")
   },
} as ConnectionOptions

export default devConfig