import facebook from './assets/imgram/Facebook-2.png';
import instagram from './assets/imgram/Instagram.png';
import twitter from './assets/imgram/Twitter.png';
import linkedin from './assets/imgram/LinkedIn.png';
import logo_rick_and_morty from './assets/imgram/Rick_and_Morty.svg.png';

export default function Footer() {
	return (
		<div class='main-footer'>
			<div class='grupo-1'>
				<div class='box'>
					<div class='container-figure'>
						<figure>
							<a href='#!'>
								<img
									src={logo_rick_and_morty}
									alt='rick and morty'
									id='footer-logo'
								/>
							</a>
						</figure>
					</div>
				</div>
				<div class='box'>
					<h2>SOBRE NOSOTROS</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Facilis ex impedit mollitia sed? Quisquam veritatis
						veniam, Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Facilis ex impedit mollitia sed?
						Quisquam
					</p>
					<h2>SÍGUENOS</h2>
					<div class='red-social'>
						<a href='#!'>
							<img
								src={facebook}
								alt='logo facebook'
								class='facebook redesociales'
								id='facebook'
							/>
						</a>
						<a href='#!'>
							<img
								src={instagram}
								alt='logo instagram'
								class='instagram redesociales'
								id='instagram'
							/>
						</a>
						<a href='#!'>
							<img
								src={twitter}
								alt='logo twitter'
								class='twitter redesociales'
								id='twitter'
							/>
						</a>
						<a href='#!'>
							<img
								src={linkedin}
								alt='logo linkedin'
								class='linkedin redesociales'
								id='linkedin'
							/>
						</a>
					</div>
				</div>
			</div>
			<div class='grupo-2'>
				<small>
					&copy;{new Date().getFullYear()} Rick and Morty | All rights
					reserved | Terms Of Service | Privacy
				</small>
			</div>
		</div>
	);
}
