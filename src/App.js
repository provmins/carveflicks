import Header from './components/header/Header';
import GlobalFonts from './styles/GlobalFonts';
import GlobalStyles from './styles/GlobalStyles';
import { ROUTES } from './routes/routes';
import { useSelector } from 'react-redux';

function App() {
  const open = useSelector(state => state.popup.open);
  return (
    <>
      <GlobalStyles popup={open} />
      <GlobalFonts />
      <Header />
      {ROUTES()}
    </>
  );
}

export default App;
