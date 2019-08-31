import React from "react";
import './styles.css';

const RepoItem = ({ repo }) => (
  <div className="repoItem">
    <div className="repoImg">
      <img src={require('../../../../images/' + repo.image)} alt={repo.name}/> 
    </div>
    <div className="repoName">
      <p>{repo.name.toUpperCase()}</p>
    </div>
    <div className="repoPrice">
      { repo.specialPrice ? <p > R${repo.specialPrice}</p> : <p > R${repo.price}</p> }
    </div>
    <button className="btn">Buscar</button>
  </div>
);

export default RepoItem;