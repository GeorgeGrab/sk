import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function SmestajKladovo () {
    return (
	<div id="content" style={{textAlign: 'center'}}>
	    <Search />
	    <Browse onClick={() => null}/>
	    <LogIn onClick={() => null}/>
	</div>
    );
}

class Search extends React.Component {
    render() {
	return (
	    <div className="searchpage row">
		<div className="col-6" style={{marginTop: '15px', marginBottom: '15px', marginLeft: '30%', marginRight: '30%'}}>
		    <form id="searchpageform">
			<div className="form-group">
			    <div style={{textAlign:"center"}} className="row">
				<h1>Pronađi svoj idealan smeštaj!</h1>
			    </div>
			    <div style={{textAlign:"center"}} className="row">
				<div className="mr-3">
				    <input id="searchInput" style={{width:"70%"}} type="text"  placeholder="Search for..."/>
				    <span>
					<button style={{width:"20%"}} className="btn btn-primary" type="button" onClick=
					    {() => ReactDOM.render(
						 <SearchView searchTerm={document.getElementById('searchInput').value}/>,
						 document.getElementById('content')
					    )}>Go!</button>
				    </span>
				</div>
			    </div>
			</div>
		    </form>
		</div>
	    </div>

	);
    }
}

class Browse extends React.Component {
    render() {
	return (<div className="row" ><button className="btn" style={{margin: '2px'}}>Browse</button></div>);
    }
}

class LogIn extends React.Component {
    render() {
	return (
	    <div id="login" style={{marginTop: '15px', marginBottom: '15px', marginLeft: '30%', marginRight: '30%'}}>
		    <form id="loginform">
			<div className="form-group">
			    <div className="row">
				<div className="mr-3"><label>Username</label><input className="form-control" type="text" id="username" placeholder="User Name" /></div>
			    </div>
			    <div className="row">
				<div className="mr-3"><label>Password</label><input className="form-control" type="password" id="password" /></div>
			    </div>
			    <div className="row">
				<button className="btn" style={{margin: '2px'}}>Log In</button>
				<button className="btn" style={{margin: '2px'}}>Sign Up</button>
			    </div>
			</div>
		    </form>
	    </div>);
    }
}

class SearchView extends React.Component {
    constructor(props) {
	super(props);

	this.state = {
	    items: []
	};
    }

    componentDidMount() {
	fetch(`./api/roomlist.json`)
	     .then(res => {
		 const items = res.json();
		 this.setState({ items });
	     });
    }
    render() {
	return (
	    <div><p>Searching for: {this.props.searchTerm}</p>
		<div className="sidebar">
		    <Search />
		    <Browse />
		</div>
		<ListItems searchTerm={this.items} />
	    </div>
	);
    }
}

function ListItems(props) {
    var x=props
	return (<ul> {}</ul>);
}


ReactDOM.render(<SmestajKladovo />, document.getElementById('content'));
