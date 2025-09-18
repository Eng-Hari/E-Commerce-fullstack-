import React from 'react';

const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-4 sm:px-6">
        {/* Left Text */}
        <div className="md:w-1/2">
          <p className="text-2xl sm:text-3xl font-semibold text-gray-800">
            Subscribe now & get 20% off
          </p>
          <p className="text-gray-500 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        {/* Right Form */}
        <form
          onSubmit={onSubmitHandler}
          className="md:w-1/2 flex justify-start md:justify-end w-full"
        >
          <div className="flex w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-black text-sm"
            />
            <button
              type="submit"
              className="px-5 py-2 bg-black text-white border border-black border-l-0 rounded-r-md hover:bg-gray-800 transition text-sm"
            >
              SUBSCRIBE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsletterBox;
