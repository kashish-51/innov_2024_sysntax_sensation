import React, { useState } from "react";
import emailjs from 'emailjs-com';

const Autofill = () => {
  const [alertMessage, setAlertMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    // Retrieve the message value from the textarea
    const message = e.target.message.value;

    // Set hardcoded values for name and email
    const name = 'Arnav Singh';
    const email = 'avsingh02as02@gmail.com';

    // Send the email
    emailjs.send(
      "service_v4i04to",
      "template_egajo7o",
      {
        to_name: name,
        user_email: email,
        message: message // Use the retrieved message value
      },
      "BHEzRRGu_zAD0IrtO"
    )
    .then(
      (result) => {
        console.log(result.text);
        setAlertMessage('Message sent successfully!');
        setTimeout(() => setAlertMessage(''), 5000); // Clear the alert after 5 seconds
      },
      (error) => {
        console.log(error.text);
        setAlertMessage('Something went wrong. Please try again.');
      }
    );
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {alertMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
          <span className="block sm:inline">{alertMessage}</span>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <title>Close</title>
              <path d="M14.354 5.646a.5.5 0 0 0-.708 0L10 9.293 5.354 5.646a.5.5 0 1 0-.708.708L9.293 10l-4.647 4.646a.5.5 0 0 0 .708.708L10 10.707l4.646 4.647a.5.5 0 0 0 .708-.708L10.707 10l4.647-4.646a.5.5 0 0 0 0-.708z"/>
            </svg>
          </span>
        </div>
      )}
      <form onSubmit={sendEmail} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Your Message"
            name="message"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="text-white bg-purple-800 hover:bg-purple-500 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Autofill;