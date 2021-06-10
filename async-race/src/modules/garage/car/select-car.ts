import { selectCarAction } from "../../../redux/actions";

export const selectCar = (targetCarId:string):void => {
  selectCarAction(parseInt(targetCarId as string, 10));

  const updateCarForm = document.getElementById('updateCarForm') as HTMLFormElement;
  const updateCarName = document.getElementById('updateCarName') as HTMLInputElement;
  const updateCarColor = document.getElementById('updateCarColor') as HTMLInputElement;

  [...updateCarForm.children].forEach((elem) => elem.removeAttribute('disabled'));

  const targetCar = document.getElementById(targetCarId);

  updateCarName.value = targetCar?.dataset.name as string;
  updateCarColor.value = targetCar?.dataset.color as string;
}