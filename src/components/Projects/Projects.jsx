import styles from './Projects.module.css';
import cultfit_homePage from '../../images/Cultfit_homepage.png';
import glassdoor_homePage from "../../images/Glassdoor_homepage.png";
import travelocity_homePage from "../../images/Travelocity_homePage.png";

export function Projects() {
    return (
        <div className={styles.container} id="#projects">
            <h1 className={styles.heading}>PROJECTS</h1>
            <div>
                <div className={styles.projectBox}>
                    <div className={styles.projectImg}>
                        <img src={cultfit_homePage} alt="" />
                    </div>
                    <div className={styles.projectDescription}>
                        <h2>Cultfit</h2>
                        <p>Cultfit is a website where users can take Cultfit gym membership and from the website itself users can stay fit and healthy by reading some yoga tips and from this website users can buy sportswear and can also order healthy food.</p>
                        <div className={styles.projectLinksDiv}>
                            <div className={styles.projectLinks}>
                                <button style={{display: "none"}}>View Demo</button>
                                <button onClick={() => { window.open("https://github.com/chandan1499/CultFit_clone") }}><span><i className="devicon-github-original technology"></i></span> View Source</button>
                            </div>
                            <div className={styles.techStacks}>
                                <div><i className="devicon-javascript-plain colored technology"></i></div>
                                <div><i className="devicon-css3-plain-wordmark colored technology"></i></div>
                                <div><i className="devicon-html5-plain-wordmark colored technology"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.projectBox}>
                    <div className={styles.projectImg}>
                        <img src={glassdoor_homePage} alt="" />
                    </div>
                    <div className={styles.projectDescription}>
                        <h2>Glassdoor</h2>
                        <p>Glassdoor is an American website where current and former employees anonymously review companies. Glassdoor also allows users to anonymously submit and view salaries as well as search and apply for jobs on its platform.</p>
                        <div className={styles.projectLinksDiv}>
                            <div className={styles.projectLinks}>
                                <button style={{display: "none"}}>View Demo</button>
                                <button onClick={() => { window.open("https://github.com/chandan1499/Project-glassdoor") }}><span><i className="devicon-github-original technology"></i></span> View Source</button>
                            </div>
                            <div className={styles.techStacks}>
                                <div><i className="devicon-react-plain-wordmark colored technology"></i></div>
                                <div><i className="devicon-javascript-plain colored technology"></i></div>
                                <div><i className="devicon-css3-plain-wordmark colored technology"></i></div>
                                <div><i className="devicon-html5-plain-wordmark colored technology"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.projectBox}>
                    <div className={styles.projectImg}>
                        <img src={travelocity_homePage} alt="" />
                    </div>
                    <div className={styles.projectDescription}>
                        <h2>Travelocity</h2>
                        <p>Travelocity.com is a well-known online travel agency for hotel room reservations & other travel services. From this website, users can search for hotels based on city and can categorize them with rating, price, and hotel name.</p>
                        <div className={styles.projectLinksDiv}>
                            <div className={styles.projectLinks}>
                                <button style={{display: "none"}}>View Demo</button>
                                <button onClick={() => { window.open("https://github.com/sheikhtausif/travelocity-clone") }}><span><i className="devicon-github-original technology"></i></span> View Source</button>
                            </div>
                            <div className={styles.techStacks}>
                                <div><i className="devicon-materialui-plain colored"></i></div>
                                <div><i className="devicon-redux-original" style={{ color: "#7248B6" }}></i></div>
                                <div><i className="devicon-react-plain-wordmark colored technology"></i></div>
                                <div><i className="devicon-javascript-plain colored technology"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}