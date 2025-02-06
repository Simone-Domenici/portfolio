import { useEffect } from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaJava } from "react-icons/fa";
import styles from './InfiniteSlider.module.css';

export default function InfiniteSlider() {
    const technologies = [
        { icon: <FaReact size={40} />, name: "React" },
        { icon: <FaNodeJs size={40} />, name: "Node.js" },
        { icon: <FaHtml5 size={40} />, name: "HTML5" },
        { icon: <FaCss3Alt size={40} />, name: "CSS3" },
        { icon: <FaJs size={40} />, name: "JavaScript" },
        { icon: <FaGithub size={40} />, name: "GitHub" },
        { icon: <FaJava size={40} />, name: "Java" },
        { icon: <FaReact size={40} />, name: "React" },
        { icon: <FaNodeJs size={40} />, name: "Node.js" },
        { icon: <FaHtml5 size={40} />, name: "HTML5" },
        { icon: <FaCss3Alt size={40} />, name: "CSS3" },
        { icon: <FaJs size={40} />, name: "JavaScript" },
        { icon: <FaGithub size={40} />, name: "GitHub" },
        { icon: <FaJava size={40} />, name: "Java" },
    ];

    useEffect(() => {
        const container = document.querySelector(`.${styles.container}`);
        container.style.opacity = 0;
        setTimeout(() => {
            container.style.opacity = 1;
        }, 0);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const container = document.querySelector(`.${styles.container}`);
            const rect = container.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                container.classList.add('fade-in');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.slider}>
                <div className={styles.slideTrack}>
                    {/* Original text items */}
                    {technologies.map((tech, index) => (
                        <div key={index} className= {styles.slide}>
                            <span className='flex gap-2 align-middle'>{tech.icon} {tech.name}</span>
                        </div>
                    ))}
                    {/* Cloned text items for seamless looping */}
                    {technologies.map((tech, index) => (
                        <div key={`clone-${index}`} className={styles.slide}>
                            <span className='flex gap-2'>{tech.icon} {tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}