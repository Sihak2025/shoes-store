// import React, { useRef } from "react";
// import { IoIosSend } from "react-icons/io";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// const ContactUs = () => {
//   const form = useRef();
//   const center = {
//     lat: 11.568676, 
//     lng: 104.8907417,
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData(form.current);
//     console.log("Form Data:", Object.fromEntries(formData));
//     alert("Message sent! We will contact you soon.");
//   };

//   return (
//     <div className="min-h-screen bg-black text-white flex flex-col items-center py-12 px-4 gap-12">
//       <div className="bg-gray-900 border border-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 w-full max-w-2xl">
//         <h2 className="text-3xl font-black italic tracking-tighter text-red-600 mb-8 uppercase">
//           Send Us a Message
//         </h2>
//         <form ref={form} onSubmit={handleSubmit} className="space-y-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="flex flex-col gap-2">
//               <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Full Name</label>
//               <input
//                 type="text"
//                 name="user_name"
//                 required
//                 className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 focus:border-red-600 outline-none transition text-sm"
//               />
//             </div>
//             <div className="flex flex-col gap-2">
//               <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email Address</label>
//               <input
//                 type="email"
//                 name="user_email"
//                 required
//                 className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 focus:border-red-600 outline-none transition text-sm"
//               />
//             </div>
//           </div>
//           <div className="flex flex-col gap-2">
//             <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Message</label>
//             <textarea
//               name="message"
//               required
//               rows="5"
//               className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 focus:border-red-600 outline-none transition text-sm resize-none"
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             className="w-full flex items-center justify-center gap-3 bg-red-600 text-white font-black py-4 rounded-xl shadow-lg hover:bg-red-700 transition transform active:scale-95 uppercase tracking-widest text-sm"
//           >
//             <IoIosSend size={20} /> Send Message
//           </button>
//         </form>
//       </div>
//       <div className="w-full max-w-4xl space-y-4">
//         <div className="rounded-3xl overflow-hidden border border-gray-800 shadow-2xl h-[450px]">
//           <LoadScript googleMapsApiKey="AIzaSyBaW4QFZSoJiHNe6CowuSr2nP7RPDtJ5zE">
//             <GoogleMap
//               mapContainerStyle={{ width: "100%", height: "100%" }}
//               center={center}
//               zoom={15}
//             >
//               <Marker position={center} />
//             </GoogleMap>
//           </LoadScript>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default ContactUs;
import React, { useRef, useState } from "react";
import { IoIosSend } from "react-icons/io";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaCheckCircle } from "react-icons/fa";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const ContactUs = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const center = { lat: 11.568676, lng: 104.8907417 };

  // Custom Dark Mode Map Style
  const darkMapStyle = [
    { elementType: "geometry", stylers: [{ color: "#1a1a1a" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#808080" }] },
    { featureType: "road", elementType: "geometry", stylers: [{ color: "#333333" }] },
    { featureType: "water", elementType: "geometry", stylers: [{ color: "#000000" }] },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000); // Reset after 5s
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden font-sans">
      {/* Decorative Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-900/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-900/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-none">
            Get in <span className="text-red-600">Touch</span>
          </h1>
          <p className="mt-4 text-gray-400 text-sm md:text-base tracking-[0.2em] uppercase font-light">
            Exclusive Screenings • Private Bookings • Support
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Contact Cards (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            {[
              { icon: <FaMapMarkerAlt />, label: "Location", val: "Phnom Penh, KH" },
              { icon: <FaPhoneAlt />, label: "Call Us", val: "(+855) 12 345 678" },
              { icon: <FaEnvelope />, label: "Email", val: "hello@theauteur.com" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md hover:border-red-600/50 transition-colors group">
                <div className="text-red-600 text-xl mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">{item.label}</p>
                <p className="text-lg font-medium">{item.val}</p>
              </div>
            ))}
          </div>

          {/* RIGHT: The Form (8 cols) */}
          <div className="lg:col-span-8">
            <div className="bg-gradient-to-b from-gray-900 to-black border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in duration-500">
                  <FaCheckCircle className="text-red-600 text-6xl mb-4" />
                  <h3 className="text-3xl font-bold italic uppercase tracking-tighter">Message Received</h3>
                  <p className="text-gray-400 mt-2 tracking-wide">Our team will reach out within 24 hours.</p>
                </div>
              ) : (
                <form ref={form} onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative group">
                      <input type="text" name="user_name" required placeholder=" " className="peer w-full bg-transparent border-b-2 border-gray-800 py-3 outline-none focus:border-red-600 transition-colors" />
                      <label className="absolute left-0 top-3 text-gray-500 uppercase text-xs font-bold tracking-widest transition-all peer-focus:-top-4 peer-focus:text-red-600 peer-placeholder-shown:top-3">Full Name</label>
                    </div>
                    <div className="relative group">
                      <input type="email" name="user_email" required placeholder=" " className="peer w-full bg-transparent border-b-2 border-gray-800 py-3 outline-none focus:border-red-600 transition-colors" />
                      <label className="absolute left-0 top-3 text-gray-500 uppercase text-xs font-bold tracking-widest transition-all peer-focus:-top-4 peer-focus:text-red-600 peer-placeholder-shown:top-3">Email Address</label>
                    </div>
                  </div>

                  <div className="relative group">
                    <textarea name="message" required rows="4" placeholder=" " className="peer w-full bg-transparent border-b-2 border-gray-800 py-3 outline-none focus:border-red-600 transition-colors resize-none"></textarea>
                    <label className="absolute left-0 top-3 text-gray-500 uppercase text-xs font-bold tracking-widest transition-all peer-focus:-top-4 peer-focus:text-red-600 peer-placeholder-shown:top-3">How can we help?</label>
                  </div>

                  <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-5 rounded-full transition transform active:scale-95 uppercase tracking-[0.3em] flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(220,38,38,0.3)]">
                    <IoIosSend className="text-xl" /> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Full-Width Dark Map */}
        <div className="mt-20">
          <div className="rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl h-[500px] grayscale-[0.5] hover:grayscale-0 transition-all duration-700">
            <LoadScript googleMapsApiKey="AIzaSyBaW4QFZSoJiHNe6CowuSr2nP7RPDtJ5zE">
              <GoogleMap
                mapContainerStyle={{ width: "100%", height: "100%" }}
                center={center}
                zoom={15}
                options={{ styles: darkMapStyle, disableDefaultUI: true }}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;