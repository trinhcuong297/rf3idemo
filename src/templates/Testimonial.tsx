import { MinusIcon } from '@heroicons/react/20/solid';

export default function Testimonial() {
  return (
    <>
      <div className="flex items-center justify-center mt-6 hidden">
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
      <div className="w-fit h-max md:h-auto m-auto items-center overflow-hidden hidden">
        {/* <img class="h-full" src="https://cdn.tuk.dev/assets/components/111220/Hero4/Rectangle.png" alt="Device"/> */}
        {/* <img className="md:absolute md:w-1/2 md:-ml-28" src="https://cdn.tuk.dev/assets/components/111220/Hero4/Device - Macbook Pro.png" /> */}
        <div className="carousel carousel-center mx w-[60rem] h-[25rem] lg:h-[30rem] space-x-4 rounded-[4rem] bg-gray-100 rounded-box flex items-center">
          <div className="carousel-item">
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
          </div>
          <div className="carousel-item">
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
          </div>
          <div className="carousel-item">
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
          </div>
          {/* <div className="carousel-item">
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
                </div><div className="carousel-item">
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
                </div><div className="carousel-item">
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
                </div><div className="carousel-item">
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
                </div> */}
        </div>
      </div>
    </>
  );
}
