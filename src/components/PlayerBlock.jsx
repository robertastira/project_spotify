import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Col, Row} from 'react-bootstrap';

function SpotifyBrandExample() {
    return (
          <Container fluid className="bg-body-dark mt-4">
            <Row className='justify-content-between'>
                <Col md={3} lg={3}><Navbar.Brand href="#home">Titolo Canzone - Artista</Navbar.Brand></Col>
                <Col md={9} lg={9} className="d-flex justify-content-center">
                <img src='repeat.png' alt="repeat" width={20} height={15} className='me-4'/>
                <img src='prev.png' alt="prev" width={20} height={15} className='me-4'/>
                <img src='play.png' alt="play" width={20} height={15} className='me-4'/>
                <img src='next.png' alt="next" width={20} height={15} className='me-4'/>
                <img src='shuffle.png' alt="shuffle" width={20} height={15} className='me-4'/>
                </Col>
            </Row>
          </Container>
        );
        }

        export default SpotifyBrandExample