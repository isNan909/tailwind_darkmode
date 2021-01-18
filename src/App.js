import Banner from './images/banner.jpg';

function App() {
  return (
    <section className="text-gray-700 body-font h-screen flex align-center justify-center">
      <div className="container flex flex-col items-center px-5 py-16 mx-auto lg:px-20 lg:py-24 md:flex-row">
        <div className="flex flex-col items-center w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0 lg:text-center">
          <h2 className="mb-1 text-xs font-medium tracking-widest text-blue-500 dark:text-white title-font">
            Atomic CSS Way
          </h2>
          <h1 className="mb-8 text-2xl font-bold tracking-tighter text-center text-blue-800 lg:text-left lg:text-5xl title-font">
            Longer medium lenght display headline to convert.
          </h1>
          <div className="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4 ">
            <div className="flex flex-col items-center p-4 mb-6 text-center md:w-1/2 md:mb-0 lg:text-left lg:items-start">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mb-5 text-blue-800 bg-gray-200 rounded-full">
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M14 10h-4v4h4v-4zm2 0v4h3v-4h-3zm-2 9v-3h-4v3h4zm2 0h3v-3h-3v3zM14 5h-4v3h4V5zm2 0v3h3V5h-3zm-8                           5H5v4h3v-4zm0 9v-3H5v3h3zM8 5H5v3h3V5zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="mb-3 text-lg font-medium dark:text-white tracking-tighter text-gray-700 title-font">
                  Information 1
                </h2>
                <p className="text-base leading-relaxed dark:text-gray-100 ">
                  Explain 2 great feature here. Information about the feature.
                </p>
                <a
                  href="javascript.void(0)"
                  className="inline-flex items-center font-semibold text-blue-700 md:mb-2 lg:mb-0 hover:text-blue-400 "
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="currentColor"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center p-4 mb-6 text-center md:w-1/2 md:mb-0 lg:text-left lg:items-start">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mb-5 text-blue-800 bg-gray-200 rounded-full">
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18zM11 13H4v6h7v-6zm9 0h-7v6h7v-6zm-9-8H4v6h7V5zm9 0h-7v6h7V5z" />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="mb-3 text-lg font-medium tracking-tighter text-gray-700 dark:text-white title-font">
                  Information 1
                </h2>
                <p className="text-base leading-relaxed dark:text-gray-100">
                  Explain 2 great feature here. Information about the feature.
                </p>
                <a
                  href="javascript.void(0)"
                  className="inline-flex items-center font-semibold text-blue-700 md:mb-2 lg:mb-0 hover:text-blue-400 "
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="currentColor"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
          <img
            className="object-cover object-center rounded-lg "
            alt="hero"
            src={Banner}
          />
        </div>
      </div>
    </section>
  );
}

export default App;
