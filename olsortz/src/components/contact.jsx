import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number is invalid";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Submit form (you can send data to backend or perform any action here)
      console.log("Form submitted:", formData);
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setErrors({});
    }
  };

  return (
    <section>
      <div className="flex justify-around items-center">
        <div className="c-part-1 flex justify-around items-center md:w-[50%] w-full">
        <div className="w-60 md:w-auto my-1">
            <h1 className="uppercase text-2xl text-blue-400">Biju Rajan</h1>
            <p className="text-lg">
              Executive Director <br />
              +966 500064365 <br />
              biju@olsortz.com
            </p>
          </div> 
          <div className="w-60 md:w-auto my-1">
            <h1 className="uppercase text-2xl text-blue-400">
              Habeeb Al Hafidh
            </h1>
            <p className="text-lg">
              CEO & Managing Director <br />
              +966 505924712,
              <br />
              habeeb@olsortz.com <br />
              investmentaxis@hotmail.com
            </p>
          </div>
        </div>
        <div className="c-part-2">
          <div className="c-address">
          <div className="w-60 md:w-auto my-1">
            <h1 className="uppercase text-2xl text-blue-400">
              Habeeb Al Hafidh
            </h1>
            <p className="text-lg">
              CEO & Managing Director <br />
              +966 505924712,
              <br />
              habeeb@olsortz.com <br />
              investmentaxis@hotmail.com
            </p>
          </div>
</div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`mt-1 p-2 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 p-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`mt-1 p-2 border ${
                errors.phone ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className={`mt-1 p-2 border ${
                errors.message ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md`}
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="max-w-48 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="maps">
        <div className="md:flex  md:justify-evenly">
          <h1 className="text-3xl md:my-3 mx-5 ">We Reside Here</h1>
          <div className="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d242.98812692960058!2d80.26507117042007!3d13.071359532877871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1708927702467!5m2!1sen!2sin"
              width="1500"
              height="450"
              className="w-full h-[450px] md:w-[600px] md:h-[450px] p-5 md:p-0 mb-5"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
