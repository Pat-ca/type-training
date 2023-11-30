import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { TypingLetterStates } from '../../enums/typing-letter-state';
import { TypingWordStates } from '../../enums/typing-word-state';
import { DisplayWord } from '../../models/display-word';
import { TypingState } from '../../models/typing-state';
import * as lessonService from '../../services/lesson.service';
import { setClearDisplayArea } from '../../store/typing-slice';
import './input-area.scss';

interface InputAreaProps {
  displayWords: DisplayWord[];
  updateDisplayWords: (updatedWords: DisplayWord[]) => void;
}

const InputArea = ({ displayWords, updateDisplayWords }: InputAreaProps) => {
  const [text, setText] = useState<string>('');
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    const textarea = event.target as HTMLTextAreaElement;
    let caretPos = textarea.selectionStart;
    const isLineEnd = lessonService.isEndOfLine(displayWords, caretPos);
    if (isLineEnd) {
      dispatch(setClearDisplayArea(true));
      setIsEnd(isLineEnd);
      return;
    }

    if (event.code === 'Backspace') {
      if (caretPos >= 0) {
        caretPos -= 2;
        const { displayWord, inputPositionOfWord }: TypingState =
          lessonService.getTypingState(displayWords, caretPos);

        if (!displayWord) {
          return;
        }
        //clear next word
        if (inputPositionOfWord === displayWord.letters.length - 2) {
          displayWords[displayWord.id].letters[
            displayWord.letters.length - 1
          ].state = TypingLetterStates.Default;
          displayWords[displayWord.id + 1].state = TypingWordStates.Default;
          displayWords[displayWord.id].state = TypingWordStates.Highlight;
        } else if (inputPositionOfWord === displayWord.letters.length - 1) {
          displayWord.state = TypingWordStates.Correct;
          if (displayWords[displayWord.id + 1]) {
            displayWords[displayWord.id + 1].state = TypingWordStates.Highlight;
            displayWords[displayWord.id + 1].letters[0].state =
              TypingLetterStates.Default;
          }
        } else {
          displayWord.letters[inputPositionOfWord + 1].state =
            TypingLetterStates.Default;
        }
      }
    } else {
      const { displayWord, displayLetter, inputPositionOfWord } =
        lessonService.getTypingState(displayWords, caretPos);
      if (!displayWord || !displayLetter) {
        return;
      }

      const isWrong = event.key !== displayLetter.value;
      displayLetter.state = isWrong
        ? TypingLetterStates.Wrong
        : TypingLetterStates.Correct;
      if (inputPositionOfWord === displayWord.letters.length - 1) {
        if (displayWords[displayWord.id + 1]) {
          displayWords[displayWord.id + 1].state = TypingWordStates.Highlight;
        }
        let typingWordWrong = false;
        displayWord.letters.forEach((letter) => {
          if (letter.state === TypingLetterStates.Correct) {
            letter.state = TypingLetterStates.Default;
          } else if (letter.state === TypingLetterStates.Wrong) {
            typingWordWrong = true;
          }
        });
        displayWord.state = typingWordWrong
          ? TypingWordStates.Wrong
          : TypingWordStates.Correct;
      }
    }
    updateDisplayWords([...displayWords]);
  };

  const handleKeyUp = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (isEnd) {
      setText('');
      setIsEnd(false);
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value); // Update state on change
  };

  return (
    <textarea
      className="input_area"
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      onPaste={handlePaste}
      onChange={handleChange}
      spellCheck="false"
      value={text}
    ></textarea>
  );
};

export default InputArea;
