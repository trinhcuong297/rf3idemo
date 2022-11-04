import { UserGroupIcon } from '@heroicons/react/24/outline';

export default function Activ() {
  return (
    <div className="mx-auto max-w-7xl px-4 md:px-12 lg:px-24 py-8 sm:py-12 lg:py-16">
      <div className="flex items-center">
        <UserGroupIcon
          className="animate-wiggle mx-4 h-10 w-10 text-blue-600"
          aria-hidden="true"
        />
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-indigo-400 to-blue-600">
          Activity
        </h2>
      </div>
      <div className="carousel carousel-center w-full h-[30rem] p-4 space-x-4 bg-gray-100 rounded-box">
        <div className="carousel-item">
          <img
            src="https://placeimg.com/640/480/tech"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://placeimg.com/640/480/tech"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://placeimg.com/640/480/tech"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://placeimg.com/640/480/tech"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://placeimg.com/640/480/tech"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://placeimg.com/640/480/tech"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://placeimg.com/640/480/tech"
            className="rounded-box"
          />
        </div>
      </div>
    </div>
  );
}
