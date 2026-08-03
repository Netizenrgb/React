import React, { useState } from "react";
import Reacthookform from "./component/Reacthookform";
import Usercart from "./component/Usercart";

const App = () => {
  const [user, setUser] = useState([]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-12 flex flex-col lg:flex-row gap-10 justify-center items-start">
      {/* Left Column: Form Container */}
      <div className="w-full lg:w-[400px] lg:sticky lg:top-8 flex-shrink-0">
        <Reacthookform user={user} setUser={setUser} />
      </div>

      {/* Right Column: User Cards Grid */}
      <div className="flex-1 w-full">
        <div className="mb-6 border-b border-slate-800/60 pb-3 flex justify-between items-center">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
            Registered Users
          </h3>
          <span className="bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-bold px-2.5 py-1 rounded-full">
            {user?.length || 0} Total
          </span>
        </div>

        {user && user.length > 0 ? (
          /* Responsive grid layout for cards */
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 animate-fade-in">
            {user.map((elem, index) => {
              return <Usercart key={elem.id || index} user={elem} />;
            })}
          </div>
        ) : (
          /* Empty State UX */
          <div className="flex flex-col items-center justify-center p-12 border border-dashed border-slate-800 rounded-2xl bg-slate-900/20 text-center">
            <p className="text-slate-500 text-sm">No users added yet.</p>
            <p className="text-xs text-slate-600 mt-1">
              Fill out the form to populate this grid.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
