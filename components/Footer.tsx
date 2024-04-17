import styles from '../styles/components/Footer.module.scss';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.disclaimer}>
                    <p className="text-xl">
                        <span className="font-bold">Leonardo</span> Vidal
                    </p>
                    <span className="text-xs text-slate-300 text-center">
                        {new Date().getFullYear()} | Inspired on{' '}
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://dribbble.com/shots/11276631-DS-Personal-Developer-Portfolio"
                        >
                            Logan Cee&apos;s template
                        </a>
                    </span>
                </div>
                <div className={styles.socials}>
                    <SocialIcon
                        rel="noreferrer"
                        target="_blank"
                        url="https://www.linkedin.com/in/lvidalio/"
                        bgColor="transparent"
                        fgColor="white"
                        network="linkedin"
                    />
                    <SocialIcon
                        rel="noreferrer"
                        target="_blank"
                        url="https://twitter.com/lvidalio/"
                        bgColor="transparent"
                        fgColor="white"
                        network="twitter"
                    />
                    <SocialIcon
                        rel="noreferrer"
                        target="_blank"
                        url="https://www.instagram.com/lvidal.pe/"
                        bgColor="transparent"
                        fgColor="white"
                        network="instagram"
                    />
                    <SocialIcon
                        rel="noreferrer"
                        target="_blank"
                        url="https://github.com/lvidal1/"
                        bgColor="transparent"
                        fgColor="white"
                        network="github"
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
