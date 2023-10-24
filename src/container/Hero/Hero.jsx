
import { images } from '../../constants';
// import {IconScroll} from '../../components';
import './Hero.css';


// const logos = ["logo01", "logo02", "logo03", "logo04", "logo05", "logo06"];

const Hero = () => {

  return (
    <div className="hero">
      <div className="row align-items-center">
        <div className="col-md-6 col-12">
          <h1 className="title"> 伯明翰大学中国学生会 </h1>
          <p className="py-4">伯明翰大学中国学生会(ChiSoc)是伯明翰大学Guild of Students所属官方中国社团。我们的宗旨是帮助中国留学生，从生活到学习！</p>
       
        </div>
        {/*  col-md-6: 这意味着在中等大小的设备（如平板电脑）及以上，这个div会占据其父容器12列网格中的6列宽度。  */}
        <div className="col-md-6 col-8 mt-md-2 mt-3">
          <img className="img-fluid" src={images.hero} alt="广告商" />
        </div>
      </div>
      
      {/* <div className="clients">
      {logos.map((logo, index) => (
      <img
        key={index}
        src={images[logo]}
        alt={images[logo]}
      />
    )
    )}
  
      </div> */}
      {/* <IconScroll /> */}
    </div>
    
  )
}

export default Hero