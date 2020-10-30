import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import Navigation from '../commons/Navigation/Navigation';

const Resume = () => {
    return (
        <Fragment>
            <Navigation />
            <Container>
                <div>
                    <div className="text-center">
                        <h1>MD RANA MAHMUD</h1>
                        <p>  <a href="http://github.com/ranamahmud">  <i class="fab fa-github fa-lg"></i></a>
                            <a href="https://www.linkedin.com/in/mdranamahmud/"><a href="http://github.com/ranamahmud">  <i class="fab fa-linkedin fa-lg"></i></a></a>
                            <a href="mailto:ranamd0@gmail.com"> <i class="far fa-envelope fa-lg"></i>ranamd0@gmail.com</a>
                        </p>
                        <p>  Rois Miar Bari,Bhairabpur,<br /> Bhairab, Kishoreganj, Bangladesh</p>
                +8801750161301
                   </div>
                <h2>PROFILE</h2>
                    <hr />
                    <p>Highly specialized in Data Cleaning, Visualization, Analysis, and Machine Learning with 4 years
                of experience. React Developer with 6 months’ experience.</p>
                    <h2>PROJECTS</h2>
                    <hr />
                    <h3> JavaScript Projects</h3>
                    <h4>Creative Agency</h4>
                <ul>
                        <li>Responsive web app to order and manage digital service.
                        
               </li>
                        <li>User dashboard for users to manage their orders.
                        </li>
                        <li>Admin dashboard for admins manages orders.</li>
                    </ul>
                    <p> Live Site: <a href="https://creative-agency-d474c.web.app/">https://creative-agency-d474c.web.app/</a></p>
                    <p> Github: <a href="https://github.com/ranamahmud/creative-agency-client">https://github.com/ranamahmud/creative-agency-client</a></p>
                <p>Tech Used: React, Bootstrap, Express JS and MongoDB, Firebase</p>
                <h4>Volunteer Network</h4>
                    <ul>
                        <li>SPA for volunteers to participate in volunteer work.</li>
                        <li>Users can see their volunteer activities.</li>
                        <li>Admin dashboard to manage volunteer works.
                </li>
                    </ul>
                    <p>Live Site: <a href="https://volunteer-network-ccb28.web.app/">https://volunteer-network-ccb28.web.app/</a></p>
                    <p> Github: <a href="https://github.com/ranamahmud/volunteer-network">https://github.com/ranamahmud/volunteer-network</a></p>
                    <p> Tech Used: React, Bootstrap, React Router, Firebase, MongoDB and Express JS.</p>
                <h4>Travel Guru</h4>
                    <ul>
                        <li>Single page web application to book travel destination.</li>
                        <li>Has a slider to show travel destination details and images.</li>
                        <li>User authentication and data management using firebase.</li>
                    </ul>
             
                    <p> Live Site: <a href="https://travel-guru-8d0d8.web.app/">https://travel-guru-8d0d8.web.app/</a></p>
                    <p> Github: <a href="https://github.com/ranamahmud/travel-guru">https://github.com/ranamahmud/travel-guru</a></p>
                    <p>Tech Used: React, Bootstrap, React Router, Firebase.</p>
                <h3>Python Projects</h3>
                    <ul>
                        <li><a href="https://github.com/ranamahmud/write-a-data-science-blog-post-udacity">Write A Data Science Blog Post Udacity</a></li>
                        <li><a href="https://github.com/ranamahmud/disaster-response-pipelines-udacity">Disaster Response Pipeline Project</a></li>
                        <li><a href="https://github.com/ranamahmud/dog-breed-classifier-udacity-capstone">Dog Breed Classifier Web App</a></li>
                        <li><a href="https://github.com/ranamahmud/recommendations-with-ibm-udacity">Recommendations with IBM</a></li>
                    </ul>

                    <h2> TECHNICAL STRENGTHS SKILLS</h2>
                    <hr/>
                    <p>Frameworks: React,React Native,Bootstrap,Express JS
                Material UI</p>
                    <p> Web Technologies: HTML5,CSS3</p>
                    <p>  Programming Languages: JavaScript, R, Python, Java, C, C++</p>
                    <p> Database: SQL,MySQL,MongoDB,NoSQL</p>
                    <p> Software & Tools: Git,Github,Figma,Adobe XD,Bash,Spark,VS Code</p>
                    <p>   Machine Learning: Supervised and Unsupervised Algorithms</p>
                    <p>Deep Learning: Keras, Tensorflow</p>
                    <p>Operating Systems: Mac, Linux, and Windows</p>
               <h2>EXPERIENCE</h2>
                    <hr />
                CRUX Intern Mobile App Developer, October 2018 - December 2018
                Shafi Consultancy Ltd, Bangladesh Statistical Programmer Internee, March 2018 -
                September 2018
                <h2>EDUCATION</h2>
                    <hr />
                    <p>Udacity.com Data Scientist Nanodegree</p>
                    <p>Shahjalal University of Science and Technology, Sylhet January 2018 - August 2019
                    M.S. in Statistics
                Department of Statistics     
                </p>
                
                    <p> Shahjalal University of Science and Technology, Sylhet January 2013 - December 2017
                    B.S. in Statistics
                Department of Statistics</p>
                    <p> Second Major in Computer Science and Engineering
                    Department of Computer Science and Engineering
                DataCamp.com 135 Course</p>
               </div>
            </Container>
        </Fragment>
    );
};

export default Resume;