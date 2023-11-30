import KEYS from '../../assets/config/keys_en';
import { TypingKey } from '../../models/typing-key';
import KeyEntity from './key-entity';

interface KeyRowProps {
  keys: TypingKey[];
}

const KeyRow = ({ keys }: KeyRowProps) => {
  return (
    <>
      {keys.map((key, i) => {
        return <KeyEntity key={`ke_${i}`} typingKey={key} />;
      })}
    </>
  );
};

function Keyboard() {
  return (
    <div className="keyboard">
      {[1, 2, 3, 4, 5].map((n) => {
        let rowKeys = KEYS.filter((k) => k.row === n);
        return (
          <div key={`krdiv_${n}`} className="key-row">
            <KeyRow keys={rowKeys} />
          </div>
        );
      })}
    </div>
  );
}

export default Keyboard;
