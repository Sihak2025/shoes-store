// import React, { useRef } from "react";
// import { IoIosSend } from "react-icons/io";

// const ContactUs = () => {
//   const form = useRef();

//   const submit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted");

//     const formData = new FormData(form.current);
//     console.log(Object.fromEntries(formData));
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <div className="bg-gray-100 rounded-2xl shadow-xl p-10 w-full max-w-2xl">
//         <h2 className="text-3xl font-bold text-black mb-6">
//           Send Us a Message
//         </h2>

//         <form ref={form} onSubmit={submit} className="space-y-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="text-sm font-medium">
//                 Full Name *
//               </label>
//               <input
//                 type="text"
//                 name="user_name"
//                 required
//                 placeholder="Joe"
//                 className="mt-1 w-full rounded-lg border px-4 py-2"
//               />
//             </div>

//             <div>
//               <label className="text-sm font-medium">
//                 Email Address *
//               </label>
//               <input
//                 type="email"
//                 name="user_email"
//                 required
//                 placeholder="you@example.com"
//                 className="mt-1 w-full rounded-lg border px-4 py-2"
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="text-sm font-medium">
//                 Phone Number
//               </label>
//               <input
//                 type="text"
//                 name="user_phone"
//                 placeholder="(+855) phone"
//                 className="mt-1 w-full rounded-lg border px-4 py-2"
//               />
//             </div>

//             <div>
//               <label className="text-sm font-medium">
//                 Subject *
//               </label>
//               <input
//                 type="text"
//                 name="subject"
//                 required
//                 placeholder="How can we help?"
//                 className="mt-1 w-full rounded-lg border px-4 py-2"
//               />
//             </div>
//           </div>

//           <div>
//             <label className="text-sm font-medium">
//               Message *
//             </label>
//             <textarea
//               name="message"
//               required
//               rows="6"
//               placeholder="Tell us more..."
//               className="mt-1 w-full rounded-lg border px-4 py-2"
//             ></textarea>
//           </div>

//           <button
//             type="submit"
//             className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-medium py-3 rounded-lg shadow-md hover:opacity-90 transition cursor-pointer"
//           >
//             <IoIosSend /> Send Message
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };


// export default ContactUs;


import React, { useRef } from "react";
import { IoIosSend } from "react-icons/io";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const ContactUs = () => {
  const form = useRef();

  const submit = (e) => {
    e.preventDefault();
    console.log("Form submitted");

    const formData = new FormData(form.current);
    console.log(Object.fromEntries(formData));
  };

  const center = {
    lat: 11.562212,
    lng: 104.8905721,
  };

  const locations = [
    { id: 1, lat: 11.568676, lng: 104.8907417 },
  
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-10 p-5">

      <div className="min-h-screen flex items-center justify-center">
       <div className="bg-gray-100 rounded-2xl shadow-xl p-10 w-full max-w-2xl">
         <h2 className="text-3xl font-bold text-black mb-6">
           Send Us a Message
         </h2>

         <form ref={form} onSubmit={submit} className="space-y-4">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div>
               <label className="text-sm font-medium">
                 Full Name *
               </label>
              <input
                type="text"
                name="user_name"
                required
                placeholder="Joe"
                className="mt-1 w-full rounded-lg border px-4 py-2"
              />
            </div>

            <div>
              <label className="text-sm font-medium">
                Email Address *
              </label>
              <input
                type="email"
                name="user_email"
                required
                placeholder="you@example.com"
                className="mt-1 w-full rounded-lg border px-4 py-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">
                Phone Number
              </label>
              <input
                type="text"
                name="user_phone"
                placeholder="(+855) phone"
                className="mt-1 w-full rounded-lg border px-4 py-2"
              />
            </div>

            <div>
              <label className="text-sm font-medium">
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                required
                placeholder="How can we help?"
                className="mt-1 w-full rounded-lg border px-4 py-2"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">
              Message *
            </label>
            <textarea
              name="message"
              required
              rows="6"
              placeholder="Tell us more..."
              className="mt-1 w-full rounded-lg border px-4 py-2"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-medium py-3 rounded-lg shadow-md hover:opacity-90 transition cursor-pointer"
          >
            <IoIosSend /> Send Message
          </button>
        </form>
      </div>
    </div>

      <div className="w-full max-w-4xl">
        <LoadScript googleMapsApiKey="YOUR_API_KEY">
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "400px" }}
            center={center}
            zoom={12}
          >
            {locations.map((l) => (
              <Marker key={l.id} position={{ lat: l.lat, lng: l.lng }} />
            ))}
          </GoogleMap>
        </LoadScript>
      </div>

    </div>
  );
};

export default ContactUs;