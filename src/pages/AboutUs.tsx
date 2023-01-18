import Head from 'next/head';

import ActiveMember from '../AboutUs/AboutUs';
import ResearchLeader from '../AboutUs/ResearchLeader';

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>RF3i - Infomation</title>
      </Head>
      <div className="space-y-12 text-gray-800 px-4 md:px-20 scroll-smooth mb-8">
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
          <ResearchLeader />
        </section>

        <ActiveMember />
      </div>
    </>
  );
}
