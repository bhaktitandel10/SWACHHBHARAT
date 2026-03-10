import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

function Edit({ stateData, setstateData }) {
  // const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { register, handleSubmit, setValue } = useForm();
  console.log(location, "locations");

  // const [country, setcountry] = useState("");
  // const [stateTitle, setstateTitle] = useState("");

  useEffect(() => {
    if (location.state) {
      setValue("country", location.state.country);
      setValue("stateTitle", location.state.stateTitle);
    }
  }, [location.state]);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjk4ZmExMGM5NDY4NGIwNTZjNjhjOCIsInRva2VuIjoiOTljZDUyZGQ4YzJkYjM0MDFkYWQ3M2I4NDcxOWQyYjgiLCJpYXQiOjE2NDAwNjc2OTN9.grdIjn6RZ1xRl2ZFoqqoezPiLmTQDiBfpvAyEWgWSgQ";
  const onSubmit = (formData) => {
    // e.preventDefault();

    let data = {
      // id: location.state._id,
      country: formData.country,
      stateTitle: formData.stateTitle,
    };
    // let results = stateData?.map((item) => {
    //   if (item.id === location.state.id) {
    //     return data;
    //   }
    //   return item;
    // });
    axios
      .put(`http://localhost:3001/api/state/${location.state._id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data) {
          navigate("/Statelist");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Error while adding state ");
      });

    // setstateData(results);
    // navigate("/Statelist");
  };

  return (
    <>
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
        <input
          placeholder="State Name"
          {...register("stateTitle")}
          // value={stateTitle}
          // onChange={(e) => setstateTitle(e.target.value)}
        />
        <br />
        <br />

        <button type="submit">Update</button>
      </form>
    </>
  );
}

export default Edit;
