import logo_rick_and_morty from '../assets/imgram/Rick_and_Morty.svg.png'
import styles from './Header.module.css'

export default function Header({title}) {
    return (
		<header className={styles.header}>
			<a href='#!' className={styles.headerlogo}>
				<img
					className={styles.logorickandmorty}
					src={logo_rick_and_morty}
					alt=''
				/>
			</a>
			<h1 className={styles.headertitle}>{title}</h1>
			<div className={styles.main}>
				<ul>
					<li className={styles.liuno}>
						<a href='#!' data-text='&nbsp;Inicio'>
							&nbsp;Inicio&nbsp;{' '}
						</a>
					</li>
					<li className={styles.lidos}>
						<a href='#!' data-text='&nbsp;Perfil'>
							&nbsp;Perfil&nbsp;{' '}
						</a>
					</li>
					<li className={styles.litres}>
						<a href='#!' data-text='&nbsp;Imagenes'>
							&nbsp;Imagenes&nbsp;{' '}
						</a>
					</li>
				</ul>
			</div>
		</header>
	);
}
