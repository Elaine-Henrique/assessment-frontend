import React from "react";
import './styles.css';

import RepoItem from "./Components/RepoItem";

const RepoList = ({ props, title }) => (
  <div>
    <p className="repoTitle">{title}</p>
    <div className="repoList">
      {props.map(item => (
        <RepoItem repo={item} key={item.id}/>
      ))}
    </div>
  </div>
);

export default RepoList;