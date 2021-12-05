import { useState , useEffect, useRef} from "react";
import Heading from "../heading/Heading";
import "./works.scss"

//import { useState } from "react";

export default function Works() {
    
    //const [count, setCount] = useState(0);
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});
    const ResumeHeading = (props) => {
        return (
          <div className="resume-heading">
            <div className="resume-main-heading">
              <div className="sep">
                <div className="heading-bullet"></div>
                <span>{props.heading ? props.heading : ""}</span>
              </div>
              {props.fromDate && props.toDate ? (
                <div className="heading-date">
                  {props.fromDate + "-" + props.toDate}
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div className="resume-sub-heading">
              <span>{props.subHeading ? props.subHeading : ""}</span>
            </div>
            <div className="resume-heading-description">
              <span>{props.description ? props.description : ""}</span>
            </div>
          </div>
        )
      }

    const resumeBullets = [
        { label: "Education", logoSrc: "assets/education.f17b17ea.svg" },   
        { label: "Programming Skills", logoSrc: "assets/programming-skills.0544df6c.svg" },
        { label: "Projects", logoSrc: "assets/projects.4940b202.svg" },
        { label: "Interests", logoSrc: "assets/interests.77ae1b67.svg" },
      ];
    
      const programmingSkillsDetails = [
    
        { skill: "JavaScript", ratingPercentage: 85 },
        { skill: "React JS", ratingPercentage: 85 },
        { skill: "Java", ratingPercentage: 85 },
        { skill: "C/C++", ratingPercentage: 89 },
        { skill: "Python", ratingPercentage: 70 },
        { skill: "Firebase", ratingPercentage: 70 },
        { skill: "C#", ratingPercentage: 60 },
        { skill: "HTML", ratingPercentage: 80 },
        { skill: "CSS", ratingPercentage: 80 },
        { skill: "Unity", ratingPercentage: 70 },
      ];
    
      const projectsDetails = [
        {
          title: "Personal Portfolio Website",
          duration: { fromDate: "2020", toDate: "2021" },
          description:
            "A Personal Portfolio website to showcase all my details and projects at one place.",
          subHeading: "Technologies Used: React JS",
        },
        {
          title: "Mobile E-shop ",
          duration: { fromDate: "2019", toDate: "2020" },
          description:
            "an uber-eats like application ",
          subHeading: "Technologies Used:  Java , Firebase.",
        },
        
        
      ];
    
      const resumeDetails = [
        /* EDUCATION */
        <div className="resume-screen-container" key="education">
          <ResumeHeading
            heading={"Université des Sciences et de la Technologie d'Oran Mohamed, Algeria"}
            subHeading={"BACHELOR OF SCIENCE INFORMATION TECHNOLOGY"}
            fromDate={"2016"}
            toDate={"2019"}
          />
           <ResumeHeading
            heading={"Université des Sciences et de la Technologie d'Oran Mohamed, Algeria"}
            subHeading={"MASTER OF SCIENCE INFORMATION TECHNOLOGY"}
            fromDate={"2020"}
            toDate={"2022"}
          />
         
        </div>,
        /* WORK EXPERIENCE */
        
        /* PROGRAMMING SKILLS */
        <div
          className="resume-screen-container programming-skills-container"
          key="programming-skills"
        >
          {programmingSkillsDetails.map((skill, index) => (
            <div className="skill-parent" key={index}>
             
                
                <span>{skill.skill}</span>
                
                <div className="skill-percentage">
                  <div
                    style={{ width: skill.ratingPercentage + "%" }}
                    className="active-percentage-bar"
                  ></div>
                </div>
              
            </div>
          ))}
        </div>,
        /* PROJECTS */
        <div className="resume-screen-container" key="projects">
          {projectsDetails.map((projectsDetails, index) => (
            <ResumeHeading
              key={index}
              heading={projectsDetails.title}
              subHeading={projectsDetails.subHeading}
              description={projectsDetails.description}
              fromDate={projectsDetails.duration.fromDate}
              toDate={projectsDetails.duration.toDate}
            />
          ))}
        </div>,
        /* Interests */
        <div className="resume-screen-container" key="interests">
          <ResumeHeading
            heading="Teaching"
            description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
          />
          <ResumeHeading
            heading="Machine learning "
            description=" I was driven by basic curiosity - what is AI and “Machine Learning” exactly? What can it really do? So I did some basic reading and video watching, and got to know the basics - supervised learning, vs unsupervised learning, vs RL , and i knew  this was something worth learning ."
          />
          <ResumeHeading
            heading="Game dev "
            description="I was always interested by game dev, it motivated me into creating many simple game using unity/c#"
          />
        </div>,
      ];
      const [height, setHeight] = useState(0);
      const elementRef = useRef(0);
      useEffect(() => {
        setHeight(elementRef.current.clientHeight);
      }, []);
      const handleCarousal = (index) => {
        let offsetHeight = 30;
    
        let newCarousalOffset = {
          style: { transform: "translateY(" + index * offsetHeight * -1 + "rem)" },
        };
    
        setCarousalOffsetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
      };
    
      const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
          <div
            onClick={() => handleCarousal(index)}
            className={
              index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
            }
            key={index}
          >
            <img
              className="bullet-logo"
              src={bullet.logoSrc}
              alt="B"
            />
            <span className="bullet-label">{bullet.label}</span>
          </div>
        ));
      };
    
      const getResumeScreens = () => {
        return (
          <div
            style={carousalOffsetStyle.style}
            className="resume-details-carousal"
          >
            {resumeDetails.map((ResumeDetail) => ResumeDetail)}
          </div>
        );
      };

      
    
      
    
      return (
        <div className="works" id="works">
           
           <Heading title={'Resume'} sub={'My formal Bio Details '}/>
            <div className="resume-content">
              
              
              <div className="resume-card">
                <div className="resume-bullets">
                  <div className="bullet-container">
                    <div className="bullet-icons"></div>
                    <div className="bullets">{getBullets()}</div>
                  </div>
                </div>
      
                <div className="resume-bullet-details">{getResumeScreens()}</div>
              </div>
            </div>
          </div>
       
      )
    }