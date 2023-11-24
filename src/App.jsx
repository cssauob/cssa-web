import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Slider, CaseStudies, Contact, Footer, Hero, Services, Team, CTA,PaginationList} from './container';
import { Menu,ArticlePage } from './components';
import PropTypes from 'prop-types';
import {AdminDashboard} from './admin'



function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/home" element={<Layout><HomePage /></Layout>} />
        <Route path="/articles/:articleId" element={<Layout><ArticlePage /></Layout>} />
        <Route path="/activity" element={<Layout><Activities /></Layout>} />
        <Route path="/admin" element={<ManagePage />} />
        <Route path="*" element={<Layout><NotFound /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}
// 前台通用布局
const Layout = ({ children }) => {
  return (
    <div className="container">
      <Menu />
      {children}
      <Footer />
    </div>
  );
};
Layout.propTypes = {
  children: PropTypes.node
};


const HomePage = () => {
  return (
  <>
      <Hero />
      <Services />
      <CTA />
      <CaseStudies />
      <Team />
      <Slider />
      <Contact />
</>
  
  );
}
const NotFound = () => {
  return <div>你来到了没有知识的荒原</div>
}

const Activities=()=>{

  return (
  <PaginationList/>
  );
}


const ManagePage = () => {
  return (
  <>

    <AdminDashboard/>
    </>
  );
}

export default App;

