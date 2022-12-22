function Main() {
  return (
    // templete of the main page for portfolio in vite with tailwindcss
    <div className="main grid xl:grid-cols-2 gap-2  max-sm:grid-cols-2 max-sm:gap-2 max-sm:block md:grid-cols-2">
      <div className="main__image col-span-1 ">
        <center>
          <img
            src="../src/assets/img/zdjecie.png"
            alt="img"
            className="rounded-full xl:pt-12 xl:pb-6 xl:ml-auto md:pt-12 sm:pt-2 sm:p-10 sm:mr-auto"
          ></img>
        </center>
      </div>
      <div className="main__title col-span-1">
        <div className="main__greeting animate-pulse pt-16">
          <h1 className="font-bold text-4xl sm:text-6xl md:text-9xl xl:text-9xl cursor-default">
            Web Dev
          </h1>
          <h2 className="font-bold text-3xl sm:text-4xl md:text-6xl xl:text-6xl cursor-default">
            Mateusz Harbuz
          </h2>
        </div>
      </div>

      <div className="main__name bg-transparent">
        <h1 className="text-xl font-bold text-red-500 cursor-default hover:text-yellow-400">
          Aspiring Student for the position of Front End Developer react
        </h1>
      </div>
      <div className="main__aboutme bg-transparent">
        <p className="text-center">
          I am a beginner web developer living in Tomaszów Lubelski, Poland.
          Since 2022, I have been studying computer science extramural. I'm
          interested in front-end development in react.
        </p>
      </div>
    </div>
  );
}
export default Main;
