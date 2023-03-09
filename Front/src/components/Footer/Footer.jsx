import facebook from "../assets/imgram/Facebook2.png"
import instagram from '../assets/imgram/Instagram.png';
import twitter from '../assets/imgram/Twitter.png';
import linkedin from '../assets/imgram/LinkedIn.png';
import logo_rick_and_morty from '../assets/imgram/Rick_and_Morty.svg.png';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

export default function Footer() {
	return (
		<footer className={styles.mainfooter}>
			<div className={styles.grupo1}>
				<div className={styles.box}>
					<div className={styles.containerfigure}>
						<figure>
							<Link to='/home'>
								<img
									src={logo_rick_and_morty}
									alt='rick and morty'
									className={styles.footerlogo}
								/>
							</Link>
						</figure>
					</div>
				</div>
				<div className={styles.box}>
					<Link to='/about'>
						<h2>ABOUT</h2>
					</Link>

					<p>
						Rick and Morty es una emocionante aplicación de
						tecnología que utiliza varias tecnologías de vanguardia ...
					</p>
					<h2>SÍGUENOS</h2>
					<div className={styles.redsocial}>
						<Link to='/https://www.xtrafondos.com/recortar/4727'>
							<img
								src={facebook}
								alt='logo facebook'
								className={styles.redesociales}
								id='facebook'
							/>
						</Link>
						<img
							src={instagram}
							alt='logo instagram'
							className={styles.redesociales}
							id='instagram'
						/>
						<img
							src={twitter}
							alt='logo twitter'
							className={styles.redesociales}
							id='twitter'
						/>
						<img
							src={linkedin}
							alt='logo linkedin'
							className={styles.redesociales}
							id='linkedin'
						/>
					</div>
				</div>
			</div>
			<div className={styles.grupo2}>
				<small>
					&copy;{new Date().getFullYear()} Rick and Morty | All rights
					reserved | Terms Of Service | Privacy
				</small>
			</div>
		</footer>
	);
}
