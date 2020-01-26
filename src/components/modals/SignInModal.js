import React, { Component } from 'react';
import './SignInModal.css'
import FormButton from '../buttons/FormButton';

class SignInModal extends Component{
    state={
        conidition:false,
    }
    
    render(){
        const handleSubmit=e=>{
            e.preventDefault();
            this.setState({conidition:!this.state.conidition})
        }
        return(
            <div style={styles.container} className={this.state.conidition ? "close" : "open"} >
                <form className="modal" onSubmit={handleSubmit}>
                    <img height="150px" width="150px" src={require('../../images/logo/PNG/CCG2.png')} alt="logo"/>
                    <h2>Sign In</h2>
                    <input type="text" name="user" id="username" placeholder="Username"></input>
                    <input type="text" name="user" id="pass" placeholder="Password"></input>
                    <FormButton label="Continue" type="submit"/>
                </form>
            </div>
        )
    }
}
export default SignInModal;

const styles={
    container:{
        background:'black',
        width:'100%',
        height:'100%',
        opacity:'0.8',
        display:'flex',
    },
    modal:{
        width:'100%',
    }
}