import React from 'react';
import ReactDOM from 'react-dom';

function SmestajKladovo () {
    return (
	<div className="container">
	    <Search />
	    <Browse />
	    <LogIn />
	</div>
    );
}

class Search extends React.Component {
    render() {
	return (<div><a className="search" href="#">Search</a></div>);
    }
}

class Browse extends React.Component {
    render() {
	return (<div><a className="browse" href="#">Browse</a></div>);
    }
}

class LogIn extends React.Component {
    render() {
	return (
	    <div className="login row">
		<div className="col-6" style={{marginTop: '15px', marginBottom: '15px', marginLeft: '30%', marginRight: '30%'}}>
		    <form id="loginform">
			<div className="form-group">
			    <div className="row">
				<div className="mr-3"><label>Username</label><input className="form-control" type="text" id="username" placeholder="User Name" /></div>
			    </div>
			    <div className="row">
				<div className="mr-3"><label>Password</label><input className="form-control" type="password" id="password" /></div>
			    </div>
			    <div className="row">
				<button className="btn btn-primary" type="submit">Log In</button>
			    </div>
			</div>
		    </form>
		</div>
	    </div>);
    }
}

ReactDOM.render(
    <SmestajKladovo />,
    document.getElementById('content')
);
