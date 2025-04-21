import { useState, useEffect } from "react";
import whatIamGood from "../svg/whatIamGood.svg";
import SkillsSvg from "../svg/Skills.svg";
import "../App.css";

const Skills = () => {
  const [imageSrc, setImageSrc] = useState(
    window.innerWidth < 768 ? whatIamGood : SkillsSvg
  );
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setImageSrc(window.innerWidth < 768 ? whatIamGood : SkillsSvg);
      setShowDescription(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <img src={imageSrc} alt="skills of Sai Charan" className="skills" />
      {showDescription && (
        <div className="mSkills">
          <p className="skillName">Python</p>
          <p className="skillName">Front-end (Frameworks)</p>
          <p className="skillName">Artificial Intelligence</p>
          <p className="skillName">C programming</p>
          <p className="skillName">IoT</p>
          <p className="skillName">DSA</p>
          <p className="skillName">UI/UX</p>
          <p className="skillName">Photography & editing</p>
          <p className="skillName">Git</p>
          <p className="skillName">Graphic design</p>
        </div>
      )}
    </div>
  );
};

export default Skills;
