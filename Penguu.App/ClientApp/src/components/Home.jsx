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
                                <p>Let us come into your lives to protect your loved ones. Penguu will provide you all the information your need to make sure your friend is doing well. Sit back, relax and relieve your mind knowing the ones you love are safe and sound.</p>
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
            



            <footer className="text-center text-lg-start bg-light text-muted">

                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>

                    <div>
                        <a href="#!" className="me-4 text-reset">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#!" className="me-4 text-reset">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#!" className="me-4 text-reset">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="#!" className="me-4 text-reset">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#!" className="me-4 text-reset">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="#!" className="me-4 text-reset">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>

                </section>



                <section className="">
                    <div className="container text-center text-md-start mt-5">

                        <div className="row mt-3">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>Penguu
                                </h6>
                                <p>
                                    Sit back, relax and relieve your mind knowing the ones you love are safe and sound.
                                </p>
                            </div>


                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Features
                                </h6>
                                <p>
                                    <a href="#!" class="text-reset">Dashboards</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Water Sensors</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Light Display</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">NFC</a>
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="#!" class="text-reset">Pricing</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Settings</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Orders</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Help</a>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i className="fas fa-home me-3"></i> Informatics Forum, Edinburgh, UK</p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    info@penguu.com
                                </p>
                                <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                                <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                            </div>

                        </div>
                    </div>
                </section>

                <div className="text-center p-4">
                    © 2023 Copyright:
                    <a className="text-reset fw-bold" href="#!">penguu.tech</a>
                </div>

            </footer>

        </div>
    );
};

export default Home;
