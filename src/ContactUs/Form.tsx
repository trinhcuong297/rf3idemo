export default function ContactForm() {
  // Handles the submit event on form submit.
  const handleSubmit = async (event: any) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const data = {
      name: event.target.first?.value,
      email: event.target.second?.value,
      phone: event.target.third?.value,
      message: event.target.last?.value,
    };

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
    alert(`Is this your full name: ${result.message}`);
  };
  return (
    // We pass the event to the handleSubmit() function on submit.
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Your Name"
          className="text-gray-700 bg-gray-100 border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
        />
      </div>
      <div className="mb-6">
        <input
          type="email"
          placeholder="Your Email"
          className="text-gray-700 bg-gray-100 border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
        />
      </div>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Your Phone"
          className="text-gray-700 bg-gray-100 border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
        />
      </div>
      <div className="mb-6">
        <textarea
          rows={6}
          placeholder="Your Message"
          className="text-gray-700 bg-gray-100 border-[f0f0f0] focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          className="bg-gradient-to-l from-cyan-500 to-blue-500 border-primary w-full rounded border p-3 text-white transition hover:bg-opacity-90"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
