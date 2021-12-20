import Header from '../components/Header/Header';
import Carousel from '../components/Carousel/Carousel';
import HomeStory from '../components/HomeStory/HomeStory';
import Footer from '../components/Footer/Footer';
import './App.scss';



function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <HomeStory />
      <Footer />
    </div>
  );
}

export default App;