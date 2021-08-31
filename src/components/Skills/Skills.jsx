import styles from './Skills.module.css';

export const Skills = () => {
    return (
        <div className={styles.container} id="#skills">
            <h1 className={styles.heading}>SKILLS</h1>
            <div className={styles.iconsDiv}>
                <div>
                    <i className="devicon-git-plain-wordmark colored technology"></i><br />
                    <div>GIT</div>
                </div>
                <div>
                    <i class="devicon-bootstrap-plain colored"></i><br />
                    <div>BOOTSTRAP</div>
                </div>
                <div>
                    <i class="devicon-css3-plain-wordmark colored technology"></i><br />
                    <div>CSS3</div>
                </div>
                <div>
                    <i class="devicon-html5-plain-wordmark colored technology"></i><br />
                    <div>HTML5</div>
                </div>
                <div>
                    <i class="devicon-javascript-plain colored technology"></i><br />
                    <div>JAVASCRIPT</div>
                </div>
                <div>
                    <i class="devicon-redux-original" style={{ color: "#7248B6" }}></i><br />
                    <div>REDUX</div>
                </div>
                <div>
                    <i class="devicon-react-original colored"></i>
                    <div>REACT</div>
                </div>
                <div>
                    <i class="devicon-github-original technology"></i><br />
                    <div>GITHUB</div>
                </div>
                <div>
                    <i class="devicon-cplusplus-plain" style={{ color: '#00427E' }}></i><br />
                    <div>C++</div>
                </div>
                <div>
                    <i class="devicon-materialui-plain colored"></i><br />
                    <div>MATERIAL UI</div>
                </div>
            </div>
        </div>
    );
}











