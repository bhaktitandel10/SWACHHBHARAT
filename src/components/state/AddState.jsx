import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
// import Statelist from "./Statelist";

function AddState({ stateData, setstateData }) {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      // country: "India"
    },
  });

  // const [country, setcountry] = useState("test");
  // const [stateTitle, setstateTitle] = useState("");
  let countryData = watch("country");
  console.log(countryData);

  const navigate = useNavigate();
  // ;et token =
  // axios.post("", payload, {
  //   headers: {
  //     Authorization: `Bearer ${}`
  //   }
  // })
  // .then
  // .catch

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5NjRiNTYxNTA1MTM5NzkwMGNkZDNmYSIsInRva2VuIjoiOWM0N2U2MDBmOTMwYjU4OWY3OWEzNTI2MzZjODY1YzMiLCJpYXQiOjE3NzA4Nzc2NTAsImV4cCI6MTc3MDk2NDA1MH0.2-KnjQZRZBtitVXoLy0qKeuT7W9us8vqo2ONt7SwFOE";

  const onSubmit = (formData) => {
    // e.preventDefault();

    if (!formData.country || !formData.stateTitle) {
      alert("Please fill all fields");
      return;
    }

    const data = {
      country: formData.country,
      stateTitle: formData.stateTitle,
    };

    axios
      .post("http://localhost:3001/api/state/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
          // "Content-Type": "application/json",
        },
      })
      .then((res) => {
        // alert("State added successfully ");
        if (res.data) {
          navigate("/Statelist");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Error while adding state ");
      });
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // let data = {
  //   id: formData.length + 1,
  //   stateTitle: stateTitle,
  //   country: country,
  // };
  // setstateData([...stateData, data]);

  // navigate("/Statelist");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>country</label>
      <input
        placeholder="country"
        {...register("country")}
        // value={country}
        // onChange={(e) => setcountry(e.target.value)}
      />
      <br />
      <br />
      
      <label>State Name</label>
      {countryData === "India" ? 
      <input
      placeholder="State Name"
      {...register("stateTitle")}
      // value={stateTitle}
      // onChange={(e) => setstateTitle(e.target.value)}
      />
    : ""}
      <br />
      <br />

      <button type="submit">Save</button>
    </form>
  );
}
export default AddState;
