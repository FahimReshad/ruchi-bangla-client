import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import ReservationTitle from "./ReservationTitle";

const Reservation = () => {
  const handleBookFood = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const message = form.message.value;
    const date = form.date.value;
    const person = form.person.value;
    const bookingData = {
      name,
      phone,
      email,
      message,
      date,
      person,
    };
    fetch("https://ruchi-bangla-server.vercel.app/reservation", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success("Thanks for booking");
        }
      });
  };

  return (
    <div className=" ">
      <Helmet>
        <title>Ruchi Bangla || Reservation</title>
      </Helmet>
      <ReservationTitle></ReservationTitle>
      <div className="flex gap-6 container mx-auto group text-[#AD1A19] md:mt-20">
        <form onSubmit={handleBookFood} className="p-8 w-1/2">
          <h3 className="text-3xl pb-4 font-bold font-barlow uppercase">
            wish to taste it
          </h3>
          <h1 className="text-5xl text-white pb-4 font-bold font-barlow">
            Book your table
          </h1>
          <div className="">
            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="w-full">
                  <label htmlFor="email_" className="block">
                    Enter Name
                  </label>
                  <input
                    id="email_"
                    type="text"
                    name="name"
                    className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed  invalid:border-red-700 valid:border-[#AD1A19] text-white font-semibold"
                    required
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="email_" className="block">
                    Enter Phone No
                  </label>
                  <input
                    id="email_"
                    type="text"
                    name="phone"
                    className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed  invalid:border-red-700 valid:border-[#AD1A19] text-white font-semibold"
                    required
                  />
                </div>
              </div>

              <label htmlFor="email_" className="block">
                Email Address
              </label>
              <input
                id="email_"
                type="email"
                name="email"
                className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed  invalid:border-red-700 valid:border-[#AD1A19] text-white font-semibold"
                required
              />

              <div className="flex gap-4">
                <div className="w-full">
                  <label htmlFor="email_" className="block">
                    Order Date
                  </label>
                  <input
                    id="email_"
                    type="date"
                    name="date"
                    className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed  invalid:border-red-700 valid:border-[#AD1A19] text-white font-semibold"
                    required
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="email_" className="block">
                    No of person
                  </label>
                  <input
                    id="email_"
                    type="number"
                    name="person"
                    className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed  invalid:border-red-700 valid:border-[#AD1A19] text-white font-semibold"
                    required
                  />
                </div>
              </div>
              <label htmlFor="email_" className="block">
                Additional Message
              </label>
              <textarea
                name="message"
                className="textarea p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed  invalid:border-red-700 valid:border-[#AD1A19] text-white font-semibold bg-[#121212]"
              ></textarea>
            </div>
          </div>
          {/* button type will be submit for handling form submission*/}
          <input
            type="submit"
            className="text-xl font-bold font-barlow py-2 px-5 mb-4 mt-8 overflow-hidden shadow-lg border-2 rounded-md border-dashed border-[#AD1A19] before:block before:absolute before:translate-x-full before:inset-0 before:bg-[#AD1A19] before:hover:translate-x-0  before:duration-300 before:rounded-s-full before:-z-10 after:-z-10 after:rounded-e-full after:duration-300 after:hover:translate-x-0 after:block after:absolute after:-translate-x-full after:inset-0 after:bg-[#AD1A19] relative inline-block hover:text-white z-50 w-full"
            value="BOOK A TABLE"
          />
        </form>
        <div className="w-1/2">
          <img
            className="h-full w-full rounded-xl"
            src="https://i.ibb.co/rwwSHpC/Reservation-Img-1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Reservation;
