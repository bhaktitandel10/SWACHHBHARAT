import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import {
  stateAddFailure,
  stateAddRequest,
  stateAddSuccess,
} from "../../Redux/Action/stateAction";

function AddState({ stateData, setstateData }) {
  const { register, handleSubmit, watch } = useForm({
   
  });

  
  let countryData = watch("country");
  console.log(countryData);
  const { user } = useSelector((state) => state.login);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5NjRiNTYxNTA1MTM5NzkwMGNkZDNmYSIsInRva2VuIjoiNGI0ZTY2YjcxZjcyZDlkMmYwMDVkYzJiNmRjZTliODciLCJpYXQiOjE3NzMyNTM1OTMsImV4cCI6MTc3MzMzOTk5M30.DY15BGtRFcbj5iEAnVWoUBQV5XwD2eobutT2aSAylLI";

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
    dispatch(stateAddRequest());
    axios
      .post("http://localhost:3001/api/state/", data, {
        headers: {
          Authorization: `Bearer ${user}`,
         
        },
      })
      .then((res) => {
        // alert("State added successfully ");
        if (res.data) {
          dispatch(stateAddSuccess(res.data.data));
          navigate("/Statelist");
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(stateAddFailure(err));
        alert("Error while adding state ");
      });
  };
 
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>country</label>
      <input
        placeholder="country"
        {...register("country")}
        
      />
      <br />
      <br />

      <label>State Name</label>
      {countryData === "India" ? (
        <input
          placeholder="State Name"
          {...register("stateTitle")}
          // value={stateTitle}
          // onChange={(e) => setstateTitle(e.target.value)}
        />
      ) : (
        ""
      )}
      <br />
      <br />

      <button type="submit">Save</button>
    </form>
  );
}
export default AddState;
