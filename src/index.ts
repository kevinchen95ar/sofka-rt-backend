import "reflect-metadata";
import app from "./app";
import { AppDataSource } from "./db";

const PORT = 4000;
async function main() {
  try {
    await AppDataSource.initialize();
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
}

main();
