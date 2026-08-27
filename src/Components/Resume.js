const resume = {
	name: 'Maheboob Pasha',
	role: 'MCA Student | Aspiring Software Developer',
	location: 'Bengaluru, Karnataka',
	email: 'maheboob.pasha.tech@gmail.com',
	phone: '+91 63661 56079',
	summary: 'Motivated MCA student with a strong interest in building practical, user-focused software. I enjoy learning modern web technologies and turning ideas into clear, reliable experiences.',
	skills: ['React', 'JavaScript', 'Node.js', 'Python', 'HTML & CSS', 'Git'],
	education: 'Master of Computer Applications (MCA)',
	links: [
		{ label: 'GitHub', url: 'https://github.com/' },
		{ label: 'LinkedIn', url: 'https://www.linkedin.com/' },
		{ label: 'LeetCode', url: 'https://leetcode.com/' },
	],
}

function downloadResume() {
	const content = `<!doctype html><html><head><meta charset="utf-8"><title>${resume.name} - Resume</title><style>body{font-family:Arial,sans-serif;max-width:800px;margin:48px auto;color:#172235;line-height:1.6}h1{margin-bottom:4px;color:#1769aa}h2{border-bottom:2px solid #49a7ff;padding-bottom:5px;margin-top:30px}h3{margin-bottom:4px}p{margin-top:4px}.contact{color:#52637a}.skills span{display:inline-block;background:#e5eef8;padding:5px 10px;margin:4px;border-radius:4px}</style></head><body><h1>${resume.name}</h1><p><strong>${resume.role}</strong></p><p class="contact">${resume.location} | ${resume.email} | ${resume.phone}</p><h2>Profile</h2><p>${resume.summary}</p><h2>Skills</h2><p class="skills">${resume.skills.map((skill) => `<span>${skill}</span>`).join('')}</p><h2>Education</h2><h3>${resume.education}</h3><h2>Profiles</h2><p>${resume.links.map((link) => `${link.label}: ${link.url}`).join('<br>')}</p></body></html>`
	const file = new Blob([content], { type: 'text/html' })
	const url = URL.createObjectURL(file)
	const link = document.createElement('a')
	link.href = url
	link.download = 'Maheboob-Pasha-Resume.html'
	link.click()
	URL.revokeObjectURL(url)
}

export default function Resume({ Mode = 'dark', text = 'light' }) {
	return (
		<main className={`resume-page ${Mode} text-${text}`}>
			<div className="container resume-container">
				<header className="resume-header">
					<p className="eyebrow">DOCUMENTS</p>
					<h1>My Resume</h1>
					<p>Preview my experience and download a copy for later.</p>
				</header>

				<div className="resume-toolbar">
					<span>PROFILE / RESUME</span>
					<button className="resume-download" type="button" onClick={downloadResume}>Download Resume</button>
				</div>

				<article className="resume-document">
					<header className="resume-document-header">
						<div>
							<h2>{resume.name}</h2>
							<p>{resume.role}</p>
						</div>
						<div className="resume-contact">
							<span>{resume.location}</span>
							<a href={`mailto:${resume.email}`}>{resume.email}</a>
							<a href={`tel:${resume.phone.replaceAll(' ', '')}`}>{resume.phone}</a>
						</div>
					</header>
					<section className="resume-section">
						<h3>Profile</h3>
						<p>{resume.summary}</p>
					</section>
					<section className="resume-section">
						<h3>Skills</h3>
						<div className="resume-skills">{resume.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
					</section>
					<section className="resume-section">
						<h3>Education</h3>
						<h4>{resume.education}</h4>
						<p>MCA student focused on software development and modern web technologies.</p>
					</section>
					<section className="resume-section">
						<h3>Profiles</h3>
						<div className="resume-profiles">{resume.links.map((link) => <a key={link.label} href={link.url} target="_blank" rel="noreferrer">{link.label}</a>)}</div>
					</section>
				</article>
			</div>
		</main>
	)
}
