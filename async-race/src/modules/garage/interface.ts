interface Car {
  name: string,
  color: string,
  id?: number,
}

interface CarsList extends Array<Car> {}


interface StartedCar {
  id: number,
  duration: number,
}

interface StartedCarsList extends Array<StartedCar> {}

interface GarageFormsConfig {
  createCarName?: string,
  createCarColor?: string,
  updateCarName?: string,
  updateCarColor?: string,
}