import React,{useState} from 'react';
import CardDeck from "react-bootstrap/Card";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.css';
import Seatbooking from './Seatbooking';
import MyCarousal from './slides';

 

export const HallList = () => {
  const [view, setView] = useState("HallList")
  
    return (
      <div>
        {view === "HallList" ?(
          
    <CardDeck>
      <div className="App-header">
          <h2>Welcome to Movie Booking Zone</h2>
        </div>
      <MyCarousal/>
    <Card>
      <Card.Img variant="top" src="PVR.webp" className="h-25 w-25" />
      <Card.Body>
        <Card.Title>PVR Icon </Card.Title>
        <Card.Text>
          Bahubali : The Beginning
        </Card.Text>
        <Button onClick={()=>setView("Seatbooking")}>Book the Ticket</Button>
        <Card.Text>
        Bahubali : The Conclusion
        </Card.Text>
        <Button onClick={()=>setView("Seatbooking")}>Book the Ticket</Button>
        <Card.Text>
        Avengers:Infinity War
        </Card.Text>
        <Button onClick={()=>setView("Seatbooking")}>Book the Ticket</Button>
      </Card.Body>
      <Card.Footer>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src="images1.webp" className="h-25 w-25" />
      <Card.Body>
        <Card.Title>INOX</Card.Title>
        <Card.Text>
        Bahubali : The Conclusion
        </Card.Text>
        <Button onClick={()=>setView("Seatbooking")}>Book the Ticket</Button>
        <Card.Text>
        Snowwhite and the huntsmen
        </Card.Text>
        <Button onClick={()=>setView("Seatbooking")}>Book the Ticket</Button>
        <Card.Text>
        Avengers: Endgame
        </Card.Text>
        <Button onClick={()=>setView("Seatbooking")}>Book the Ticket</Button>
      </Card.Body>
      <Card.Footer>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src="PVRgold.webp" className="h-25 w-25" />
      <Card.Body>
        <Card.Title>PVR Gold</Card.Title>
        <Card.Text>
          Avengers:Infinity War
        </Card.Text>
        <Button onClick={()=>setView("Seatbooking")}>Book the Ticket</Button>
        <Card.Text>
          Stuart Little
        </Card.Text>
        <Button onClick={()=>setView("Seatbooking")}>Book the Ticket</Button>
        <Card.Text>
          Jungle BOOK 
        </Card.Text>
        <Button onClick={()=>setView("Seatbooking")}>Book the Ticket</Button>
      </Card.Body>
      <Card.Footer>
      </Card.Footer>
    </Card>
  </CardDeck>):null}

  {view === "Seatbooking" ? (
    <div>
      <Seatbooking/>
    </div>
  ):null}
  </div>
    );
  }

