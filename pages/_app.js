import { Lyout } from '../components/lyout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<Lyout>
			<Component {...pageProps} />
		</Lyout>
	);
}

export default MyApp;
