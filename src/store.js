import { set } from "mongoose";
import { create } from "zustand";

export const useStore = create((set) => ({
    store: [],
    setStore: (store) => set(() => ({ store }))
}))

export const usePaddle = create((set) => ({
    paddle: null,
    setPaddle: (paddle) => set(() => ({ paddle })),
    handleCheckout: (priceId) => set(() => ({ paddle }))
}))
