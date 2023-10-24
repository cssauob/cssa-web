import { data, images } from '../../constants';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Menu.css';


const Menu = () => {
    return (
  
           <Navbar collapseOnSelect expand="lg" bg="ligth" variant="ligth">
                <Container>
                   {/* Navbar组件:  当屏幕小于指定的断点（在这种情况下是'lg'，代表大屏幕）时，菜单项会折叠，
                   并可以通过点击Navbar.Toggle按钮来切换显示/隐藏。
                   当屏幕大于或等于该断点时，Navbar.Collapse中的内容会始终可见。*/}
                    <Navbar.Brand href="#home"> 
                  
                    <img src={images.cssaTrans2} alt="cssaTrans" className="cssa-logo-img" />
                  
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav>
                            {data.Menu.map((item, index) => (
                                <Nav.Link  key={index} href={item.link}>{item.text}</Nav.Link>
                            ))}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

     
    )
}

export default Menu