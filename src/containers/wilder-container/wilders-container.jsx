import React, { useState, useEffect } from "react";
import axios from "axios";
import Wilder from "../../components/wilder/wilder-cpnt";

const WilderContainer = () => {
  const [wilders, setWilders] = useState([]);

  const fetchWilder = async () => {
    try {
      const result = await axios.get("/api/wilders");
      const datas = result.data.result;
      setWilders([...datas]);
      console.log(wilders);
    } catch (err) {
      console.log("erreur : ", err);
    } finally {
      console.log("fin!");
    }
  };

  useEffect(() => {
    fetchWilder();
  }, []);

  const addWilderToState = () => {
    fetchWilder();
  }

  return (
    <article className="wilders-wrapper">
      {wilders.map((wilder) => (
        <Wilder name={wilder.name} city={wilder.city} skills={wilder.skills}/>
      ))}
    </article>
  );
};

export default WilderContainer;
