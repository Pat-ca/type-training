import { useContext, useEffect, useState } from 'react';
import { TypingKey } from '../../models/typing-key';
import { KeyContext } from './key-provider';

interface KeyEntityProps {
  typingKey: TypingKey;
}

const KeyEntity = ({ typingKey }: KeyEntityProps) => {
  const { lastKeyDownUp } = useContext(KeyContext);
  const [highlightClass, setHighlightClass] = useState('');
  useEffect(() => {
    if (lastKeyDownUp?.down && lastKeyDownUp.down === typingKey.code) {
      setHighlightClass('highlight_key');
    }
    if (lastKeyDownUp?.up && lastKeyDownUp.up === typingKey.code) {
      setHighlightClass('');
    }
  }, [lastKeyDownUp, typingKey.code]);

  return (
    <div
      className={`key key_${typingKey.code.toLowerCase()} ${highlightClass}`}
    >
      {typingKey?.value}
    </div>
  );
};

export default KeyEntity;
