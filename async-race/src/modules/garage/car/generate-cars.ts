import { postNewCar } from "../../../services/service-requests";

export const generateCarsBehavior = (): void => {
  const generateCarsBtn = document.getElementById('generateCarsBtn');

  const carsNames = [
    'Tesla',
    'Batmobile',
    'Ford',
    'Audi',
    'BMW',
    'Cadillac',
    'Chevrolet',
    'Ferrari',
    'Honda',
    'Subaru',
  ];
  const carsModels = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', 'SUPER', 'MINI'];

  generateCarsBtn?.addEventListener('click', () => {

    for(let i = 0; i < 100; i++) {
      const name = carsNames[Math.floor(Math.random()*carsNames.length)];
      const model = carsModels[Math.floor(Math.random()*carsModels.length)];
      const getRandomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;

      const newCar = {
        name: `${name} ${model}`,
        color: `${getRandomColor}`,
      }

      postNewCar(newCar);
    }
  })
}