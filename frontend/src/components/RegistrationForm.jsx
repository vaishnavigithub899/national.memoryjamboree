// src/pages/Form.jsx
import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    emergencyMobile: "",
    dob: "",
    gender: "",
    school: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted & redirecting to payment gateway...");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-green-50 to-blue-50 py-12 px-4">
      <div className="max-w-4xl mx-auto shadow-xl rounded-2xl bg-white overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-sky-600 to-green-500 text-white py-8 px-6 text-center">
          <h1 className="text-4xl font-extrabold mb-2">
            🏫 Memory Jamboree 2025
          </h1>
          {/* <p className="font-medium">
            Early bird available till{" "}
            <span className="font-bold underline">26th September 2025</span>
          </p> */}
          <p className="text-sm opacity-90 mt-2">
            Kindly fill the form carefully. Once submitted, changes cannot be
            made.
          </p>
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="p-8 grid gap-6 md:grid-cols-2 bg-white"
        >
          {/* Name */}
          <div className="col-span-2">
            <label className="block text-sm font-bold text-sky-900 mb-1">
              Name of the Participant *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border-2 border-sky-200 rounded-lg p-3 focus:border-sky-500 focus:ring-2 focus:ring-sky-400 outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-bold text-sky-900 mb-1">
              Email *
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border-2 border-sky-200 rounded-lg p-3 focus:border-sky-500 focus:ring-2 focus:ring-sky-400 outline-none"
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-sm font-bold text-sky-900 mb-1">
              Mobile Number (WhatsApp) *
            </label>
            <input
              type="tel"
              name="mobile"
              required
              value={formData.mobile}
              onChange={handleChange}
              className="w-full border-2 border-sky-200 rounded-lg p-3 focus:border-sky-500 focus:ring-2 focus:ring-sky-400 outline-none"
            />
          </div>

          {/* Emergency Mobile */}
          <div>
            <label className="block text-sm font-bold text-sky-900 mb-1">
              Emergency Mobile Number *
            </label>
            <input
              type="tel"
              name="emergencyMobile"
              required
              value={formData.emergencyMobile}
              onChange={handleChange}
              className="w-full border-2 border-sky-200 rounded-lg p-3 focus:border-sky-500 focus:ring-2 focus:ring-sky-400 outline-none"
            />
          </div>

          {/* DOB */}
          <div>
            <label className="block text-sm font-bold text-sky-900 mb-1">
              Date of Birth *
            </label>
            <input
              type="date"
              name="dob"
              required
              value={formData.dob}
              onChange={handleChange}
              className="w-full border-2 border-sky-200 rounded-lg p-3 focus:border-sky-500 focus:ring-2 focus:ring-sky-400 outline-none"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-bold text-sky-900 mb-1">
              Gender *
            </label>
            <select
              name="gender"
              required
              value={formData.gender}
              onChange={handleChange}
              className="w-full border-2 border-sky-200 rounded-lg p-3 focus:border-sky-500 focus:ring-2 focus:ring-sky-400 outline-none"
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* School */}
          <div className="col-span-2">
            <label className="block text-sm font-bold text-sky-900 mb-1">
              School / Organization Name *
            </label>
            <input
              type="text"
              name="school"
              placeholder='Type "NA" if not applicable'
              required
              value={formData.school}
              onChange={handleChange}
              className="w-full border-2 border-sky-200 rounded-lg p-3 focus:border-sky-500 focus:ring-2 focus:ring-sky-400 outline-none"
            />
          </div>

          {/* Address */}
          <div className="col-span-2">
            <label className="block text-sm font-bold text-sky-900 mb-1">
              Address Line 1 *
            </label>
            <input
              type="text"
              name="address1"
              required
              value={formData.address1}
              onChange={handleChange}
              className="w-full border-2 border-sky-200 rounded-lg p-3 focus:border-sky-500 focus:ring-2 focus:ring-sky-400 outline-none"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-bold text-sky-900 mb-1">
              Address Line 2 *
            </label>
            <input
              type="text"
              name="address2"
              required
              value={formData.address2}
              onChange={handleChange}
              className="w-full border-2 border-sky-200 rounded-lg p-3 focus:border-sky-500 focus:ring-2 focus:ring-sky-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-sky-900 mb-1">
              City *
            </label>
            <input
              type="text"
              name="city"
              required
              value={formData.city}
              onChange={handleChange}
              className="w-full border-2 border-sky-200 rounded-lg p-3 focus:border-sky-500 focus:ring-2 focus:ring-sky-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-sky-900 mb-1">
              State *
            </label>
            <input
              type="text"
              name="state"
              required
              value={formData.state}
              onChange={handleChange}
              className="w-full border-2 border-sky-200 rounded-lg p-3 focus:border-sky-500 focus:ring-2 focus:ring-sky-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-sky-900 mb-1">
              Postal / Zip Code *
            </label>
            <input
              type="text"
              name="zip"
              required
              value={formData.zip}
              onChange={handleChange}
              className="w-full border-2 border-sky-200 rounded-lg p-3 focus:border-sky-500 focus:ring-2 focus:ring-sky-400 outline-none"
            />
          </div>

          {/* Terms */}
          <div className="col-span-2 bg-green-50 p-4 rounded-xl border border-green-200">
            <h2 className="font-bold text-green-700 mb-2">
              📜 Terms & Conditions
            </h2>
            <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
              <li>No changes or refunds after payment.</li>
              <li>No refund if date/venue changes due to emergency.</li>
              <li>No refund for non-attendance.</li>
              <li>
                Fees cannot be adjusted to other courses or participants.
              </li>
              <li>
                Brain Infinite reserves the right to revise terms anytime.
              </li>
            </ul>
          </div>

          <div className="col-span-2 flex items-center gap-2">
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              required
              className="w-5 h-5 accent-sky-600"
            />
            <span className="text-sm text-gray-700">
              I accept the Terms and Conditions
            </span>
          </div>

          {/* Fees */}
          <div className="col-span-2 text-center text-lg font-bold text-green-800 bg-green-100 p-3 rounded-lg">
            💰 Pay 3500/- 
          </div>

          {/* Submit */}
          <div className="col-span-2">
            <a
              href="https://imjo.in/yGpVry" // ✅ destination page
              className="w-full inline-block text-center bg-gradient-to-r from-sky-600 to-green-500 hover:opacity-90 text-white font-bold py-3 rounded-lg shadow-lg transition"
            >
              Submit & Pay Now
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
