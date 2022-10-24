import './App.css';

import './styles/commons/reset.css'
import './styles/fonts.css'
import './styles/imports.scss'

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
