
// import { useLoaderData } from "react-router-dom";
// import { AuthContext } from "../../Provider/AuthProvider";
// import { toast } from "react-toastify";
// import { useContext } from "react";

// const PurchasePage = () => {
//   const purchaseData = useLoaderData();
//   const { user } = useContext(AuthContext);
//   const { name, price, image, made_by } = purchaseData;
//   const date = Date.now();
//   const timeConvertSecond = date / 1000;
//   const buyingDate = new Date(timeConvertSecond * 1000)
//     .toLocaleString()
//     .slice(0, 9);
//   const handlePurchase = (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const name = form.foodName.value;
//     const price = form.price.value;
//     const quantity = form.quantity.value;
//     const buyerName = form.buyerName.value;
//     const buyerEmail = form.buyerEmail.value;
//     const buyingDate = form.buyingDate.value;
//     const image = form.image.value;
//     const made_by = form.made_by.value;
//     const email = user.email;
//     const purchaseData = {
//       name,
//       price,
//       quantity,
//       buyerName,
//       buyerEmail,
//       buyingDate,
//       email,
//       image,
//       made_by
//     };
//     console.log(purchaseData);
//     fetch("http://localhost:5000/purchaseFood", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(purchaseData),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         if(data){
//           toast.success('Purchase successfully')
//         }
//       });
//   };
//   return (
//     <div className="lg:w-1/3 container mx-auto shadow-lg flex group text-[#AD1A19]">
//       <form onSubmit={handlePurchase} className="p-8 flex-1">
//         <h1 className="text-4xl pb-4 text-center font-bold font-barlow">
//           Food Purchase
//         </h1>
//         <div className="space-y-5">
//           <label htmlFor="email_" className="block">
//             Food Name
//           </label>
//           <input
//             id="email_"
//             type="text"
//             name="foodName"
//             defaultValue={name}
//             placeholder="Food Name"
//             className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed  invalid:border-red-700 valid:border-[#AD1A19] text-white font-semibold"
//             readOnly
//             required
//           />
//           <label htmlFor="email_" className="block">
//             Price
//           </label>
//           <input
//             id="email_"
//             type="text"
//             name="price"
//             defaultValue={price}
//             placeholder="Price"
//             className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed  invalid:border-red-700 valid:border-[#AD1A19] text-white font-semibold"
//             readOnly
//             required
//           />
//           <label htmlFor="email_" className="block">
//             Quantity
//           </label>
//           <input
//             id="email_"
//             type="number"
//             name="quantity"
//             placeholder="............"
//             className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed  invalid:border-red-700 valid:border-[#AD1A19] text-white font-semibold"
//             required
//           />
//           <label htmlFor="email_" className="block">
//             Buyer Name
//           </label>
//           <input
//             id="email_"
//             type="text"
//             name="buyerName"
//             defaultValue={user.displayName}
//             placeholder="............"
//             className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed  invalid:border-red-700 valid:border-[#AD1A19] text-white font-semibold"
//             readOnly
//           />
//           <label htmlFor="email_" className="block">
//             Buyer Email
//           </label>
//           <input
//             id="email_"
//             type="text"
//             name="buyerEmail"
//             defaultValue={user.email}
//             placeholder="............"
//             className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed  invalid:border-red-700 valid:border-[#AD1A19] text-white font-semibold"
//             readOnly
//           />
//           <label htmlFor="password_" className="block">
//             Buying Date
//           </label>
//           <input
//             id="password_"
//             type="tel"
//             name="buyingDate"
//             defaultValue={buyingDate}
//             placeholder=".............."
//             min={5}
//             className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed invalid:border-red-700 valid:border-[#AD1A19] text-white font-semibold"
//             readOnly
//           />
//           <input
//             id="password_"
//             type="tel"
//             name="image"
//             defaultValue={image}
//             placeholder=".............."
//             min={5}
//             className="p-3 w-full shadow-lg outline-none border-2 rounded-md border-dashed invalid:border-red-700 valid:border-[#AD1A19] text-white font-semibold hidden"
//             readOnly
//           />
//           <input
//             id="password_"
//             type="tel"
//             name="made_by"
//             defaultValue={made_by}
//             placeholder=".............."
//             min={5}
//             className="p-3 w-full shadow-lg outline-none border-2 rounded-md border-dashed invalid:border-red-700 valid:border-[#AD1A19] text-white font-semibold hidden"
//             readOnly
//           />
//         </div>
//         {/* button type will be submit for handling form submission*/}
//         <input
//           type="submit"
//           className="text-xl font-bold font-barlow py-2 px-5 mb-4 mt-8 overflow-hidden shadow-lg border-2 rounded-md border-dashed border-[#AD1A19] before:block before:absolute before:translate-x-full before:inset-0 before:bg-[#AD1A19] before:hover:translate-x-0  before:duration-300 before:rounded-s-full before:-z-10 after:-z-10 after:rounded-e-full after:duration-300 after:hover:translate-x-0 after:block after:absolute after:-translate-x-full after:inset-0 after:bg-[#AD1A19] relative inline-block hover:text-white z-50"
//           value="Purchase"
//         />
//       </form>
//     </div>
//   );
// };

// export default PurchasePage;




import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import { useContext, useState } from "react";

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

