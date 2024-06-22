import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Booking = () => {
  const serviceId = "service_qmb8qlm";
  const templateId = "template_tahpuqk";
  const publicKey = "t0M32_NfZkCZ_uwHW";
  const formRef = useRef();

  const resetForm = () => {
    document.getElementById("contact-form").reset();
  };

  const handleSubmitClicked = (e) => {
    e.preventDefault();
    const email = formRef.current[0].value;
    const firstName = formRef.current[1].value;
    const lastName = formRef.current[2].value;
    const mobile = formRef.current[3].value;
    const templateParams = {
      from_name: `${firstName} ${lastName}`,
      from_email: email,
      from_mobile: mobile,
      to_name: "Sagar",
    };
    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (res) => {
        console.log("SUCCESS!", res);
        toast.success("Submitted Successfully!", {
          position: toast?.POSITION?.TOP_RIGHT,
        });
        resetForm();
      },
      (error) => {
        toast.error("Error, Please try again.", {
          position: toast?.POSITION?.TOP_RIGHT,
        });
        console.log("FAILED...", error.text);
      }
    );
  };
  return (
    <div id="booking" className="py-6 container max-w-md mx-auto">
      <h1 className="text-3xl sm:text-4xl font-semibold font-serif mb-2">
        Contact Us
      </h1>
      <p class="text-sm pb-10">Get In Touch</p>
      <form
        onSubmit={handleSubmitClicked}
        ref={formRef}
        id="contact-form"
        className="max-w-md mx-auto group"
        noValidate
      >
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer input-error peer"
            placeholder=" "
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          />
          <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
            Please enter a valid email address
          </span>
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="floating_first_name"
            id="floating_first_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            pattern="^[a-zA-Z\. ]+$"
            // required
          />
          <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
            Please enter a name
          </span>
          <label
            htmlFor="floating_first_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            First name
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="floating_last_name"
            id="floating_last_name"
            pattern="^[a-zA-Z\. ]+$"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            // required
          />
          <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
            Please enter a name
          </span>
          <label
            htmlFor="floating_last_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Last name
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="tel"
            pattern="^[789]\d{9}$"
            // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            name="floating_phone"
            id="floating_phone"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
            Please enter a valid mobile number
          </span>
          <label
            htmlFor="floating_phone"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Phone number
          </label>
        </div>
        {/* <button
          type="submit"
          onClick={handleSubmitClicked}
          className="button-outline"
          //</form>className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button> */}
        <div className="grid place-items-center mt-8">
          <button
            type="submit"
            onClick={handleSubmitClicked}
            className="btn bg-primary text-black px-6 py-2 rounded-md hover:bg-primary/80 duration-300 group-invalid:pointer-events-none group-invalid:bg-slate-100 text-opacity-70"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Booking;

// Hello {{to_name}},

// You got a new message from {{from_name}}:

// Email :- {{from_email}}

// Mobile :- {{from_mobile}}

// Best wishes,
// EmailJS team
