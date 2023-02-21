import facebook from "../assets/imgram/Facebook2.png"
import instagram from '../assets/imgram/Instagram.png';
import twitter from '../assets/imgram/Twitter.png';
import linkedin from '../assets/imgram/LinkedIn.png';
import logo_rick_and_morty from '../assets/imgram/Rick_and_Morty.svg.png';
import styles from './Footer.module.css';

export default function Footer() {
	return (
		<div className={styles.mainfooter}>
			<div className={styles.grupo1}>
				<div className={styles.box}>
					<div className={styles.containerfigure}>
						<figure>
							<a href='#!'>
								<img
									src={logo_rick_and_morty}
									alt='rick and morty'
									className={styles.footerlogo}
								/>
							</a>
						</figure>
					</div>
				</div>
				<div className={styles.box}>
					<h2>SOBRE NOSOTROS</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Facilis ex impedit mollitia sed? Quisquam veritatis
						veniam, Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Facilis ex impedit mollitia sed?
						Quisquam
					</p>
					<h2>SÍGUENOS</h2>
					<div className={styles.redsocial}>
						<a href='#!'>
							<img
								src={facebook}
								alt='logo facebook'
								className={styles.redesociales}
								id='facebook'
							/>
						</a>
						<a href='#!'>
							<img
								src={instagram}
								alt='logo instagram'
								className={styles.redesociales}
								id='instagram'
							/>
						</a>
						<a href='#!'>
							<img
								src={twitter}
								alt='logo twitter'
								className={styles.redesociales}
								id='twitter'
							/>
						</a>
						<a href='#!'>
							<img
								src={linkedin}
								alt='logo linkedin'
								className={styles.redesociales}
								id='linkedin'
							/>
						</a>
					</div>
				</div>
			</div>
			<div className={styles.grupo2}>
				<small>
					&copy;{new Date().getFullYear()} Rick and Morty | All rights
					reserved | Terms Of Service | Privacy
				</small>
			</div>
		</div>
	);
}
