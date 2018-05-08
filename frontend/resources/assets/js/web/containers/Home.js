import React from 'react'
import { Link } from 'react-router-dom'

export default class Home extends React.Component {
	componentDidMount(){
		$('#subnav').on('click', function (e) {
			e.preventDefault();
			$('html').animate({
				scrollTop: ($($(this).attr('href')).position().top - 64) + 'px'
			}, 500)
		})
	}
	
	render(){
		return (
			<div>
				<section className="hero homepage-banner">
					<div className="hero-body">
						<div className="container">
							<div className="columns">
								<div className="registration-form is-three-quarters">
									<h1 className="title _cursive-font has-text-centered wow slideInLeft">
										<div className="has-text-white wow fadeIn">
											Online
										</div>
										<div className="has-text-warning wow fadeIn" data-wow-delay=".2s">
											Web Forms
                            			</div>
									</h1>
									<h2 className="subtitle has-text-white has-text-centered wow slideInLeft">
										<span className="wow fadeIn" data-wow-delay=".4s">
											"Quickly build user-friendly online forms"
                            			</span>
									</h2>
									<div className="has-text-centered wow fadeIn">
										<a className="button is-large is-warning" href="/">
											Get started free
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<a id="subnav" href="#home-section-2">
						<img src="/static/images/scrolldown.png" alt="scroll"/>
					</a>
				</section>

				<section className="section" id="home-section-2">
					<div className="container">
						<div className="columns">
							<div className="column has-text-centered">
								<img src="/static/images/user-friendly.png" alt="User-Friendly" className="wow bounceInLeft"/>
								<h3 className="title _cursive-font wow fadeIn">
									User-Friendly
								</h3>
								<div className="wow fadeIn" data-wow-delay=".3s">
									Make sure you can create contact form easily whenever they need.
								</div>
							</div>
							<div className="column has-text-centered">
								<img src="/static/images/responsive.png" alt="Responsive" className="wow bounceInDown" data-wow-delay=".2s"/>
									<h3 className="title _cursive-font wow fadeIn">
										Responsive Design
									</h3>
									<div className="wow fadeIn" data-wow-delay=".3s">
										Allows you to send message quickly on any devices (PC, Laptop, Tablet, Mobile).
									</div>
							</div>
							<div className="column has-text-centered">
								<img src="/static/images/easy-to-build.png" alt="Easy to Build" className="wow bounceInRight" data-wow-delay=".4s"/>
								<h3 className="title _cursive-font wow fadeIn">
									Easy to Build
								</h3>
								<div className="wow fadeIn" data-wow-delay=".3s">
									Drag and Drop in Real Time and complete form in just a couple of minutes.
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="section" id="home-section-3">
					<div className="container">
						<h2 className="title is-1 has-text-centered">
							1,000,056
							</h2>
						<h3 className="title has-text-centered">
							Form Submission
							</h3>
						<div className="has-text-centered">
							<a className="button is-large is-warning" href="/dashboard/workspaces">
								Get started
								</a>
						</div>
					</div>
				</section>
			</div>
			)
	}
}