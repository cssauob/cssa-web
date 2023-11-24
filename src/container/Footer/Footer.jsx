
import './Footer.css';
import { images, data } from '../../constants';
import { BsFacebook, BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <div className="row align-items-center">
        <div className="col-md-2 col-12">
          <img src={images.cssalogo} alt="logo" className="img-fixed-size" />
        </div>
        <div className="col-md-8 col-12 ">
          <ul className="navbar-footer">
            {data.Menu.slice(0, -1).map((item, index) => (
              <li key={index}> <a href="#" >{item.text}</a></li>
            ))}
          </ul>
        </div>
        <div className="col-md-2 col-12 text-center text-md-end fs-4"><BsFacebook /> <BsTwitter /></div>
      </div>
      <div className="row">

        <div className="col-md-4 col-12">
          <ul className="info-contact">
            <li> <span>联系我们：</span></li>
            <li>邮箱: cssa@gmail</li>
            <li>电话: 00000000</li>
            <li>地址: Birmingham </li>
          </ul>
        </div>
        <div className="col-md-8 col-12">

          <form className="row form-news">
            <div className="col-lg-6 col-12">
              <input type="email" className="form-control" id="email" placeholder="Email" />
            </div>
            <div className="col-lg-6 col-12 mt-3 mt-lg-0">
              <button type="submit" className="btn-positivus w-100">Subscribe to news</button>
            </div>
          </form>

        </div>

        <div className="rights">
          <p>版权所有 © UOB伯大中国学生会</p>
          <p><a href="#" alt="Privacy Policy">隐私政策</a></p>

        </div>
      </div>
    </footer>
  )
}

export default Footer