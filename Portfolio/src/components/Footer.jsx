function footer() {
  const date = new Date();
  let currentYear = date.getFullYear();
  return (
    <footer>
      <p className="text-red-700">
        © {currentYear} - Made with ❤️ by <a href="">Mateusz Harbuz</a>
      </p>
    </footer>
  );
}
export default footer;
