import 'bootstrap/dist/css/bootstrap.min.css';
import { Slider, CaseStudies, Contact, Footer, Hero,  Services, Team , CTA} from './container';
import { Menu } from './components';




const App = () => (
  <div className="container">
    <Menu />
    <Hero />
    <Services />
    <CTA />
    <CaseStudies />
    
    <Team />
    <Slider/>
    <Contact />
    <Footer />
  </div>
);

export default App;
