import { useEffect, useRef, useState } from 'react';
import { Container, Nav, Navbar, Modal } from 'react-bootstrap';
import { Link, animateScroll } from 'react-scroll';
import { PiCaretUpBold } from 'react-icons/pi';

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);
  const floatingIconHome = useRef(null);
  const navBar = useRef(null);

  useEffect(() => {
    const handleOnScrollTop = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > navBar.current.offsetHeight) {
        floatingIconHome.current.classList.add('floating-icon-home-visible');
      } else {
        floatingIconHome.current.classList.remove('floating-icon-home-visible');
      }
    };

    window.addEventListener('scroll', handleOnScrollTop);

    return () => {
      window.removeEventListener('scroll', handleOnScrollTop);
    };
  }, []);

  const propLink = {
    activeClass: 'nav-link active',
    spy: true,
    smooth: 'easeInOutQuint',
    offset: -100,
    duration: 100,
  };

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <section id="navbar" className="wow fadeInLeft">
        <Navbar className="navbar-contents" expand="lg" expanded={false}>
          <Container>
            <Navbar.Brand href="#top-bar">
              Shama<span>Limited</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleModalOpen} />
            <Navbar.Collapse id="basic-navbar-nav">
              <Container className="navbar-detail">
                <Nav defaultActiveKey="top-bar">
                  <Link {...propLink} to="top-bar" className="defaultActiveKey nav-link active">
                    Home
                  </Link>
                  <Link {...propLink} to="profile">
                    About Us
                  </Link>
                  <Link {...propLink} to="services">
                    Services
                  </Link>
                  <Link {...propLink} to="portfolio">
                    Portfolio
                  </Link>
                  <Link {...propLink} to="contact-us">
                    Contact
                  </Link>
                </Nav>
              </Container>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>

      <Modal show={showModal} onHide={handleModalClose} className="modal-navbar-dialog">
        <Modal.Header closeButton>
          <Modal.Title>
            <span className="first-span-modal">Reve</span>
            <span className="last-span-modal">al</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Link {...propLink} to="top-bar" onClick={handleModalClose}>
            Home
          </Link>
          <Link {...propLink} to="profile" onClick={handleModalClose}>
            About Us
          </Link>
          <Link {...propLink} to="services" onClick={handleModalClose}>
            Services
          </Link>
          <Link {...propLink} to="portfolio" onClick={handleModalClose}>
            Portfolio
          </Link>
          <Link {...propLink} to="contact-us" onClick={handleModalClose}>
            Contact
          </Link>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <div className="floating-icon-home" ref={floatingIconHome}>
        <Link to="#" onClick={() => animateScroll.scrollToTop({ duration: 100 })}>
          <PiCaretUpBold />
        </Link>
      </div>
    </>
  );
};

export default NavBar;
