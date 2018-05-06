import React from 'react'
import { Link } from 'react-router-dom'

export default class Home extends React.Component {
	componentDidMount(){
		$('#subnav').on('click', (e) => {
			e.preventDefault()
			$('html').animate({
				scrollTop: `${($($('#subnav').attr('href')).offset().top) - 64}px`
			})
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
									<h1 className="title _cursive-font has-text-centered wow slideInLeft" style={ {visibility: 'visible', animationName: 'slideInLeft'} }><div className="has-text-white wow fadeIn" style={ {visibility: 'visible', animationName: 'fadeIn'} }>
					                  Online
				              		</div> 
								<div data-wow-delay=".2s" className="has-text-warning wow fadeIn" style={ {visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeIn'} }>
							  Web Forms
					              	</div>
			              			</h1>
									<h2 className="subtitle has-text-white has-text-centered wow slideInLeft" style={ {visibility: 'visible', animationName: 'slideInLeft'} }>
			                        <span data-wow-delay=".4s" className="wow fadeIn" style={ {visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeIn'} }>
			                  		"Quickly build user-friendly online forms"</span>
			                  		</h2>
									<div className="has-text-centered wow fadeIn" style={ {visibility: 'visible', animationName: 'fadeIn'} }>
				                  		<Link to="/" className="button is-large is-warning">
				                  			Get started free
				              			</Link>
			              			</div>
			                    </div>
			                </div>
			            </div>
			        </div>
			        <a id="subnav" href="#home-section-2"><img src="/static/images/scrolldown.png" alt="scroll" /></a>
			    </section>
			    <section id="home-section-2" className="section">
			        <div className="container">
			            <div className="columns">
			                <div className="column has-text-centered">
								<img src="/static/images/user-friendly.png" alt="User-Friendly" className="wow bounceInLeft" style={ {visibility: 'visible', animationName: 'bounceInLeft'} }/>
			                    <h3 className="title _cursive-font wow fadeIn" style={ {visibility: 'visible', animationName: 'fadeIn'} }> 
									User-Friendly
			                    </h3>
			                    <div data-wow-delay=".3s" className="wow fadeIn" style={ {visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeIn'} }>
			                        Make sure you can create contact form easily whenever they need.
			                    </div>
			                </div>
			                <div className="column has-text-centered">
								<img src="/static/images/responsive.png" alt="Responsive" data-wow-delay=".2s" className="wow bounceInDown" style={ {visibility: 'visible', animationDelay: '0.2s', animationName: 'bounceInDown'} }/>
			                    <h3 className="title _cursive-font wow fadeIn" style={ {visibility: 'visible', animationName: 'fadeIn'} }> 
									Responsive Design
			                    </h3>
			                    <div data-wow-delay=".3s" className="wow fadeIn" style={ {visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeIn'} }>
			                        Allows you to send message quickly on any devices (PC, Laptop, Tablet, Mobile).
			                    </div>
			                </div>
			                <div className="column has-text-centered">
								<img src="/static/images/easy-to-build.png" alt="Easy to Build" data-wow-delay=".4s" className="wow bounceInRight" style={ {visibility: 'visible', animationDelay: '0.4s', animationName: 'bounceInRight'} }/>
			                    <h3 className="title _cursive-font wow fadeIn" style={ {visibility: 'visible', animationName: 'fadeIn'} }> 
									Easy to Build
			                    </h3>
			                    <div data-wow-delay=".3s" className="wow fadeIn" style={ {visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeIn'} }>
			                        Drag and Drop in Real Time and complete form in just a couple of minutes.
			                    </div>
			                </div>
			            </div>
			            <h2 className="title is-size-1 has-text-centered">
							1,000,056
						</h2>
			            <h3 className="title has-text-centered">
							Form Submission
						</h3>
			            <div className="has-text-centered">
							<a href="/dashboard/workspaces" className="button is-large is-warning">
								Get started
							</a>
						</div>
			        </div>
			    </section>
			</div>
			)
	}
}