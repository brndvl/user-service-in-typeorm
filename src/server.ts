import "reflect-metadata";
import { createConnection } from "typeorm";
import app from "./app";
import dbConfig from "./db/ormconfig";

createConnection(dbConfig)
  .then(() => {
    const PORT = process.env.PORT;

    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`App is running on PORT ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
