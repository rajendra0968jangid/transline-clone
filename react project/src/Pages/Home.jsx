import React from 'react'

function Home() {
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
                                        <img
                                            src="images/trans-logo.png"
                                            style={{ height: 40, width: 200 }}
                                            className="black-logo"
                                            alt="image"
                                        />
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
                                    <img
                                        src="images/trans-logo.png"
                                        style={{ height: 50, width: 150 }}
                                        className="black-logo"
                                        alt="image"
                                    />
                                </a>
                                {/* Navbar Menu (Collapsible for Responsiveness) */}
                                <div
                                    className="collapse navbar-collapse mean-menu"
                                    id="navbarSupportedContent"
                                >
                                    {/* Main Navigation Links */}
                                    <ul className="navbar-nav ms-auto">
                                        {/* Home Link */}
                                        <li className="nav-item">
                                            <a href="/" className="nav-link active">
                                                Home
                                            </a>
                                        </li>
                                        {/* About Us Section */}
                                        <li className="nav-item">
                                            <a
                                                href="/about"
                                                className="nav-link "
                                            >
                                                About Us
                                            </a>
                                        </li>
                                        {/* Our Solutions Dropdown Menu */}
                                        <li className="nav-item">
                                            <a href="/services/" className="nav-link ">
                                                Our Solutions <i className="bx bx-down-arrow-alt ms-1" />
                                            </a>
                                            <ul
                                                className="dropdown-menu"
                                                style={{ left: "-550px", maxWidth: 1000, width: 1000 }}
                                            >
                                                <div className="row m-auto">
                                                    {/* Column 1: Solutions */}
                                                    <div className="col-sm-12 col-md-4 col-lg-4 text-start">
                                                        <h5 className="p-3 ms-1">Solutions</h5>
                                                        <li className="nav-item">
                                                            <a
                                                                href="/services/smart-city-solutions/details/"
                                                                className="nav-link"
                                                            >
                                                                Smart City Solutions
                                                            </a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a
                                                                href="/services/cctv-surveillance/details/"
                                                                className="nav-link"
                                                            >
                                                                CCTV Surveillance Solutions
                                                            </a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a
                                                                href="/services/data-centre-solution/details/"
                                                                className="nav-link"
                                                            >
                                                                Data Centre Solutions
                                                            </a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a
                                                                href="/services/biometric-solution/details/"
                                                                className="nav-link"
                                                            >
                                                                Biometric &amp; FR Solutions
                                                            </a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link">IOT Solutions</a>
                                                        </li>
                                                    </div>
                                                    {/* Column 2: Products */}
                                                    <div className="col-sm-12 col-md-4 col-lg-4 text-start">
                                                        <h5 className="p-3 ms-1">Products</h5>
                                                        <li className="nav-item">
                                                            <a href="#" className="nav-link">
                                                                Checkcam+
                                                            </a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a href="#" className="nav-link">
                                                                CamStore
                                                            </a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a href="#" className="nav-link">
                                                                StorePulse
                                                            </a>
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
                                                            <a className="nav-link">
                                                                Banking &amp; Financial Services
                                                            </a>
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
                                                            <a className="nav-link">Media &amp; Entertainment</a>
                                                        </li>
                                                    </div>
                                                </div>
                                            </ul>
                                        </li>
                                        {/* Investor Relations Dropdown */}
                                        <li className="nav-item">
                                            <a href="/#" className="nav-link ">
                                                Investor Relations
                                            </a>
                                        </li>
                                        {/* Careers Section */}
                                        <li className="nav-item">
                                            <a
                                                href="/careers"
                                                className="nav-link "
                                            >
                                                Careers
                                            </a>
                                        </li>
                                        {/* Contact Us Section */}
                                        <li className="nav-item">
                                            <a
                                                href="/contact"
                                                className="nav-link "
                                            >
                                                Contact Us
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="container">
                </div>
                <div id="dynamicBanner" className="home-banner-images-div d-flex align-items-center justify-content-center text-center" style={{ "margin-top": "85px", "height": "calc(100vh - 85px)", "background": "linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(50, 50, 50, 0.9)),               url(images/biometrics.webp)", "background-repeat": "no-repeat", "background-size": "cover" }}>
                    {/* Centered Content */}
                    <div className="text-white px-4" style={{ "max-width": "900px" }}>
                        {/* Main Title */}
                        <h1 className="display-5 fade-in" style={{ "margin": "0", "padding": "0", "letter-spacing": "2px", "line-height": "1.2", "color": "white" }}>
                            Transline Technologies
                        </h1>
                        {/* Animated Separator */}
                        <div className="separator fade-in">
                            <span className="line" />
                        </div>
                        {/* Dynamic Keyword */}
                        <div id="dynamicKeyword" className="animated-keyword fw-bold fade-in active" style={{ "line-height": "1.1", "margin-top": "20px" }}>
                            BIOMETRICS
                        </div>
                    </div>
                </div>
                <div className="trusted-grid-section pt-100 pb-100">
                    <div className="container">
                        <div className="row align-items-center">
                            {/* Left Text Content */}
                            <div className="col-lg-5 text-content">
                                <h2 className="headline">Trusted by Leaders Across Industries</h2>
                                <p className="subheadline">
                                    With <strong style={{ "color": "#225991", "font-size": "25px" }}>500+ clients</strong>, including global corporations
                                    and government agencies, our solutions empower their growth and innovation. Partner with us to achieve
                                    success.
                                </p>
                            </div>
                            {/* Right Logo Grid */}
                            <div className="col-lg-7">
                                <div className="grid-wrapper">
                                    <div className="logo-grid" id="logoGrid">
                                        <div className="logo-item" style={{ "-webkit-transition-delay": "0ms", "transition-delay": "0ms" }}><img src="images/adhaar_logo.webp" alt="Aadhaar" loading="lazy" /></div>
                                        <div className="logo-item" style={{ "-webkit-transition-delay": "100ms", "transition-delay": "100ms" }}><img src="images/apollo.webp" alt="Apollo" loading="lazy" /></div>
                                        <div className="logo-item" style={{ "-webkit-transition-delay": "200ms", "transition-delay": "200ms" }}><img src="images/bharatelec.webp" alt="Bharat Elec" loading="lazy" /></div>
                                        <div className="logo-item" style={{ "-webkit-transition-delay": "300ms", "transition-delay": "300ms" }}><img src="images/bls.webp" alt="BLS" loading="lazy" /></div>
                                        <div className="logo-item" style={{ "-webkit-transition-delay": "400ms", "transition-delay": "400ms" }}><img src="images/bsnl.webp" alt="BSNL" loading="lazy" /></div>
                                        <div className="logo-item" style={{ "-webkit-transition-delay": "500ms", "transition-delay": "500ms" }}><img src="images/dcb_bank.webp" alt="DCB Bank" loading="lazy" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="solutions-section portfolio-area pt-100 pb-100" style={{ "background-color": "#f5f8fa" }}>
                    <div className="pb-100 container">
                        <div className="section-title text-center">
                            <span className="top-title">What We Are Offering</span>
                            <h2 className="fw-bold">Transforming Industries with Cutting-Edge Solutions</h2>
                        </div>
                        <div className="services-grid">
                            {/* StorePulse */}
                            <div className="service-card" data-tooltip="Retail Intelligence for better insights.">
                                <div className="image" style={{ "background-image": "url(images/store.jpg)" }} />
                                <div className="text">
                                    <p>StorePulse</p>
                                    <div style={{ "color": "lightgray", "font-size": "14px", "font-weight": "bold", "-webkit-text-transform": "uppercase", "text-transform": "uppercase", "border-radius": "30px", "padding-bottom": "5px" }}>
                                        Intelligent Video Analytics
                                    </div>
                                    <a href="#" className="read-more">Learn More</a>
                                </div>
                            </div>
                            {/* CamStore */}
                            <div className="service-card">
                                <div className="image" style={{ "background-image": "url(images/camstore.jpg)" }} />
                                <div className="text">
                                    <p>SmartCAMSTORE+</p>
                                    <div style={{ "color": "lightgray", "font-size": "14px", "font-weight": "bold", "-webkit-text-transform": "uppercase", "text-transform": "uppercase", "border-radius": "30px", "padding-bottom": "5px" }}>
                                        Video Data Optimization
                                    </div>
                                    <a href="#" className="read-more">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                            {/* IOT Solutions */}
                            <div className="service-card">
                                <div className="image" style={{ "background-image": "url(images/iot.jpg)" }} />
                                <div className="text">
                                    <p>IoT Solutions</p>
                                    <div style={{ "color": "lightgray", "font-size": "14px", "font-weight": "bold", "-webkit-text-transform": "uppercase", "text-transform": "uppercase", "border-radius": "30px", "padding-bottom": "5px" }}>
                                        Intelligent Connectivity
                                    </div>
                                    <a href="#" className="read-more">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                            {/* CheckCam+ */}
                            <div className="service-card">
                                <div className="image" style={{ "background-image": "url(images/checkcam.png)" }} />
                                <div className="text">
                                    <p>CheckCam+</p>
                                    <div style={{ "color": "lightgray", "font-size": "14px", "font-weight": "bold", "-webkit-text-transform": "uppercase", "text-transform": "uppercase", "border-radius": "30px", "padding-bottom": "5px" }}>
                                        Network Surveillance
                                    </div>
                                    <a href="#" className="read-more">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                            {/* Smart City Solutions */}
                            <div className="service-card">
                                <div className="image" style={{ "background-image": "url(images/3571.jpg)" }} />
                                <div className="text">
                                    <p>Smart City Solutions</p>
                                    <div style={{ "color": "lightgray", "font-size": "14px", "font-weight": "bold", "-webkit-text-transform": "uppercase", "text-transform": "uppercase", "border-radius": "30px", "padding-bottom": "5px" }}>
                                        Urban Infrastructure
                                    </div>
                                    <a href="/services/smart-city-solutions/details/" className="read-more">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                            {/* CCTV Surveillance */}
                            <div className="service-card">
                                <div className="image" style={{ "background-image": "url(images/checkcam.jpg)" }} />
                                <div className="text">
                                    <p>CCTV Surveillance</p>
                                    <div style={{ "color": "lightgray", "font-size": "14px", "font-weight": "bold", "-webkit-text-transform": "uppercase", "text-transform": "uppercase", "border-radius": "30px", "padding-bottom": "5px" }}>
                                        Security Technology
                                    </div>
                                    <a href="/services/cctv-surveillance/details/" className="read-more">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                            {/* Data Center Solutions */}
                            <div className="service-card">
                                <div className="image" style={{ "background-image": "url(images/datacenter.jpg)" }} />
                                <div className="text">
                                    <p>Data Centre Solution</p>
                                    <div style={{ "color": "lightgray", "font-size": "14px", "font-weight": "bold", "-webkit-text-transform": "uppercase", "text-transform": "uppercase", "border-radius": "30px", "padding-bottom": "5px" }}>
                                        Enterprise IT
                                    </div>
                                    <a href="/services/data-centre-solution/details/" className="read-more">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                            {/* Biometric Solutions */}
                            <div className="service-card">
                                <div className="image" style={{ "background-image": "url(images/biometric.jpg)" }} />
                                <div className="text">
                                    <p>Biometric Solutions</p>
                                    <div style={{ "color": "lightgray", "font-size": "14px", "font-weight": "bold", "-webkit-text-transform": "uppercase", "text-transform": "uppercase", "border-radius": "30px", "padding-bottom": "5px" }}>
                                        Identity Management
                                    </div>
                                    <a href="/services/biometric-solution/details/" className="read-more">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="solutions-section-carousel portfolio-area pt-100 pb-100" style={{ "background-color": "#f5f8fa" }}>
                    <div className="container">
                        <div className="portfolio-top-item d-flex align-items-end justify-content-between">
                            {/* Section Header */}
                            <div className="section-title text-center">
                                <span className="top-title">Industries We Serve</span>
                                <h2 className="fw-bold">Driving Transformation Across Diverse Industries</h2>
                            </div>
                            {/* Section Header Ends Here */}
                        </div>
                        <div className="portfolio-slider owl-carousel owl-theme text-center">
                            {/* StorePulse */}
                            <div className="wrapper">
                                <div className="service-card" data-tooltip="Retail Intelligence for better insights.">
                                    <div className="image" style={{ "background-image": "url(images/store.jpg)" }} />
                                    <div className="text">
                                        <p>StorePulse</p>
                                        <div style={{ "color": "lightgray", "font-size": "14px", "font-weight": "bold", "-webkit-text-transform": "uppercase", "text-transform": "uppercase", "border-radius": "30px", "padding-bottom": "5px" }}>
                                            Retail Intelligence
                                        </div>
                                        <a href="#" className="read-more">Learn More</a>
                                    </div>
                                </div>
                            </div>
                            {/* SmartCAMSTORE */}
                            <div className="wrapper">
                                <div className="service-card">
                                    <div className="image" style={{ "background-image": "url(images/camstore.jpg)" }} />
                                    <div className="text">
                                        <p>SmartCAMSTORE+</p>
                                        <div style={{ "color": "lightgray", "font-size": "14px", "font-weight": "bold", "-webkit-text-transform": "uppercase", "text-transform": "uppercase", "border-radius": "30px", "padding-bottom": "5px" }}>
                                            Video Data Optimization
                                        </div>
                                        <a href="#" className="read-more">
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* IOT Solutions */}
                            <div className="wrapper">
                                <div className="service-card">
                                    <div className="image" style={{ "background-image": "url(images/iot.jpg)" }} />
                                    <div className="text">
                                        <p>IoT Solutions</p>
                                        <div style={{ "color": "lightgray", "font-size": "14px", "font-weight": "bold", "-webkit-text-transform": "uppercase", "text-transform": "uppercase", "border-radius": "30px", "padding-bottom": "5px" }}>
                                            Intelligent Connectivity
                                        </div>
                                        <a href="#" className="read-more">
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* CheckCam */}
                            <div className="wrapper">
                                <div className="service-card">
                                    <div className="image" style={{ "background-image": "url(images/checkcam.png)" }} />
                                    <div className="text">
                                        <p>CheckCam+</p>
                                        <div style={{ "color": "lightgray", "font-size": "14px", "font-weight": "bold", "-webkit-text-transform": "uppercase", "text-transform": "uppercase", "border-radius": "30px", "padding-bottom": "5px" }}>
                                            Network Surveillance
                                        </div>
                                        <a href="#" className="read-more">
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* Smart City Solutions */}
                            <div className="wrapper">
                                <div className="service-card">
                                    <div className="image" style={{ "background-image": "url(images/3571.jpg)" }} />
                                    <div className="text">
                                        <p>Smart City Solutions</p>
                                        <div style={{ "color": "lightgray", "font-size": "14px", "font-weight": "bold", "-webkit-text-transform": "uppercase", "text-transform": "uppercase", "border-radius": "30px", "padding-bottom": "5px" }}>
                                            Urban Infrastructure
                                        </div>
                                        <a href="#" className="read-more">
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* CCTV Surveillance */}
                            <div className="wrapper">
                                <div className="service-card">
                                    <div className="image" style={{ "background-image": "url(images/checkcam.jpg)" }} />
                                    <div className="text">
                                        <p>CCTV Surveillance</p>
                                        <div style={{ "color": "lightgray", "font-size": "14px", "font-weight": "bold", "-webkit-text-transform": "uppercase", "text-transform": "uppercase", "border-radius": "30px", "padding-bottom": "5px" }}>
                                            Security Technology
                                        </div>
                                        <a href="#" className="read-more">
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* Data Centre */}
                            <div className="wrapper">
                                <div className="service-card">
                                    <div className="image" style={{ "background-image": "url(images/datacenter.jpg)" }} />
                                    <div className="text">
                                        <p>Data Centre Solution</p>
                                        <div style={{ "color": "lightgray", "font-size": "14px", "font-weight": "bold", "-webkit-text-transform": "uppercase", "text-transform": "uppercase", "border-radius": "30px", "padding-bottom": "5px" }}>
                                            Enterprise IT
                                        </div>
                                        <a href="#" className="read-more">
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* Biometric */}
                            <div className="wrapper">
                                <div className="service-card">
                                    <div className="image" style={{ "background-image": "url(images/biometric.jpg)" }} />
                                    <div className="text">
                                        <p>Biometric Solutions</p>
                                        <div style={{ "color": "lightgray", "font-size": "14px", "font-weight": "bold", "-webkit-text-transform": "uppercase", "text-transform": "uppercase", "border-radius": "30px", "padding-bottom": "5px" }}>
                                            Identity Management
                                        </div>
                                        <a href="#" className="read-more">
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="industries-serve-section pt-100 pb-100" style={{ "background-color": "#f5f8fa" }}>
                    <div className="container">
                        {/* Section Header */}
                        <div className="section-title text-center">
                            <span className="top-title">Industries We Serve</span>
                            <h2 className="fw-bold">Driving Transformation Across Diverse Industries</h2>
                        </div>
                        {/* Section Header Ends Here */}
                        {/* Industries Grid */}
                        <div className="row text-center gy-4">
                            {/* Industry 1 */}
                            <div className="col-md-6 col-lg-3">
                                <div className="industry-block">
                                    <div className="industry-icon mb-3">
                                        <img src="images/manufacture.png" alt="Manufacturing" className="img-fluid" />
                                    </div>
                                    <h5 className="industry-title">Manufacturing</h5>
                                    <p className="industry-description">Transforming factory operations with IoT, AI, and predictive analytics to
                                        improve efficiency and safety.</p>
                                </div>
                            </div>
                            {/* Industry 2 */}
                            <div className="col-md-6 col-lg-3">
                                <div className="industry-block">
                                    <div className="industry-icon mb-3">
                                        <img src="images/bank.png" alt="Banking & Financial Services" className="img-fluid" />
                                    </div>
                                    <h5 className="industry-title">Banking &amp; Financial Services</h5>
                                    <p className="industry-description">Ensuring secure, seamless banking with biometric solutions and advanced
                                        surveillance systems.</p>
                                </div>
                            </div>
                            {/* Industry 3 */}
                            <div className="col-md-6 col-lg-3">
                                <div className="industry-block">
                                    <div className="industry-icon mb-3">
                                        <img src="images/oilgas.png" alt="Oil & Gas" className="img-fluid" />
                                    </div>
                                    <h5 className="industry-title">Oil &amp; Gas</h5>
                                    <p className="industry-description">Deploying AI-driven explosion-proof cameras and IoT for secure and efficient
                                        refinery operations.</p>
                                </div>
                            </div>
                            {/* Industry 4 */}
                            <div className="col-md-6 col-lg-3">
                                <div className="industry-block">
                                    <div className="industry-icon mb-3">
                                        <img src="images/logistic.png" alt="Logistics" className="img-fluid" />
                                    </div>
                                    <h5 className="industry-title">Logistics</h5>
                                    <p className="industry-description">Optimizing supply chains with ERP and IoT solutions for real-time tracking
                                        and smarter logistics management.</p>
                                </div>
                            </div>
                            {/* Industry 5 */}
                            <div className="col-md-6 col-lg-3">
                                <div className="industry-block">
                                    <div className="industry-icon mb-3">
                                        <img src="images/railway.png" alt="Railways" className="img-fluid" />
                                    </div>
                                    <h5 className="industry-title">Railways</h5>
                                    <p className="industry-description">Enhancing passenger safety and operations with face recognition and
                                        AI-powered analytics.</p>
                                </div>
                            </div>
                            {/* Industry 6 */}
                            <div className="col-md-6 col-lg-3">
                                <div className="industry-block">
                                    <div className="industry-icon mb-3">
                                        <img src="images/retail.png" alt="Consumer Goods & Retail" className="img-fluid" />
                                    </div>
                                    <h5 className="industry-title">Consumer Goods &amp; Retail</h5>
                                    <p className="industry-description">Revolutionizing retail experiences with footfall tracking, behavior
                                        analytics, and real-time AI insights.</p>
                                </div>
                            </div>
                            {/* Industry 7 */}
                            <div className="col-md-6 col-lg-3">
                                <div className="industry-block">
                                    <div className="industry-icon mb-3">
                                        <img src="images/smart-city.png" alt="Smart Cities" className="img-fluid" />
                                    </div>
                                    <h5 className="industry-title">Smart Cities</h5>
                                    <p className="industry-description">Innovating urban infrastructure with IoT systems for smart surveillance and
                                        efficient public safety management.</p>
                                </div>
                            </div>
                            {/* Industry 8 */}
                            <div className="col-md-6 col-lg-3">
                                <div className="industry-block">
                                    <div className="industry-icon mb-3">
                                        <img src="images/media.png" alt="Media & Entertainment" className="img-fluid" />
                                    </div>
                                    <h5 className="industry-title">Media &amp; Entertainment</h5>
                                    <p className="industry-description">Delivering robust IT solutions for content security, production, and
                                        seamless broadcasting.</p>
                                </div>
                            </div>
                        </div>
                        {/* Industries Grid Ends Here */}
                    </div>
                </section>
            </div>
            <div>
                <div className="industries-serve-section-carousel portfolio-area pt-100 pb-100" style={{ "background-color": "#f5f8fa" }}>
                    <div className="container">
                        <div className="portfolio-top-item d-flex align-items-end justify-content-between">
                            {/* Section Header */}
                            <div className="section-title text-center">
                                <span className="top-title">Industries We Serve</span>
                                <h2 className="fw-bold">Driving Transformation Across Diverse Industries</h2>
                            </div>
                            {/* Section Header Ends Here */}
                        </div>
                        <div className="portfolio-slider owl-carousel owl-theme text-center">
                            {/* Banking & Financial Services */}
                            <div className="wrapper">
                                <div className="industry-block" style={{ "-webkit-text-align": "center", "text-align": "center" }}>
                                    <div className="industry-icon mb-3" style={{ "display": "inline-block" }}>
                                        <img src="images/bank.png" alt="Banking & Financial Services" className="img-fluid" />
                                    </div>
                                    <h5 className="industry-title">Banking &amp; Financial Services</h5>
                                    <p className="industry-description">Ensuring secure, seamless banking with biometric solutions and advanced
                                        surveillance systems.</p>
                                </div>
                            </div>
                            {/* Manufacturing */}
                            <div className="wrapper">
                                <div className="industry-block" style={{ "-webkit-text-align": "center", "text-align": "center" }}>
                                    <div className="industry-icon mb-3" style={{ "display": "inline-block" }}>
                                        <img src="images/manufacture.png" alt="Manufacturing" className="img-fluid" />
                                    </div>
                                    <h5 className="industry-title">Manufacturing</h5>
                                    <p className="industry-description">Transforming factory operations with IoT, AI, and predictive analytics to
                                        improve efficiency and safety.</p>
                                </div>
                            </div>
                            {/* Oil & Gas */}
                            <div className="wrapper">
                                <div className="industry-block" style={{ "-webkit-text-align": "center", "text-align": "center" }}>
                                    <div className="industry-icon mb-3" style={{ "display": "inline-block" }}>
                                        <img src="images/oilgas.png" alt="Oil & Gas" className="img-fluid" />
                                    </div>
                                    <h5 className="industry-title">Oil &amp; Gas</h5>
                                    <p className="industry-description">Deploying AI-driven explosion-proof cameras and IoT for secure and efficient
                                        refinery operations.</p>
                                </div>
                            </div>
                            {/* Logistics */}
                            <div className="wrapper">
                                <div className="industry-block" style={{ "-webkit-text-align": "center", "text-align": "center" }}>
                                    <div className="industry-icon mb-3" style={{ "display": "inline-block" }}>
                                        <img src="images/logistic.png" alt="Logistics" className="img-fluid" />
                                    </div>
                                    <h5 className="industry-title">Logistics</h5>
                                    <p className="industry-description">Optimizing supply chains with ERP and IoT solutions for real-time tracking
                                        and smarter logistics management.</p>
                                </div>
                            </div>
                            {/* Railways */}
                            <div className="wrapper">
                                <div className="industry-block" style={{ "-webkit-text-align": "center", "text-align": "center" }}>
                                    <div className="industry-icon mb-3" style={{ "display": "inline-block" }}>
                                        <img src="images/railway.png" alt="Railways" className="img-fluid" />
                                    </div>
                                    <h5 className="industry-title">Railways</h5>
                                    <p className="industry-description">Enhancing passenger safety and operations with face recognition and
                                        AI-powered analytics.</p>
                                </div>
                            </div>
                            {/* Consumer Goods & Retail */}
                            <div className="wrapper">
                                <div className="industry-block" style={{ "-webkit-text-align": "center", "text-align": "center" }}>
                                    <div className="industry-icon mb-3" style={{ "display": "inline-block" }}>
                                        <img src="images/retail.png" alt="Consumer Goods & Retail" className="img-fluid" />
                                    </div>
                                    <h5 className="industry-title">Consumer Goods &amp; Retail</h5>
                                    <p className="industry-description">Revolutionizing retail experiences with footfall tracking, behavior
                                        analytics, and real-time AI insights.</p>
                                </div>
                            </div>
                            {/* Smart Cities */}
                            <div className="wrapper">
                                <div className="industry-block" style={{ "-webkit-text-align": "center", "text-align": "center" }}>
                                    <div className="industry-icon mb-3" style={{ "display": "inline-block" }}>
                                        <img src="images/smart-city.png" alt="Smart Cities" className="img-fluid" />
                                    </div>
                                    <h5 className="industry-title">Smart Cities</h5>
                                    <p className="industry-description">Innovating urban infrastructure with IoT systems for smart surveillance and
                                        efficient public safety management.</p>
                                </div>
                            </div>
                            {/* Media & Entertainment */}
                            <div className="wrapper">
                                <div className="industry-block" style={{ "-webkit-text-align": "center", "text-align": "center" }}>
                                    <div className="industry-icon mb-3" style={{ "display": "inline-block" }}>
                                        <img src="images/media.png" alt="Media & Entertainment" className="img-fluid" />
                                    </div>
                                    <h5 className="industry-title">Media &amp; Entertainment</h5>
                                    <p className="industry-description">Delivering robust IT solutions for content security, production, and
                                        seamless broadcasting.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pb-100 pt-100" style={{ "background-color": "#f5f8fa" }}>
                    <div className="container">
                        <div className="section-title text-center mb-4">
                            <span className="top-title" style={{ "color": "#34495e", "font-size": "1.2rem", "font-weight": "600" }}>Our Guiding Pillars of
                                Excellence</span>
                            <h2 className="fw-bold header-title">Inspiring Innovation, Trust, and Impact</h2>
                        </div>
                        {/* Pillars Section */}
                        <div className="row g-3 justify-content-center">
                            {/* Pillar 1 */}
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <div className="card-container">
                                    <div className="pillar-card">
                                        <div className="card-front">
                                            <img src="images/innovation.png" alt="Relentless Innovation" className="icon-img" />
                                            <p className="pillar-title">Relentless Innovation</p>
                                        </div>
                                        <div className="card-back">
                                            <p>Pioneering advanced AI, IoT, and biometrics to reshape industries</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Pillar 2 */}
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <div className="card-container">
                                    <div className="pillar-card">
                                        <div className="card-front">
                                            <img src="images/vision.png" alt="Customer Vision" className="icon-img" />
                                            <p className="pillar-title">Customer-Centric Vision</p>
                                        </div>
                                        <div className="card-back">
                                            <p>Empowering 500+ clients with tailored, scalable solutions that inspire trust</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Pillar 3 */}
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <div className="card-container">
                                    <div className="pillar-card">
                                        <div className="card-front">
                                            <img src="images/integrity.png" alt="Uncompromising Integrity" className="icon-img" />
                                            <p className="pillar-title">Uncompromising Integrity</p>
                                        </div>
                                        <div className="card-back">
                                            <p>Delivering excellence through transparency, quality, and accountability</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Pillar 4 */}
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <div className="card-container">
                                    <div className="pillar-card">
                                        <div className="card-front">
                                            <img src="images/collaboration.png" alt="Transformative Collaboration" className="icon-img" />
                                            <p className="pillar-title">Transformative Collaboration</p>
                                        </div>
                                        <div className="card-back">
                                            <p>Building groundbreaking solutions through powerful partnerships and expertise</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Pillar 5 */}
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <div className="card-container">
                                    <div className="pillar-card">
                                        <div className="card-front">
                                            <img src="images/strategy.png" alt="Sustainability Strategy" className="icon-img" />
                                            <p className="pillar-title">Sustainability as Strategy</p>
                                        </div>
                                        <div className="card-back">
                                            <p>Innovating eco-friendly solutions to create a smarter, greener future</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Pillar 6 */}
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <div className="card-container">
                                    <div className="pillar-card">
                                        <div className="card-front">
                                            <img src="images/growth.png" alt="Growth & Diversity" className="icon-img" />
                                            <p className="pillar-title">Empowering Growth &amp; Diversity</p>
                                        </div>
                                        <div className="card-back">
                                            <p>Fostering a culture where people and ideas thrive to create impact</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="founder-section pt-100 pb-100">
                    <div className="container">
                        <div className="founder-card">
                            {/* Content Section */}
                            <div className="content-wrapper">
                                <p className="founder-heading">Chairman &amp; MD</p>
                                <h2 className="founder-name">Arun Gupta</h2>
                                <h3 className="founder-tagline">Driving Innovation, Inspiring Transformation</h3>
                                <p className="founder-bio">
                                    With over two decades of visionary leadership, Arun Gupta laid the foundation of Transline Technologies to
                                    redefine how industries embrace technology. His foresight has propelled the company into diverse domains
                                    such as Biometric Solutions, IoT, AI, and Smart Surveillance. A pioneer in fostering impactful government
                                    partnerships and delivering tailored, future-ready solutions, his leadership inspires innovation, growth,
                                    and excellence.
                                </p>
                                {/* Vision Section */}
                                <div className="vision-section">
                                    <h4 className="vision-heading">Our Vision</h4>
                                    <p className="vision-text">
                                        <strong>"Empowering Industries, Enriching Lives."</strong> <br /> We aim to bridge technology and
                                        innovation, offering seamless, secure, and sustainable solutions that enhance efficiency, productivity,
                                        and quality of life. Our vision is to build a future where technology transforms businesses and empowers
                                        communities.
                                    </p>
                                </div>
                            </div>
                            {/* Founder Image Section */}
                            <div className="image-wrapper">
                                <img src="images/ceo.png" alt="Arun Gupta" className="founder-image" />
                            </div>
                        </div>
                    </div>
                </section>
                <div className="odometer-two-area pt-100 pb-100" style={{ "background": "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(50, 50, 50, 0.5)),               url(ai.avif)", "background-repeat": "no-repeat", "background-size": "cover", "color": "white" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-6 col-sm-6 col-md-3">
                                <div className="odometer-two-content">
                                    <h2 style={{ "color": "white" }}>
                                        <span className="odometer" data-count={250}>00</span>
                                        <span className="target">+</span>
                                    </h2>
                                    <p style={{ "color": "white" }}>Empowering Growth with ₹250+ Crore Annual Revenue</p>
                                    <div className="odometer-shape">
                                        <img src="images/odometer-shape-1.webp" loading="lazy" alt="odometer" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6 col-sm-6 col-md-3">
                                <div className="odometer-two-content">
                                    <h2 style={{ "color": "white" }}>
                                        <span className="odometer" data-count={10}>00</span>
                                        <span className="target">+</span>
                                    </h2>
                                    <p style={{ "color": "white" }}>Expanding Horizons Across 10+ Key Industries</p>
                                    <div className="odometer-shape">
                                        <img src="images/odometer-shape-1.webp" loading="lazy" alt="odometer" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6 col-sm-6 col-md-3">
                                <div className="odometer-two-content">
                                    <h2 style={{ "color": "white" }}>
                                        <span className="odometer" data-count={500}>00</span>
                                        <span className="target">+</span>
                                    </h2>
                                    <p style={{ "color": "white" }}>Trusted by 500+ Global Leaders</p>
                                    <div className="odometer-shape">
                                        <img src="images/odometer-shape-1.webp" loading="lazy" alt="odometer" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6 col-sm-6 col-md-3">
                                <div className="odometer-two-content">
                                    <h2 style={{ "color": "white" }}>
                                        <span className="odometer" data-count={23}>00</span>
                                        <span className="target">+</span>
                                    </h2>
                                    <p style={{ "color": "white" }}>Delivering Excellence for Over Two Decades</p>
                                    <div className="odometer-shape">
                                        <img src="images/odometer-shape-1.webp" loading="lazy" alt="odometer" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section style={{ "background-color": "#f5f8fa" }}>
                    <div className="container pt-100 pb-100">
                        <div className="section-title mt-5 pb-3 text-center">
                            <span className="top-title">Global Standards. Trusted Excellence</span>
                            <h2 className="text-blue">Our Certifications</h2>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                <div className="certification-grid">
                                    {/* Card 1 */}
                                    <div className="certification-card">
                                        <div className="services-icon">
                                            <img loading="lazy" src="images/iso_icon.webp" alt="ISO" />
                                        </div>
                                        <h3>ISO/IEC 27001:2013</h3>
                                    </div>
                                    {/* Card 2 */}
                                    <div className="certification-card">
                                        <div className="services-icon">
                                            <img loading="lazy" src="images/cmmi_icon.webp" alt="CMMI Maturity Level 5" />
                                        </div>
                                        <h3>CMMI Maturity Level 5</h3>
                                    </div>
                                    {/* Card 3 */}
                                    <div className="certification-card">
                                        <div className="services-icon">
                                            <img loading="lazy" src="images/iso_icon.webp" alt="ISO" />
                                        </div>
                                        <h3>ISO 9001:2015</h3>
                                    </div>
                                    {/* Card 4 */}
                                    <div className="certification-card">
                                        <div className="services-icon">
                                            <img loading="lazy" src="images/iso_icon.webp" alt="ISO" />
                                        </div>
                                        <h3>ISO 14001:2015</h3>
                                    </div>
                                    {/* Card 5 */}
                                    <div className="certification-card">
                                        <div className="services-icon">
                                            <img loading="lazy" src="images/iso_icon.webp" alt="ISO" />
                                        </div>
                                        <h3>ISO/IEC 20000-1:2018</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="case-studies" style={{ "background-color": "#f5f8fa" }}>
                    <div className="container">
                        <div className="section-title">
                            <span className="top-title">Case Studies</span>
                            <h2 className="main-title">Real-World Impact: Transformative Case Studies</h2>
                        </div>
                        <div className="case-studies-grid">
                            <div className="case-card">
                                <div className="icon-wrapper">
                                    <img src="images/store.png" alt />
                                </div>
                                <h3 style={{ "font-size": "20px", "margin": "15px 0px" }}>Retail Excellence</h3>
                                <p>
                                    Using AI-powered insights with StorePulse, COBB boosted in-store operations, enhanced customer engagement,
                                    and optimized layouts for better conversions.
                                </p>
                            </div>
                            <div className="case-card">
                                <div className="icon-wrapper">
                                    <img src="images/surv.png" alt />
                                </div>
                                <h3 style={{ "font-size": "20px", "margin": "15px 0px" }}>Cost-Efficient Surveillance</h3>
                                <p>
                                    Smart CamStore reduced video storage by 90%, ensuring compliance and operational reliability for e-commerce
                                    packing stations.
                                </p>
                            </div>
                            <div className="case-card">
                                <div className="icon-wrapper">
                                    <img src="images/biometric.png" alt />
                                </div>
                                <h3 style={{ "font-size": "20px", "margin": "15px 0px" }}>Biometric Transparency</h3>
                                <p>
                                    Deployed 2,500 biometric devices, saving ₹1.7 crore, enhancing attendance accuracy, and eliminating
                                    inefficiencies in municipal operations.
                                </p>
                            </div>
                            <div className="case-card">
                                <div className="icon-wrapper">
                                    <img src="images/safety.png" alt />
                                </div>
                                <h3 style={{ "font-size": "20px", "margin": "15px 0px" }}>Public Safety Innovation</h3>
                                <p>
                                    Installed 1000+ cameras for real-time monitoring, crime prevention, and enhanced coordination across 50
                                    police stations.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section style={{ "background-color": "#f5f8fa" }}>
                    <div className="container pt-100 pb-100">
                        {/* Section Title */}
                        <div className="section-title">
                            <span className="top-title">
                                <a href="/investor-relations/media-updates-and-newsletters/" className="section-link">Shaping the future with
                                    innovation and partnerships</a>
                            </span>
                            <h2>Transline in the News</h2>
                        </div>
                        {/* Media Section */}
                        <section className="media-section">
                            <div className="media-section__grid">
                                {/* Card 1 */}
                                <a className="media-section__card" href="https://zeenews.india.com/delhi/delhi-based-tech-firm-transline-technologies-gets-investment-from-big-league-2757256.html">
                                    <div className="media-section__background" style={{ "background-image": "url('images/news-1.jpg')" }} />
                                    <div className="media-section__content">
                                        <p className="media-section__category">June 2024</p>
                                        <p className="media-section__heading">Delhi-Based Tech Firm Transline Technologies Gets Investment From Big
                                            League</p>
                                    </div>
                                </a>
                                {/* Card 2 */}
                                <a className="media-section__card" href="https://www.cnbctv18.com/technology/transline-technologies-launches-smartcamstore-to-redefine-surveillance-data-management-19169291.htm">
                                    <div className="media-section__background" style={{ "background-image": "url('images/news-2.jpg')" }} />
                                    <div className="media-section__content">
                                        <p className="media-section__category">February 2024</p>
                                        <p className="media-section__heading">Transline Technologies launches SmartCAMSTORE+ to redefine surveillance
                                            data management</p>
                                    </div>
                                </a>
                                {/* Card 3 */}
                                <a className="media-section__card" href="https://economictimes.indiatimes.com/news/company/corporate-trends/delhi-based-transline-technologies-gets-surveillance-system-contract-from-iocl/articleshow/107167272.cms?from=mdr">
                                    <div className="media-section__background" style={{ "background-image": "url('images/news-3.jpg')" }} />
                                    <div className="media-section__content">
                                        <p className="media-section__category">January 2024</p>
                                        <p className="media-section__heading">Delhi-based Transline Technologies gets surveillance system contract
                                            from IOCL</p>
                                    </div>
                                </a>
                            </div>
                        </section>
                    </div>
                </section>
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
                <span className="cursor d-none d-md-block" />
                <div className="go-top">
                    <i className="bx bxs-chevrons-up" />
                    <i className="bx bxs-chevrons-up" />
                </div>
            </div>
        </>

    )
}

export default Home