import React, { Component } from "react";
import '../styles.css';
import {products} from '../../Services/mockData';
import Header from '../../Components/Header';
import Navbar from '../../Components/Navbar';
import Sidebar from '../../Components/Sidebar';
import RepoList from "../../Components/Repolist";

class Pants extends Component {
  constructor() {
    super();
    this.state = {
      word: "",
      pFilter:[]
    }
  }

  changeWord = word => {
    this.setState({ word });
  };

  searchWord = () => {
    const list = [products.tshirts];
    const { word } = this.state;
    const re = new RegExp(word, 'gi');
    const reVowels = new RegExp(/[aeiou]/, 'gi');

    this.setState({pFilter: list.filter(product => {
      if (product.name.match(re) || product.name.replace(reVowels, '').match(re) ) {
        return product;
      }
      return null; 
      })
    })
  }

  render() {
    const {word, pFilter} = this.state;
    return (
      <div>
        <Header
          changeWord={this.changeWord}
          word={word}
          buttonAction={this.searchWord}
        />
        <Navbar />
        <div className='viewContainer'>
          <div className="resume">
            <p className="viewTitle">Página inicial > <span className="destak">Calças</span></p>
          </div>
          <div className="viewContent">
            <Sidebar />
            {word.length !== 0 ? <RepoList props={pFilter} title="Camisetas"/> : <RepoList props={products.tshirts} title="Camisetas"/> }
          </div>
        </div>
      </div>
    )
  }
};

export default Pants;