import { Headings } from '../../components';
import './Contact.css';
const Contact = () => {
  return (
    <div className="section-padding">
      <Headings title="联系我们" text="Connect with Us！" />

      <div className="contact" id="quote">

        <div className="row">
          <div className="col-md-6 col-12">
            <form>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                <label className="form-check-label" htmlFor="inlineRadio1">Say Hi</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                <label className="form-check-label" htmlFor="inlineRadio2">Get a Quote</label>
              </div>

              <div className="form-group">
                <label>Name*</label>
                <input className="form-control" type="text" placeholder="Name" />
              </div>
              <div className="form-group">
                <label>Email*</label>
                <input className="form-control" type="email" placeholder="Email" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">    Message*</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <button type="submit" className="btn-positivus w-100">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact