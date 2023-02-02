import { useState } from 'react';

export default function ContactForm() {
  const [data, setData] = useState({
    name: '',
    email: '',
    phone_number: '',
    message: '',
  });
  const [status, setStatus] = useState(0);
  // Handles the submit event on form submit.
  const handleSubmit = async (event: any) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    // const data = {
    //   name: event.target.first?.value,
    //   email: event.target.second?.value,
    //   phone: event.target.third?.value,
    //   message: event.target.last?.value,
    // };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = `${process.env.RF3i_API}/rf3i-api/contact-us/submit-form`;

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    // alert(`Is this your full name: ${result.message}`);
    setStatus(result ? 1 : 2);
    setTimeout(() => {
      setStatus(0);
    }, 5000);
  };
  return (
    // We pass the event to the handleSubmit() function on submit.
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Your Name"
          onChange={(e) => {
            setData({ ...data, name: e.target.value });
          }}
          className="text-gray-700 bg-gray-100 border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
        />
      </div>
      <div className="mb-6">
        <input
          type="email"
          placeholder="Your Email"
          onChange={(e) => {
            setData({ ...data, email: e.target.value });
          }}
          className="text-gray-700 bg-gray-100 border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
        />
      </div>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Your Phone"
          onChange={(e) => {
            setData({ ...data, phone_number: e.target.value });
          }}
          className="text-gray-700 bg-gray-100 border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
        />
      </div>
      <div className="mb-6">
        <textarea
          rows={6}
          placeholder="Your Message"
          onChange={(e) => {
            setData({ ...data, message: e.target.value });
          }}
          className="text-gray-700 bg-gray-100 border-[f0f0f0] focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
        ></textarea>
      </div>
      <div className="flex">
        <button
          type="submit"
          className={`${
            status === 0 ? 'w-full' : 'w-0 hidden'
          } duration-200 transition h-16 bg-gradient-to-l from-cyan-500 to-blue-500 border-primary w-full rounded border p-3 text-white transition hover:bg-opacity-90`}
        >
          Send Message
        </button>
        <div
          className={`${
            status === 1 ? 'w-full' : 'w-0 hidden'
          } duration-200 transition h-16 alert alert-success shadow-lg`}
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Success! Thank for your respond!</span>
          </div>
        </div>
        <div
          className={`${
            status === 2 ? 'w-full' : 'w-0 hidden'
          } duration-200 transition h-16 alert alert-error shadow-lg`}
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Error!Please try again!</span>
          </div>
        </div>
      </div>
    </form>
  );
}
