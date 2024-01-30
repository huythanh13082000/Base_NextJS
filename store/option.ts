import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { Options } from "@/types/Options";
import { produce } from "immer";

interface OptionActions {
  addOption: (
    option: Pick<Options, "type" | "nameOption" | "price" | "id">,
  ) => void;
  deleteOption: (
    option: Pick<Options, "type" | "nameOption" | "price" | "id">,
  ) => void;
}

interface OptionStates {
  options: Pick<Options, "type" | "nameOption" | "price" | "id">[] | null;
}

const initialStates: OptionStates = {
  options: null,
};

const optionStore = create<OptionStates & OptionActions>()(
  immer((set) => ({
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
  })),
);

export default optionStore;
