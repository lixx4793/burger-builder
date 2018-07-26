import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axios-order';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
    state = {
        orderForm: {
          name: {
            elementType: 'input',
            elementConfig: {
              type: 'text',
              placeholder: 'Your Name'
            },
            value: ''
          },
          street: {
            elementType: 'input',
            elementConfig: {
              type: 'text',
              placeholder: 'Street'
            },
            value: ''
          },
          zipCode: {
            elementType: 'input',
            elementConfig: {
              type: 'text',
              placeholder: 'Zip Code'
            },
            value: ''
          },
          country: {
            elementType: 'input',
            elementConfig: {
              type: 'email',
              placeholder: 'Your Mail'
            },
            value: ''
          },
          deliveryMethod: {
            elementType: 'select',
            elementConfig: {
              options: [
                {value: 'faster', displayValue: 'Fastest'},
                {value: 'cheapest', displayValue: 'Cheapest'}
              ]
            },
            value: ''
          }
        },
        loading: false
    }

    orderHandler = ( event ) => {
        event.preventDefault();
        this.setState( { loading: true } );
        let formData = {};
          for(let ele in this.state.orderForm)
          {
            formData[ele] = this.state.orderForm[ele].value;
          }
        const order = {
            ingredient: this.props.ings,
            price: this.props.price,
            orderData: formData
        }
        axios.post( '/orders.json', order )
            .then( response => {
                this.setState( { loading: false } );
                this.props.history.push('/');
            } )
            .catch( error => {
                this.setState( { loading: false } );
            } );
    }

    changeHandler = (event, id) => {
      const formCpy = {...this.state.orderForm};
      // Must have deep copy which no obj with the obj
      const eleCpy = {...formCpy[id]};
      eleCpy.value = event.target.value;
      formCpy[id] = eleCpy;
      this.setState({orderForm: formCpy});

    }

    render () {
      const formArray = [];
      for(let key in this.state.orderForm)
      {
        formArray.push({
          id: key,
          config: this.state.orderForm[key]
        });
      }


        let form = (
            <form onSubmit= {this.orderHandler}>
                {formArray.map(ele => (
                  <Input
                  key={ele.id}
                    elementType ={ele.config.elementType}
                    elementConfig = {ele.config.elementConfig}
                    value={ele.config.value}
                    changed={(event) => this.changeHandler(event, ele.id)}
                    />
                ))}
                <Button type="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if ( this.state.loading ) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

const stateToProps = state => {
    return {
      ings: state.ingredient,
      price: state.totalPrice
    }
}

export default connect(stateToProps)(withRouter(ContactData));
