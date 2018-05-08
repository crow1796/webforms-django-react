import React from 'react'
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom'

import Home from '@web/containers/Home'
import Pricing from '@web/containers/Pricing'
import NoMatch from '@web/components/NoMatch'
import WOW from 'wow.js'

export default class App extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			copyrightYear: moment().format('YYYY')
		}
	}

	componentDidMount(){
		document.addEventListener('DOMContentLoaded', function () {

			// Get all "navbar-burger" elements
			var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)

			// Check if there are any navbar burgers
			if ($navbarBurgers.length > 0) {

				// Add a click event on each of them
				$navbarBurgers.forEach(function ($el) {
					$el.addEventListener('click', function () {

						// Get the target from the "data-target" attribute
						var target = $el.dataset.target
						var $target = document.getElementById(target)

						// Toggle the class on both the "navbar-burger" and the "navbar-menu"
						$el.classList.toggle('is-active')
						$target.classList.toggle('is-active')

					})
				})
			}

		})
		let wow = new WOW({
			resetAnimation: false
		})
		wow.init()
	}

	render(){
		return (
			<Router>
				<div id="app">
					<nav role="navigation" aria-label="main navigation" id="main-navbar" className="navbar is-fixed-top">
					    <div className="container">
					        <div className="navbar-brand">
					        	<Link to="/" className="navbar-item _cursive-font router-link-exact-active router-link-active">
							         Web
							         <span className="has-text-warning">
							         	Forms
							         </span>
						         </Link>
				            	<button type="button" data-target="navMenu" className="button navbar-burger">
				            		<span></span> 
				            		<span></span> 
				            		<span></span>
				            	</button>
					        </div>
					        <div id="navMenu" className="navbar-menu">
					            <div className="navbar-end">
					                <NavLink to="/" className="navbar-item router-link-exact-active router-link-active">
						            	HOME
						            </NavLink> 
						            <NavLink to="/pricing" className="navbar-item">
						            	PRICING
						            </NavLink> 
						            <NavLink to="/about-us" className="navbar-item">
						            	ABOUT US
						            </NavLink> 
						            <NavLink to="/contact-us" className="navbar-item">
						            	CONTACT US
						            </NavLink>
					                <div className="navbar-item">
					                    <p className="control">
					                        <Link to="/dashboard/workspaces" className="button is-warning">
					                            <span>
							                     	DASHBOARD
							                     </span>
					                        </Link>
					                    </p>
					                </div>
					            </div>
					        </div>
					    </div>
					</nav>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/pricing" component={Pricing} />
						<Route component={NoMatch} />
					</Switch>
					<footer className="footer">
						<div className="container">
							<div className="content has-text-centered">
								<p>
									<strong>WebForms</strong> is an online Form Builder
            					</p>
								<p>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam et magnam, nesciunt placeat provident quaerat, enim sunt
									praesentium aspernatur iusto nemo animi facilis dolore. Autem atque asperiores beatae minima iste.
           						</p>
								<p></p>
								<div>
									<a href="#" className="icon">
										<i className="fab fa-facebook"></i>
									</a>
									<a href="#" className="icon">
										<i className="fab fa-twitter"></i>
									</a>
									<a href="#" className="icon">
										<i className="fab fa-linkedin"></i>
									</a>
									<a href="#" className="icon">
										<i className="fab fa-google-plus"></i>
									</a>
								</div>
								<div>
									© { this.state.copyrightYear } Copyright WebForms. All Rights Reserved.
            					</div>
								<p></p>
							</div>
						</div>
					</footer>
				</div>
			</Router>
		)
	}
}