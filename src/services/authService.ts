// src/services/authService.ts
import { guestService, IGuest } from "./guestService";

const authService = {
  async login(user: { firstName: string; lastName: string }): Promise<IGuest> {
    const guest = await guestService.login(user.firstName, user.lastName);
    if (!guest) throw new Error("Гостя не знайдено");
    localStorage.setItem("guest", JSON.stringify(guest));
    return guest;
  },

  me(): IGuest | null {
    const meString = localStorage.getItem("guest");
    if (meString) {
      try {
        return JSON.parse(meString);
      } catch (e) {
        return null;
      }
    }
    return null;
  },
  

  logout(): void {
    localStorage.removeItem("guest");
  },
};

export { authService };
