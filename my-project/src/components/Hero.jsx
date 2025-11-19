import heroImage from "../assets/hero.jpg"; // change filename if different

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6"
    >

      {/* Bigger Profile Image - No Cut */}
      <div className="w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden 
                      shadow-[0_0_40px_rgba(0,150,255,0.7)] border-4 border-white/30 
                      mb-7 hover:scale-105 transition-all duration-500 bg-black/20 flex items-center justify-center">

        <img
          src={heroImage}
          alt="Jyoti"
          className="w-full h-full object-contain"
        />
      </div>

      <h2 className="text-5xl font-extrabold mb-4 leading-tight bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text tracking-wide">
        Hello, I'm <span className="text-white drop-shadow-lg">Jyoti</span>
      </h2>

      <p className="text-xl text-gray-300 max-w-2xl leading-relaxed font-medium">
        Passionate Web Developer in making 💻  
        Learning React, building cool things and improving every day!
      </p>

      <button className="mt-8 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl font-semibold hover:opacity-85 hover:scale-105 duration-300 shadow-xl">
        Download Resume
      </button>
    </section>
  );
}

export default Hero;


