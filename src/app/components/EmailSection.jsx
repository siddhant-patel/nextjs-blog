// 'use client';

// import React from "react";

// function EmailSection() {
//   const onSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);

//     formData.append("access_key", "b1a3ed63-7449-4684-a2db-27d5dc55c6e2");

//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     const res = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//       },
//       body: json
//     }).then((res) => res.json());

//     if (res.success) {
//       console.log("Success", res);
//     }
//   };

//   return (
//     <form onSubmit={onSubmit}>
//       <input type="text" name="name" />
//       <input type="email" name="email" />
//       <textarea name="message"></textarea>
//       <button type="submit">Submit Form</button>
//     </form>
//   );
// }

// export default EmailSection;


// "use client";
// import React, { useState } from "react";
// import GithubIcon from "../../../public/github-icon.svg";
// import LinkedinIcon from "../../../public/linkedin-icon.svg";
// import Link from "next/link";
// import Image from "next/image";

// EmailSection.jsx
// const EmailSection = () => {
//   const [emailSubmitted, setEmailSubmitted] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = {
//       email: e.target.email.value,
//       subject: e.target.subject.value,
//       message: e.target.message.value,
//     };
//     const JSONdata = JSON.stringify(data);
//     const endpoint = "/api/send";

//     // Form the request for sending data to the server.
//     const options = {
//       // The method is POST because we are sending data.
//       method: "POST",
//       // Tell the server we're sending JSON.
//       headers: {
//         "Content-Type": "application/json",
//       },
//       // Body of the request is the JSON data we created above.
//       body: JSONdata,
//     };

//     const response = await fetch(endpoint, options);
//     const resData = await response.json();

//     if (response.status === 200) {
//       console.log("Message sent.");
//       setEmailSubmitted(true);
//     }
//   };

//   return (
//     <section
//       id="contact"
//       className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
//     >
//       <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
//       <div className="z-10">
//         <h5 className="text-xl font-bold text-white my-2">
//           Let&apos;s Connect
//         </h5>
//         <p className="text-[#ADB7BE] mb-4 max-w-md">
//           {" "}
//           I&apos;m currently looking for new opportunities, my inbox is always
//           open. Whether you have a question or just want to say hi, I&apos;ll
//           try my best to get back to you!
//         </p>
//         <div className="socials flex flex-row gap-2">
//           <Link href="github.com">
//             <Image src={GithubIcon} alt="Github Icon" />
//           </Link>
//           <Link href="linkedin.com">
//             <Image src={LinkedinIcon} alt="Linkedin Icon" />
//           </Link>
//         </div>
//       </div>
//       <div>
//         {emailSubmitted ? (
//           <p className="text-green-500 text-sm mt-2">
//             Email sent successfully!
//           </p>
//         ) : (
//           <form className="flex flex-col" onSubmit={handleSubmit}>
//             <div className="mb-6">
//               <label
//                 htmlFor="email"
//                 className="text-white block mb-2 text-sm font-medium"
//               >
//                 Your email
//               </label>
//               <input
//                 name="email"
//                 type="email"
//                 id="email"
//                 required
//                 className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
//                 placeholder="jacob@google.com"
//               />
//             </div>
//             <div className="mb-6">
//               <label
//                 htmlFor="subject"
//                 className="text-white block text-sm mb-2 font-medium"
//               >
//                 Subject
//               </label>
//               <input
//                 name="subject"
//                 type="text"
//                 id="subject"
//                 required
//                 className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
//                 placeholder="Just saying hi"
//               />
//             </div>
//             <div className="mb-6">
//               <label
//                 htmlFor="message"
//                 className="text-white block text-sm mb-2 font-medium"
//               >
//                 Message
//               </label>
//               <textarea
//                 name="message"
//                 id="message"
//                 className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
//                 placeholder="Let's talk about..."
//               />
//             </div>
//             <button
//               type="submit"
//               className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
//             >
//               Send Message
//             </button>
//           </form>
//         )}
//       </div>
//     </section>
//   );
// };

// export default EmailSection;

"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../../public/github/github-icon.svg"; // Update the path as needed
import LinkedinIcon from "../../../public/github/linkedin-icon.svg"; // Update the path as needed

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("access_key", "b1a3ed63-7449-4684-a2db-27d5dc55c6e2");

    const data = Object.fromEntries(formData);
    const JSONdata = JSON.stringify(data);
    const endpoint = "https://api.web3forms.com/submit";

    // Form the request for sending data to the server.
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (resData.success) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    } else {
      console.log("Message failed to send.", resData);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I&apos;ll try my best
          to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://linkedin.com">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
