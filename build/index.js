"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const app_1 = __importDefault(require("./app"));
const db_1 = require("./db");
// import { FactorySpaceship } from "./classes/factorySpaceship";
const PORT = 4000;
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // PRUEBA
            // const spaceship = FactorySpaceship.createSpaceship({
            //   type: "Unmanned Spacecraft",
            //   spaceship: {
            //     name: "hola",
            //     activityStart: "2022-10-10",
            //     activityEnd: "2022-10-10",
            //     active: true,
            //     power: 22,
            //     pushPower: 22,
            //     fuel: "gasolina",
            //     weight: 40,
            //     description: "asd",
            //   },
            //   unmannedSpacecraft: {
            //     destiny: "marte",
            //     timeForDestiny: 20,
            //     speed: 10,
            //     studySubject: "luna",
            //   },
            // });
            // console.log("ASDASDASD");
            // console.log(spaceship);
            //FIN PRUEBA
            yield db_1.AppDataSource.initialize();
            console.log("Database connected");
            app_1.default.listen(PORT, () => {
                console.log(`Server running on port ${PORT}`);
            });
        }
        catch (error) {
            console.error(error);
        }
    });
}
main();
//# sourceMappingURL=index.js.map