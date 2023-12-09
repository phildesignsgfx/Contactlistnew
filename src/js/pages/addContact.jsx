import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const AddContact = () => {
  const { store, actions } = useContext(Context);
  const [data, setData] = useState({});

  useEffect(() => {}, [data.full_name, data.phone, data.adress, data.email]);

  return (
    <div className="mb-3 row ms-5 mt-5">
        <h3 className="text-center">
          New Contact
        </h3>  
      <form className="form mt-5">
        <div className="col-sm-10 mt-2">
          <label>Contact Name</label>
          <input
            className="form-control mt-2"
            placeholder="Contact name"
            onChange={(e) => {
              setData({ ...data, full_name: e.target.value });
            }}
          />
        </div>
        <div className="col-sm-10 mt-2">
          <label>Phone Number</label>
          <input
            className="form-control mt-2"
            placeholder="Phone number"
            onChange={(e) => {
              setData({ ...data, phone: e.target.value });
            }}
          />
        </div>
        <div className="col-sm-10 mt-2">
          <label>Address</label>
          <input
            className="form-control mt-2"
            placeholder="Address"
            onChange={(e) => {
              setData({ ...data, address: e.target.value });
            }}
          />
        </div>
        <div className="col-sm-10 mt-2">
          <label>Email</label>
          <input
            className="form-control mt-2"
            placeholder="Email"
            onChange={(e) => {
              setData({ ...data, email: e.target.value });
            }}
          />
        </div>
        <div className="col-sm-10 d-grid gap-2 mt-3">
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => {
              const confirmed = window.confirm(
                "Are you sure you want to add this contact?"
              );
              if (confirmed) {
                actions.addContact(data);
              }
            }}
          >
            Add Contact
          </button>
          <Link to="/">Return to contact list</Link>
        </div>
      </form>
    </div>
  );
};

export default AddContact;
