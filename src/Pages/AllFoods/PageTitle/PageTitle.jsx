import { Link } from "react-router-dom";


const PageTitle = () => {
    return (
        <div className="relative">
      <img
        className="w-full lg:h-[500px] object-cover opacity-55"
        src="https://i.ibb.co/r3fJJqP/360-F-294263329-1-Igvq-Ng-Dbhm-QNg-Dxkhl-W433u-OFu-IDar4.jpg"
        alt=""
      />
      <div className="text-2xl md:text-4xl lg:text-6xl font-bold absolute top-1/3 lg:top-44 right-32 md:right-72 lg:right-1/3 lg:mr-20  text-red-600 text-center md:space-y-6">
        <h1>All Food Pages</h1>
        <p className="text-white text-sm md:text-xl">
          <Link to="/">Home</Link> / All Food Pages
        </p>
      </div>
    </div>
    );
};

export default PageTitle;