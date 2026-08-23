import React from 'react'

const educationData = [
    {
        title: 'Acharya Institute of Technology, Bengaluru',
        course: 'Master of Computer Applications',
        years: '2025-2026',
        image: 'https://ik.imagekit.io/syustaging/SYU_PREPROD/COVER-IMAGE_7sqwtu7bG.webp?tr=w-3840',
        alt: 'Acharya Institute of Technology',
    },
    {
        title: 'Laxmi Venkatesh Desai College, Raichur',
        course: 'Bachelor of Computer Applications',
        years: '2022-2025',
        image: 'https://lvdcollege.com/wp-content/uploads/2025/05/COLLEGE-FRONT-wp-1320x600.jpg',
        alt: 'Laxmi Venkatesh Desai College',
    },
    {
        title: 'Sri Venkateshwara College (Optime Academy)',
        course: 'Commerce',
        years: '2020-2022',
        image: '',
        alt: 'Sri Venkateshwara College (Optime Academy)',
    },
    {
        title: 'Blessed Alphonse School, Shaktinagar',
        course: 'SSLC Board',
        years: '-2020',
        image: '',
        alt: 'Blessed Alphonse School',
    },
];

const FALLBACK_IMAGE =
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="220" viewBox="0 0 400 220">
            <rect width="400" height="220" fill="#1f2937" />
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#49a7ff" font-family="Consolas, monospace" font-size="18">
                No Image Available
            </text>
        </svg>`
    );

export default function Education(prop) {
    return (
        <div className={`education-page ${prop.Mode} text-${prop.text}`}>
            <div className="container">
                <div className="education-header">
                    <p className="eyebrow">MY JOURNEY</p>
                    <h1>Education</h1>
                </div>
                <div className="education-grid">
                    {educationData.map((edu) => (
                        <div className="education-card" data-bs-theme={prop.Mode} key={edu.title}>
                            <img
                                src={edu.image || FALLBACK_IMAGE}
                                className="education-card-img"
                                alt={edu.alt}
                                loading="lazy"
                            />
                            <div className="education-card-body">
                                <h5 className="education-card-title">{edu.title}</h5>
                                <p className="education-card-course">{edu.course}</p>
                                <p className="education-card-years"><small>{edu.years}</small></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

