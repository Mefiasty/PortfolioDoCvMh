import React, { useState, useEffect } from "react";
function Header() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <div className="">
      <div>
        <h1 className="flex fixed right-2 border-2 rounded-full p-2 bg-slate-600 bg-opacity-60">
          {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}
        </h1>
      </div>
      <h1 className="text-neutral-300 text-5xl pb-4">Portfolio </h1>
      <div className="Links bg-neutral-700 pt-2 pb-2 rounded-3xl grid md:grid-cols-4 gap-2 md:flex-wrap md:">
        <div className="col-span-1 hover:bg-slate-900 hover:rounded-full sm:row-span-1">
          <a href="" className="hover:bg-slate-900">
            Home
          </a>
        </div>
        <div className="col-span-1 hover:bg-slate-900 hover:rounded-full sm:row-span-1">
          <a href="" className="hover:bg-slate-900">
            Projects
          </a>
        </div>
        <div className="col-span-1 hover:bg-slate-900 hover:rounded-full sm:row-span-1">
          <a href="" className="">
            Contact
          </a>
        </div>
        <div className="col-span-1 hover:bg-slate-900 hover:rounded-full sm:row-span-1">
          <a href="">Download CV</a>
        </div>
      </div>
      <br></br>
      <br />
    </div>
  );
  // current time on live
}
export default Header;
