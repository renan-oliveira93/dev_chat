import Image from "next/image"
import styles from "../styles/index.module.scss"
import githubLogo from "public/assets/octocat.png"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>
                &copy; {new Date().getFullYear()} Dev Chat - Todos os direitos reservados |

                Desenvolvido por
                <a href='https://github.com/renan-oliveira93' rel='noreferrer' target='_blank'>
                    Renan de Oliveira
                </a>
                <Image src={githubLogo} alt="github logo" width="30" />
            </p>
        </footer>
    )
}