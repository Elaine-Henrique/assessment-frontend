import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

class Navbar extends Component {
	render() {
		const names = ['Camisetas', 'Calças', 'Sapatos', 'Contato'];
		return (
			<div className="nav">

				<ul className="navContainer">
					<Link to='/' className="navbarItemLink"><li className="navbarItem">PÁGINA INICIAL</li></Link>
					{names.map(function (name, index) {
						return <Link to={'/' + name.toLowerCase()} key={index} className="navbarItemLink"><li className="navbarItem" key={index}>{name.toUpperCase()}</li></Link>
					})}
				</ul>
			</div>
		)
	}
}

export default Navbar;
