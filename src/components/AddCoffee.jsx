import { useState } from "react";
import toast from "react-hot-toast";
import { IoMdArrowBack } from "react-icons/io";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const navigate = useNavigate();

  const handleAddCoffee = (e) => {
    e.preventDefault();

    const formElement = e.target;
    const form = new FormData(formElement);
    const name = form.get("name");
    const supplier = form.get("supplier");
    const category = form.get("category");
    const quantity = form.get("quantity");
    const taste = form.get("taste");
    const details = form.get("details");
    const photo = form.get("photo");
    const newCoffee = {
      name,
      supplier,
      category,
      quantity,
      taste,
      details,
      photo,
    };
    console.log(newCoffee);

    if (
      name === "" ||
      supplier === "" ||
      category === "" ||
      quantity === "" ||
      taste === "" ||
      details === "" ||
      photo === ""
    ) {
      toast.error("Fillup all fields.");
      return;
    }

    // send coffee data to server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee added successfully.",
            icon: "success",
            confirmButtonText: "Close",
          });
          formElement.reset();
        }
      });
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className=" max-w-5xl mx-auto my-5 px-4">
      <button
        onClick={handleGoHome}
        className="text-xl font-bold flex items-center btn p-2"
      >
        <IoMdArrowBack /> <span className="ml-1">Back to Home</span>
      </button>
      <div className="bg-[#D2B48C] p-10 mt-4 rounded-lg">
        <h2 className="text-center text-xl font-bold mb-2">Add New Coffee</h2>
        <p className="text-center text-gray-500 mb-10">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <form onSubmit={handleAddCoffee}>
          <div className=" md:flex justify-between gap-10">
            <div className="md:w-1/2">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Name</span>
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter coffee name"
                  className="input input-bordered w-full "
                />
              </label>
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text">Supplier</span>
                </div>
                <input
                  type="text"
                  name="supplier"
                  placeholder="Enter coffee supplier"
                  className="input input-bordered w-full"
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Category</span>
                </div>
                <input
                  type="text"
                  name="category"
                  placeholder="Enter coffee category"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="md:w-1/2">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Available Quantity</span>
                </div>
                <input
                  type="text"
                  name="quantity"
                  placeholder="Available Quantity"
                  className="input input-bordered w-full"
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Taste</span>
                </div>
                <input
                  type="text"
                  name="taste"
                  placeholder="Enter coffee taste"
                  className="input input-bordered w-full"
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Details</span>
                </div>
                <input
                  type="text"
                  name="details"
                  placeholder="Enter coffee details"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <label className="form-control w-full mt-2">
            <div className="label">
              <span className="label-text">Photo</span>
            </div>
            <input
              type="text"
              name="photo"
              placeholder="Enter photo URL"
              className="input input-bordered w-full"
            />
          </label>
          <input
            className="mt-6 bg-[#D2B4] w-full p-2 font-semibold cursor-pointer rounded-lg"
            type="submit"
            value="Add Coffee"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
