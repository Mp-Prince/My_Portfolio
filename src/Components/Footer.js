function Footer({ Mode = 'dark', text = 'light' }) {
    return (
        <footer className={`portfolio-footer ${Mode} text-${text}`}>
            <div className="container py-3">
                <div className="row g-4">
                    <div className="col-lg-5">
                        <p className="footer-kicker mb-2">PORTFOLIO</p>
                        <h2 className="h4 mb-3">Maheboob Pasha</h2>
                        <p className="mb-0 footer-muted">
                            MCA student and aspiring software developer based in Bengaluru.
                        </p>
                    </div>
                    <div className="col-6 col-lg-3">
                        <h3 className="h6 text-uppercase mb-3">Social</h3>
                        <nav className="d-flex flex-column gap-2" aria-label="Social links">
                            <a className="footer-link" href="https://github.com/Mp-Prince" target="_blank" rel="noreferrer">GitHub</a>
                            <a className="footer-link" href="https://www.linkedin.com/in/maheboob-pasha-a4b561317/" target="_blank" rel="noreferrer">LinkedIn</a>
                            <a className="footer-link" href="https://leetcode.com/u/Maheboob_Pasha/" target="_blank" rel="noreferrer">LeetCode</a>
                        </nav>
                    </div>
                    <div className="col-6 col-lg-4">
                        <h3 className="h6 text-uppercase mb-3">Get in touch</h3>
                        <div className="d-flex flex-column gap-2">
                            <a className="footer-link" href="mailto:maheboob.pasha.tech@gmail.com">Email me</a>
                            <a className="footer-link" href="tel:+916366156079">+91 63661 56079</a>
                            <span className="footer-muted">Bengaluru, Karnataka 560107</span>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom mt-2 pt-2">
                    <small className="footer-muted">&copy; {new Date().getFullYear()} Maheboob Pasha. All rights reserved.</small>
                </div>
            </div>
        </footer>
    )
}

export default Footer;