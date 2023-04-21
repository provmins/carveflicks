import Header from './components/header/Header';
import GlobalFonts from './styles/GlobalFonts';
import GlobalStyles from './styles/GlobalStyles';
import { Provider } from 'react-redux';
import store from './store/store';
import { ROUTES } from './routes/routes';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <GlobalFonts />
      <Header />
      {ROUTES()}
    </Provider>
  );
}

export default App;
