import { Link } from "@reach/router";
import axios from "axios";
import React, { useState, useEffect } from "react";

const People = (props) => {
  const { id } = props;
  const [apiData, setApidata] = useState({});
  const [isError, setIsError] = useState(false);
  const [homeWorld, setHomeWorld] = useState("");
  const [homeWorldId, setHomeWorldId] = useState();
  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${id}`)
      .then((response) => {
        setIsError(false);
        console.log(response.data);
        setApidata(response.data);
        getHomeworldId(response.data.homeworld);
        axios
          .get(response.data.homeworld)
          .then((homeworldResponse) => {
            console.log(homeworldResponse.data.name);
            setHomeWorld(homeworldResponse.data.name);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      });
  }, [props]);

  const getHomeworldId = (homeworldURL) => {
    if (homeworldURL.charAt(homeworldURL.length - 3) === "/") {
      const hwId = homeworldURL.charAt(homeworldURL.length - 2);
      setHomeWorldId(hwId);
    } else {
      const firstCharId = homeworldURL.charAt(homeworldURL.length - 3);
      const secondCharId = homeworldURL.charAt(homeworldURL.length - 2);
      const idString = `${firstCharId}${secondCharId}`;
      setHomeWorldId(idString);
    }
  };

  if (isError === false) {
    return (
      <div>
        <h1>{apiData.name}</h1>
        <p>Height: {apiData.height}</p>
        <p>Hair Color: {apiData.hair_color} </p>
        <p>Eye Color: {apiData.eye_color}</p>
        <p>Skin Color: {apiData.skin_color}</p>
        <p>Homeworld: {homeWorld}</p>
        <Link to={`/planets/${homeWorldId}`}>Homeworld</Link>
      </div>
    );
  } else {
    return (
      <div>
        {" "}
        <img src="https://th.bing.com/th/id/OIP.kAZNcoEnW_e_9su6q_eWkAHaKl?w=118&h=180&c=7&r=0&o=5&pid=1.7" />
        <h3>These aren't the droids you are looking for.</h3>
      </div>
    );
  }
};
export default People;
