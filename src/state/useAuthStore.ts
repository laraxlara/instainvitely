import { create } from "zustand";
import axios from "axios";
import { User } from "@prisma/client";

export interface AuthState {
  token: string | null;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  registerUser: (
    name: string,
    email: string,
    password: string
  ) => Promise<void>;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  token: null,
  user: null,
  login: async (email: string, password: string) => {
    // Implement login logic here
    // Make API call to authenticate user and retrieve token/user details
    // Set token and user in the state using 'set' function
  },
  registerUser: async (name: string, email: string, password: string) => {
    // Make API call to register user and retrieve token/user details
    // Set token and user in the state using 'set' function
    try {
      const response = await axios.post("/auth/api/register", {
        name,
        email,
        password,
      });

      if (response.status === 201) {
        const { token, user } = response.data;
        set({ token, user });
      } else {
        console.log(response.data.error);
      }
    } catch (error) {
      console.log(error);
    }
  },
  logout: () => {
    // Implement logout logic here
    // Clear token and user from the state
  },
}));

export default useAuthStore;
