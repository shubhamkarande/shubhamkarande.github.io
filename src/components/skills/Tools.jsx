import React from "react";

const toolsData = [
  { name: "Git", level: "Advanced" },
  { name: "AWS", level: "Advanced" },
  { name: "Microsoft Azure", level: "Advanced" },
  { name: "GCP", level: "Advanced" },
  { name: "Postman", level: "Advanced" },
  { name: "RESTful API", level: "Advanced" },
  { name: "GraphQL", level: "Advanced" },
  { name: "Vite", level: "Advanced" },
  { name: "GSAP", level: "Advanced" },
  { name: "Framer Motion", level: "Advanced" },
  { name: "Babel", level: "Advanced" },
  { name: "Redux", level: "Advanced" },
  { name: "JWT", level: "Advanced" },
  { name: "Figma", level: "Advanced" },
  { name: "Adobe XD", level: "Advanced" },
  { name: "Docker", level: "Intermediate" },
  { name: "Kubernetes", level: "Intermediate" },
  { name: "Jest", level: "Intermediate" },
  { name: "shadcn/ui", level: "Basic" },
  { name: "Cypress", level: "Basic" },
];

const Tools = () => {
  return (
    <div className="tools__content">
      <h3 className="tools__title">Cloud, Tools & Others</h3>

      <div className="tools__box">
        {/* Split toolsData into two groups */}
        <div className="tools__group">
          {toolsData.slice(0, 10).map((tool, index) => (
            <div className="tools__data" key={index}>
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="tools__name">{tool.name}</h3>
                <span className="tools__level">{tool.level}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="tools__group">
          {toolsData.slice(10, 20).map((tool, index) => (
            <div className="tools__data" key={index}>
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="tools__name">{tool.name}</h3>
                <span className="tools__level">{tool.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;