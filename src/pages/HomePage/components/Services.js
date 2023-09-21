import { Col, Container, Row } from "react-bootstrap"
import { AiOutlineBarChart, AiOutlinePicture, AiFillShopping } from "react-icons/ai"
import { FaMap } from "react-icons/fa"

const sizeIcon = 90;
const iconMaps = {
    'AiOutlineBarChart': AiOutlineBarChart,
    'AiOutlinePicture': AiOutlinePicture,
    'AiFillShopping': AiFillShopping,
    'FaMap': FaMap
}


const Services = (dataJson) => {



    return (
        <section id="services">
            <Container>
                <Container className="header-section">
                    <h1>SERVICES</h1>
                    <p> * QR code : System of digital menu Cutomizable and fast loading ability Imprinted on our own product.<br/>

 * ERP system : Managing respources of the enterprize Making everyresource is accounted for with employee mangment In a digital and fast way.<br/>

 * Powerbank : Portable and highly efficent power bank On the go in a resturant and cafes Built with high engneering and portability.<br/>

 * Gazettaa.com : Is a digital platform incompasing Every thing from news, to carsales, to bidding and more.</p>
                </Container>

                <Container id="services-box">
                    <Row>
                        {
                            dataJson.data.services.map((data) => {
                                const IconComponent = iconMaps[data.icon];
                                return (
                                    <Col key={data.id} className={`col-lg-6 col-md-12 wow ${data.wowClass}`} data-wow-duration={`${data.wowClassDuration}`}>
                                        <Container className="services-box-detail" >
                                            <IconComponent size={sizeIcon} />
                                            <Container>
                                                <h2>{data.title}</h2>
                                                <p>{data.detail}</p>
                                            </Container>
                                        </Container>
                                    </Col>
                                )
                            })
                        }


                    </Row>
                </Container>
            </Container>
        </section>
    )
}
export default Services