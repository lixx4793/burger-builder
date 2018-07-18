import React, {Component} from 'react';
import HocWrapper from './HocWrapper';
import Modal from '../components/UI/Modal/Modal';


const WithErrorHandler = (WrapperContent, axios) => {
  return class extends Component {
    state = {
      error: null
    }

    //  This will run before render
    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use(req => {
          this.setState({error: null});
          return req;
      })
      this.resInterceptor = axios.interceptors.response.use (res => res, error => {
        this.setState({error: error});
      });
    }

    //  This will be called when a element is never going to be used,
    //  remove it from class to prevent memory leak
    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    errorConfirmed = () => {
      this.setState({error: null});
    }

    render() {
      return (
        <HocWrapper>
          <Modal
            show = {this.state.error}
            canclePurchase = {this.errorConfirmed}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrapperContent {...this.props} />
        </HocWrapper>
      );
    }
  }
}

export default WithErrorHandler;
