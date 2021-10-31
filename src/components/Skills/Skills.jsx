import styles from './Skills.module.css';

export const Skills = () => {
    return (
        <div className={styles.container} id="#skills">
            <h1 className={styles.heading}>SKILLS</h1>
            <div className={styles.iconsDiv}>
                <div>
                    <i className="devicon-html5-plain-wordmark colored technology"></i><br />
                    <div>HTML5</div>
                </div>
                <div>
                    <i className="devicon-css3-plain-wordmark colored technology"></i><br />
                    <div>CSS3</div>
                </div>
                <div>
                    <i className="devicon-javascript-plain colored technology"></i><br />
                    <div>JAVASCRIPT</div>
                </div>
                <div>
                    <i className="devicon-redux-original" style={{ color: "#7248B6" }}></i><br />
                    <div>REDUX</div>
                </div>
                <div>
                    <i className="devicon-react-original colored"></i>
                    <div>REACT</div>
                </div>
                <div>
                    <i class="devicon-nodejs-plain colored"></i>
                    <div>NODE JS</div>
                </div>
                <div>
                    <i class="devicon-mongodb-plain colored"></i>
                    <div>MONGO DB</div>
                </div>
                <div>
                    <i class="devicon-express-original colored"></i>
                    <div>EXPRESS</div>
                </div>
                <div>
                    <i className="devicon-github-original technology"></i><br />
                    <div>GITHUB</div>
                </div>
                <div>
                    <i className="devicon-git-plain-wordmark colored technology"></i><br />
                    <div>GIT</div>
                </div>
                <div>
                    <i className="devicon-materialui-plain colored"></i><br />
                    <div>MATERIAL UI</div>
                </div>
                <div>
                    <i className="devicon-bootstrap-plain colored"></i><br />
                    <div>BOOTSTRAP</div>
                </div>
            </div>
        </div>
    );
}











