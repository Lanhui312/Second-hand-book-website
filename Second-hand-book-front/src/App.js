import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import HomeCarousel from './customer/components/HomeCarousel/HomeCarousel';
import HomePage from './customer/Pages/HomePage/HomePage';

function App() {
  return (
    <div className="">
      <Navigation></Navigation>  
      <div>
        <HomePage></HomePage>
      </div>

    </div>
  );
}

export default App;
