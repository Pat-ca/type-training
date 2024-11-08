import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

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
    setClearDisplayArea: (state, action) => {
      return {
        ...state,
        clearDisplayArea: action.payload,
      };
    },
  },
});

export const { typingLetter, setClearDisplayArea } = typingSlice.actions;
export const selectClearDisplayArea = (state: RootState) =>
  state.typings.clearDisplayArea;
export default typingSlice.reducer;
