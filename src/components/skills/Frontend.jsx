import React from "react";

const skillsData = [
  { name: "HTML & CSS", level: "Advanced" },
  { name: "JavaScript", level: "Advanced" },
  { name: "TypeScript", level: "Advanced" },
  { name: "Java", level: "Advanced" },
  { name: "Kotlin", level: "Advanced" },
  { name: "Python", level: "Advanced" },
  { name: "Dart", level: "Advanced" },
  { name: "PHP", level: "Advanced" },
  { name: "MySQL", level: "Advanced" },
  { name: "PostgreSQL", level: "Advanced" },
  { name: "SQLite", level: "Advanced" },
  { name: "MongoDB", level: "Advanced" },
  { name: "Firebase", level: "Advanced" },
  { name: "Redis", level: "Intermediate" },
  { name: "C", level: "Intermediate" },
  { name: "C++", level: "Intermediate" },
  { name: "C#", level: "Intermediate" },
  { name: "Rust", level: "Basic" },
  { name: "Golang", level: "Basic" },
  { name: "Ruby", level: "Basic" },
];

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Languagues & Databases</h3>

      <div className="skills__box">
        {/* Split skillsData into two groups */}
        <div className="skills__group">
          {skillsData.slice(0, 10).map((skill, index) => (
            <div className="skills__data" key={index}>
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">{skill.name}</h3>
                <span className="skills__level">{skill.level}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="skills__group">
          {skillsData.slice(10, 20).map((skill, index) => (
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

export default Frontend;