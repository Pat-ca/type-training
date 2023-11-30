import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DisplayWord } from '../../models/display-word';
import * as lessonService from '../../services/lesson.service';
import {
  selectClearDisplayArea,
  setClearDisplayArea,
} from '../../store/typing-slice';
import DisplayArea from '../display-area/display-area';
import InputArea from '../input-area/input-area';
import './typing-area.scss';

function TypingArea() {
  const [displayWords, setDisplayWords] = useState([] as DisplayWord[]);
  const dispatch = useDispatch();
  const isClearDisplayArea = useSelector(selectClearDisplayArea);

  useEffect(() => {
    const generateDisplayWords = lessonService.getDisplayWords(1, 3);
    setDisplayWords(generateDisplayWords);
  }, []);

  useEffect(() => {
    if (isClearDisplayArea) {
      const generateDisplayWords = lessonService.getDisplayWords(1, 3);
      setDisplayWords(generateDisplayWords);
      dispatch(setClearDisplayArea(false));
    }
  }, [isClearDisplayArea, dispatch]);

  const updateDisplayWords = (updatedWords: DisplayWord[]) => {
    setDisplayWords(updatedWords);
  };

  return (
    <div className="typing_area">
      <DisplayArea displayWords={displayWords} />
      <InputArea
        displayWords={displayWords}
        updateDisplayWords={updateDisplayWords}
      />
    </div>
  );
}

export default TypingArea;
