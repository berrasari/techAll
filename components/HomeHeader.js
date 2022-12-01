/* This example requires Tailwind CSS v2.0+ */
export default function HomeHeader() {
    return (
      <div className="bg-transparent">
        <div className=" max-w sm:py-24">
          <div className="text-center">
            <h2 className="text-base font-semibold tracking-wide text-orange-700 uppercase">Home Page</h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Are you looking for something special?
            </p>
            <p className="max-w-xl py-3 mx-auto mt-5 text-xl text-gray-700">
            Inspire, explore and read the best contents.
            </p>
            <div
              className="inline-flex items-center px-12 py-2 text-sm font-bold text-gray-900 border-2 border-orange-700 rounded-md shadow-lg hover:border-gray-700 hover:text-gray-300"
            ><a
              href="/"
            >
                Blog
              </a></div>
          </div>
        </div>
      </div>
    )
  }
  