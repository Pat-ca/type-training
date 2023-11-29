import KEYS from '../assets/config/keys_en';
import LESSONS from '../assets/config/lessons';
import { MAX_LENGTH, SPACE_KEY_ID } from '../enums/constants';
import { TypingLetterStates } from '../enums/typing-letter-state';
import { TypingWordStates } from '../enums/typing-word-state';
import { DisplayLetter } from '../models/display-letter';
import { DisplayWord } from '../models/display-word';
import { TypingState } from '../models/typing-state';

export function getLesson(lessonId: number, wordLength: number = 2): number[] {
  const lesson = LESSONS.find((l) => l.id === lessonId);
  if (!lesson) return [];

  const keyIds = [...lesson.leftKeyIds, ...lesson.rightKeyIds].flatMap(
    (id, _, arr) =>
      Array.from({ length: arr[1] - arr[0] + 1 }, (_, k) => k + arr[0])
  );

  return Array.from(
    { length: wordLength },
    () => keyIds[Math.floor(Math.random() * keyIds.length)]
  );
}

// function getLesson(lessonId: number, wordLength: number = 2): number[] {
//   const lesson = LESSONS.find((l) => l.id === lessonId);
//   const result = [];
//   const keyIds = [];
//   if (lesson) {
//     for (let i = lesson.leftKeyIds[0]; i <= lesson.leftKeyIds[1]; i++) {
//       keyIds.push(i);
//     }
//     for (let i = lesson.rightKeyIds[0]; i <= lesson.rightKeyIds[1]; i++) {
//       keyIds.push(i);
//     }
//   }

//   for (let i = 0; i < wordLength; i++) {
//     const pos = Math.floor(Math.random() * keyIds.length);
//     result.push(keyIds[pos]);
//   }
//   return result;
// }

export function getDisplayWords(
  startLessonId: number,
  wordLength: number
): DisplayWord[] {
  const wordCount = Math.floor(MAX_LENGTH / (wordLength + 1));
  const generatedDisplayWords = [];
  for (let n = 0; n < wordCount; n++) {
    const keyIds = getLesson(startLessonId, wordLength);
    keyIds.push(SPACE_KEY_ID);
    generatedDisplayWords.push({
      id: n,
      state: n === 0 ? TypingWordStates.Highlight : TypingWordStates.Default,
      letters: keyIds.map((id, index) => {
        const key = KEYS.find((key) => key.id === id);
        return {
          id: index,
          keyId: id,
          value: key?.value.toLowerCase(),
          state: TypingLetterStates.Default,
        } as DisplayLetter;
      }),
    } as DisplayWord);
  }
  return generatedDisplayWords;
}

export function getTypingState(
  displayWords: DisplayWord[],
  inputLetterPosition: number
): TypingState {
  if (
    !Array.isArray(displayWords) ||
    displayWords.length === 0 ||
    inputLetterPosition < 0
  ) {
    return { displayWord: null, displayLetter: null, inputPositionOfWord: -1 };
  }

  let totalLettersCount = 0;
  let targetWord = null;
  let targetLetter = null;
  let positionInWord = -1;

  for (const word of displayWords) {
    const wordLength = word.letters.length;
    if (totalLettersCount + wordLength > inputLetterPosition) {
      targetWord = word;
      positionInWord = inputLetterPosition - totalLettersCount;
      targetLetter = word.letters[positionInWord];
      break;
    }
    totalLettersCount += wordLength;
  }

  return {
    displayWord: targetWord,
    displayLetter: targetLetter,
    inputPositionOfWord: positionInWord,
  } as TypingState;
}

export function isEndOfLine(
  displayWords: DisplayWord[],
  inputPosition: number
): boolean {
  let lineLength = 0;
  displayWords.forEach((word) => {
    lineLength += word.letters.length;
  });
  return inputPosition >= lineLength - 1;
}
