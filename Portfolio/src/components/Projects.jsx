function Projects() {
  return (
    <div className="dopokolorowania bg-zinc-800 bg-opacity-30 rounded-t-2xl">
      <h1 className="text-lg font-extrabold text-red-700">My projects</h1>
      <section id="project">
        <div className="Project">
          <h2>TailwindCss Components For React</h2>
          <center>
            <img
              src="tailwind.png"
              className="w-56 h-1/2 p-2 hover:scale-110 transform transition duration-500 ease-in-out"
            ></img>
          </center>
          <p>
            Page with components to copy. The project is in progress using a
            collaborative github session
          </p>
        </div>
      </section>
    </div>
  );
}
export default Projects;
