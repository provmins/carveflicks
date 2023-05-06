import Footer from './components/footer/Footer';
import GlobalFonts from './styles/GlobalFonts';
import GlobalStyles from './styles/GlobalStyles';
import { ROUTES } from './routes/routes';
import { useSelector } from 'react-redux';
import { Loader } from './components/loader/Loader';

function App() {
  const open = useSelector(state => state.popup.open);
  const loader = useSelector(state => state.loader.loading);
  const slideOpen = useSelector(state => state.popup.slide.open);

  return (
    <>
      {loader && <Loader />}
      <GlobalStyles popup={open} loader={loader} slide={slideOpen} />
      <GlobalFonts />
      {ROUTES()}
    </>
  );
}

export default App;
