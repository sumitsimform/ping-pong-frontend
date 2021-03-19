export const BASE_URL = process.env.REACT_APP_BASE_URL;

export const API_URL = `${BASE_URL}api/v1/`;

export const player = {
  REGISTER: `${API_URL}add-players`,
  ADDGAMES: `${API_URL}add-game`,
};
