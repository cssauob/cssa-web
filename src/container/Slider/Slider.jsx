
import { Headings } from '../../components';
import { data } from '../../constants'; 
import Carousel from 'react-bootstrap/Carousel';
import './Slider.css';


const Slider= () => {
  return (
    <div className="section-padding" id="testimonials">
         <Headings title="自动左右滑块展示板" text="可能展示广告或者活动合作方" />


<div className="carousel-bg">
  <Carousel>
    {data.Slider.map((item, index) => (
      <Carousel.Item key={index} className="carousel-box" interval={6000}>
        <Carousel.Caption>
          <p className="speech-bubble">{item.tagline}</p>
          <div className="carousel-name">{item.name}</div>
          <div className="carousel-position">{item.statement}</div>
        </Carousel.Caption>
      </Carousel.Item>
    ))}
  </Carousel>
</div>
  

      </div>
  )
}

export default Slider