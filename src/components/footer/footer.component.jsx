import './footer.styles.css';

const Footer = () => {
	return (
		<section class="footer-container">
			<footer>
				<div className="footer-info">
					<h4>LUGAR</h4>
					<p>2118 Thornridge Cir. Dubai, UAE 35624</p>
					<p>+33 415 65356 - 9</p>
					<p>contact@lugar.com</p>
				</div>
				<div className="links">
					<div>
						<h4>Quick Links</h4>
						<p>Home</p>
						<p>About</p>
						<p>Project</p>
					</div>
					<div>
					 <h4>Legal Links</h4>
					 <p>Terms</p>
					 <p>Conditions</p>
					 <p>Policy</p>
					</div>
					<div>
						<h4>Social Media</h4>
						<p>Facebook</p>
						<p>Twitter</p>
						<p>YouTube</p>
						<p>LinkedIn</p>
					</div>
				</div>
			</footer>
			<p className="copyright">Copyright @ 2022 Lugar Inc.</p>
		</section>
	);
}

export default Footer;