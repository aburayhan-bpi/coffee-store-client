import React from "react";
import { FaRegEye, FaTrash } from "react-icons/fa";
import { RiEdit2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, handleDelete }) => {
  return (
    <div className="bg-[#F5F4F1] rounded-lg p-6 md:flex items-center gap-4">
      <div className="">
        <img className="object-cover" src={coffee?.photo} alt="" />
      </div>
      <div className="md:flex w-full gap-8">
        <div className="flex-1">
          <p>Name: {coffee?.name}</p>
          <p>Available Quantity: {coffee?.quantity}</p>
          <p>Price: {coffee?.price ? coffee?.price : "N/A"}</p>
        </div>
        <div className="flex gap-2 mt-3 md:mt-0 md:flex-col">
          <button className="bg-[#D2B48C] text-gray-100 p-2 rounded-md">
            <FaRegEye />
          </button>
          <Link to={`updateCoffee/${coffee?._id}`}>
            <button className="bg-black text-gray-100 p-2 rounded-md">
              <RiEdit2Fill />
            </button>
          </Link>
          <button
            onClick={() => handleDelete(coffee?._id)}
            className="bg-red-500 text-gray-100 p-2 rounded-md"
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
