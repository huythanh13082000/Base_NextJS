import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { OptionChoose } from "@/types/Options";
import { produce } from "immer";

interface OptionActions {
  addOption: (option: OptionChoose) => void;
  deleteOption: (option: OptionChoose) => void;
  getTotalPrice: () => number;
}

interface OptionStates {
  options: OptionChoose[] | null;
}

const initialStates: OptionStates = {
  options: [],
};

const optionStore = create<OptionStates & OptionActions>()(
  immer((set, get) => ({
    ...initialStates,
    addOption: (payload) =>
      set((draft) => {
        if (draft.options) {
          draft.options.push(payload);
        }
      }),
    deleteOption: (payload) =>
      set((draft) => {
        if (draft.options) {
          const optionIndex = draft.options.findIndex(
            (el: any) => el.id === payload.id,
          );
          draft.options.splice(optionIndex, 1);
        }
      }),
    getTotalPrice: () => {
      const { options } = get();
      return options
        ? options.reduce((price, item) => {
            return price + Number(item.price);
          }, 0)
        : 0;
    },
  })),
);

export default optionStore;
