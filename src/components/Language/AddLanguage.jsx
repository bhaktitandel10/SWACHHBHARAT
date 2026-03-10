import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";

const AddLanguage = ({ langData, setLangData }) => {
  // const [languageCode, setlangcode] = useState("");
  // const [languageName, setlangName] = useState("");
  // const [status, setlangStatus] = useState("");

  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjk4ZmExMGM5NDY4NGIwNTZjNjhjOCIsInRva2VuIjoiOTljZDUyZGQ4YzJkYjM0MDFkYWQ3M2I4NDcxOWQyYjgiLCJpYXQiOjE2NDAwNjc2OTN9.grdIjn6RZ1xRl2ZFoqqoezPiLmTQDiBfpvAyEWgWSgQ";
  const onSubmit = (formData) => {
    // e.preventDefault();

    const data = {
      languageCode: formData.languageCode,
      languageName: formData.languageName,
      status: formData.status,
    };

    axios
      .post("http://localhost:3001/api/language/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        alert("Lang added successfully ");
        // if (res.data) {
        navigate("/LanguageList");
        // }
      })
      .catch((err) => {
        console.log(err);
        alert("Error while adding lang ");
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Language Code</label>
      <input
        placeholder="-Select Language code-"
        {...register("languageCode")}
        // value={languageCode}
        // onChange={(e) => setlangcode(e.target.value)}
      />
      <br />
      <br />

      <label>Language Name</label>
      <input
        placeholder="Language Name"
        {...register("languageName")}

        // value={languageName}
        // onChange={(e) => setlangName(e.target.value)}
      />
      <br />
      <br />
      <label>Status</label>
      <input
        placeholder="Active"
        {...register("status")}
        // value={status}
        // onChange={(e) => setlangStatus(e.target.value)}
      />
      <br />
      <br />
      <button type="submit">Save</button>
    </form>
  );
};

export default AddLanguage;
