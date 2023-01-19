import Avatar from "public/assets/perfil.jpeg"
import Image from "next/image"
import styles from "../styles/index.module.scss"



export default function Profile_card () {
    return(
        <section className={styles.profile_card}>
            <Image src={Avatar} alt="github logo" width="120" />
            <p className={styles.profile_card__name}>Renan de Oliveira</p>
            <p className={styles.profile_card__nick}>renan-oliveira93</p>
            <p className={styles.profile_card__role}>Front-End Developer</p>
        </section>
    )
}