import { useLoaderData } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
const UpdatedAddedFood = () => {
  const food = useLoaderData();
  const {
    _id,
    name,
    image,
    category,
    price,
    quantity,
    made_by,
    origin,
    description,
  } = food;

  const { user } = useContext(AuthContext);
  const handleUpdatedFood = (e) => {
    e.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const image = form.image.value;
    const category = form.category.value;
    const description = form.description.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const made_by = form.made_by.value;
    const addedPersonEmail = form.addedPersonEmail.value;
    const origin = form.origin.value;
    const email = user.email;
    const updatedData = {
      name,
      image,
      category,
      description,
      price,
      quantity,
      made_by,
      addedPersonEmail,
      origin,
      email,
    };
    fetch(`https://ruchi-bangla-server.vercel.app/food/id/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          if (data.modifiedCount) {
            Swal.fire({
              title: "Success!",
              text: "Food Item Updated Successfully",
              icon: "success",
              confirmButtonText: "Update",
            });
          }
        }
      });
  };

  return (
    <div className="lg:w-1/3 container mx-auto shadow-lg flex group text-[#AD1A19]">
      <Helmet>
        <title>Ruchi Bangla || Updated Added Food</title>
      </Helmet>
      <form onSubmit={handleUpdatedFood} className="p-8 flex-1">
        <h1 className="text-4xl pb-4 text-center font-bold font-barlow">
          Update Food
        </h1>
        <div className="space-y-5">
          <label htmlFor="email_" className="block">
            Food Name
          </label>
          <input
            id="email_"
            type="text"
            name="name"
            defaultValue={name}
            className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed  invalid:border-red-700 valid:border-[#AD1A19] text-white font-semibold"
          />
          <label htmlFor="email_" className="block">
            Food Image
          </label>
          <input
            id="email_"
            type="text"
            name="image"
            defaultValue={image}
            className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed  invalid:border-red-700 valid:border-[#AD1A19] text-white font-semibold"
          />

          <label htmlFor="email_" className="block">
            Food Category
          </label>
          <input
            id="email_"
            type="text"
            name="category"
            className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed  invalid:border-red-700 valid:border-[#AD1A19] text-white font-semibold"
            defaultValue={category}
          />
          <label htmlFor="email_" className="block">
            Food Description
          </label>
          <textarea
            name="description"
            defaultValue={description}
            className="textarea p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed  invalid:border-red-700 valid:border-[#AD1A19] text-white font-semibold bg-[#121212]"
          ></textarea>
          <label htmlFor="email_" className="block">
            Price
          </label>
          <input
            id="email_"
            type="text"
            name="price"
            className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed  invalid:border-red-700 valid:border-[#AD1A19] text-white font-semibold"
            defaultValue={price}
          />
          <label htmlFor="email_" className="block">
            Quantity
          </label>
          <input
            id="email_"
            type="text"
            name="quantity"
            className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed  invalid:border-red-700 valid:border-[#AD1A19] text-white font-semibold"
            defaultValue={quantity}
          />
          <label htmlFor="email_" className="block">
            Added Person Name
          </label>
          <input
            id="email_"
            type="text"
            name="made_by"
            defaultValue={user?.displayName}
            className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed  invalid:border-red-700 valid:border-[#AD1A19] text-white font-semibold"
            readOnly
          />
          <label htmlFor="email_" className="block">
            Added Person Email
          </label>
          <input
            id="email_"
            type="text"
            name="addedPersonEmail"
            defaultValue={user?.email}
            placeholder="............"
            className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed  invalid:border-red-700 valid:border-[#AD1A19] text-white font-semibold"
            readOnly
          />
          <label htmlFor="password_" className="block">
            Food Origin
          </label>
          <input
            id="password_"
            type="text"
            name="origin"
            defaultValue={origin}
            min={5}
            className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed invalid:border-red-700 valid:border-[#AD1A19] text-white font-semibold"
          />
        </div>
        {/* button type will be submit for handling form submission*/}
        <input
          type="submit"
          className="text-xl font-bold font-barlow py-2 px-5 mb-4 mt-8 overflow-hidden shadow-lg border-2 rounded-md border-dashed border-[#AD1A19] before:block before:absolute before:translate-x-full before:inset-0 before:bg-[#AD1A19] before:hover:translate-x-0  before:duration-300 before:rounded-s-full before:-z-10 after:-z-10 after:rounded-e-full after:duration-300 after:hover:translate-x-0 after:block after:absolute after:-translate-x-full after:inset-0 after:bg-[#AD1A19] relative inline-block hover:text-white z-50"
          value="Update"
        />
      </form>
    </div>
  );
};

export default UpdatedAddedFood;
