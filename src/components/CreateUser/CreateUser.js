import React from 'react';

const CreateUser = ({ onRouteChange }) => {
	return(
		<div>
			<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-3 center">
			<main className="pa4 black-80">
			  <div className="measure">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f3 fw6 ph0 mh0">Create User</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="name">User Name</label>
			        <input className="pa2 input-reset ba bg-transparent hover-bg-grey hover-white w-100" type="text" name="name"  id="name" />
			      </div>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
			        <input className="pa2 input-reset ba bg-transparent hover-bg-grey hover-white w-100" type="email" name="email-address"  id="email-address" />
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
			        <input className="b pa2 input-reset ba bg-transparent hover-bg-grey hover-white w-100" type="password" name="password"  id="password" />
			      </div>
			    </fieldset>
			    <div className="">
			      <input 
			      	onClick={() => onRouteChange('home')}
			      	className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
			      	type="submit" 
			      	value="Create!" 
			      />
			    </div>
			  </div>
			</main>
			</article>

			<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-3 center">
				<p>Note: this app does not verify login credentials so you do not have to use any of your personal information. Example: <br />user: "john@john.com" <br />password: "123"</p>
			</article>
		</div>
	);
}

export default CreateUser;