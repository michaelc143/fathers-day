import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [images, setImages] = useState([]);

  useEffect(() => {
    // Create a context to load all images from the fathersDayPNGs directory
    const importAll = (r) => r.keys().map(r);
    const images = importAll(require.context('./fathersDayPNGs', false, /\.(png|jpe?g|svg)$/));
    setImages(images);
  }, []);

  return (
    <div className='flex  align-center justify-center h-screen flex-wrap'>
      <h1 className='text-3xl font-bold my-4 text-stone-50'>Happy Fathers Day Dad!</h1>
      <div className='flex flex-wrap justify-center'>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Father's Day ${index}`} className='m-2 w-64 h-64 object-cover' />
        ))}
      </div>
    </div>
  );
}

export default App;
