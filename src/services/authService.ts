// src/services/authService.ts
import { apiService, IRes } from "./ApiServices";
import { IGuest } from "./guestService";

const authService = {
  login: (first_name: string, last_name: string): IRes<IGuest> =>
    apiService.get(`users/search?first_name=${first_name}&last_name=${last_name}`),

  logout(): void {
    localStorage.removeItem('first_name');
    localStorage.removeItem('last_name');
  },
};

export { authService };
