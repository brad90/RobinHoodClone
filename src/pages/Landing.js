import React from "react";
import Input from "../components/Inputs/input";

import "./styles/landing.scss";

import Rating from "@material-ui/lab/Rating";

import mobilePNG from "../assets/img/mobilemock.png";
import appleStore from "../assets/img/appleStoreLink.png";
import googleStore from "../assets/img/googleStoreLink.png";

export default function Landing() {
	return (
		<div className='landing'>
			<div className='landing-fold'>
				<div className='landing-left'>
					<h1>
						Invest. <br /> Commission-free.
					</h1>
					<h2>
						Investing is one of the best ways to grow your savings over the long term. We make it simple for both beginners and experienced inverstores. Transparent fees and charges. Sign up
						inseconds.
					</h2>
					<Input height={50} width={400} placeholder='Search Stocks' />
					<div className='landing-applinks'>
						<span>
							<a>
								<img className='landing-applink-img' src={appleStore} />
							</a>
							<Rating name='half-rating' defaultValue={4.5} precision={0.5} readOnly />
						</span>
						<span>
							<a>
								<img className='landing-applink-img' src={googleStore} />
							</a>
							<Rating name='half-rating' defaultValue={4.5} precision={0.5} readOnly />
						</span>
					</div>
					<p className='landing-terms'>Authorised and regulated by the FCA. When you invest, your capital is at risk.</p>
				</div>
				<img className='landing-right' src={mobilePNG} />
			</div>
			<div className='landing-second'>
				<h1>Why invest with RobinHood</h1>
				<div className='landing-second-why'>
					<div>Something</div>
					<div>Something</div>
					<div>Something</div>
					<div>Something</div>
					<div>Something</div>
					<div>Something</div>
				</div>
			</div>
		</div>
	);
}