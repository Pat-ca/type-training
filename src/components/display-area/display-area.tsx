import { DisplayWord } from '../../models/display-word';
import './display-area.css';
import Word from './word';

interface DisplayAreaProps {
  displayWords: DisplayWord[];
}

const DisplayArea: React.FC<DisplayAreaProps> = ({ displayWords }) => {
  return (
    <div className="display_area">
      {displayWords.map((word, i) => (
        <Word key={`word_${i}`} word={word} />
      ))}
    </div>
  );
};

export default DisplayArea;
