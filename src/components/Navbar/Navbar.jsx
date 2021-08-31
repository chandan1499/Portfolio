import styles from './Navbar.module.css';
import { Link } from 'react-scroll'


export function Navbar() {
    return (
        <div className={styles.container}>
            <nav className={styles.navBar}>
                <ul>
                    <li>{"</>"}</li>
                </ul>
                <ul>
                    <li><Link
                        activeClass="active"
                        to="#about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >About</Link></li>
                    <li><Link
                        activeClass="active"
                        to="#skills"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Skills</Link></li>
                    <li><Link
                        activeClass="active"
                        to="#coding"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Coding Handles</Link></li>
                    <li><Link
                        activeClass="active"
                        to="#projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Projects</Link></li>
                    <li><a
                        href="https://drive.google.com/file/d/15Lq-jozNpZfdgAmIVmuq5FZiILO0c2mz/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                    >Resume</a></li>
                    <li><Link
                        activeClass="active"
                        to="#contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Contact</Link></li>
                </ul>
            </nav>
        </div>
    );
}