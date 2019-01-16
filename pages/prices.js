import Layout from '../components/Layout';
import Search  from '../components/Search';

const Prices = () => (
	<Layout>
		<div>
			<h1>Crypto Prices</h1>
			<p>View prices and historical data</p>
		</div>

		<div className="Search">
        	<Search/>      
        </div>
	</Layout>
);

export default Prices;