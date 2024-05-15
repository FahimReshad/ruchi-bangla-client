




import {  useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import { useContext, useEffect, useState } from "react";
import { Helmet } from 'react-helmet-async';
const PurchasePage = () => {
  const purchaseData = useLoaderData();
  console.log(purchaseData);
  const { user } = useContext(AuthContext);
  const { name, price, image, made_by, quantity } = purchaseData;
  const date = Date.now();
  const timeConvertSecond = date / 1000;
  const buyingDate = new Date(timeConvertSecond * 1000)
    .toLocaleString()
    .slice(0, 9);

  const [quantities, setQuantities] = useState(1);

  const handlePurchase = (event) => {
    event.preventDefault();
    const form = event.target;
    const quantity = form.quantity.value;
    const buyerName = form.buyerName.value;
    const buyerEmail = form.buyerEmail.value;

    const purchaseData = {
      name,
      price,
      quantity: quantities, // Use the state variable here
      buyerName,
      buyerEmail,
      buyingDate,
      email: user.email,
      image,
      made_by,
    };

    fetch("http://localhost:5000/purchaseFood", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(purchaseData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.made_by === user.uid) {
          toast.error("You can't buy your own added food items.");
        } else if (data.quantity === 0) {
          toast.error("This item is currently not available.");
        } else if (parseInt(data.quantity) < parseInt(quantity)) {
          toast.error("You can't buy more than the available quantity.");
        } else {
          toast.success("Purchase successful");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("An error occurred. Please try again later.");
      });
  };

  return (
    <div className="lg:w-1/3 container mx-auto shadow-lg flex group text-[#AD1A19]">
      <Helmet><title>Ruchi Bangla || Purchase Food</title></Helmet>
      <form onSubmit={handlePurchase} className="p-8 flex-1">
        <h1 className="text-4xl pb-4 text-center font-bold font-barlow">
          Food Purchase
        </h1>
        <div className="space-y-5">
          <label htmlFor="foodName" className="block">
            Food Name
          </label>
          <input
            id="foodName"
            type="text"
            name="foodName"
            defaultValue={name}
            className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed invalid:border-red-700 valid:border-[#AD1A19] text-white font-semibold"
            readOnly
            required
          />
          <label htmlFor="price" className="block">
            Price
          </label>
          <input
            id="price"
            type="text"
            name="price"
            defaultValue={price}
            placeholder="Price"
            className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed invalid:border-red-700 valid:border-[#AD1A19] text-white font-semibold"
            readOnly
            required
          />
          <label htmlFor="quantity" className="block">
            Quantity
          </label>
          <input
            id="quantity"
            type="number"
            name="quantity"
            defaultValue={quantity}
            placeholder="Quantity"
            className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed invalid:border-red-700 valid:border-[#AD1A19] text-white font-semibold"
            min="1"
            max={quantity}
            value={quantities}
            onChange={(e) => setQuantities(parseInt(e.target.value))}
            required
          />
          <label htmlFor="buyerName" className="block">
            Buyer Name
          </label>
          <input
            id="buyerName"
            type="text"
            name="buyerName"
            defaultValue={user.displayName}
            placeholder="Buyer Name"
            className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed invalid:border-red-700 valid:border-[#AD1A19] text-white font-semibold"
            readOnly
            required
          />
          <label htmlFor="buyerEmail" className="block">
            Buyer Email
          </label>
          <input
            id="buyerEmail"
            type="email"
            name="buyerEmail"
            defaultValue={user.email}
            placeholder="Buyer Email"
            className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed invalid:border-red-700 valid:border-[#AD1A19] text-white font-semibold"
            readOnly
            required
          />
          <input type="hidden" name="buyingDate" value={buyingDate} />
          <input type="hidden" name="image" value={image} />
          <input type="hidden" name="made_by" value={made_by} />
        </div>
        <button
          type="submit"
          className="text-xl font-bold font-barlow py-2 px-5 mb-4 mt-8 overflow-hidden shadow-lg border-2 rounded-md border-dashed border-[#AD1A19] before:block before:absolute before:translate-x-full before:inset-0 before:bg-[#AD1A19] before:hover:translate-x-0  before:duration-300 before:rounded-s-full before:-z-10 after:-z-10 after:rounded-e-full after:duration-300 after:hover:translate-x-0 after:block after:absolute after:-translate-x-full after:inset-0 after:bg-[#AD1A19] relative inline-block hover:text-white z-50"
        >
          Purchase
        </button>
      </form>
    </div>
  );
};

export default PurchasePage;

