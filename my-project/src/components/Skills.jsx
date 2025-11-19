const skills = [
  { name: "HTML", level: "w-[90%]" },
  { name: "CSS", level: "w-[80%]" },
  { name: "JavaScript", level: "w-[60%]" },
  { name: "React", level: "w-[50%]" }
];

function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <h2 className="text-4xl font-bold text-center">Skills</h2>

      <div className="max-w-3xl mx-auto mt-8 space-y-6">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span>{skill.name}</span>
            </div>
            <div className="w-full bg-gray-700 h-3 rounded-xl">
              <div className={`${skill.level} bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-xl`}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

