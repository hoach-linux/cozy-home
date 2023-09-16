"use client"

import { create } from "zustand";

const useStore = create((set) => ({
    servicesOrder: [],
    setServicesOrder: (servicesOrder: object[]) => set({ servicesOrder }),
}));

export default useStore;