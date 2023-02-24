import logo_rick_and_morty from '../assets/imgram/Rick_and_Morty.svg.png'
import styles from './Header.module.css'
import SearchBar from '../SearchBar/SearchBar'

export default function Header(props) {
	return (
		<header className={styles.header}>
			<a href='#!' className={styles.headerlogo}>
				<img
					className={styles.logorickandmorty}
					src={logo_rick_and_morty}
					alt=''
				/>
			</a>
			<h1 className={styles.headertitle}>{props.title}</h1>
			<div className={styles.main}>
				<ul>
					<li className={styles.liuno}>
						<a href='#!' data-text='&nbsp;Home'>
							&nbsp;Home&nbsp;{' '}
						</a>
					</li>
					<li className={styles.lidos}>
						<a href='#!' data-text='&nbsp;Cards'>
							&nbsp;Cards&nbsp;{' '}
						</a>
					</li>
					<li className={styles.litres}>
						<a href='#!' data-text='&nbsp;About'>
							&nbsp;About&nbsp;{' '}
						</a>
					</li>
				</ul>
			</div>
			<SearchBar onSearch={props.onSearch} />
		</header>
	);
}
