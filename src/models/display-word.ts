import { TypingWordStates } from '../enums/typing-word-state';
import { DisplayLetter } from './display-letter';

export interface DisplayWord {
  id: number;
  state: TypingWordStates;
  letters: DisplayLetter[];
}
