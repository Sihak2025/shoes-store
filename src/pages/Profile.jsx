import React from "react";
import {Ticket,Heart,Clock,Settings,CreditCard,Film,ChevronRight,
} from "lucide-react";

const Profile = () => {
  const recentBookings = [
    {
      id: 1,
      title: "Dune: Part Two",
      date: "Oct 24, 2025",
      seat: "J12, J13",
      status: "Upcoming",
    },
    {
      id: 2,
      title: "Oppenheimer",
      date: "Aug 12, 2025",
      seat: "F05",
      status: "Completed",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="relative mb-8 bg-slate-800 rounded-3xl overflow-hidden border border-slate-700">
          <div className="h-32 bg-gradient-to-r" style={{backgroundImage: "linear-gradient(to right, #6366f1, #8b5cf6)"}}></div>
          <div className="px-8 pb-8">
            <div className="flex flex-col md:flex-row items-center md:items-end -mt-12 gap-6">
              <div className="relative">
                <img
                  className="h-32 w-32 rounded-2xl border-4 border-[#0f172a] bg-slate-700 object-cover shadow-xl"
                  src="https://i.pinimg.com/736x/9b/c6/8b/9bc68b112fe53d7527f9b9298d4f2ef4.jpg"
                  alt="Avatar"
                />
                <div className="absolute -bottom-2 -right-2 bg-yellow-500 text-[#0f172a] text-xs font-bold px-2 py-1 rounded-md">
                  VIP
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold text-white">Sihak Hong</h1>
                <p className="text-slate-400">Movie Enthusiast • Joined 2025</p>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-xl transition font-medium border border-slate-600">
                  <Settings size={18} />
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-indigo-600 to-violet-700 p-6 rounded-3xl shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <CreditCard className="text-indigo-200" size={24} />
                <span className="text-xs font-bold bg-white/20 px-2 py-1 rounded">
                  PLATINUM
                </span>
              </div>
              <p className="text-sm text-indigo-100 opacity-80 font-mono">
                Member ID: 8842 1102
              </p>
              <div className="mt-6">
                <p className="text-2xl font-bold text-white">2,450 pts</p>
                <p className="text-xs text-indigo-100">
                  Redeem for free popcorn
                </p>
              </div>
            </div>
            <div className="bg-slate-800 p-6 rounded-3xl border border-slate-700">
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-4">
                Top Genres
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Sci-Fi", "Action", "Drama", "IMAX"].map((genre) => (
                  <span
                    key={genre}
                    className="px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-full border border-slate-600">
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 space-y-6">
            <section className="bg-slate-800 rounded-3xl border border-slate-700 overflow-hidden">
              <div className="p-6 border-b border-slate-700 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Ticket className="text-red-500" size={20} />
                  <h2 className="text-lg font-bold">Recent Bookings</h2>
                </div>
                <button className="text-sm text-red-500 hover:underline">
                  View All
                </button>
              </div>
              <div className="divide-y divide-slate-700">
                {recentBookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="p-4 hover:bg-slate-700/50 transition cursor-pointer flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-slate-900 rounded-xl">
                        <Film size={20} className="text-slate-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">
                          {booking.title}
                        </h4>
                        <p className="text-xs text-slate-400">
                          {booking.date} • Seat {booking.seat}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-[10px] font-bold px-2 py-1 rounded-full ${
                          booking.status === "Upcoming"
                            ? "bg-green-500/10 text-green-500"
                            : "bg-slate-600/20 text-slate-400"
                        }`}>
                        {booking.status}
                      </span>
                      <ChevronRight size={16} className="text-slate-500" />
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <section className="bg-slate-800 rounded-3xl border border-slate-700 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="text-pink-500" size={20} />
                <h2 className="text-lg font-bold">Watchlist</h2>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="aspect-[2/3] bg-slate-900 rounded-xl animate-pulse border border-slate-700 flex items-center justify-center">
                    <span className="text-[10px] text-slate-600 font-medium italic">
                      Poster Placeholder
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
