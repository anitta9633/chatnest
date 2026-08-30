import Carousel from 'react-bootstrap/Carousel';
import slide00001 from "../assets/slide00001.jpg"
import slide00002 from "../assets/slide00002.jpg"
import slide00003 from "../assets/slide00003.jpg"
import { Image } from 'react-bootstrap';

function HomeCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image src={slide00001} alt="" className='w-100'/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={slide00002} alt="" className='w-100'/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <Image src={slide00003} alt="" className='w-100'/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel ;