// src/services/guestService.ts

export interface IGuest {
  firstName: string;
  lastName: string;
}

const GUESTS_URL = "/guests.json";

export const guestService = {
  async getGuests(): Promise<IGuest[]> {
    const res = await fetch(GUESTS_URL);
    if (!res.ok) throw new Error("Не вдалося завантажити список гостей");
    return await res.json();
  },

  async login(firstName: string, lastName: string): Promise<IGuest | null> {
    const guests = await this.getGuests();
    const found = guests.find(
      (g) =>
        g.firstName.toLowerCase() === firstName.toLowerCase().trim() &&
        g.lastName.toLowerCase() === lastName.toLowerCase().trim()
    );
    return found || null;
  },
};
