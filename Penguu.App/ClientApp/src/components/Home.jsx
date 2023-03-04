import React from 'react';

const Home = () => {
    return (
        <div>
            <header className="masthead text-center text-white">
                <div className="masthead-content">
                    <div className="container">
                        <h1 className="masthead-heading mb-0">Try Penguu Today</h1>
                        <h2 className="masthead-subheading mb-0">Join the caring revolution</h2>
                        <a className="btn btn-primary btn-xl rounded-pill mt-5" href="#scroll">Learn More</a>
                    </div>
                </div>
                <div className="bg-circle-1 bg-circle"></div>
                <div className="bg-circle-2 bg-circle"></div>
                <div className="bg-circle-3 bg-circle"></div>
                <div className="bg-circle-4 bg-circle"></div>
            </header>
            <section id="scroll">
                <div className="container px-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6 order-lg-2">
                            <div className="p-5"><img className="img-fluid rounded-circle" src="drawing-head.svg" alt="..." /></div>
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <div className="p-5">
                                <h2 className="display-4">Helping you to help those you love</h2>
                                <p>Let us come into your lives to protect your loved ones. Penguu will provide you all the information your need to make sure your caree is doing well. Sit back, relax and relieve your mind knowing the ones you love are safe and sound.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container px-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="p-5"><img className="img-fluid rounded-circle" src="drawing-hands.svg" alt="..." /></div>
                        </div>
                        <div className="col-lg-6">
                            <div className="p-5">
                                <h2 className="display-4">Accessible for everyone</h2>
                                <p> Appliances and devices are made for the majority and often do not cater for unique individuals. Penguu strives to make a more equal world and give back control to its users. Make home feel like home again.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container px-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6 order-lg-2">
                            <div className="p-5"><img className="img-fluid rounded-circle" src="drawing-fam.svg" alt="..." /></div>
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <div className="p-5">
                                <h2 className="display-4">Designed for you</h2>
                                <p>Human beings are unique and we at Penguu, strive to cater for everyone. Tell us your needs and Penguu will provide devices and create an interface perfectly fitted to you and your loved ones.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
