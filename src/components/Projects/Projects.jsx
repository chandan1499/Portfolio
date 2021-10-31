import styles from './Projects.module.css';
import cultfit_homePage from '../../images/Cultfit_homepage.png';
import glassdoor_homePage from "../../images/Glassdoor_homepage.png";
import travelocity_homePage from "../../images/Travelocity_homePage.png";
import dev_homepage from "../../images/dev_homepage.png";

export function Projects() {
    return (
        <div className={styles.container} id="#projects">
            <h1 className={styles.heading}>PROJECTS</h1>
            <div>
                <div className={styles.projectBox}>
                    <div className={styles.projectImg}>
                        <img src={dev_homepage} alt="" />
                    </div>
                    <div className={styles.projectDescription}>
                        <h2>Dev.To</h2>
                        <p>This is clone of the dev.To website where devlopers can share and get the information related to the developers through the posts. Developers can also comment on the post and also like on the post. There is also one  This project was completed by collaborative efforts of 4 members in 1 week using react js for frontend and node js for backend.</p>
                        <div className={styles.projectLinksDiv}>
                            <div className={styles.projectLinks}>
                                <button onClick={() => { window.open("https://dev-to-clone.netlify.app/") }}>View Demo</button>
                                <button onClick={() => { window.open("https://github.com/chandan1499/Dev-Clone") }}><span><i className="devicon-github-original technology"></i></span> View Source</button>
                            </div>
                            <div className={styles.techStacks}>
                                <div><i className="devicon-react-original colored"></i></div>
                                <div><i class="devicon-nodejs-plain colored"></i></div>
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
                        <p>This is clone of the Travelocity.com website which is well-known online travel agency for hotel room reservations & other travel services. From this website, users can search for hotels based on city and can categorize them with rating, price, and hotel name. This was a collaborative project which was done by me and 3 other members in 4 days using react js, redux, material UI and bootstrap.</p>
                        <div className={styles.projectLinksDiv}>
                            <div className={styles.projectLinks}>
                                <button onClick={() => { window.open("https://travelocity-clone.vercel.app/") }}>View Demo</button>
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

                <div className={styles.projectBox}>
                    <div className={styles.projectImg}>
                        <img src={glassdoor_homePage} alt="" />
                    </div>
                    <div className={styles.projectDescription}>
                        <h2>Glassdoor</h2>
                        <p>This is clone of the Glassdoor website where current and former employees anonymously review companies. Glassdoor also allows users to anonymously submit and view salaries as well as search and apply for jobs on its platform. This was a collaborative project which was done by me and 3 other members in 4 days using react js and CSS.</p>
                        <div className={styles.projectLinksDiv}>
                            <div className={styles.projectLinks}>
                                <button onClick={() => { window.open("https://glassdoor-clone.netlify.app/") }}>View Demo</button>
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
                        <img src={cultfit_homePage} alt="" />
                    </div>
                    <div className={styles.projectDescription}>
                        <h2>Cultfit</h2>
                        <p>This is clone of the Cultfit website where users can take Cultfit gym membership pass and from the website itself users can buy sportswear and can also order healthy foods. This project was completed by collaborative efforts of 4 members in 3 weeks using HTML, CSS and Javascript and for saving user details we used localstorage.</p>
                        <div className={styles.projectLinksDiv}>
                            <div className={styles.projectLinks}>
                                <button onClick={() => { window.open("https://cultfit-clone.vercel.app/") }}>View Demo</button>
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

            </div>
        </div>
    );
}