import React from 'react'

function Contact() {
    return (
        <>
            <div className="header-style-2">
                <div className="navbar-area">
                    {/* Responsive Navigation Menu Section */}
                    <div className="main-responsive-nav">
                        <div className="container">
                            <div className="main-responsive-menu">
                                {/* Logo Section in Responsive Menu */}
                                <div className="logo">
                                    <a href="/">
                                        <img src="images/trans-logo.png" style={{ "height": "40px", "width": "200px" }} className="black-logo" alt="image" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Main Navbar Section for Larger Screens */}
                    <div className="main-navbar main-navbar-two">
                        <div className="container-fluid">
                            <nav className="navbar navbar-expand-md navbar-light">
                                {/* Logo for Main Navigation */}
                                <a className="navbar-brand" href="/">
                                    <img src="images/trans-logo.png" style={{ "height": "50px", "width": "150px" }} className="black-logo" alt="image" />
                                </a>
                                {/* Navbar Menu (Collapsible for Responsiveness) */}
                                <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                                    {/* Main Navigation Links */}
                                    <ul className="navbar-nav ms-auto">
                                        {/* Home Link */}
                                        <li className="nav-item">
                                            <a href="/" className="nav-link ">
                                                Home
                                            </a>
                                        </li>
                                        {/* About Us Section */}
                                        <li className="nav-item">
                                            <a href="/about" className="nav-link ">About Us</a>
                                        </li>
                                        {/* Our Solutions Dropdown Menu */}
                                        <li className="nav-item">
                                            <a href="/services/" className="nav-link ">
                                                Our Solutions <i className="bx bx-down-arrow-alt ms-1" />
                                            </a>
                                            <ul className="dropdown-menu" style={{ "left": "-550px", "max-width": "1000px", "width": "1000px" }}>
                                                <div className="row m-auto">
                                                    {/* Column 1: Solutions */}
                                                    <div className="col-sm-12 col-md-4 col-lg-4 text-start">
                                                        <h5 className="p-3 ms-1">Solutions</h5>
                                                        <li className="nav-item">
                                                            <a href="/services/smart-city-solutions/details/" className="nav-link">Smart City Solutions</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a href="/services/cctv-surveillance/details/" className="nav-link">CCTV Surveillance
                                                                Solutions</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a href="/services/data-centre-solution/details/" className="nav-link">Data Centre Solutions</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a href="/services/biometric-solution/details/" className="nav-link">Biometric &amp; FR
                                                                Solutions</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link">IOT Solutions</a>
                                                        </li>
                                                    </div>
                                                    {/* Column 2: Products */}
                                                    <div className="col-sm-12 col-md-4 col-lg-4 text-start">
                                                        <h5 className="p-3 ms-1">Products</h5>
                                                        <li className="nav-item">
                                                            <a href="#" className="nav-link">Checkcam+</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a href="#" className="nav-link">CamStore</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a href="#" className="nav-link">StorePulse</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a href="/products/android-apps/" className="nav-link">
                                                                Android Applications
                                                            </a>
                                                        </li>
                                                    </div>
                                                    {/* Column 3: Industries */}
                                                    <div className="col-sm-12 col-md-4 col-lg-4 text-start">
                                                        <h5 className="p-3 ms-1">Industries We Serve</h5>
                                                        <li className="nav-item">
                                                            <a className="nav-link">Manufacturing</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link">Banking &amp; Financial Services</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link">Oil &amp; Gas</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link">Logistics</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link">Railways</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link">Consumer Goods &amp; Retail</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link">Smart Cities</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link">Media &amp; Entertainment
                                                            </a>
                                                        </li>
                                                    </div>
                                                </div>
                                            </ul>
                                        </li>
                                        {/* Investor Relations Dropdown */}
                                        <li className="nav-item">
                                            <a href="/investor-relations/" className="nav-link ">
                                                Investor Relations <i className="bx bx-down-arrow-alt ms-1" />
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <a href="/investor-relations/corporate-announcements/" className="nav-link">Meeting Updates</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="/investor-relations/corporate-governance/" className="nav-link">
                                                        Corporate Governance
                                                        <i className="bx bx-down-arrow-alt" />
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li className="nav-item">
                                                            <a href="/investor-relations/corporate-governance/" className="nav-link">Corporate Governance
                                                                Report</a>
                                                        </li>
                                                        <hr />
                                                        <li className="nav-item">
                                                            <a href="/investor-relations/company-policies/" className="nav-link">Company Policies</a>
                                                        </li>
                                                        <hr />
                                                        <li className="nav-item">
                                                            <a href="/investor-relations/corporate-social-responsibility/" className="nav-link">Corporate
                                                                Social Responsibility</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="/investor-relations/media-updates-and-newsletters/" className="nav-link">Media &amp;
                                                        Newsletters</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="/investor-relations/shareholding-pattern/" className="nav-link">Shareholding Pattern</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="/investor-relations/financial-results/" className="nav-link">Financial Results</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="/investor-relations/annual-reports/" className="nav-link">Annual Reports</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="/investor-relations/annual-returns/" className="nav-link">Annual Returns</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="/investor-relations/investor-information/" className="nav-link">Investor Information</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="/investor-relations/investor-grievance/" className="nav-link">Investor Grievance</a>
                                                </li>
                                            </ul>
                                        </li>
                                        {/* Careers Section */}
                                        <li className="nav-item">
                                            <a href="/careers" className="nav-link ">Careers</a>
                                        </li>
                                        {/* Contact Us Section */}
                                        <li className="nav-item">
                                            <a href="/contact/" className="nav-link active">Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">

            </div>

            <div>
                <div className="page-banner-area blog-page-are">
                    <div className="container">
                        <div className="single-page-banner-content">
                            <h1>Contact Us</h1>
                            <ul>
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Page Title Banner Section - Ends Here */}
                {/* Contact Us Section - Starts Here */}
                <div className="contact-us-area pt-100 pb-100">
                    <div className="container">
                        <div className="section-title">
                            <span className="top-title">Reach Us</span>
                            <h2>We're thrilled to discuss your query</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="single-contact-img">
                                    <div className="contact-main">
                                        <img src="images/contact.webp" alt="contact-us" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="contact-form">
                                    <form id="contactForm" method="POST" action="/contact">
                                        <input type="hidden" name="csrfmiddlewaretoken" defaultValue="pTCuTsrpujYCxMKdcfALRpsY9VscxAjvP0CDrv4nBhMHRn6EU0bRPJa7Kq69RLS2" />
                                        <div className="row">
                                            <div className="checkbox mb-3">
                                                <ul className="py-3 list-unstyled">
                                                    <li style={{ "color": "blue" }} />
                                                </ul>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="name" className="form-label">Full Name</label>
                                                    <input type="text" name="name" className="form-control" placeholder="Enter your name" required id="id_name" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="phone_number" className="form-label">Phone Number</label>
                                                    <input type="number" name="phone_number" className="form-control" placeholder="Enter your phone number" required id="id_phone_number" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="email" className="form-label">Email Address</label>
                                                    <input type="email" name="email" className="form-control" placeholder="Enter your email address" maxLength={320} required id="id_email" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="email_subject" className="form-label">Subject</label>
                                                    <input type="text" name="email_subject" className="form-control" placeholder="Enter your subject" required id="id_email_subject" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label htmlFor="email_body" className="form-label">Message</label>
                                                    <textarea name="email_body" cols={40} rows={10} className="form-control" placeholder="Any message" required id="id_email_body" defaultValue={""} />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12">
                                                <button type="submit" className="default-btn">Submit Now</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Contact Us Section - Ends Here */}
                {/* Including Footer Template Here */}
                {/* Footer Content Starting Here */}
                {/* Loading Static Files */}
                <div className="footer-area pt-100">
                    <div className="container">
                        <div className="row pb-100">
                            <div className="col-lg-3 col-sm-6 col-md-6" data-cue="slideInUp">
                                <div className="footer-widget">
                                    <a href="/">
                                        <img src="images/transline-logo.gif" className="black-logo" alt="logo" />
                                    </a>
                                    <p>
                                        We are a transformative technology company, redefining security, biometrics, and digital solutions to
                                        empower businesses and governments. With a relentless focus on innovation, we design advanced systems that
                                        solve complex challenges, driving digital transformation and ensuring future-ready solutions for our
                                        clients.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-md-6" data-cue="slideInUp">
                                <div className="footer-widget footer-widget-link2">
                                    <h2>About Us</h2>
                                    <ul className="footer-widget-list">
                                        <li>
                                            <a href="/teams/"><i className="bx bx-chevron-right" />Our Team's</a>
                                        </li>
                                        <li>
                                            <a href="/investor-relations/media-updates-and-newsletters/"><i className="bx bx-chevron-right" />Media
                                                &amp; Newsletters</a>
                                        </li>
                                        <li>
                                            <a href="/privacy-policy/"><i className="bx bx-chevron-right" />Privacy Policy</a>
                                        </li>
                                        <li>
                                            <a href="/support/"><i className="bx bx-chevron-right" />Support</a>
                                        </li>
                                        <li>
                                            <a href="https://opxl.in/opxl.jsp">
                                                <i className="bx bx-chevron-right" />
                                                CRM Login
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-md-6" data-cue="slideInUp">
                                <div className="footer-widget footer-widget-link">
                                    <h2>Our Solutions</h2>
                                    <ul className="footer-widget-list">
                                        <li>
                                            <a href="/services/smart-city-solutions/details/"><i className="bx bx-chevron-right" />Smart City
                                                Solutions</a>
                                        </li>
                                        <li>
                                            <a href="/services/cctv-surveillance/details/"><i className="bx bx-chevron-right" />CCTV Surveillance
                                                Solutions</a>
                                        </li>
                                        <li>
                                            <a href="/services/data-centre-solution/details/"><i className="bx bx-chevron-right" />Data Centre
                                                Solutions</a>
                                        </li>
                                        <li>
                                            <a href="/services/biometric-solution/details/"><i className="bx bx-chevron-right" />Biometric &amp; FR
                                                Solutions</a>
                                        </li>
                                        <li>
                                            <a><i className="bx bx-chevron-right" />IoT Solutions</a>
                                        </li>
                                        <li>
                                            <a><i className="bx bx-chevron-right" />StorePulse</a>
                                        </li>
                                        <li>
                                            <a><i className="bx bx-chevron-right" />CamStore</a>
                                        </li>
                                        <li>
                                            <a><i className="bx bx-chevron-right" />Checkcam+</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-6 col-md-6" data-cue="slideInUp">
                                <div className="footer-widget">
                                    <h2>Get In Touch</h2>
                                    <div className="touch-content">
                                        <div className="contact-icon">
                                            <img src="images/telephone.webp" alt="telephone" />
                                        </div>
                                        <a href="tel:+918080803988">8080803988</a>
                                    </div>
                                    <div className="touch-content">
                                        <div className="contact-icon">
                                            <img src="images/telephone.webp" alt="telephone" />
                                        </div>
                                        <a href="tel:+918188861888">8188861888 <br /> [For Support]</a>
                                    </div>
                                    <div className="touch-content">
                                        <div className="contact-icon">
                                            <img src="images/gmail.webp" alt="gmail" />
                                        </div>
                                        <a href="mailto:info@translineindia.com"><span>info@translineindia.com</span></a>
                                    </div>
                                    <div className="touch-content">
                                        <div className="contact-icon">
                                            <img src="images/gmail.webp" alt="gmail" />
                                        </div>
                                        <a href="mailto:support@translineindia.com"><span>support@translineindia.com <br /> [For Support]</span></a>
                                    </div>
                                    <div className="container">
                                        <iframe className="border rounded-3" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.9522397655633!2d77.14591027439708!3d28.66114868278261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0300200ef28f%3A0x6303545f88768277!2sTransline%20Technologies%20Limited!5e0!3m2!1sen!2sin!4v1690996098721!5m2!1sen!2sin" style={{ "margin-left": "-10px" }} width={270} height={150} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright-content">
                        <div className="d-flex align-items-center justify-content-center">
                            <p className="fw-bold">
                                © Transline Technologies Limited | <span id="current-year">2024</span>
                            </p>
                        </div>
                    </div>
                </div>
                {/* Footer Content Ending Here */}
                <span className="cursor d-none d-md-block" />
                <div className="go-top">
                    <i className="bx bxs-chevrons-up" />
                    <i className="bx bxs-chevrons-up" />
                </div>
            </div>
        </>
    )
}

export default Contact