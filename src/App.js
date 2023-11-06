import logo from './logo.svg';
import './App.css';
import { SliderData } from './SliderData';
import ImageSliders from './ImageSliders';


function App() {
  return <ImageSliders slides={SliderData} />;
}

export default App;
