import React from "react";

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
    },
    {
      id: 2,
      title: "Task Manager App",
    },
    {
      id: 3,
      title: "Portfolio Website",
    },
  ];

  return (
    <section
      id="work"
      style={{
        padding: "50px 20px",
        textAlign: "center",
      }}
    >
      <h2>My Work</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            style={{
              border: "1px solid gray",
              padding: "20px",
              width: "220px",
              borderRadius: "10px",
            }}
          >
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;