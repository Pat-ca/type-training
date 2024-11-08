import { createContext, useEffect, useRef, useState } from "react";
import keydownSound from "../../assets/audios/keydown.mp3";
import keyupSound from "../../assets/audios/keyup.mp3";
import { KeyContextType } from "../../models/key-context-type";
import { KeyDownUp } from "../../models/key-down-up";
import { Props } from "../../models/props";

const defaultContextValue: KeyContextType = {
  lastKeyDownUp: null,
};

const KeyContext = createContext(defaultContextValue);

function KeyProvider({ children }: Props) {
  const [lastKeyDownUp, setLastKeyDownUp] = useState<KeyDownUp | null>(null);
  const keydownSoundRef = useRef(new Audio(keydownSound));
  const keyupSoundRef = useRef(new Audio(keyupSound));

  const playSound = (isKeydown: boolean) => {
    if (isKeydown) {
      keydownSoundRef.current.play();
    } else {
      keyupSoundRef.current.play();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.repeat) {
        return; // Ignore repeat events
      }
      setLastKeyDownUp({ down: event.code, up: "" });
      //event.preventDefault();
      playSound(true);
    };
    const handleKeyUp = (event: KeyboardEvent) => {
      setLastKeyDownUp({ down: "", up: event.code });
      //event.preventDefault();
      playSound(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <>
      <KeyContext.Provider value={{ lastKeyDownUp }}>
        {children}
      </KeyContext.Provider>
      <audio preload="auto" ref={keydownSoundRef} src={keydownSound} hidden />
      <audio preload="auto" ref={keyupSoundRef} src={keyupSound} hidden />
    </>
  );
}

export default KeyProvider;
export { KeyContext };
