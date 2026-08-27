import React from 'react';
// import Footer from './Footer';
// import BMW.jpg from './Photos';
// import { useState } from 'react';

export default function Home(prop) {
    return (
        <>
        <main className={`home-page ${prop.Mode} text-${prop.text}`}>
            <section className="hero-section" aria-labelledby="hero-title">
                <div className="hero-content container">
                    <div className="hero-copy">
                        <p className="eyebrow">HELLO, I AM MAHEBOOB</p>
                        <h1 id="hero-title">Full Stack<br /><span>Developer</span></h1>
                        <p className="hero-subtitle">Building Digital Solutions</p>
                        <div className="skill-list" aria-label="Technology skills">
                            <span className="skill-pill react-pill">React</span>
                            <span className="skill-pill node-pill">Node.js</span>
                            <span className="skill-pill js-pill">JavaScript</span>
                            <span className="skill-pill python-pill">Python</span>
                        </div>
                        <p className="hero-description">Passionate about creating innovative web applications and solving complex problems through clean, efficient code.</p>
                    </div>
                    <div className="code-showcase" aria-label="Developer profile">
                        <img className="profile-image" src="/Photos/Profile.jpg" alt="Maheboob Pasha" />
                        <div className="code-window">
                            <div className="window-dots"><i></i><i></i><i></i></div>
                            <pre><span className="code-blue">const</span> developer = {'{'}
  <span className="code-key">passion</span>: <span className="code-green">'coding'</span>,
  <span className="code-key">focus</span>: <span className="code-green">'innovation'</span>
{'}'};</pre>
                        </div>
                        <div className="profile-badge"><span></span> MAHEBOOB PASHA</div>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}
