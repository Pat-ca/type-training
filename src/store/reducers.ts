const initialState = {
  currentTypingPosition: { currentWordId: -1, inputPositionOfWord: -1 },
  clearDisplayArea: null,
};

function rootReducer(
  state = initialState,
  action: { type: any; payload: any }
) {
  switch (action.type) {
    case 'Type_Letter':
      return { ...state, currentTypingPosition: action.payload };
    case 'Clear_Display_Area':
      return {
        ...state,
        clearDisplayArea: action.payload,
      };
    default:
      return state;
  }
}
export default rootReducer;
