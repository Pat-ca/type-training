import { Provider } from 'react-redux';
import './App.scss';
import KeyProvider from './components/keyboard/key-provider';
import Keyboard from './components/keyboard/keyboard';
import TypingArea from './components/typing-area/typing-area';
import store from './store/store';

function App() {
  return (
    <div className="App">
      <header className="header">Typing Practice</header>
      <Provider store={store}>
        <KeyProvider>
          <TypingArea />
          <Keyboard />
        </KeyProvider>
      </Provider>
    </div>
  );
}

export default App;
