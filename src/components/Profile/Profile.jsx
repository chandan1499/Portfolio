import styles from './Profile.module.css';
import profilePic from '../../images/profilePic.jpeg';

export const Profile = () => {
    const handleResumeClick = () => {
        window.open("https://drive.google.com/file/d/1wl1XICXHKQKdUUpTLFL4mjtENQt6tJqc/view");
    }

    return (
        <div className={styles.container} id="#about">
            <div className={styles.aboutContainer}>
                <div className={styles.flex}>
                    <div className={styles.leftSection}>
                        <h1>Hi, I'm <span>Chandan Gupta</span></h1>
                        <h3>Full Stack Developer</h3>
                        <p>A passionate programmer with a curious mind who loves solving problems. I have an experience of building Web applications with JavaScript / Reactjs / HTML / CSS etc. I'm currently actively looking for new opportunities</p>
                        <button className={styles.resumeButton} onClick={handleResumeClick}>Resume</button>
                    </div>
                    <div className={styles.rightSection}>
                        <img src={profilePic} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}