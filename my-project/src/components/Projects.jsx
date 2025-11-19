// import { FiExternalLink, FiGithub } from "react-icons/fi";

// const projectData = [
//   { 
//     title: "Portfolio Website", 
//     desc: "React + Tailwind + Vite", 
//     link: "#",
//     github: "#"
//   },
//   { 
//     title: "Todo App", 
//     desc: "React state + localStorage", 
//     link: "#",
//     github: "#"
//   },
//   { 
//     title: "Login UI", 
//     desc: "Modern Glassmorphic UI", 
//     link: "#",
//     github: "#"
//   }
// ];

// function Projects() {
//   return (
//     <section id="projects" className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
//       <h2 className="text-5xl font-bold text-center text-white mb-16">
//         My <span className="text-blue-400">Projects</span>
//       </h2>

//       <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
//         {projectData.map((p, i) => (
//           <div 
//             key={i} 
//             className="bg-white/10 border border-white/20 p-6 rounded-2xl shadow-2xl backdrop-blur-xl
//                        hover:scale-[1.05] hover:shadow-blue-500/40 transition-all duration-500 group"
//           >
            
//             <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-blue-400 duration-300">
//               {p.title}
//             </h3>

//             <p className="text-gray-300 mb-6">{p.desc}</p>

//             <div className="flex justify-between">
              
//               {/* Live Demo */}
//               <a 
//                 href={p.link}
//                 className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium"
//               >
//                 Live Demo <FiExternalLink />
//               </a>

//               {/* GitHub */}
//               <a 
//                 href={p.github}
//                 className="text-gray-300 hover:text-white text-xl"
//               >
//                 <FiGithub />
//               </a>

//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Projects;

import { FiExternalLink, FiGithub } from "react-icons/fi";

const projectData = [
  { 
    title: "Math Quiz App", 
    desc: "Interactive quiz with score system",
    img: "https://cdn.jotfor.ms/templates/screenshot/app-templates/math-quiz-app.png?v=1552654269",
    link: "#",
    github: "#"
  },
  { 
    title: "Food Restaurant UI", 
    desc: "Modern food ordering UI design",
    img: "https://img.freepik.com/free-photo/people-taking-photos-food_23-2149303524.jpg?semt=ais_hybrid&w=740&q=80",
    link: "#",
    github: "#"
  },
  { 
    title: "YouTube Clone UI", 
    desc: "Video streaming interface UI",
    img: "https://i.ytimg.com/vi/UMvmVW5QUo4/mqdefault.jpg",
    link: "#",
    github: "#"
  },
  { 
    title: "Music Player App", 
    desc: "Beautiful modern music player UI",
    img: "https://play-lh.googleusercontent.com/Q9Zct94Z1xICrUuiBqxIgV749NXrRped9XPaYPIUITY-TWzYSEDGvRgkyMCKGrH20Ng",
    link: "#",
    github: "#"
  },
  { 
    title: "Todo List App", 
    desc: "Task manager with localStorage",
    img: "https://img.utdstc.com/icon/a78/f4a/a78f4a59edb0e5775314f7eaf27d377c1815b371bceac42401c0f03b85578a18:200",
    link: "#",
    github: "#"
  },
  { 
    title: "Figma Portfolio UI", 
    desc: "Portfolio designed using Figma",
    img: "https://s3-alpha.figma.com/hub/file/4706310533/e5b2e73b-3e60-484e-9ba7-658a1a91b651-cover.png",
    link: "#",
    github: "#"
  }
];

function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
      <h2 className="text-5xl font-bold text-center text-white mb-16">
        My <span className="text-blue-400">Projects</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {projectData.map((p, i) => (
          <div
            key={i}
            className="bg-white/10 border border-white/20 rounded-2xl shadow-xl overflow-hidden backdrop-blur-xl hover:scale-[1.05] hover:shadow-blue-500/30 transition-all duration-500 group"
          >
            {/* Project Image */}
            <img 
              src={p.img} 
              alt={p.title} 
              className="w-full h-48 object-cover group-hover:brightness-110 transition-all duration-500"
            />

            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-blue-400 duration-300">
                {p.title}
              </h3>

              <p className="text-gray-300 mb-6">{p.desc}</p>

              <div className="flex justify-between">
                <a 
                  href={p.link}
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium"
                >
                  Live Demo <FiExternalLink />
                </a>

                <a 
                  href={p.github}
                  className="text-gray-300 hover:text-white text-xl"
                >
                  <FiGithub />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;


