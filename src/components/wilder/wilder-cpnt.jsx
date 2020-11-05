import React from "react";
import avatarImg from "../../assets/img/avatar.jpg";
import Skill from "../skill/skill-cpnt";

const Wilder = ({ name, city, skills }) => {
  return (
    <section style={{ backgroundImage: `url(${avatarImg})` }} className="card">
      <div className="c-text">
        <h3 className="ct-title">{name}</h3>
        <p className="ct-city">{city}</p>
      </div>
      <ul className="ct-skills-wrapper">
        {skills.map((skill) => (
          <Skill title={skill.title} voteCount={skill.votes} />
        ))}
      </ul>
    </section>
  );
};

export default Wilder;
