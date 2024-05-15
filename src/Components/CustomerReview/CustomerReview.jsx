const CustomerReview = () => {
  return (
    <section className="my-8 bg-black py-10">
      <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
        <h1 className="text-4xl font-semibold leading-none text-center">
          What our customers are saying about us
        </h1>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
        <div className="flex flex-col items-center mx-12 lg:mx-0">
          <div className="relative text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="absolute top-0 left-0 w-8 h-8 dark:text-gray-300"
            >
              <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
              <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
            </svg>
            <p className="px-6 py-1 text-lg italic">
              "My dining experience at{" "}
              <span className="text-red-700">[Ruchi Bangla]</span> was
              absolutely fantastic! From the moment I walked in, I was greeted
              warmly by the staff, and the cozy ambiance made me feel right at
              home. Now, let's talk about the food! I ordered the{" "}
              <span className="text-red-500">[Bengali Pulao]</span>, and it was
              hands down one of the best meals I've had in a long time. The
              flavors were exquisite, and the presentation was beautiful. Each
              bite was a culinary delight!
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-300"
            >
              <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
              <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
            </svg>
          </div>
          <span className="w-12 h-1 my-2 rounded-lg dark:bg-red-700"></span>
          <p>Mr. Hasan</p>
        </div>
        <div className="flex flex-col items-center  mx-12 lg:mx-0">
          <div className="relative text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="absolute top-0 left-0 w-8 h-8 dark:text-gray-300"
            >
              <path
                fill="currentColor"
                d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"
              ></path>
              <path
                fill="currentColor"
                d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"
              ></path>
            </svg>
            <p className="px-6 py-1 text-lg italic">
              "I recently dined at{" "}
              <span className="text-red-700">[Ruchi Bangla]</span> with some
              friends, and I have to say, I was thoroughly impressed! The
              atmosphere was vibrant, and the decor was stylish and modern. We
              ordered a variety of dishes, and each one was better than the
              last. The flavors were bold and authentic, and you could tell that
              the ingredients were fresh and of the highest quality. I
              particularly loved the{" "}
              <span className="text-red-500">[Bhapa Illish]</span>; it was
              absolutely delicious!"
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-300"
            >
              <path
                fill="currentColor"
                d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"
              ></path>
              <path
                fill="currentColor"
                d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"
              ></path>
            </svg>
          </div>
          <span className="w-12 h-1 my-2 rounded-lg dark:bg-red-700"></span>
          <p>John Keats</p>
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;
