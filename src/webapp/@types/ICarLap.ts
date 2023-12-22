import ICar from "./ICar";

interface ICarLap {
  id: string;
  model: string;
  imageUrl: string;
  lapNumber: number;
  time: number;
  idCar: ICar["id"];
  idCarFk: ICar;
}
export default ICarLap;
