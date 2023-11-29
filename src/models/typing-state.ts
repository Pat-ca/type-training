import { DisplayLetter } from './display-letter';
import { DisplayWord } from './display-word';

export interface TypingState {
  displayWord: DisplayWord | null;
  displayLetter: DisplayLetter | null;
  inputPositionOfWord: number;
}
