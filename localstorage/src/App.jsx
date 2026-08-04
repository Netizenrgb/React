import React, { useState } from "react";
import Navbar from "./component/Navbar";
import Hookform from "./component/Hookform";
import Usercart from "./component/Usercart";

const App = () => {
  const [userdata, setUserdata] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || [];
  });
  const [toggle, setToggle] = useState(true);
  const [updateduser, setupdateduser] = useState(null);

  let del = (id) => {
    const updatelocalstorage = userdata.filter((user) => user.id !== id);
    setUserdata(updatelocalstorage);
    localStorage.setItem("user", JSON.stringify(updatelocalstorage));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white pb-20">
      <Navbar userdata={userdata} setToggle={setToggle} />

      <main className="max-w-7xl mx-auto px-6 mt-8">
        {toggle && (
          <Hookform
            updateduser={updateduser}
            setupdateduser={setupdateduser}
            userdata={userdata}
            setUserdata={setUserdata}
            setToggle={setToggle}
          />
        )}

        <section className="mt-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold tracking-tight text-slate-200">
              Registered Users ({userdata.length})
            </h2>
          </div>

          {userdata.length === 0 ? (
            <div className="flex flex-col items-center justify-center p-12 rounded-3xl border border-dashed border-slate-800 bg-slate-900/30 text-center">
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mb-3 text-slate-400">
                👤
              </div>
              <h3 className="text-base font-semibold text-slate-300">
                No users found
              </h3>
              <p className="text-xs text-slate-500 mt-1 max-w-xs">
                Toggle the form above to add your first user card to the
                database.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {userdata.map((user, index) => (
                <Usercart
                  setToggle={setToggle}
                  setupdateduser={setupdateduser}
                  userdata={user}
                  key={user.id || index}
                  del={del}
                />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default App;
