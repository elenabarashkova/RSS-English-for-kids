import { SERVER_PATH } from "./constants";
import { getLogin } from "../components/indexedDB";

export const login = async (loginData: Record<string, string>): Promise<number> => {
  const response = await fetch(`${SERVER_PATH}login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(loginData),
  });

  const result = await response.json();
  return result.token;
}

export const logout = async (): Promise<void> => {
  const currentToken = await getLogin();

  await fetch(`${SERVER_PATH}logout`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'token': `${currentToken}`
    },
  });
}