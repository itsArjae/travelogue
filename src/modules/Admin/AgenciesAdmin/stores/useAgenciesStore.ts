import { create } from "zustand";

interface DialogState {
  isAgencyDialogOpen: boolean;
  setAgencyDialogOpen: (isAgencyDialoOpen: boolean) => void;
}

export const useAgenciesStore = create<DialogState>()((set) => ({
  isAgencyDialogOpen: false,
  setAgencyDialogOpen: (isAgencyDialogOpen) => set({ isAgencyDialogOpen }),
}));
