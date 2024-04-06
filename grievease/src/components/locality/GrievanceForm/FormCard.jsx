import { Component } from 'react';
import FormComponent from './Form';
import './FormCard.css'
class CardComponent extends Component {
  render() {
    return (
      <div className="cardG">
        <div className="card-headerG text-3xl font-bold text-orange-900 mb-4 items-center justify-center' text-center">Grievance  Form</div>
        <div className="card-bodyG">
          <FormComponent />
        </div>
      </div>
    );
  }
}

export default CardComponent;
