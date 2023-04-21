import Header from './components/header/Header';
import GlobalFonts from './styles/GlobalFonts';
import GlobalStyles from './styles/GlobalStyles';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <GlobalFonts />
      <Header />
    </Provider>
  );
}

export default App;
