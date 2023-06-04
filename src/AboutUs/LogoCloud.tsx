import { useEffect, useState } from 'react';

export default function LogoCloud() {
  const [data, setData] = useState<Data[]>([]);

  interface Data {
    id?: String | null | undefined;
    logo_company_url?: String | null | undefined;
    activity_name?: String | null | undefined;
  }

  useEffect(() => {
    fetch(`${process.env.RF3i_API}/rf3i-api/about-us/associated-company`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        console.log(data);
      });
  }, []);
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold leading-8 text-gray-900">
          Trusted by many company
        </h2>
        <div className="mx-auto mt-10 flex flex-wrap items-center justify-center">
          {data.map((e, index) => {
            return (
              <>
                <img
                  className="w-1/5 object-contain px-5 mx-4"
                  src={`${e.logo_company_url}`}
                  alt="Transistor"
                  width={100}
                  height={50}
                  key={index}
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
