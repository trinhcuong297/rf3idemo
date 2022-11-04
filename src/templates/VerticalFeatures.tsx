const VerticalFeatures = () => (
  <div className="bg-gray-200">
    <section className="text-gray-700">
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-blue-900">
              <h3 className="text-6xl font-semibold">RF3i</h3>
              <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-800">
                Highlight
              </span>
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue-900">
                <h3 className="text-xl font-semibold tracking-wide">
                  Donec porta enim vel{' '}
                </h3>
                <time className="text-xs tracking-wide uppercase dark:text-gray-800">
                  Dec 2020
                </time>
                <p className="mt-3">
                  Pellentesque feugiat ante at nisl efficitur, in mollis orci
                  scelerisque. Interdum et malesuada fames ac ante ipsum primis
                  in faucibus.
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue-900">
                <h3 className="text-xl font-semibold tracking-wide">
                  Aliquam sit amet nunc ut
                </h3>
                <time className="text-xs tracking-wide uppercase dark:text-gray-800">
                  Jul 2019
                </time>
                <p className="mt-3">
                  Morbi vulputate aliquam libero non dictum. Aliquam sit amet
                  nunc ut diam aliquet tincidunt nec nec dui. Donec mollis
                  turpis eget egestas sodales.
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue-900">
                <h3 className="text-xl font-semibold tracking-wide">
                  Pellentesque habitant morbi
                </h3>
                <time className="text-xs tracking-wide uppercase dark:text-gray-800">
                  Jan 2016
                </time>
                <p className="mt-3">
                  Suspendisse tincidunt, arcu nec faucibus efficitur, justo
                  velit consectetur nisl, sit amet condimentum lacus orci nec
                  purus. Mauris quis quam suscipit, vehicula felis id, vehicula
                  enim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <section className="p-6">
      <div className="container max-w-xl mx-auto">
        <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-900 dark:text-gray-100">
          <img src="https://source.unsplash.com/random/100x100?4" alt="" className="w-20 h-20 rounded-full dark:bg-gray-500" />
          <blockquote className="max-w-lg text-lg italic font-medium text-center">"Et, dignissimos obcaecati. Recusandae praesentium doloribus vitae? Rem unde atque mollitia!"</blockquote>
          <div className="text-center dark:text-gray-800">
            <p>Leroy Jenkins</p>
            <p>CEO of Company Co.</p>
          </div>
          <div className="flex space-x-2">
            <button type="button" aria-label="Page 1" className="w-2 h-2 rounded-full dark:bg-gray-50"></button>
            <button type="button" aria-label="Page 2" className="w-2 h-2 rounded-full dark:bg-gray-600"></button>
            <button type="button" aria-label="Page 3" className="w-2 h-2 rounded-full dark:bg-gray-600"></button>
            <button type="button" aria-label="Page 4" className="w-2 h-2 rounded-full dark:bg-gray-600"></button>
          </div>
        </div>
      </div>
    </section> */}
  </div>
);

export { VerticalFeatures };
