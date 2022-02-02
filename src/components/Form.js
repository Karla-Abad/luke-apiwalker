import { navigate } from "@reach/router";
import React, { useState } from "react";

const Form = () => {
  const [category, setCategory] = useState("");
  const [id, setId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/${category}/${id}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Search For: </label>
        <select onChange={(e) => setCategory(e.target.value)}>
          <option>--------</option>
          <option value="people">People</option>
          <option value="planets">Planets</option>
        </select>
        <label>ID: </label>
        <input type="number" onChange={(e) => setId(e.target.value)} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Form;
