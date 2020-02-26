import React from "react";
import AllEvents from "../AllEvents";
import {API_KEY} from "../tools/Сonstants";


class Login extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            checkLogin: false,
            checkEmail: false,
            checkPassword: false,
            inputEmail: '',
            inputPassword: ''
        };
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.getAdminInformation = this.getAdminInformation.bind(this);
        this.emailValidation = this.emailValidation.bind(this);
    }

    handleChangeEmail = (event) => {
        this.setState({inputEmail: event.target.value});
        this.emailValidation(this.state.inputEmail);
    }

    handleChangePassword = (event) => {
        this.setState({inputPassword: event.target.value});
    }

    getAdminInformation = (event) => {
        let email = event.target.inputEmail.value;
        let password = event.target.inputPassword.value;
    }

    emailValidation = (email) => {
        if (email.includes('@') && email.includes('.')) {
            //this.setState({checkEmail: !this.state.checkEmail});
            let indexOfDote = email.length - email.lastIndexOf('.');
            let indexOfAt = email.lastIndexOf('.') - email.lastIndexOf('@');
            if (indexOfDote >= 1 && indexOfAt >= 1) {
                this.setState({checkEmail: true});
            }
        } else {
            this.setState({checkEmail: false});
        }
    }

    setLogin = () => {
        this.setState({checkLogin: true});
    }

    render() {
        console.log(this.state.inputEmail);
        console.log(this.state.checkEmail);
        if (this.state.checkLogin === false) {
            return (
                <div className="container">
                    <form onSubmit={this.getAdminInformation}>
                        <div className="form-group row justify-content-center">
                            <div className="col-sm-3">

                                <input type="email" className="form-control"
                                       id="inputEmail" placeholder="Email"
                                       value={this.state.inputEmail}
                                       onChange={this.handleChangeEmail}
                                       name="inputEmail"/>
                            </div>
                        </div>
                        <div className="form-group row justify-content-center">

                            <div className="col-sm-3">
                                <input type="password" className="form-control" id="inputPassword"
                                       placeholder="Password"
                                       value={this.state.inputPassword}
                                       onChange={this.handleChangePassword}
                                       name="inputPassword"/>
                            </div>

                        </div>
                    </form>
                    <div className="btn">
                        <button onClick={this.setLogin} type="button" className="btn btn-primary" id="sbmtbtn">Login
                        </button>
                    </div>
                    <div className="link">
                    </div>
                </div>
            )
        }
        if (this.state.checkLogin === true) {
            return (
                <div>
                    <AllEvents/>
                </div>
            )
        }

    }

}

export default Login;