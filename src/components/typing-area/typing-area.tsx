import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DisplayWord } from '../../models/display-word';
import * as lessonService from '../../services/lesson.service';
import DisplayArea from '../display-area/display-area';
import InputArea from '../input-area/input-area';
import './typing_area.css';

function TypingArea() {
  const [displayWords, setDisplayWords] = useState([] as DisplayWord[]);
  const dispatch = useDispatch();
  const clearDisplayArea = useSelector((state) => state.clearDisplayArea);

  useEffect(() => {
    const generateDisplayWords = lessonService.getDisplayWords(1, 3);
    setDisplayWords(generateDisplayWords);
  }, []);

  useEffect(() => {
    if (clearDisplayArea) {
      const generateDisplayWords = lessonService.getDisplayWords(1, 3);
      setDisplayWords(generateDisplayWords);
      dispatch({ type: 'Clear_Display_Area', payload: false });
    }
  }, [clearDisplayArea, dispatch]);

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
