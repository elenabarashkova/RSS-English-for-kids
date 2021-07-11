import { setCategoriesListAction } from "../redux/actions";
import { SERVER_PATH } from "./constants";
import { ServerCategory } from "../components/admin-panel/types";

export const getCategories = async (): Promise<void> => {
  const response = await fetch(`${SERVER_PATH}categories`);
  const result = await response.json();

  setCategoriesListAction(result);
}

export const getCategory = async (id: string): Promise<ServerCategory> => {
  const response = await fetch(`${SERVER_PATH}categories/${id}`);
  const result = await response.json();
  return result;
}

// export const postNewCar = async (car: Car):Promise<void> => {
//   try {
//     await fetch(`${SERVER_ADDRESS_GARAGE}`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(car),
//     });
//
//     getCars();
//
//   } catch(error) {
//     alert('Error creating the car. Please, try again');
//   }
// };

// export const deleteCar = async (id:number):Promise<void> => {
//   try {
//     await fetch(`${SERVER_ADDRESS_GARAGE}/${id}`, {
//       method: 'DELETE',
//     });
//     await fetch(`${SERVER_ADDRESS_WINNERS}/${id}`, {
//       method: 'DELETE',
//     });
//
//     getCars();
//
//   } catch(error) {
//     alert('Error deleting the car. Please, try again');
//   }
// };
//
// export const updateCar = async (car: Car):Promise<void> => {
//   const {selectedCarId} = store.getState();
//
//   try {
//     await (await fetch(`${SERVER_ADDRESS_GARAGE}/${selectedCarId}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(car),
//     })).json();
//
//     getCars();
//
//   } catch(error) {
//     alert('Error updating the car. Please, try again');
//   }
// }