import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import GlobalFonts from './styles/GlobalFonts';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <GlobalFonts />
      <Header />
    </BrowserRouter>
  );
}

export default App;
