import React, { useRef } from "react";
import { IoIosSend } from "react-icons/io";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const ContactUs = () => {
  const form = useRef();

  const submit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    console.log("Form submitted:", Object.fromEntries(formData));
    // Add your EmailJS or backend logic here
  };

  const center = { lat: 11.562212, lng: 104.8905721 };
  const locations = [{ id: 1, lat: 11.568676, lng: 104.8907417 }];

  const mapStyles = [
    { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
    // ... you can add more custom styles to make the map look "Dark Mode"
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6 lg:p-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Column: Contact Info & Map */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-black italic tracking-tighter text-red-600 mb-4">
              VISIT THE AUTEUR
            </h1>
            <p className="text-gray-400 max-w-md">
              Have questions about screenings, private bookings, or membership? 
              Our team is ready to help you experience cinema at its finest.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 text-gray-300">
              <div className="bg-red-600/10 p-3 rounded-lg text-red-600"><FaMapMarkerAlt /></div>
              <span>Phnom Penh, Cambodia</span>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <div className="bg-red-600/10 p-3 rounded-lg text-red-600"><FaPhoneAlt /></div>
              <span>(+855) 12 345 678</span>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <div className="bg-red-600/10 p-3 rounded-lg text-red-600"><FaEnvelope /></div>
              <span>support@theauteur.com</span>
            </div>
          </div>

          {/* Google Maps Container */}
          <div className="rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
            <LoadScript googleMapsApiKey="YOUR_API_KEY">
              <GoogleMap
                mapContainerStyle={{ width: "100%", height: "350px" }}
                center={center}
                zoom={14}
                options={{ styles: mapStyles }}
              >
                {locations.map((l) => (
                  <Marker key={l.id} position={{ lat: l.lat, lng: l.lng }} />
                ))}
              </GoogleMap>
            </LoadScript>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="bg-gray-900/50 border border-gray-800 p-8 rounded-3xl shadow-xl">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <form ref={form} onSubmit={submit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Full Name</label>
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="Joe Doe"
                  className="mt-1 w-full bg-black border border-gray-700 rounded-xl px-4 py-3 focus:border-red-600 outline-none transition"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email Address</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="joe@example.com"
                  className="mt-1 w-full bg-black border border-gray-700 rounded-xl px-4 py-3 focus:border-red-600 outline-none transition"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Subject</label>
              <input
                type="text"
                name="subject"
                required
                placeholder="Booking Inquiry"
                className="mt-1 w-full bg-black border border-gray-700 rounded-xl px-4 py-3 focus:border-red-600 outline-none transition"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Message</label>
              <textarea
                name="message"
                required
                rows="5"
                placeholder="How can we help you today?"
                className="mt-1 w-full bg-black border border-gray-700 rounded-xl px-4 py-3 focus:border-red-600 outline-none transition resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all transform hover:scale-[1.02] active:scale-95"
            >
              <IoIosSend size={20} /> SEND MESSAGE
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;