function Skills() {
  const hardwareSkills = [
    { name: "Circuit Analysis", value: 75 },
    { name: "MATLAB", value: 75 },
    { name: "Arduino", value: 80 },
    // { name: "PCB Design", value: 80 },
    // { name: "Digital Electronics", value: 85 },
    // { name: "Signal Processing", value: 75 },
  ];

  const softwareSkills = [
    // { name: "KiCAD", value: 85 },
    // { name: "LabVIEW", value: 70 },
    { name: "Python", value: 80 },
    { name: "C/C++", value: 70 },
    { name: "Git", value: 70 },
    // { name: "SPICE", value: 80 },
  ];

  function renderSkill(skills) {
    return skills.map((skill, index) => {
      return <div key={index} className="mb-3">
        <div className="d-flex justify-content-between mb-1">
          <span>{skill.name}</span>
          <span>{skill.value}%</span>
        </div>
        <div className="progress" role="progressbar" style={{height: "10px"}}>
          <div
            className="progress-bar"
            style={{ width: `${skill.value}%` }}
          ></div>
        </div>
      </div>
    });
  }

  return (
    <section className="container my-5 text-center" id="skills">
      <h2 className="mb-5 fw-bold section-title">Skills</h2>
      <div className="row g-5">
        <div className="col-md-6">
          <h4>Hardware & Electronics</h4>
          {renderSkill(hardwareSkills)}
        </div>
        <div className="col-md-6">
        <h4>Software & Tools</h4>
          {renderSkill(softwareSkills)}
        </div>
      </div>
    </section>
  );
}

export default Skills;
