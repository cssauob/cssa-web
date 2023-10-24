
import { Headings, IconScroll } from '../../components';
import { data } from '../../constants';
import './CaseStudies.css';
import { FiArrowUpRight } from 'react-icons/fi'


const CaseStudies = () => {
  return (
    <div className="section-padding" id="use-cases">

      <Headings title="伯明翰新闻" text="看看最近又发生什么大事" />

        <div className="case-studies">
          {data.CaseStudies.map(({ text, link }, index) => (
            <div key={index} className="case-studies-item">
              <p>{text}</p>
              <a href={link} alt="Learn more">了解更多 <FiArrowUpRight /></a>
            </div>
          ))}
        </div>
        
    <IconScroll />
   
      </div>

  )
}

export default CaseStudies