function skills() {
  return (
    <div className="grid xl:grid-cols-2 xl:gap-2 xl:pb-10 max-sm:block max-sm:pb-10 ">
      <div className="col-span-1">
        <p className="cursor-default text-6xl text-yellow-700 font-bold pt-24 pb-6 font-sans">
          Skills
        </p>
        <center>
          <div className="cursor-default border-4 border-x-zinc-800 border-y-zinc-600 h-14 w-10 rounded-full animate-bounce">
            <p className="text-white h-4 pt-1 text-4xl">⬇</p>
          </div>
        </center>
      </div>
      <div className="col-span-1">
        <center>
          <img
            src="./src/assets/img/skills.svg"
            alt="skills.svg"
            className="w-auto h-72 pt-28 animate-bounce  "
          ></img>
        </center>
      </div>
      <div className="grid max-xl:grid-cols-4 gap-2 pb-6 border-4 pt-10 pr-8 -pl-4 rounded-full border-y-zinc-800 border-x-zinc-600 cursor-default hover:scale-110 transform transition duration-1000 ease-in-out max-sm:block md:grid-cols-4 max-sm:pb-12 max-sm:pl-8">
        <div className="col-span-1 hover:text-2xl hover:pb-4 hover:scale-110 transform transition duration-500 ease-in-out">
          <h1 className="font-bold  text-red-600">React</h1> <p>80%</p>
        </div>
        <div className="col-span-1 hover:text-2xl hover:pb-4 hover:scale-110 transform transition duration-500 ease-in-out">
          <h1 className="font-bold  text-red-600">HTML</h1> <p>80%</p>
        </div>
        <div className="col-span-1 hover:text-2xl hover:pb-4 hover:scale-110 transform transition duration-500 ease-in-out">
          <h1 className="font-bold  text-red-600">TailwindCss</h1> <p>80%</p>
        </div>
        <div className="col-span-1 hover:text-2xl hover:pb-4 hover:scale-110 transform transition duration-500 ease-in-out">
          <h1 className="font-bold  text-red-600">JavaScript</h1> <p>80%</p>
        </div>
      </div>
    </div>
  );
}
export default skills;
