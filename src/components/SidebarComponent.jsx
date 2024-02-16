import { Col, Form, InputGroup, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BookFill, HouseDoorFill } from "react-bootstrap-icons";


function SidebarComponent() {
return (
    <Col md={2} lg={2} className="bg-black min-vh-100 d-flex flex-column justify-content-between">
        <div>
        <p>
        <img src='logo.png' alt="Logo" width={180} height={50} className="mt-3"/>
        </p>



        <p className="mt-4">
        <HouseDoorFill color="lightgrey" size={20}/><span className="text-light ms-2">Home</span>
        </p>
        <p className="mt-4">
        <BookFill color="lightgrey" size={20}/><span className="text-light ms-2">La Mia Libreria</span>
        </p>
        <p className="mt-2 bg-body-tertiary">
        <Form inline>
        <InputGroup className="rounded-1">
          <Form.Control
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon1"
          />
          <InputGroup.Text className="bg-dark text-white">GO</InputGroup.Text>
        </InputGroup>
      </Form>
      </p>
      </div>

      <div className='d-grid gap-2 mb-2'>
        <Button variant="light" className="rounded-4">Sign Up</Button>
        <Button variant="outline-light" className="rounded-4">Login</Button>

      </div>

    </Col>
)
}

export default SidebarComponent;