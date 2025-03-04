import { set } from "mongoose";
import { create } from "zustand";

export const useStore = create((set) => ({
    store: [],
    setStore: (store) => set(() => ({ store }))
}))