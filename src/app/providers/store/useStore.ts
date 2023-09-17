"use client"

import { create } from "zustand";

const useStore = create((set) => ({
    servicesOrder: [],
    orderFinished: false,
    setServicesOrder: (servicesOrder: object[]) => set({ servicesOrder }),
    setOrderFinished: (orderFinished: boolean) => set({ orderFinished }),
}));

export default useStore;