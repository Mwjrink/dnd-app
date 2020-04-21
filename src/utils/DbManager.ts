import { SQLiteObject, SQLiteOriginal } from "@ionic-native/sqlite";

export class DbManager {
  constructor(private sqlite: SQLiteOriginal) {}

  async init() {
    this.sqlite
      .create({
        name: "data.db",
        location: "default",
      })
      .then((db: SQLiteObject) => {
        db.executeSql("create table danceMoves(name VARCHAR(32))", [])
          .then(() => console.log("Executed SQL"))
          .catch((e) => console.log(e));
      })
      .catch((e) => console.log(e));
  }
}
