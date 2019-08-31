import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

class Sidebar extends Component {
	render() {
		const categorias = ['Roupas', 'Sapatos', 'Acessórios'];
		const tipos = ['Corrida', 'Caminhada', 'Casual', 'Social'];
		return (
			<div className="filter">
				<div className="board">
					<h2>FILTRE POR</h2>
					<h3>CATEGORIAS</h3>
					<ul className="filterItem">
						{categorias.map(function (categorias, index) {
							return <Link to={'/' + categorias.toLowerCase()} 
							key={index} 
							className="filterItem">
							<li className="filterItemLink" key={index}>
							{categorias}
							</li>
							</Link>
						})}
					</ul>
					<h3>CORES</h3>
					<div className="colors">
						<button className="red" ></button>
						<button className="orange" ></button>
						<button className="blue" ></button>
					</div>
					<h3>TIPOS</h3>
					<ul>
						{tipos.map(function (tipos, index) {
							return <Link to={'/' + tipos.toLowerCase()} 
							key={index} 
							className="filterItem">
							<li className="filterItemLink" key={index}>
							{tipos}
							</li>
							</Link>
						})}
					</ul>
				</div>
			</div>
		)
	}
}

export default Sidebar;