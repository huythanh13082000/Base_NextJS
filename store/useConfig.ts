import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ConfigActions {
  setConfig: (config: Record<string, any>) => void;
}

interface ConfigStates {
  config: Record<string, any> | null;
}

const initialStates: ConfigStates = {
  config: null,
};

const useConfig = create<ConfigStates & ConfigActions>()(
  persist(
    (set) => ({
      ...initialStates,
      setConfig: async (config) => {
        set({ config });
      },
    }),
    {
      name: "config",
      partialize: (state) => ({ config: state.config }),
    },
  ),
);

export default useConfig;
