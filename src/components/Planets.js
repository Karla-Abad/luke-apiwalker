import axios from "axios";
import React, { useState, useEffect } from "react";

const Planets = (props) => {
  const { id } = props;
  const [apiData, setApiData] = useState({});
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/planets/${id}`)
      .then((response) => {
        setIsError(false);
        console.log(response.data);
        setApiData(response.data);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      });
  }, [props]);

  if (isError === false) {
    return (
      <div>
        <h1>{apiData.name}</h1>
        <p>Climate: {apiData.climate}</p>
        <p>Terrain: {apiData.terrain}</p>
        <p>Surface Water: {apiData.surface_water}</p>
        <p>Population: {apiData.population}</p>
      </div>
    );
  } else {
    return (
      <div>
        <img src="https://th.bing.com/th/id/OIP.0i-6rFB7Swjx4C4a21SYagHaEk?w=272&h=180&c=7&r=0&o=5&pid=1.7" />
        <h3>These aren't the planets you are looking for.</h3>
      </div>
    );
  }
};

export default Planets;
