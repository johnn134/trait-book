import { version } from "@/../package.json";

const STATE_KEY = "state";

export default {
  saveStore: (state: StoreState) => {
    localStorage.setItem(STATE_KEY, JSON.stringify(state));
  },
  loadStore: (): StoreState => {
    const storedState = localStorage.getItem(STATE_KEY);
    if (storedState) {
      return JSON.parse(storedState) as StoreState;
    }
    return {
      version,
      profiles: [],
    };
  },
};
