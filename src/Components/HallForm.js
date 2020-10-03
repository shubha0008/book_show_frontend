import React, { Component } from 'react';
import App from './App';
import MyCarousal from "./slides";
import '../stylesheets/Moviehall.css';
import Seatbooking from './Seatbooking';
import HallList from './HallList';
import 'bootstrap/dist/css/bootstrap.css';




export class HallForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hallSeat: "",
      movie: "",
      au: "U",
      genre: "",
      format: "2d",
      hall: "",
      book: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
      book:false
    });
  }

  handleSubmit= (event) =>{
    event.preventDefault();
    this.setState({book: true});
  }

  render(){
    return(
      <div>
        <div>
          <App />
        </div>
        <div id="home">
         <MyCarousal/>
        </div>
        <div >
         <HallList/>
        </div>



        <div >
          
        {this.state.book ? <Seatbooking /> : null }
      </div>
    </div>
    )
  }
}