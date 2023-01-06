import classNames from "classnames"
import styles from "../styles/components/Footer.module.scss"
import { SocialIcon } from "react-social-icons";

const Footer = () => {
    return <footer className={styles.footer}>
        <div className={styles.container}>
            <div className={styles.disclaimer}>
                <p className='text-xl'><span className='font-bold'>Leonardo</span> Vidal</p>
                <span className='text-xs text-slate-300'>{new Date().getFullYear()} | All Rights Reserved</span>
            </div>
            <div className={styles.socials}>
                <SocialIcon url="#" bgColor='transparent' fgColor="white" network='twitter' />
                <SocialIcon url="#" bgColor='transparent' fgColor="white" network='instagram' />
                <SocialIcon url="#" bgColor='transparent' fgColor="white" network='github' />
            </div>
        </div>
    </footer>
}

export default Footer;