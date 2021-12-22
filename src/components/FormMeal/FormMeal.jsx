import React, { useState } from "react";
import "./FormMeal.scss";
import axios from "axios";
import StarIcon from "@mui/icons-material/Star";

const FormMeal = (recipe) => {
  const [caption, setCaption] = useState("");
  const [date, setDate] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    let payload = {
      likes: 0,
      recipe: recipe.recipe,
      date: date,
      caption: caption,
    };

    console.log("meal Post info:", payload);
    const jwt = localStorage.getItem("token");
    let response = await axios.post(
      "http://127.0.0.1:8000/api/meals/user/post",
      payload,
      { headers: { Authorization: "Bearer " + jwt } }
    );
    console.log("New post data sent: ", response.data);
    window.location = "/home";
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <label>Caption</label>
      <input type="text" onChange={(e) => setCaption(e.target.value)}></input>
      <input type="date" onChange={(e) => setDate(e.target.value)}></input>
      <button type="submit">Post A Meal</button>
      <StarIcon className="icon"></StarIcon>
    </form>
  );
};

export default FormMeal;
