import axios from "axios";
import "./StateList.css";
// import AddState from "./AddState";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const StateList = () => {
  const [stateData, setstateData] = useState([]);
  const [product, setProduct] = useState(stateData);

  function handleSearchClick(e) {
    if (e.target.value === "") {
      setProduct(stateData);
      return;
    }
    const filterBySearch = stateData?.filter((item) => {
      if (
        item.country.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.stateTitle.toLowerCase().includes(e.target.value.toLowerCase())
      ) {
        return item;
      }
    });
    setProduct(filterBySearch);
  }

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/noAuth/state/?page=1&size=100")
      .then((res) => {
        setstateData(res.data.data);
        setProduct(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (_id) => {
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

  return (
    <div className="state-container">
      <div className="state-header">
        <h3>State List</h3>
        <div>
          <label> Search</label>
          <input type="search" onChange={handleSearchClick} />
        </div>
        <Link to={"/AddState"}>Add state</Link>
        {/* <button className="add-btn">Add state</button> */}
      </div>

      <table className="state-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Country Name</th>
            <th>State Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {product?.map((item) => (
            <tr>
              <td>{item._id}</td>
              <td>{item.country}</td>
              <td>{item.stateTitle}</td>
              <td>
                <Link to={"/EditStateList"} state={item}>
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

export default StateList;
