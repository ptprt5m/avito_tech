import './App.css';

import './styles/commons/reset.css'
import './styles/fonts.css'
import './styles/imports.scss'

import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import HeaderContainer from "./components/Header/HeaderContainer";

function App() {
  return (
    <div className='App'>
      <HeaderContainer />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
