import myImage from "../assets/jyoti.jpg";

function About() {
  return (
    <section id="about" className="pt-28 pb-20 px-6">
      <h2 className="text-5xl font-extrabold text-center text-white tracking-wide mb-12">
        About Me
      </h2>

      <div className="max-w-7xl mx-auto bg-white/10 backdrop-blur-xl p-16 rounded-3xl
                      border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.15)]
                      flex flex-col md:flex-row items-center gap-20 transition-all duration-500">

        {/* Full Visible Bigger Profile Image */}
        <div className="w-96 h-96 rounded-3xl overflow-hidden 
                        shadow-[0_0_45px_rgba(0,172,255,0.7)]
                        hover:scale-105 transition-all duration-500 border border-white/30 flex items-center justify-center bg-black/30">
          <img 
            src={myImage} 
            alt="Jyoti Mahant" 
            className="w-full h-full object-contain rounded-2xl"
          />
        </div>

        {/* Bigger Text Box */}
        <div className="text-center md:text-left space-y-6 max-w-2xl bg-white/5 p-8 rounded-2xl border border-white/10 shadow-inner">
          
          <p className="text-gray-200 text-[1.40rem] leading-relaxed font-medium">
            I am <span className="font-bold text-blue-300 tracking-wide">Jyoti Mahant</span>, 
            a passionate learner and future Frontend Developer.
          </p>

          <p className="text-gray-300 text-[1.30rem] leading-relaxed font-medium">
            I love creating modern, beautiful and user-friendly web interfaces using 
            HTML, CSS, JavaScript, React & UI/UX principles.
          </p>

          <p className="text-gray-300 text-[1.30rem] leading-relaxed font-medium">
            My dream is to work with top tech companies, build amazing products and 
            constantly improve my skills every single day.
          </p>

          <button className="px-8 py-3 text-lg rounded-xl font-semibold text-white
                            bg-gradient-to-r from-blue-600 to-purple-600 
                            hover:opacity-90 hover:scale-105 transition duration-300 shadow-lg">
            Know More →
          </button>
        </div>

      </div>
    </section>
  );
}

export default About;






