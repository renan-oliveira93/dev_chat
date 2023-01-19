import { Image } from '@skynexui/components';
import { useState } from 'react'
import styles from '../styles/index.module.scss'
import { useRouter } from 'next/router';

export default function FormLogin() {
    const [username, setUsername] = useState('renan-oliveira93');
    const roteamento = useRouter();
    const handleSubmit = () => {
        roteamento.push('./chat_page')
    }

    return (
        <form className={styles.formLogin}>
            <p>Entre com o usuário do github</p>
            <input
                type="text"
                value={username}
                onChange={event => {
                    const user = event.target.value;
                    setUsername(user)
                }} />
            <Image
                src={`https://github.com/${username}.png`}
                alt="imagem de usuario"
                styleSheet={{
                    width: "100px",
                    borderRadius: '8px',
                    marginBottom: '16px',
                }}
            />
            <button type='submit' onClick={() => { handleSubmit() }}>Entrar</button>
        </form>
    )
}