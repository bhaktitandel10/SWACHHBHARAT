import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { languageEditFailure,languageEditRequest,languageEditSuccess } from "../../Redux/Action/languageAction";
function EditLanguage({ langData, setLangData }) {
  const { user } = useSelector((state) => state.login);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  
  console.log(location, "locations");

  // const [languageCode, setlangcode] = useState("");
  // const [languageName, setlangName] = useState("");
  // const [status, setlangStatus] = useState("");
  const { register, handleSubmit, setValue } = useForm();

  const { state } = useLocation();
  useEffect(() => {
    if (state?.Language) {
      setValue("languageCode", state.Language.languageCode);
      setValue("languageName", state.Language.languageName);
      setValue("status", state.Language.status);
    }
  }, [state]);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjk4ZmExMGM5NDY4NGIwNTZjNjhjOCIsInRva2VuIjoiOTljZDUyZGQ4YzJkYjM0MDFkYWQ3M2I4NDcxOWQyYjgiLCJpYXQiOjE2NDAwNjc2OTN9.grdIjn6RZ1xRl2ZFoqqoezPiLmTQDiBfpvAyEWgWSgQ";

  const onSubmit = (formData) => {
    // e.preventDefault();

    let data = {
      languageCode: formData.languageCode,
      languageName: formData.languageName,
      status: formData.status,
    };
dispatch(languageEditRequest());
    axios
      .put(`http://localhost:3001/api/language/${state.Language._id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(languageEditSuccess(res.data.data));
        navigate("/LanguageList");
        
      })
      .catch((err) => {
        dispatch(languageEditFailure(err));
        console.log(err);
        alert("Error while adding language ");
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Language Code</label>
      <input
        placeholder="-Select Language code-"
        // value={languageCode}
        // onChange={(e) => setlangcode(e.target.value)}
        {...register("languageCode")}
      />
      <br />
      <br />

      <label>Language Name</label>
      <input
        placeholder="Language Name"
        // value={languageName}
        // onChange={(e) => setlangName(e.target.value)}
        {...register("languageName")}
      />
      <br />
      <br />
      <label>Status</label>
      <input
        placeholder="Active"
        // value={status}
        // onChange={(e) => setlangStatus(e.target.value)}
        {...register("status")}
      />
      <br />
      <br />
      <button type="submit">Save</button>
    </form>
  );
}

export default EditLanguage;
