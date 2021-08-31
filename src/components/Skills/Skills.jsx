import styles from './Skills.module.css';

export const Skills = () => {
    return (
        <div className={styles.container} id="#skills">
            <h1 className={styles.heading}>SKILLS</h1>
            <div className={styles.iconsDiv}>
                <div><i className="devicon-git-plain-wordmark colored technology"></i></div>
                <div><i class="devicon-bootstrap-plain colored"></i></div>
                <div><i class="devicon-css3-plain-wordmark colored technology"></i></div>
                <div><i class="devicon-html5-plain-wordmark colored technology"></i></div>
                <div><i class="devicon-javascript-plain colored technology"></i></div>
                <div><i class="devicon-redux-original" style={{ color: "#7248B6"}}></i></div>
                <div><i class="devicon-react-plain-wordmark colored technology"></i></div>
                <div><i class="devicon-github-original technology"></i></div>
                <div><i class="devicon-cplusplus-plain" style={{ color: '#00427E' }}></i></div>
                <div><i class="devicon-materialui-plain colored"></i></div>
            </div>
        </div>
    );
}











