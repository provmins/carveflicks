import Header from './components/header/Header';
import GlobalFonts from './styles/GlobalFonts';
import GlobalStyles from './styles/GlobalStyles';
import { ROUTES } from './routes/routes';

function App() {
  return (
    <>
      <GlobalStyles />
      <GlobalFonts />
      <Header />
      {ROUTES()}
    </>
  );
}

export default App;
