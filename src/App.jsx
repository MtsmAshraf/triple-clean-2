import './App.css';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import { Hero } from './component/Hero/Hero';
import MainForm from './component/MainForm/MainForm';
import { Provider } from 'react-redux';
import store from './store/store';
import Loader from './component/Loader/Loader';
import topLeftBg from "./assests/logo-bg-top-left.png"
import bottomRightBg from "./assests/logo-bottom-right-bg.png"
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Loader />
        <div className="bg top-left">
            <img src={topLeftBg} alt="top left bg" />
        </div>
        {/* <div className="bg bottom-right">
            <img src={bottomRightBg} alt="bottom right bg" />
        </div> */}
        <div className="overlay"></div>
        <Header />
        <Hero />
        {/* <div className="container"> */}
          <MainForm>
          </MainForm>
        {/* </div> */}
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
