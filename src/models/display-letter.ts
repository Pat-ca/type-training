import { TypingLetterStates } from '../enums/typing-letter-state';

export interface DisplayLetter {
  id: number;
  keyId: number;
  value: string;
  state: TypingLetterStates;
}
