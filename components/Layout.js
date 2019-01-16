import Head from 'next/head';
import Navbar from './Navbar';

const Layout = (props) => (
	<div>
		<Head>
			<title>CoinTrack</title>
			<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
			<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
			<link href="../static/stylesheets/search.css" rel="stylesheet" />
			<link rel="stylesheet" href="https://bootswatch.com/4/cyborg/bootstrap.min.css"/>
		</Head>
		<Navbar/>
		<div className="container">
			{props.children}
		</div>
	</div>
);

export default Layout;