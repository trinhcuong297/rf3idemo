import { MinusIcon } from '@heroicons/react/20/solid';

export default function Testimonial() {
  return (
    <>
      <div className="flex items-center justify-center mt-6">
        <MinusIcon
          className="text-indigo-400 mx-4 h-10 w-10"
          aria-hidden="true"
        />
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-gray-800 to-blue-800">
          Testimonial
        </h2>
        <MinusIcon
          className="text-indigo-600 mx-4 h-10 w-10"
          aria-hidden="true"
        />
      </div>
      <div className="flex lg:grid lg:grid-cols-6 lg:grid-row-5 w-full h-[25rem] lg:h-[30rem] rounded-[4rem] bg-gray-100 rounded-box flex items-center">
        <section className="p-6 drop-shadow-2xl mt-4 lg:col-span-2 lg:row-span-2">
          <div className="container max-w-xl mx-auto">
            <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-900 dark:text-gray-100">
              <img
                src="https://source.unsplash.com/random/100x100?4"
                alt=""
                className="w-20 h-20 rounded-full dark:bg-gray-500"
              />
              <blockquote className="max-w-lg text-lg italic font-medium text-center">
                Good team!
              </blockquote>
              <div className="text-center dark:text-gray-400">
                <p>Leroy Jenkins</p>
                <p>CEO of Company Co.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="p-6 drop-shadow-2xl mt-4 lg:col-span-2">
          <div className="container max-w-xl mx-auto">
            <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-900 dark:text-gray-100">
              <img
                src="https://source.unsplash.com/random/100x100?4"
                alt=""
                className="w-20 h-20 rounded-full dark:bg-gray-500"
              />
              <blockquote className="max-w-lg text-lg italic font-medium text-center">
                Et, dignissimos obcaecati. Recusandae praesentium doloribus
                vitae? Rem unde atque mollitia!
              </blockquote>
              <div className="text-center dark:text-gray-400">
                <p>Leroy Jenkins</p>
                <p>CEO of Company Co.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="p-6 drop-shadow-2xl mt-4 lg:col-span-2 lg:row-span-2">
          <div className="container max-w-xl mx-auto">
            <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-900 dark:text-gray-100">
              <img
                src="https://source.unsplash.com/random/100x100?4"
                alt=""
                className="w-20 h-20 rounded-full dark:bg-gray-500"
              />
              <blockquote className="max-w-lg text-lg italic font-medium text-center">
                Et, dignissimos obcaecati. Recusandae praesentium doloribus
                vitae? Rem unde atque mollitia!
              </blockquote>
              <div className="text-center dark:text-gray-400">
                <p>Leroy Jenkins</p>
                <p>CEO of Company Co.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
