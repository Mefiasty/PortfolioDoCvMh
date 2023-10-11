const Projekty = () => {
  return (
    <>
      <h1 className="text-6xl m-6">Projekty</h1>
      <div className="grid grid-cols-3">
        <div>
          <a
            href="https://restauracja-wsei-projekt.vercel.app"
            target="_blank"
            className="text-2xl
                 hover:text-red-700"
          >
            Projekt nr.1
            <center>
              <img src="/projekt1.png" alt="" srcset="" className="mt-2" />
            </center>
          </a>
        </div>
        <div>
          <a
            href="https://fanpageditto.vercel.app/"
            target="_blank"
            className="text-2xl
                     hover:text-red-700"
          >
            Projekt nr.2
            <center>
              <img src="/projekt2.png" alt="" srcset="" className="mt-2" />
            </center>
          </a>
        </div>
      </div>
    </>
  );
};

export default Projekty;
