interface Car {
  name: string,
  color: string,
  id?: number,
}

interface CarsList extends Array<Car> {}