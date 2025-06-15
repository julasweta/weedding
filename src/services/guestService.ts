import { apiService, IRes } from "./ApiServices";

export interface IGuest {
  first_name: string;
  last_name: string;
  email?: string;
  role?: string; // Додано для можливого розширення
  id?: string; // Додано для унікальної ідентифікації
  isConfirmed?: boolean; // Додано для підтвердження присутності
}

// Виправлений шлях для GitHub Pages:
const GUESTS_URL = `${import.meta.env.BACKEND_URL}/users`;

export const guestService = {
  async getGuests(): Promise<IGuest[]> {
    const res = await fetch(GUESTS_URL);
    if (!res.ok) throw new Error("Не вдалося завантажити список гостей");
    return await res.json();
  },
  confirm: (id: string): IRes<IGuest> =>
    apiService.post(`users/confirm?id=${id}`),  // без зайвої дужки
  

};
