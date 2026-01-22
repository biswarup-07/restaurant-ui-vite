import React, { useRef, useEffect ,useState }from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scroll = (direction) => {
    const { current } = scrollRef;
    
    useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  }, 2000);

  return () => clearInterval(interval);
}, []);

   useEffect(() => {
  const interval = setInterval(() => {
    if (scrollRef.current) {
      const slideWidth = scrollRef.current.clientWidth;
      const maxScroll =
        scrollRef.current.scrollWidth - slideWidth;

      if (scrollRef.current.scrollLeft >= maxScroll) {
        scrollRef.current.scrollLeft = 0;
      } else {
        scrollRef.current.scrollLeft += slideWidth;
      }
    }
  }, 2000);

  return () => clearInterval(interval);
}, []);



    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}> A visual journey through our signature dishes, crafted with love,
  authentic flavors, and the finest ingredients.</p>

    <a href="https://www.instagram.com/"
  target="_blank"
  rel="noreferrer"
  className="custom__button">
        <button type="button" className="custom__button">View More</button> </a>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Gallery;
