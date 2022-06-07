"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Car_1 = __importDefault(require("./Car"));
const Colors_1 = __importDefault(require("./Colors"));
const Doors_1 = __importDefault(require("./Doors"));
const Directions_1 = __importDefault(require("./Directions"));
const gol = new Car_1.default('Volkswagen', Colors_1.default.PRATA, 4);
gol.openTheDoor(Doors_1.default.MOTORISTA);
gol.closeTheDoor(Doors_1.default.MOTORISTA);
gol.turnOn();
gol.speedUp();
gol.speedDown();
gol.turn(Directions_1.default.ESQUERDA);
gol.speedUp();
gol.speedDown();
gol.stop();
gol.openTheDoor(Doors_1.default.ATRAS_DO_CARONA);
gol.closeTheDoor(Doors_1.default.ATRAS_DO_CARONA);
gol.speedUp();
gol.speedDown();
gol.turn(Directions_1.default.DIREITA);
gol.speedUp();
gol.speedDown();
gol.turn(Directions_1.default.ESQUERDA);
gol.speedUp();
gol.speedDown();
gol.turn(Directions_1.default.DIREITA);
gol.speedDown();
gol.stop();
gol.openTheDoor(Doors_1.default.ATRAS_DO_CARONA);
gol.closeTheDoor(Doors_1.default.ATRAS_DO_CARONA);
gol.speedUp();
