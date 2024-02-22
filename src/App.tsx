import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import image1 from './assets/image1.png';
import image2 from './assets/image2.png';
import image3 from './assets/image3.png';

function App() {
  return (
    <div className="App">
      <Splide
        options={{
          rewind: true,
          width: 800,
          gap: '1rem',
        }}
      >
        <SplideSlide>
          <img src={image1} alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img src={image2} alt="Image 2" />
        </SplideSlide>
        <SplideSlide>
          <img src={image3} alt="Image 3" />
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default App;
