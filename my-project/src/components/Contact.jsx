function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black">
      <h2 className="text-5xl font-bold text-center text-white mb-10">
        Contact <span className="text-blue-400">Me</span>
      </h2>

      <div className="max-w-xl mx-auto bg-white/10 backdrop-blur-xl p-8 rounded-2xl 
                      border border-white/20 shadow-2xl">

        <form className="space-y-6">

          {/* Name Input */}
          <div>
            <label className="text-gray-300 block mb-2 text-left">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 rounded-xl bg-white/20 text-white 
                         border border-white/30 focus:border-blue-400
                         outline-none transition-all"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="text-gray-300 block mb-2 text-left">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-xl bg-white/20 text-white 
                         border border-white/30 focus:border-blue-400
                         outline-none transition-all"
            />
          </div>

          {/* Message Input */}
          <div>
            <label className="text-gray-300 block mb-2 text-left">Your Message</label>
            <textarea
              rows="5"
              placeholder="Type your message…"
              className="w-full p-3 rounded-xl bg-white/20 text-white 
                         border border-white/30 focus:border-blue-400
                         outline-none transition-all"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold text-lg 
                       bg-blue-600 hover:bg-blue-500 text-white
                       shadow-lg hover:shadow-blue-500/50 transition-all"
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
}

export default Contact;

