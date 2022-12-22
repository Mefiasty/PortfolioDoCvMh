function Contact() {
  return (
    <div className="Contact bg-zinc-800 pb-10 bg-opacity-30 rounded-b-2xl">
      <h1 className="text-3xl font-extrabold text-red-700">Contact</h1>
      <div className="ContactForm">
        <form>
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name.."
          ></input>
          <br></br>
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email.."
          ></input>
          <br></br>
          <label for="subject">Subject</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
          ></textarea>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </div>
  );
}
export default Contact;
