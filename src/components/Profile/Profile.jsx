import styles from './Profile.module.css';
import profilePic from '../../images/profilePic.jpg';

export const Profile = () => {
    return (
        <div className={styles.container} id="#about">
            <div className={styles.aboutContainer}>
                <div className={styles.flex}>
                    <div className={styles.leftSection}>
                        <h1>Hi, I'm <span>Chandan Gupta</span></h1>
                        <h3>Full Stack Developer</h3>
                        <p>A passionate programmer with a curious mind who loves solving problems. I have an experience of building Web applications with JavaScript / Reactjs / HTML / CSS etc. I'm currently actively looking for new opportunities</p>
                    </div>
                    <div className={styles.rightSection}>
                        <img src={profilePic} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}