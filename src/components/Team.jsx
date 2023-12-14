import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
          <p>
          Meet the powerhouse behind FixLab—our team of dedicated professionals. With a collective experience spanning various facets of IT solutions, our experts bring together a wealth of knowledge and innovation. Committed to delivering excellence, each team member contributes unique skills, passion, and a relentless drive toward client satisfaction. Whether it's crafting cutting-edge solutions, providing top-tier technical support, or managing intricate projects, our cohesive team embodies expertise, integrity, and a customer-centric approach. At FixLab, we thrive on collaboration, creativity, and continuous learning, ensuring we stay at the forefront of technological advancements to serve our clients with unparalleled dedication and proficiency
          </p>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    {" "}
                    <img src={d.img} alt="..." className="team-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
