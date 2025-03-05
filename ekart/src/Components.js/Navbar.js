import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoMdDownload } from "react-icons/io";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Popover from 'react-bootstrap/Popover';
import { IoMdCall } from "react-icons/io";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { IoLanguageSharp } from "react-icons/io5";
import Eng from './Eng.png'
import Ger from './Ger.png'
function OffcanvasExample() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);
  
  return (
    <>
      {[ 'md', ].map((expand) => (
        <Navbar key={expand} expand={expand} className=" mb-3">
          <Container fluid>
          <Button variant="primary" onClick={toggleShow} className="me-2 btn-light">
         <h1> <IoReorderThreeOutline /></h1>
      </Button>
      <Offcanvas show={show} onHide={handleClose} scroll={true}  backdrop={true}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body >
         
     <div >
          <div className='offcanvas12'><IoMdCall className='mx-2 my-3'/>About Us</div>
          <div className='offcanvas12'><IoMdCall className='mx-2 my-3'/>Terms And Conditions</div>
          <div className='offcanvas12'><IoMdCall className='mx-2 my-3'/>Privacy Policy</div>
          <div className='offcanvas12'><IoMdCall className='mx-2 my-3'/>Imprint</div>
          <div className='offcanvas12'><IoMdCall className='mx-2 my-3'/>Alleric Info</div>
          <div className='offcanvas12'><IoMdCall className='mx-2 my-3'/>Data Production</div>
     </div>
          
        </Offcanvas.Body>
      </Offcanvas>
            <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 gap-3">
               
                  {['bottom'].map((placement) => (
        <OverlayTrigger
          key={placement}
           
          placement={placement}
          overlay={

            <Popover id={`popover-positioned-${placement}`}>
            <Popover.Body >
            <div className='text-center'>Menu card caption</div>
            <hr></hr>
              <div className='text-center'>Test</div>
              <hr></hr>
              <div><div className='text-center'> Menu</div></div>
            </Popover.Body>
          </Popover>
          }
        >
          <Button className=' navbar-button'> <Nav.Link href="#action1" className='text-black ab'><IoMdDownload className='mx-2' />Download Menu</Nav.Link></Button>
        </OverlayTrigger>
      ))}
      {['bottom'].map((placement) => (
        <OverlayTrigger
          key={placement}
          placement={placement}
          overlay={
            <Popover id={`popover-positioned-${placement}`}>
            <Popover.Body >
            <div className='text-center'>Menu card caption</div>
            <hr></hr>
              <div className='text-center'>Test</div>
              <hr></hr>
              <div><div className='text-center'> Menu</div></div>
            </Popover.Body>
          </Popover>
          }
        >
          <Button className='navbar-button'> <Nav.Link href="#action1" className='text-black ab'><BsBookmarkCheckFill className='mx-2' />Table Booking</Nav.Link></Button>
        </OverlayTrigger>
      ))}
      
               <OverlayTrigger
      placement="bottom"
      overlay={<Popover id={`popover-positioned-bottom`}>
      <Popover.Body >
      <div className='text-center'>English <img src={Eng} className='rounded'></img></div>
      <hr></hr>
        <div className='text-center'>German  <img src={Ger} className='rounded'></img></div>
        
      </Popover.Body>
    </Popover>}
    >
      {({ ref, ...triggerHandler }) => (
        <Button
        
          {...triggerHandler}
          className="d-inline-flex align-items-center navbar-button"
        ><span className="ms-1 mx-2">Language</span>
            <IoLanguageSharp ref={ref}/>
          
        </Button>
      )}
    </OverlayTrigger>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;