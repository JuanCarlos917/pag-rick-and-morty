import logo_rick_and_morty from './assets/imgram/Rick_and_Morty.svg.png'

export default function Header({title}) {
    return (
		<header class='header'>
			<a href='#!' class='header-logo'>
				<img class='logo-rick-and-morty' src={logo_rick_and_morty} alt='' />
			</a>
			<h1 class='header-title'>{title}</h1>
			<div class='main'>
				<ul>
					<li class='li-uno'>
						<a href='#!' data-text='&nbsp;Inicio'>
							&nbsp;Inicio&nbsp;{' '}
						</a>
					</li>
					<li class='li-dos'>
						<a href='#!' data-text='&nbsp;Perfil'>
							&nbsp;Perfil&nbsp;{' '}
						</a>
					</li>
					<li class='li-tres'>
						<a href='#!' data-text='&nbsp;Imagenes'>
							&nbsp;Imagenes&nbsp;{' '}
						</a>
					</li>
				</ul>
			</div>
		</header>
	);
}
