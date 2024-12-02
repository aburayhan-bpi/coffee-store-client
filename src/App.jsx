import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/coffeeCard";
import { useState } from "react";
import Swal from "sweetalert2";

function App() {
  const loadedCoffee = useLoaderData();
  const [coffee, setCoffee] = useState(loadedCoffee);
  // console.log(coffees);

  const handleDelete = (_id) => {
    // console.log(_id)

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Coffee has been deleted.",
                icon: "success",
              });
              const remainingCoffee = coffee.filter((c) => c._id !== _id);
              setCoffee(remainingCoffee);
            }
          });
      }
    });
  };

  return (
    <>
      <div className="max-w-6xl mx-auto my-10 px-4">
        <h1 className="font-bold mb-6">Coffee Store - {coffee.length}</h1>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          {coffee.map((coffee) => (
            <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              handleDelete={handleDelete}
            ></CoffeeCard>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
