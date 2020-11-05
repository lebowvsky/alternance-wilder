import React from "react";

const Skill = ({ title, voteCount }) => (
  <li className="skill-list">
    <p className="sl-title">{title}</p>
    <p className="sl-vote">{voteCount}</p>
  </li>
);



export default Skill;
