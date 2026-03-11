import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  stateEditFailure,
  stateEditRequest,
  stateEditSuccess,
} from "../../Redux/Action/stateAction";


function Edit({ stateData, setstateData }) {
  const { user} = useSelector((state) => state.login);
  
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const { register, handleSubmit, setValue } = useForm();
  console.log(location, "locations");

 

  useEffect(() => {
    if (location.state) {
      setValue("country", location.state.country);
      setValue("stateTitle", location.state.stateTitle);
    }
  }, [location.state]);

  // const token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjk4ZmExMGM5NDY4NGIwNTZjNjhjOCIsInRva2VuIjoiOTljZDUyZGQ4YzJkYjM0MDFkYWQ3M2I4NDcxOWQyYjgiLCJpYXQiOjE2NDAwNjc2OTN9.grdIjn6RZ1xRl2ZFoqqoezPiLmTQDiBfpvAyEWgWSgQ";
  const onSubmit = (formData) => {
    // e.preventDefault();

    let data = {
      // id: location.state._id,
      country: formData.country,
      stateTitle: formData.stateTitle,
    };
   dispatch(stateEditRequest());
    axios
      .put(`http://localhost:3001/api/state/${location.state._id}`, data, {
        headers: {
          Authorization: `Bearer ${user}`,
        },
      })
      .then((res) => {
        if (res.data) {
          dispatch(stateEditSuccess(res.data.data));
          navigate("/Statelist");
        }
      })
      .catch((err) => {
         dispatch(stateEditFailure(err));
        console.log(err);
        alert("Error while adding state ");
      });

    
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>country</label>
        <input
          placeholder="country"
          {...register("country")}
         
        />
        <br />
        <br />
        <label>State Name</label>
        <input
          placeholder="State Name"
          {...register("stateTitle")}
          
        />
        <br />
        <br />

        <button type="submit">Update</button>
      </form>
    </>
  );
}

export default Edit;
