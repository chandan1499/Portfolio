import styles from './Footer.module.css';

export function Footer() {
    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <div className={styles.container} id="#contact">
            <div className={styles.gotoTopBtn} onClick={handleScrollTop}><i className="fas fa-angle-up"></i></div>
            <div className={styles.flex}>
                <a href="https://www.linkedin.com/in/chandan1499" rel="noreferrer" target="_blank"><div><i className="fab fa-linkedin-in"></i></div></a>
                <a href="https://github.com/chandan1499" rel="noreferrer" target="_blank"><div><i className="fab fa-github"></i></div></a>
                <a href="mailto:gupta.chandan1499@gmail.com"><div><i className="fas fa-envelope"></i></div></a>
            </div>
            <div className={styles.contactNum}>
                <div>
                    <span><i class="fas fa-map-marker-alt"></i></span>
                    <p>New Delhi, India</p>
                </div>
                <div>
                    <span><i className="fas fa-envelope"></i></span>
                    <p>gupta.chandan1499@gmail.com</p>
                </div>
                <div>
                    <span><i className="fas fa-mobile-alt"></i></span>
                    <p>+91 7982165384</p>
                </div>
            </div>
            <div>
                <p>Designed and build by Chandan Gupta, ©2021 All rights reserved.</p>
            </div>
        </div>
    );
}