import { createSlice } from '@reduxjs/toolkit';

interface TypingStoreState {
  currentTypingPosition: { currentWordId: number; inputPositionOfWord: number };
  clearDisplayArea: boolean | null;
}

const initialState: TypingStoreState = {
  currentTypingPosition: { currentWordId: -1, inputPositionOfWord: -1 },
  clearDisplayArea: null,
};

export const typingSlice = createSlice({
  name: 'typing',
  initialState,
  reducers: {
    typingLetter: (state, action) => {
      return { ...state, currentTypingPosition: action.payload };
    },
    clearDisplayArea: (state, action) => {
      return {
        ...state,
        clearDisplayArea: action.payload,
      };
    },
  },
});

export const { typingLetter, clearDisplayArea } = typingSlice.actions;
export const selectClearDisplayArea = (state: TypingStoreState) =>
  state.clearDisplayArea;
export default typingSlice.reducer;
