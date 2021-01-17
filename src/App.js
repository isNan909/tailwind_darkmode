function App() {
  return (
    <div className="App bg-gray-50 h-screen">
      <section className="font-sans text-center py-8 px-4 lg:px-0 flex h-screen">
        <div className="container flex flex-col sm:flex-row bg-white max-w-xl m-auto shadow p-6 items-center">
          <div className="w-full sm:w-3/4 text-left flex flex-col justify-center pr-7">
            <h2 className="font-semibold text-lg">
              Ready to Start Tailwind CSS?
            </h2>
            <p className="text-gray-700 mt-1">
              This is a ready-made starter template to get started with tailwind
              v2.0.
            </p>
          </div>
          <div className="w-full sm:w-1/4 flex justify-start sm:justify-center items-center items-center sm:pl-0 sm:pb-0">
            <a
              href="javscript.void(0)"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700"
            >
              Get started
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
