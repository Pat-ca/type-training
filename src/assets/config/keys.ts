const KEYS = [
  { id: 1, code: 'Escape', value: 'Escape', row: 0 },
  { id: 2, code: 'F1', value: 'F1', row: 0 },
  { id: 3, code: 'F2', value: 'F2', row: 0 },
  { id: 4, code: 'F3', value: 'F3', row: 0 },
  { id: 5, code: 'F4', value: 'F4', row: 0 },
  { id: 6, code: 'F5', value: 'F5', row: 0 },
  { id: 7, code: 'F6', value: 'F6', row: 0 },
  { id: 8, code: 'F7', value: 'F7', row: 0 },
  { id: 9, code: 'F8', value: 'F8', row: 0 },
  { id: 10, code: 'F9', value: 'F9', row: 0 },
  { id: 11, code: 'F10', value: 'F10', row: 0 },
  { id: 12, code: 'F11', value: 'F11', row: 0 },
  { id: 13, code: 'F12', value: 'F12', row: 0 },
  { id: 14, code: 'Backquote', value: '`', shift: '~', row: 1 },
  { id: 15, code: 'Digit1', value: '1', shift: '!', row: 1 },
  { id: 16, code: 'Digit2', value: '2', shift: '@', row: 1 },
  { id: 17, code: 'Digit3', value: '3', shift: '#', row: 1 },
  { id: 18, code: 'Digit4', value: '4', shift: '$', row: 1 },
  { id: 19, code: 'Digit5', value: '5', shift: '%', row: 1 },
  { id: 20, code: 'Digit6', value: '6', shift: '^', row: 1 },
  { id: 21, code: 'Digit7', value: '7', shift: '&', row: 1 },
  { id: 22, code: 'Digit8', value: '8', shift: '*', row: 1 },
  { id: 23, code: 'Digit9', value: '9', shift: '(', row: 1 },
  { id: 24, code: 'Digit0', value: '0', shift: ')', row: 1 },
  { id: 25, code: 'Minus', value: '-', shift: '_', row: 1 },
  { id: 26, code: 'Equal', value: '=', shift: '+', row: 1 },
  { id: 27, code: 'Backspace', value: 'Back', row: 1 },
  { id: 28, code: 'Tab', value: 'Tab', row: 2 },
  { id: 29, code: 'KeyQ', value: 'Q', row: 2 },
  { id: 30, code: 'KeyW', value: 'W', row: 2 },
  { id: 31, code: 'KeyE', value: 'E', row: 2 },
  { id: 32, code: 'KeyR', value: 'R', row: 2 },
  { id: 33, code: 'KeyT', value: 'T', row: 2 },
  { id: 34, code: 'KeyY', value: 'Y', row: 2 },
  { id: 35, code: 'KeyU', value: 'U', row: 2 },
  { id: 36, code: 'KeyI', value: 'I', row: 2 },
  { id: 37, code: 'KeyO', value: 'O', row: 2 },
  { id: 38, code: 'KeyP', value: 'P', row: 2 },
  { id: 39, code: 'BracketLeft', value: '[', shift: '{', row: 2 },
  { id: 40, code: 'BracketRight', value: ']', shift: '}', row: 2 },
  { id: 41, code: 'Backslash', value: '\\', shift: '|', row: 2 },
  { id: 42, code: 'CapsLock', value: 'Caps', row: 3 },
  { id: 43, code: 'KeyA', value: 'A', row: 3 },
  { id: 44, code: 'KeyS', value: 'S', row: 3 },
  { id: 45, code: 'KeyD', value: 'D', row: 3 },
  { id: 46, code: 'KeyF', value: 'F', row: 3 },
  { id: 47, code: 'KeyG', value: 'G', row: 3 },
  { id: 48, code: 'KeyH', value: 'H', row: 3 },
  { id: 49, code: 'KeyJ', value: 'J', row: 3 },
  { id: 50, code: 'KeyK', value: 'K', row: 3 },
  { id: 51, code: 'KeyL', value: 'L', row: 3 },
  { id: 52, code: 'Semicolon', value: ';', shift: ':', row: 3 },
  { id: 53, code: 'Quote', value: "'", shift: '"', row: 3 },
  { id: 54, code: 'Enter', value: 'Enter', row: 3 },
  { id: 55, code: 'ShiftLeft', value: 'Shift', row: 4 },
  { id: 56, code: 'KeyZ', value: 'Z', row: 4 },
  { id: 57, code: 'KeyX', value: 'X', row: 4 },
  { id: 58, code: 'KeyC', value: 'C', row: 4 },
  { id: 59, code: 'KeyV', value: 'V', row: 4 },
  { id: 60, code: 'KeyB', value: 'B', row: 4 },
  { id: 61, code: 'KeyN', value: 'N', row: 4 },
  { id: 62, code: 'KeyM', value: 'M', row: 4 },
  { id: 63, code: 'Comma', value: ',', shift: '<', row: 4 },
  { id: 64, code: 'Period', value: '.', shift: '>', row: 4 },
  { id: 65, code: 'Slash', value: '/', shift: '?', row: 4 },
  { id: 66, code: 'ShiftRight', value: 'Shift', row: 4 },
  { id: 67, code: 'ControlLeft', value: 'Ctrl', row: 5 },
  { id: 68, code: 'empty_left', value: '', row: 5 },
  { id: 69, code: 'AltLeft', value: 'Alt', row: 5 },
  { id: 70, code: 'Space', value: ' ', row: 5 },
  { id: 71, code: 'AltRight', value: 'Alt', row: 5 },
  { id: 72, code: 'empty_right', value: '', row: 5 },
  { id: 73, code: 'ControlRight', value: 'Ctrl', row: 5 },
];

export default KEYS;
