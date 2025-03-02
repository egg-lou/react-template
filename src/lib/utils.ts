import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import Cookies from "js-cookie";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const setAuthCookie = (token: string): void => {
  Cookies.set("iskonnect-auth-token", token, { expires: 7 });
};

export const getAuthCookie = (): string | undefined => {
  return Cookies.get("iskonnect-auth-token");
};

export const removeAuthCookie = (): void => {
  return Cookies.remove("iskonnect-auth-token");
};
