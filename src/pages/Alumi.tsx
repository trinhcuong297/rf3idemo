import Head from 'next/head';

export default function Alumi() {
  return (
    <>
      <Head>
        <title>RF3i - Alumi</title>
      </Head>
      <div className="space-y-12 text-gray-800 px-4 md:px-20 scroll-smooth">
        <div className="px-12 mx-auto bg-gray-100">
          <section className="py-12 px-4 text-center">
            <div className="w-full max-w-2xl text-left">
              <h1 className="text-5xl leading-tight font-bold bg-gradient-to-r from-blue-600 to-cyan-300 text-transparent bg-clip-text">
                Hi! We are RF3i
              </h1>
              <p className="mt-6 text-gray-600 text-xl leading-relaxed">
                Nhóm tập hợp những người đam mê điện tử, nhúng, truyền tin không
                dây, xử lý tín hiệu và các lĩnh vực cao tần. Lab được sáng lập
                bởi TS.Lê Minh Thùy, với các thành viên là các nghiên cứu sinh,
                thạc sĩ , kỹ sư và các sinh viên thuộc ngành kỹ thuật đo và tin
                học công nghiệp.
              </p>
              <button className=" my-6 py-2 px-8 border-2 rounded-full hover:text-gray-200 hover:bg-gradient-to-r from-blue-400 to-cyan-600 border-blue-500">
                Join us
              </button>
            </div>
          </section>
          <hr className="border border-gray-300" />
          <section className="p-4">
            <div className="flex flex-wrap text-center">
              <div className="md:w-1/2 py-4 md:px-10 mb-4 md:mb-0">
                <img
                  className="mx-auto mb-3 w-20"
                  src="https://img.icons8.com/clouds/2x/cellular-network.png"
                  alt=""
                />
                <h3 className="text-2xl mb-3 font-heading text-gray-800 font-medium">
                  Antena
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptate quo dolorem, ducimus suscipit consequatur unde.
                </p>
              </div>
              <div className="md:w-1/2 py-4 md:px-10 mb-4 md:mb-0 md:border-l">
                <img
                  className="mx-auto mb-3 w-20"
                  src="https://img.icons8.com/clouds/2x/module.png"
                  alt=""
                />
                <h3 className="text-2xl mb-3 font-heading text-gray-800 font-medium">
                  Embedded
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptate quo dolorem, ducimus suscipit consequatur unde.
                </p>
              </div>
            </div>
          </section>
          <hr className="border border-gray-300" />
          <section className="py-8 px-4">
            <div className="flex flex-wrap -mx-4 -mb-6">
              <div className="lg:w-1/3 px-4 mb-6">
                <img
                  className="w-20 mb-2"
                  src="https://img.icons8.com/clouds/2x/electronics.png"
                  alt=""
                />
                <h3 className="text-2xl mb-3 font-heading text-gray-800 font-medium">
                  Hardware
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptate quo dolorem, ducimus suscipit consequatur unde.
                </p>
              </div>
              <div className="lg:w-1/3 px-4 mb-6 ">
                <img
                  className="w-20 mb-2"
                  src="https://img.icons8.com/clouds/2x/code-fork.png"
                  alt=""
                />
                <h3 className="text-2xl mb-3 font-heading text-gray-800 font-medium">
                  Firmware
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptate quo dolorem, ducimus suscipit consequatur unde.
                </p>
              </div>
              <div className="lg:w-1/3 px-4 mb-6">
                <img
                  className="w-20 mb-2"
                  src="https://img.icons8.com/clouds/2x/code.png"
                  alt=""
                />
                <h3 className="text-2xl mb-3 font-heading text-gray-800 font-medium">
                  Software
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptate quo dolorem, ducimus suscipit consequatur unde.
                </p>
              </div>
            </div>
          </section>
        </div>

        <section className="py-8 " id="researchLeader">
          <div className="container mx-auto">
            <div className="p-4 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl">
              <h2 className="text-2xl font-bold leading-none sm:text-4xl">
                Research Leader
              </h2>
              <p className="px-8 my-4">Assoc. Prof. Le Minh Thuy</p>
            </div>
            <div className="grid grid-cols-5 p-4 md:p-8">
              <div className="flex justify-center px-4 col-span-full md:col-span-1 md:flex-col md:justify-start md:items-start">
                <button className="p-2 border-b-2 md:border-l-2 md:border-b-0 md:py-3 border-gray-300 text-gray-400">
                  Mucius
                </button>
                <button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 border-violet-400 text-gray-50">
                  Fabellas
                </button>
                <button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 border-gray-300 text-gray-400">
                  Aperiam
                </button>
                <button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 border-gray-300 text-gray-400">
                  Nonumy
                </button>
                <button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 border-gray-300 text-gray-400">
                  Propriae
                </button>
              </div>
              <div className="grid gap-12 py-4 text-center sm:grid-cols-2 col-span-full md:col-span-4 md:text-left">
                <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-violet-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    ></path>
                  </svg>
                  <h5 className="text-xl font-semibold">
                    Est facilisis necessitatibus ea
                  </h5>
                  <p>
                    Ex audiam inermis elaboraret eam, oratio petentium ne cum,
                    mundi interesset sit no.
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-violet-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    ></path>
                  </svg>
                  <h5 className="text-xl font-semibold">
                    Vim iudico iisque te
                  </h5>
                  <p>
                    At cibo possim impetus pro, ius id mutat commodo offendit.
                    Cum inani pertinax definitiones ad.
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-violet-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                    ></path>
                  </svg>
                  <h5 className="text-xl font-semibold">Sea inani viris at</h5>
                  <p>
                    Et eos atomorum urbanitas accommodare, in suscipit petentium
                    vis. Pro ea nibh praesent postulant.
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-violet-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                  <h5 className="text-xl font-semibold">
                    Error nihil primis sit ut
                  </h5>
                  <p>
                    Eu vis urbanitas scripserit, civibus scripserit pro id.
                    Omnes congue contentiones te eos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="ourMember" className=" bg-gray-200 rounded-2xl p-4 m-4">
          <div className="flex items-center justify-center mt-6">
            <h2 className="text-4xl font-extrabold pt-4 text-transparent bg-clip-text bg-gradient-to-tr from-gray-900 to-gray-900">
              Our Member
            </h2>
          </div>
          <div className="container flex flex-col items-center justify-center px-4 mx-auto space-y-8 sm:px-10 ">
            <div className="flex flex-row flex-wrap-reverse justify-center">
              <div className="flex flex-col justify-center m-8 text-center">
                <img
                  alt=""
                  className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500"
                  src="https://source.unsplash.com/100x100/?portrait?0"
                />
                <p className="text-xl font-semibold leading-tight">
                  Leroy Jenkins
                </p>
                <p className="text-gray-600">Visual Designer</p>
              </div>
              <div className="flex flex-col justify-center m-8 text-center">
                <img
                  alt=""
                  className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500"
                  src="https://source.unsplash.com/100x100/?portrait?1"
                />
                <p className="text-xl font-semibold leading-tight">
                  Leroy Jenkins
                </p>
                <p className="text-gray-600">Visual Designer</p>
              </div>
              <div className="flex flex-col justify-center m-8 text-center">
                <img
                  alt=""
                  className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500"
                  src="https://source.unsplash.com/100x100/?portrait?2"
                />
                <p className="text-xl font-semibold leading-tight">
                  Leroy Jenkins
                </p>
                <p className="text-gray-600">Visual Designer</p>
              </div>
              <div className="flex flex-col justify-center m-8 text-center">
                <img
                  alt=""
                  className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500"
                  src="https://source.unsplash.com/100x100/?portrait?3"
                />
                <p className="text-xl font-semibold leading-tight">
                  Leroy Jenkins
                </p>
                <p className="text-gray-600">Visual Designer</p>
              </div>
              <div className="flex flex-col justify-center m-8 text-center">
                <img
                  alt=""
                  className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500"
                  src="https://source.unsplash.com/100x100/?portrait?4"
                />
                <p className="text-xl font-semibold leading-tight">
                  Leroy Jenkins
                </p>
                <p className="text-gray-600">Visual Designer</p>
              </div>
              <div className="flex flex-col justify-center m-8 text-center">
                <img
                  alt=""
                  className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500"
                  src="https://source.unsplash.com/100x100/?portrait?5"
                />
                <p className="text-xl font-semibold leading-tight">
                  Leroy Jenkins
                </p>
                <p className="text-gray-600">Visual Designer</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
