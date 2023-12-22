import ICar from "./ICar";

interface ILap {
  id: string;
  lapNumber: number;
  time: number;

  idCar: ICar["id"];
  idCarFk: ICar;
}
export default ILap;
