import { SPACE_KEY_ID } from '../../enums/constants';
import { TypingLetterStates } from '../../enums/typing-letter-state';
import { TypingWordStates } from '../../enums/typing-word-state';
import { DisplayLetter } from '../../models/display-letter';
import { DisplayWord } from '../../models/display-word';
import './word.scss';

interface WordProps {
  word: DisplayWord;
}

const Word = ({ word }: WordProps) => {
  return (
    <div className="word-container">
      <span
        className={`${
          word.state === TypingWordStates.Highlight ? 'highlight-word' : ''
        } ${word.state === TypingWordStates.Correct ? 'greyout-word' : ''} ${
          word.state === TypingWordStates.Wrong ? 'typing-wrong-word' : ''
        }
        `}
      >
        {word.letters.map((letter: DisplayLetter, i) => {
          return (
            letter.keyId !== SPACE_KEY_ID && (
              <span
                key={`w_${i}`}
                className={`${
                  letter.state === TypingLetterStates.Wrong
                    ? 'error-letter'
                    : ''
                } ${
                  letter.state === TypingLetterStates.Correct
                    ? 'correct-letter'
                    : ''
                }`}
              >
                {letter.value}
              </span>
            )
          );
        })}
      </span>
      {word.letters[word.letters.length - 1].keyId === SPACE_KEY_ID && (
        <span
          className={`${
            word.letters[word.letters.length - 1].state ===
            TypingLetterStates.Wrong
              ? 'error-letter'
              : ''
          } ${
            word.letters[word.letters.length - 1].state ===
            TypingLetterStates.Correct
              ? 'correct-letter'
              : ''
          }`}
        >
          {word.letters[word.letters.length - 1].value}
        </span>
      )}
    </div>
  );
};

export default Word;
