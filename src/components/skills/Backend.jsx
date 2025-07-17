import React from "react";

const backendSkillsData = [
  { name: "React", level: "Advanced" },
  { name: "Svelte", level: "Advanced" },
  { name: "Angular", level: "Advanced" },
  { name: "AngularJS", level: "Advanced" },
  { name: "Vue.js", level: "Advanced" },
  { name: "Next.js", level: "Advanced" },
  { name: "React Native", level: "Advanced" },
  { name: "Flutter", level: "Advanced" },
  { name: "Node.js", level: "Advanced" },
  { name: "Express", level: "Advanced" },
  { name: "Django", level: "Advanced" },
  { name: "Flask", level: "Advanced" },
  { name: "ASP.NET", level: "Intermediate" },
  { name: "ASP.NET Core", level: "Intermediate" },
  { name: "Spring", level: "Intermediate" },
  { name: "Spring Boot", level: "Intermediate" },
  { name: "Laravel", level: "Intermediate" },
  { name: "Ruby on Rails", level: "Intermediate" },
  { name: "Gin", level: "Basic" },
  { name: "Rocket", level: "Basic" },
];

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frameworks & Libraries</h3>

      <div className="skills__box">
        {/* First Group */}
        <div className="skills__group">
          {backendSkillsData.slice(0, 10).map((skill, index) => (
            <div className="skills__data" key={index}>
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">{skill.name}</h3>
                <span className="skills__level">{skill.level}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Second Group */}
        <div className="skills__group">
          {backendSkillsData.slice(10, 20).map((skill, index) => (
            <div className="skills__data" key={index}>
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">{skill.name}</h3>
                <span className="skills__level">{skill.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Backend;