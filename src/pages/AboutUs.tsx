import Head from 'next/head';
import Link from 'next/link';

import ActiveMember from '../AboutUs/AboutUs';
import Alumni from '../AboutUs/Alumni';
import LogoCloud from '../AboutUs/LogoCloud';
import ResearchLeader from '../AboutUs/ResearchLeader';
import { useAppSelector } from '../Redux/hooks';

export default function AboutUs() {
  const langSet = useAppSelector((state) => state.language.lang);
  return (
    <>
      <Head>
        <title>{langSet === 'VN' ? 'Về RF3i' : 'RF3i - Infomation'}</title>
      </Head>
      <div className="space-y-12 text-gray-800 px-4 md:px-20 scroll-smooth py-12">
        <div className="px-12 mx-auto bg-gray-100">
          <section className="py-12 px-4 text-center">
            <div className="w-full max-w-2xl text-left">
              <h1 className="text-5xl leading-tight font-bold bg-gradient-to-r from-blue-600 to-cyan-300 text-transparent bg-clip-text">
                {langSet === 'VN'
                  ? 'Xin chào! Chúng mình là RF3i'
                  : 'Hi! We are RF3i'}
              </h1>
              <p className="mt-6 text-gray-600 text-xl leading-relaxed text-justify">
                {langSet === 'VN'
                  ? `Nhóm tập hợp những người đam mê điện tử, nhúng, truyền tin không
                dây, xử lý tín hiệu và các lĩnh vực cao tần. Lab được sáng lập
                bởi TS.Lê Minh Thùy, với các thành viên là các nghiên cứu sinh,
                thạc sĩ , kỹ sư và các sinh viên thuộc ngành kỹ thuật đo và tin
                học công nghiệp.`
                  : `The group brings together enthusiasts of electronics, embedded, wireless communication, signal processing and high-frequency fields. Lab was founded by Dr. Le Minh Thuy, with members who are PhD students, masters, engineers and students of measurement engineering and industrial informatics.`}
              </p>
              <Link href={'/Contact'}>
                <button className=" my-6 py-2 px-8 border-2 rounded-full hover:text-gray-200 hover:bg-gradient-to-r from-blue-400 to-cyan-600 border-blue-500">
                  {langSet === 'VN' ? 'Ứng tuyển' : 'Join us'}
                </button>
              </Link>
            </div>
          </section>
          <hr className="border border-gray-300" />
          <section className="p-4">
            <div className="flex flex-wrap text-center">
              <div className="w-full md:w-1/2 py-4 md:px-10 mb-4 md:mb-0">
                <img
                  className="mx-auto mb-3 w-20"
                  src="https://img.icons8.com/clouds/2x/cellular-network.png"
                  alt=""
                />
                <h3 className="text-2xl mb-3 font-heading text-gray-800 font-medium">
                  {langSet === 'VN' ? 'Cao tần' : 'Antena'}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {langSet === 'VN'
                    ? 'Lĩnh vực nghiên cứu chính và cũng là thế mạnh của lab'
                    : 'The main research area and also the strength of the lab'}
                </p>
              </div>
              <div className="w-full md:w-1/2 py-4 md:px-10 mb-4 md:mb-0 md:">
                <img
                  className="mx-auto mb-3 w-20"
                  src="https://img.icons8.com/clouds/2x/module.png"
                  alt=""
                />
                <h3 className="text-2xl mb-3 font-heading text-gray-800 font-medium">
                  {langSet === 'VN' ? 'Hệ thống nhúng' : 'Embedded'}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {langSet === 'VN'
                    ? `Lĩnh vực nghiên cứu đang được lab tích cực phát triển và đã có
                  nhiều bước phát triển`
                    : `The research area is being actively developed by the lab and there have been many developments`}
                </p>
              </div>
            </div>
          </section>
          {/* <hr className="border border-gray-300" /> */}
          <section className="py-8 px-4">
            <div className="flex flex-wrap -mx-4 mb-6">
              <div className="w-full lg:w-1/3 px-4 mb-6 flex flex-col items-center">
                <img
                  className="w-20 mb-2"
                  src="https://img.icons8.com/clouds/2x/electronics.png"
                  alt=""
                />
                <h3 className="text-2xl mb-3 font-heading text-gray-800 font-medium">
                  {langSet === 'VN' ? 'Phần cứng' : 'Hardware'}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {langSet === 'VN'
                    ? 'Bao gồm các lĩnh vực điện tử, sóng cao tần'
                    : 'Covers the fields of electronics, high frequency waves'}
                </p>
              </div>
              <div className="w-full lg:w-1/3 px-4 mb-6 flex flex-col items-center ">
                <img
                  className="w-20 mb-2"
                  src="https://img.icons8.com/clouds/2x/code-fork.png"
                  alt=""
                />
                <h3 className="text-2xl mb-3 font-heading text-gray-800 font-medium">
                  {langSet === 'VN' ? 'Firmware' : 'Firmware'}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {langSet === 'VN'
                    ? 'Lập trình cho vi điều khiển'
                    : 'Programming for Microcontrollers'}
                </p>
              </div>
              <div className="w-full lg:w-1/3 px-4 mb-6 flex flex-col items-center">
                <img
                  className="w-20 mb-2"
                  src="https://img.icons8.com/clouds/2x/code.png"
                  alt=""
                />
                <h3 className="text-2xl mb-3 font-heading text-gray-800 font-medium">
                  {langSet === 'VN' ? 'Phần mềm' : 'Software'}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {langSet === 'VN'
                    ? 'Tạo các web, app cho các ứng dụng IoT'
                    : 'IoT web, app'}
                </p>
              </div>
            </div>
            <hr className="border border-gray-300" />
          </section>
        </div>
        <section>
          <LogoCloud />
        </section>
        <section className=" " id="researchLeader">
          <ResearchLeader />
        </section>
        <div className="collapse collapse-arrow border border-base-300 border-x-0 bg-gray-100">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-xl font-medium">
            {langSet === 'VN' ? 'Các thành viên lab RF3i' : 'Our Member'}
          </div>
          <div className="collapse-content ">
            <ActiveMember />
          </div>
        </div>
        <div className="collapse collapse-arrow border border-base-300 border-x-0 bg-gray-100">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-xl font-medium">
            {langSet === 'VN' ? 'Cựu sinh viên lab RF3i' : 'Our Alumni'}
          </div>
          <div className="collapse-content ">
            <Alumni />
          </div>
        </div>
      </div>
    </>
  );
}
