import React, {Component} from 'react';
import axios from 'axios';
import {constants} from '../../constants';
import './addCard.css';

interface State {
  [key:string]: any
}

interface Props {
  updateCardList: Function
}

class AddCard extends Component<Props, State> {
  constructor(props:any) {
    super(props);
    this.state = {
      name: '',
      cardNumber: '',
      limit: '',
      isError: false,
      errorMessage: '',
    };
  }
  private formFields = [{
    label: "Name",
    name: "name",
    required: true,
    type: "text",
    pattern: "^[a-zA-Z][a-zA-Z ]+$"
  }, {
    label: "Card number",
    name: "cardNumber",
    required: true,
    type: "text",
    pattern: "^[1-9]{1}[0-9]{9,15}$"
  }, {
    label: "Limit",
    name: "limit",
    required: true,
    type: "text",
    pattern: "^[0-9]+$"
  }];

  private payload:{[k:string]:any} = {};

  public addCard = (ev:any):void => {
    ev.preventDefault();
    const createPayload = (field:any):void => {
      switch(field.name) {
        case 'name': {
          this.payload['name'] = this.state.name;
          break;
        }
        case 'cardNumber': {
          this.payload['cardNumber'] = this.state.cardNumber;
          break;
        }
        case 'limit': {
          this.payload['limit'] = this.state.limit;
          break;
        }
      }
    };
    this.formFields.forEach((field) => {
      createPayload(field);
    });
    
    axios.post(
      `${constants.API_URL}/api/addCard`,
      this.payload
    ).then((response) => {
      if(response.data.success) {
        this.props.updateCardList(response.data.data);
        this.setState({
          name: '',
          cardNumber: '',
          limit: '',
          errorMessage: '',
          isError: false
        });
      } else {
        this.setState({
          name: '',
          cardNumber: '',
          limit: '',
          isError: true,
          errorMessage: response.data.error
        });
      }
    });
  }

  public handleChange = (ev:any, name:string):void => {
    switch(name) {
      case 'name': {
        this.setState({
          name: ev.target.value
        });
        break;
      }
      case 'cardNumber': {
        this.setState({
          cardNumber: ev.target.value
        });
        break;
      }
      case 'limit': {
        this.setState({
          limit: ev.target.value
        });
        break;
      }
    }
  }

  render() {
    return(
      <div className="c-component">
        <h2>Add</h2>
        {
          this.state.isError ?
          (<div className="error-message">{this.state.errorMessage}</div>)
          : ''
        }
        <form onSubmit={this.addCard} >
          { this.formFields.map((field, key) => {
            return (
              <div key={key} className="field-row">
                <label htmlFor={`input_${field.name}`}>{field.label}</label>
                <input
                  type={field.type}
                  id={`input_${field.name}`}
                  required={field.required}
                  pattern={field.pattern} 
                  onChange={(ev) => this.handleChange(ev, field.name)}
                  value={this.state[field.name]}
                  />
              </div>
            )
          })}
          <div>
            <button type="submit" className="button button-primary">Add</button>
          </div>
        </form>
      </div>
    )
  }
}

export default AddCard;