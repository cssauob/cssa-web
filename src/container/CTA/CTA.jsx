
import './CTA.css';
import { images } from '../../constants';

const CTA = () => {
  return (
    <div className="section-padding">
<div className="row cta">
    <div className="col-lg-8 col-12">
<h3>活动日历</h3>

<p className="pt-2 pb-4">可以链接到活动的时间表？</p>
<button className="btn-positivus">了解更多</button>
</div>
<div className="col-lg-4 d-lg-flex d-none">
<img src={images.thingshappen} alt="thingshappen" />
</div>
    </div>
    </div>
  )
}

export default CTA;