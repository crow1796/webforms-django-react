import React from 'react'

export default class NoMatch extends React.Component {
    render(){
        return (
            <div id="error-404">
                <section className="hero homepage-banner">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title is-1 has-text-centered">
                                404
                            </h1>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}