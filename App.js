import { Button, Card } from "react-bootstrap";
import logo from './logo.png';

function App() {
  return (
      <Card style={{ width: '18rem' }}>
      <Card.Img src={logo} />
      <Card.Body>
        <input type="text">First Name</input>
        <input type="text">Last Name</input>
        <Button>Submit</Button>
      </Card.Body>
    </Card>
  );
}

export default App;
