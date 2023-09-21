import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { CiLocationOn } from 'react-icons/ci'
import { BsTelephone } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

const sizeIcon = 40;
const ContactUs = () => {
    return (
        <section id="contact-us" className="wow fadeInUpBig">
            <Container >
                <Container className="header-section">
                    <h1>CONTACT US</h1>
                    <p>Sed tamen tempor magna labore dolore dolor sint tempor duis magna elit veniam aliqua esse amet veniam enim export quid quid veniam aliqua eram noster malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore</p>
                </Container>
                <Container className="items">
                    <Row>
                        <Col className="col-lg-4 col-md-4 col-12">
                            <div className="item">
                                <CiLocationOn size={sizeIcon} />
                                <h3>ADDRESS</h3>
                                <p>Bole Grace Plaza, Addis Ababa</p>
                            </div>
                        </Col>
                        <Col className="col-lg-4 col-md-4 col-12">
                            <div className="item">
                                <BsTelephone size={sizeIcon} />
                                <h3>PHONE NUMBER</h3>
                                <a href="/" ><p>09 11 06 94 28</p></a>
                            </div>
                        </Col>
                        <Col className="col-lg-4 col-md-4 col-12">
                            <div className="item">
                                <AiOutlineMail size={sizeIcon} />
                                <h3>EMAIL</h3>

                                <a href="/" ><p>Info@Shamalimited.com</p></a>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <iframe
  title="Share Location"
  src="https://www.google.com/maps/place/Grace+Plaza+%7C+Atlas+%7C+%E1%8C%8D%E1%88%AC%E1%88%B5+%E1%8D%95%E1%88%8B%E1%8B%9B+%7C+%E1%8A%A0%E1%89%B5%E1%88%8B%E1%88%B5/@9.0013823,38.782167,15z/data=!4m6!3m5!1s0x164b85ca607f7303:0x3a0a3036e2d86d34!8m2!3d9.0013823!4d38.782167!16s%2Fg%2F11gtc0zq69?entry=ttu"
  allowFullScreen
  aria-hidden="false"
  tabIndex="0"
></iframe>

<Form className="form" action="mailto:Info@Shamalimited.com" method="post" encType="text/plain">
  <Form.Group controlId="formBasicEmails">
    <Row>
      <Col><Form.Control type="text" placeholder="Your Name" name="name" /></Col>
      <Col><Form.Control type="email" placeholder="Your Email" name="email" /></Col>
    </Row>
    <Row>
      <Col><Form.Control type="text" placeholder="Subject" name="subject" /></Col>
    </Row>
    <Row>
      <Col><Form.Control as="textarea" rows={5} placeholder="Message" name="message" /></Col>
    </Row>
    <Row>
      <Col className="d-flex justify-content-center">
        <Button variant="primary" type="submit">
          Send Message
        </Button>
      </Col>
    </Row>
  </Form.Group>
</Form>

            </Container >
        </section>
    )

}
export default ContactUs