export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('user_cart');
    if (serializedState === null) {
      return {
        data: [],
      };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('user_cart', serializedState);
  } catch {
    // Ignore write errors
  }
};