import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Pledgelist = () => {
  const [pledgeData, setpledgeData] = useState([]);
  const [product, setProduct] = useState(pledgeData);

  const handleSearchClick = (e) => {
    if (e.target.value === "") {
      setProduct(pledgeData);
      return;
    }
    const filterBySearch = pledgeData?.filter((item) => {
      if (
        item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.email.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.mobile.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.state.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.city.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.message.toLowerCase().includes(e.target.value.toLowerCase())
      ) {
        return item;
      }
    });
    setProduct(filterBySearch);
  };

  const handleDelete = (_id) => {
    // setpledgeData(pledgeData.filter((item) => item._id !== id));
    // setpledgedata(res.data.data)

    // let payload = {
    //   name: name,
    //   email: email,
    //   mobile: mobile,
    //   state: state,
    //   city: city,
    //   message: message,
    // };
    axios
      .put(`http://localhost:3001/api/delete/${_id}`)
      .then((res) => {
        console.log(res, "res");
        setpledgeData(res.data.data);
      })
      .catch((err) => {
        console.log(err, "err");
      });
  };

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjk4ZmExMGM5NDY4NGIwNTZjNjhjOCIsInRva2VuIjoiOTljZDUyZGQ4YzJkYjM0MDFkYWQ3M2I4NDcxOWQyYjgiLCJpYXQiOjE2NDAwNjc2OTN9.grdIjn6RZ1xRl2ZFoqqoezPiLmTQDiBfpvAyEWgWSgQ";
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/pledge/?page=1&size=20", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setpledgeData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="state-container">
      <div className="state-header">
        <h3>Pledge List</h3>
      </div>
      <div>
        <label>Search</label>
        <input type="search" onChange={handleSearchClick} />
      </div>
      <table className="state-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>City</th>
            <th>State</th>
            <th>Front-side Display</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {product?.map((item) => (
            <tr>
              <td>{item._id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.mobile}</td>
              <td>{item.state}</td>
              <td>{item.city}</td>
              <td>{item.message}</td>

              <td>
                <Link to={"/EditPledge"} state={item}>
                  Edit
                </Link>
                {/* <button className="edit-btn" state={item}>Edit</button> */}

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(item._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Pledgelist;
