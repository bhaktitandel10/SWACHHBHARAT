import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { languageListFailure, languageListRequest,languageListSuccess } from "../../Redux/Action/languageAction";

const LanguageList = () => {
   const dispatch = useDispatch();
  const [langData, setLangData] = useState([]);
  const [product, setProduct] = useState(langData);

  const handleSearchClick = (e) => {
    if (e.target.value === "") {
      setProduct(langData);
      return;
    }
    const filterBySearch = langData?.filter((item) => {
      if (
        item.languageCode
          .toLowerCase()
          .includes(e.target.value.toLowerCase()) ||
        item.languageName
          .toLowerCase()
          .includes(e.target.value.toLowerCase()) ||
        item.status.toLowerCase().includes(e.target.value.toLowerCase())
      ) {
        return item;
      }
    });
    setProduct(filterBySearch);
  };

  
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjk4ZmExMGM5NDY4NGIwNTZjNjhjOCIsInRva2VuIjoiOTljZDUyZGQ4YzJkYjM0MDFkYWQ3M2I4NDcxOWQyYjgiLCJpYXQiOjE2NDAwNjc2OTN9.grdIjn6RZ1xRl2ZFoqqoezPiLmTQDiBfpvAyEWgWSgQ";
  useEffect(() => {
     dispatch(languageListRequest());
    axios
      .get("http://localhost:3001/api/language/?page=1&size=10", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(languageListSuccess(res.data.data));
        setLangData(res.data.data);
        setProduct(res.data.data);
      })
      .catch((err) => {
        dispatch(languageListFailure(err));
        console.log(err);
      });
  }, []);

  return (
    <div className="state-container">
      <div className="state-header">
        <h3>Language List</h3>

        <div>
          <label> Search</label>
          <input type="search" onChange={handleSearchClick} />
        </div>
        <button>
          {" "}
          <Link to={"/AddLanguage"}>Add Language</Link>
        </button>
        {/* <Link to={"/AddLanguage"}>Add Language</Link> */}
        {/* <button className="add-btn">Add state</button> */}
      </div>

      <table className="state-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Language Code</th>
            <th>Language Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {product?.map((item) => (
            <tr>
              <td>{item._id}</td>
              <td>{item.languageCode}</td>
              <td>{item.languageName}</td>
              <td>{item.status}</td>

              <td>
                <Link to={"/EditLanguage"} state={{ Language: item }}>
                  Edit
                </Link>
                {/* <button className="edit-btn" state={item}>Edit</button> */}
                <button className="delete-btn">Call</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LanguageList;
