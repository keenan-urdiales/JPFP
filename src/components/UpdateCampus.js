import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCampus } from "../features/singleCampusSlice";

const UpdateCampus = ({ campusId }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const dispatch = useDispatch();
  const handleUpdate = async (event) => {
    try {
      event.preventDefault();
      await dispatch(updateCampus({ campusId, name, address }));
    } catch (e) {
      throw e;
    }
  };

  return (
    <div>
      <h3>EditCampus</h3>
      <form id="update-campus-form" onSubmit={handleUpdate}>
        <label htmlFor="name">Campus Name:</label>
        <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="address">Campus Address: </label>
        <input
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <button type="submit">Update Campus</button>
      </form>
    </div>
  );
};

export default UpdateCampus;