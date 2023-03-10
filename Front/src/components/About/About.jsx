import styles from './About.module.css';

export default function About() {
	return (
		<div>
			<div className={styles.containerTitle}>
				<h1 className={styles.title}>About</h1>
			</div>
			<div className={styles.containerPragraph}>
				<p className={styles.paragraph}>
					El proyecto de Rick and Morty que utiliza el API de la serie
					para extraer los personajes es una emocionante aplicación de
					tecnología. La aplicación está construida utilizando varias
					tecnologías de vanguardia, como React, Redux y React Router
					DOM, todas ellas escritas en el lenguaje de programación
					JavaScript.
				</p>
				<p className={styles.paragraph}>
					El proyecto está estructurado en componentes únicos, lo que
					hace que la aplicación sea más fácil de mantener y
					actualizar en el futuro. Además, se han utilizado tanto
					estados locales como globales para garantizar que la
					aplicación sea eficiente y escalable.
				</p>
				<p className={styles.paragraph}>
					Una característica importante de la aplicación es la
					validación de ingreso al app. Esto asegura que solo los
					usuarios autorizados tengan acceso a la aplicación, lo que
					ayuda a proteger los datos y la información de los usuarios.
				</p>
				<p className={styles.paragraph}>
					El proyecto se almacena en GitHub, lo que permite a los
					desarrolladores colaborar y trabajar juntos en el proyecto.
					También se puede acceder al código fuente del proyecto, lo
					que facilita la comprensión de cómo funciona la aplicación y
					cómo se han implementado las diferentes funcionalidades.
				</p>
				<div className={styles.containerSubTitle}>
					<h3 className={styles.subTitle}>En resumen...</h3>
				</div>
				<p className={styles.paragraph}>
					En resumen, el proyecto de Rick and Morty es una emocionante
					aplicación de tecnología que utiliza varias tecnologías de
					vanguardia, como React, Redux y React Router DOM. Con su
					estructura basada en componentes únicos, estados locales y
					globales y la validación de ingreso al app, esta aplicación
					es eficiente y escalable. Además, al ser almacenado en
					GitHub, es fácil para los desarrolladores colaborar y
					trabajar juntos en el proyecto.
				</p>
			</div>
		</div>
	);
}
