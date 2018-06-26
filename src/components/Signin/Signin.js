import React from 'react';
import './Signin.css';

class Signin extends React.Component {
	constructor() {
		super();
		this.state = {
			signInEmail: '',
			signInPassword: ''
		}
	}

	onEmailChange = (event) => {
		this.setState({signInEmail: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value})
	}

	onSubmitSignIn = () => {
		fetch('https://afternoon-eyrie-95139.herokuapp.com/signin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword
			})
		})
		.then(response => response.json())
		.then(user => {
			if (user.id) {
				this.props.loadUser(user);
				this.props.onRouteChange('home');
			}
		}).catch(console.log);
	}

	render() {
		const { onRouteChange } = this.props;
		return(
			<div>
				<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-3 center">
				<main className="pa4 black-80">
				  <div className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f3 fw6 ph0 mh0">Sign In</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input 
				        		className="pa2 input-reset ba bg-transparent hover-bg-grey hover-white w-100" 
				        		type="email" 
				        		name="email-address"  
				        		id="email-address" 
				        		onChange={this.onEmailChange}
				        />
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input 
				        		className="b pa2 input-reset ba bg-transparent hover-bg-grey hover-white w-100" 
				        		type="password" 
				        		name="password"  
				        		id="password" 
				        		onChange={this.onPasswordChange}
				        />
				      </div>
				    </fieldset>
				    <div className="">
				      <input 
				      		onClick={this.onSubmitSignIn}
				      		className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
				      		type="submit" 
				      		value="Sign in" 
				      />
				    </div>
				    <div className="lh-copy mt3">
				      <p onClick={() => onRouteChange('create-user')} href="#0" className="f6 link dim black db pointer">Create User</p>
				    </div>
				  </div>
				</main>
				</article>
				<article className="text-box br3 ba b--black-10 mv4 shadow-3 center">
					<div className="tc pa3">
					<p>Note: this is a sample app that is part of my portfolio, so if you'd like to log in just to see how it works, use:</p> 
					<p className="tl ph6">email: "test@email.com" <br />password: "123"</p>
					<p>You do not have to create a new user, however you may create a new user by using whichever credentials you'd like.</p>
					</div>
				</article>
			</div>
		);
	}
}

export default Signin;