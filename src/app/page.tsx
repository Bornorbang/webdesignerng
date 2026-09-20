import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LatestArticles from "@/components/LatestArticles";

export const metadata: Metadata = {
  title: { absolute: "Website Designer Nigeria - Best Web Designers in Nigeria" },
  description: "Website Designer Nigeria is a leading web design company in Lagos providing professional web development services. We are the best web designers in Nigeria.",
  keywords: ["Website Designer Nigeria", "Best Web Designers in Nigeria", "Web Design Company in Lagos", "Website Development Services", "Web Design Agency in Nigeria"],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: { title: "Website Designer Nigeria - Best Web Designers in Nigeria", description: "Conversion-focused website design and development services for ambitious businesses in Lagos and across Nigeria.", url: "/", siteName: "Website Designer Nigeria", type: "website", images: [{ url: "/images/portfolio/Accelede.png", width: 1200, height: 630, alt: "Website Designer Nigeria web design portfolio" }] },
  twitter: { card: "summary_large_image", title: "Website Designer Nigeria - Best Web Designers in Nigeria", description: "Conversion-focused website design and development services for businesses across Nigeria.", images: ["/images/portfolio/Accelede.png"] },
};

const metrics = [
  { icon: "users", value: "120+", label: "Businesses Empowered" },
  { icon: "growth", value: "300%", label: "Average Traffic Increase" },
  { icon: "cart", value: "₦2B+", label: "Ecommerce Revenue Driven" },
  { icon: "location", value: "Across Nigeria", label: "Lagos, Abuja & more" },
];

const services = [
  { icon: "cart", title: "Ecommerce Web Design", text: "Secure online stores designed to make buying easy and drive sales.", href: "/ecommerce-website-design-in-nigeria/" },
  { icon: "monitor", title: "Website Development", text: "Fast, responsive websites built around your brand and business goals.", href: "/web-development-pricing/" },
  { icon: "search", title: "SEO", text: "Search strategies that improve visibility and bring qualified traffic.", href: "/seo-pricing/" },
  { icon: "phone", title: "Mobile App Development", text: "Useful mobile products that keep your business close to customers.", href: "/mobile-app-development-in-nigeria/" },
  { icon: "bag", title: "Shopify Store Design", text: "Premium Shopify storefronts with a smooth path from product to checkout.", href: "/shopify-store-pricing/" },
  { icon: "social", title: "Social Media Management", text: "Consistent content and campaigns that build attention and demand.", href: "/social-media-management-pricing/" },
];

const technologies = [
  ["HTML5", "/images/tech/html5-logo.png"], ["CSS3", "/images/tech/css3-logo.png"], ["Bootstrap", "/images/tech/bootstrap-logo.png"],
  ["JavaScript", "/images/tech/js5-logo.png"], ["MySQL", "/images/tech/mysql-logo.png"], ["React", "/images/tech/react-logo.png"],
  ["Shopify", "/images/tech/shopify-logo.png"], ["WooCommerce", "/images/tech/woo-commerce-logo.png"], ["WordPress", "/images/tech/wordpress-logo.png"],
  ["Tailwind CSS", "/images/tech/tailwind-css.png"], ["Python", "/images/tech/python-logo.png"], ["Django", "/images/tech/django-logo.png"],
];

const portfolio: Array<[string, string, string | null]> = [
  ["Photography Web Design", "/images/portfolio/wizzypro.png", "https://wizzyprophotography.com"], ["Crypto Web Design", "/images/portfolio/Accelede.png", null],
  ["Fintech Web Design", "/images/portfolio/owodex.png", null], ["Beauty Web Design", "/images/portfolio/Naijabeauty.png", null],
  ["HomeCare Web Design", "/images/portfolio/aanchor.png", "https://aanchorhealthandhomecare.ca"], ["Temp Number Design", "/images/portfolio/tempnumber.png", "https://www.tempnumber.ng"],
  ["NGO Web Design", "/images/portfolio/graceempoweredearlyyears.png", "https://graceempoweredearlyyears.com"], ["Fashion Portfolio Design", "/images/portfolio/fashionportfolio.png", "https://moorfashion.com"],
];

const faqs = [
  {question:"How much does web design cost in Nigeria?",answer:"Our business website packages currently start from ₦400,000. Final pricing depends on the number of pages, required functionality, integrations and content needs."},
  {question:"What other digital services does Website Designer Nigeria offer?",answer:"We provide website development, ecommerce website design, mobile app development, Shopify store design, SEO and social media management services."},
  {question:"How long will it take to design and develop my website?",answer:"Most professional business websites take three to eight weeks. Ecommerce stores and custom platforms may require additional time depending on integrations, feedback and content readiness."},
  {question:"Can your web design company work with businesses outside Lagos?",answer:"Yes. Although we are a web design company in Lagos and Abuja, our structured remote process supports businesses throughout Nigeria and international clients."},
  {question:"Will my business website be mobile-friendly and fast?",answer:"Yes. Every website is designed and tested across mobile phones, tablets and desktop screens, with performance, usability and responsive behaviour considered throughout development."},
  {question:"Can you redesign an existing website that is not generating enquiries?",answer:"Yes. We can audit and redesign your current website around clearer messaging, stronger calls to action, better usability, improved performance and measurable conversion goals."},
  {question:"Do your website development services include SEO?",answer:"Every build receives an SEO-conscious technical foundation. We also provide dedicated technical SEO, keyword strategy, content development and ongoing search optimisation when broader ranking support is required."},
];

function Arrow() {
  return <span aria-hidden="true">→</span>;
}

type IconName = "users" | "growth" | "cart" | "location" | "monitor" | "search" | "phone" | "bag" | "social";

function Icon({ name }: { name: string }) {
  const paths: Record<IconName, React.ReactNode> = {
    users: <><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20c0-4 2.6-6 6-6s6 2 6 6M15 15c3.5-.6 6 1.2 6 4.5"/></>,
    growth: <><path d="M4 19V9M10 19v-5M16 19V8M22 19V4"/><path d="m4 12 6-5 5 3 7-7"/></>,
    cart: <><path d="M3 4h2l2.2 10.2a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L21.5 8H6"/><circle cx="10" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/></>,
    location: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    monitor: <><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></>,
    search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>,
    phone: <><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></>,
    bag: <><path d="M5 8h14l-1 13H6L5 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/></>,
    social: <><circle cx="12" cy="12" r="3"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="18" r="2"/><path d="m14 10 3.5-3.5M9.5 14.5 6.5 17"/></>,
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name as IconName]}</svg>;
}

function SocialIcon({ name }: { name: "x" | "tiktok" | "instagram" | "youtube" | "linkedin" }) {
  const icons = {
    x: <path d="M4 3h4.6l4.25 5.7L17.8 3H20l-6.15 7.35L20.5 21h-4.6l-4.7-6.3L5.8 21H3.5l6.7-8L4 3Zm3.5 1.7 9.25 14.6h1.7L9.2 4.7H7.5Z" fill="currentColor" stroke="none" />,
    tiktok: <path d="M14.2 3c.3 2.5 1.75 4 4.3 4.2v3.1a8.8 8.8 0 0 1-4.25-1.15v6.2a5.85 5.85 0 1 1-5.05-5.8v3.15a2.75 2.75 0 1 0 1.85 2.6V3h3.15Z" fill="currentColor" stroke="none" />,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></>,
    youtube: <><path d="M21 8.2a3 3 0 0 0-2.1-2.1C17 5.6 12 5.6 12 5.6s-5 0-6.9.5A3 3 0 0 0 3 8.2a31 31 0 0 0-.5 3.8A31 31 0 0 0 3 15.8a3 3 0 0 0 2.1 2.1c1.9.5 6.9.5 6.9.5s5 0 6.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-3.8 31 31 0 0 0-.5-3.8Z"/><path d="m10 15 5-3-5-3v6Z" fill="currentColor" stroke="none"/></>,
    linkedin: <><rect x="3" y="9" width="4" height="12" fill="currentColor" stroke="none"/><circle cx="5" cy="5" r="2" fill="currentColor" stroke="none"/><path d="M10 21V9h4v1.8c1-1.4 2.4-2.2 4-2 2.5.3 3 2.3 3 5.2v7h-4v-6.2c0-1.5-.4-2.6-1.7-2.6-1.5 0-1.8 1.2-1.8 2.9V21H10Z" fill="currentColor" stroke="none"/></>,
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icons[name]}</svg>;
}

function ProjectPanel({ className, image, label }: { className: string; image: string; label: string }) {
  return (
    <div className={`floating-panel ${className}`}>
      <div className="panel-bar"><span>{label}</span><span>•••</span></div>
      <div className="panel-image"><Image src={image} alt={`${label} portfolio project by a web design company in Lagos`} fill sizes="360px" /></div>
    </div>
  );
}

export default function Home() {
  const structuredData = [
    {"@context":"https://schema.org","@type":["Organization","ProfessionalService"],"@id":"https://www.websitedesigner.ng/#organization",name:"Website Designer Nigeria",alternateName:"WDN Agency",url:"https://www.websitedesigner.ng/",logo:"https://www.websitedesigner.ng/images/brand/footer-logo.png",description:"A web design agency in Nigeria providing website development, ecommerce, mobile app and digital growth services.",telephone:"+2347075876888",email:"contact@websitedesigner.ng",areaServed:["Lagos","Abuja","Nigeria"],address:[{"@type":"PostalAddress",streetAddress:"Otta Road, Ijora Olopa",addressLocality:"Lagos",addressCountry:"NG"},{"@type":"PostalAddress",streetAddress:"Jabi, Gwarinpa",addressLocality:"Abuja",postalCode:"900108",addressCountry:"NG"}],sameAs:["https://x.com/webdesignerng","https://www.tiktok.com/@websitedesigner.ng","https://www.instagram.com/websitedesigner_ng","https://www.youtube.com/@websitedesignerng","https://www.linkedin.com/company/website-designer-nigeria/"]},
    {"@context":"https://schema.org","@type":"WebSite","@id":"https://www.websitedesigner.ng/#website",url:"https://www.websitedesigner.ng/",name:"Website Designer Nigeria",publisher:{"@id":"https://www.websitedesigner.ng/#organization"},inLanguage:"en-NG"},
    {"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(({question,answer})=>({"@type":"Question",name:question,acceptedAnswer:{"@type":"Answer",text:answer}}))},
  ];
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}} />
      <header className="topbar">
        <div className="shell nav-shell">
          <Link className="wordmark nav-logo" href="/"><Image src="/images/brand/footer-logo.png" alt="Website Designer Nigeria logo" width={210} height={48} priority /></Link>
          <nav aria-label="Main navigation">
            <a className="active" href="#home">Home</a><div className="nav-dropdown"><a href="#services">Services⌄</a><div className="dropdown-menu"><Link href="/web-development-pricing/">Web Development</Link><Link href="/ecommerce-website-design-in-nigeria/">Ecommerce Design</Link><Link href="/mobile-app-development-in-nigeria/">Mobile App Development</Link><Link href="/shopify-store-pricing/">Shopify Design</Link><Link href="/seo-pricing/">SEO</Link><Link href="/social-media-management-pricing/">SM Management</Link><Link href="/website-maintenance-pricing/">Website Maintenance</Link></div></div><Link href="/portfolio/">Portfolio</Link><Link href="/about-website-designer-nigeria/">About Us</Link><Link href="/tech-courses/">Courses</Link><div className="nav-dropdown"><span>Resources⌄</span><div className="dropdown-menu"><Link href="/earn-money/">Earn Money</Link><a href="https://www.hostingnigeria.com" target="_blank" rel="noreferrer">Domain &amp; Hosting</a><Link href="/tech-blog/">Blog</Link><Link href="/book-consultation/">Consultation</Link><a href="http://www.tempnumber.ng" target="_blank" rel="noreferrer">Temporary Number</a></div></div><Link href="/contact-website-designer-nigeria/">Contact Us</Link>
          </nav>
          <Link className="profile-nav-link" href="/profile/" aria-label="My profile"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-5 3-8 8-8s8 3 8 8"/></svg></Link>
          <a className="nav-cta" href="https://wa.me/2347075876888" target="_blank" rel="noreferrer">Start Your Project <Arrow /></a>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-halo" aria-hidden="true" />
        <ProjectPanel className="panel-top-left" image="/images/portfolio/Accelede.png" label="Apex Dynamics" />
        <ProjectPanel className="panel-bottom-left" image="/images/portfolio/Naijabeauty.png" label="Naya Skincare" />
        <ProjectPanel className="panel-top-right" image="/images/portfolio/fashionportfolio.png" label="Vero & Co." />
        <ProjectPanel className="panel-bottom-right" image="/images/portfolio/aanchor.png" label="Zora Homes" />

        <div className="hero-copy shell">
          <p className="kicker">Web Design &amp; Digital Growth Agency in Nigeria</p>
          <h1>Website Designer Nigeria<br /><span>Best Web Designers in Nigeria</span></h1>
          <p className="hero-description">We are a web design company in Lagos designing high-performance websites, ecommerce stores and digital<br className="desktop-only" /> growth systems that help Nigerian businesses <strong>grow online and win more.</strong></p>
          <div className="hero-actions"><a className="primary-button" href="https://wa.me/2347075876888" target="_blank" rel="noreferrer">Start Your Project <Arrow /></a><Link className="secondary-button" href="/portfolio/">View Our Work <Arrow /></Link></div>
        </div>

        <div className="hero-stage" aria-hidden="true"><span /><i /></div>
        <div className="metrics shell">
          {metrics.map((metric) => <div className="metric" key={metric.value}><span className="metric-icon"><Icon name={metric.icon} /></span><div><strong>{metric.value}</strong><p>{metric.label}</p></div></div>)}
        </div>
      </section>

      <section className="content-band" id="about">
        <div className="shell content-grid"><div className="content-image"><Image src="/images/about-us.jfif" alt="Website Designer Nigeria web design team collaborating on a project" fill sizes="(max-width: 900px) 100vw, 44vw" /></div><div className="content-copy"><p className="section-label">Website development services</p><h2>A Website Designer Nigeria businesses can rely on.</h2><p>We help companies create clear, credible and conversion-focused digital experiences. Every website begins with business strategy: who you need to reach, what those customers care about and what action they should take next.</p><p>Our web design agency in Nigeria combines user experience, responsive web development, ecommerce, content structure and technical SEO. This gives you more than an attractive homepage—it gives you a fast, accessible platform designed to support sales, enquiries and long-term growth.</p><p>As a web design company in Lagos, we serve organisations throughout Nigeria and abroad through a transparent remote process. This strategic, results-led approach is why ambitious businesses count us among the best web designers in Nigeria.</p></div></div>
      </section>

      <section className="tech tech-light" id="technology">
        <div className="shell section-heading"><div><p className="section-label">Tools we trust</p><h2>Our Tech Stack</h2></div><p>Modern, dependable technologies selected for speed, security and long-term maintainability.</p></div>
        <div className="shell tech-grid">{technologies.map(([technology, logo]) => <div key={technology}><Image className={technology === "Tailwind CSS" ? "tailwind-logo" : undefined} src={logo} alt={`${technology} technology used by Website Designer Nigeria`} width={70} height={70} /></div>)}</div>
      </section>

      <section className="services" id="services">
        <div className="shell service-frame">
          <div className="service-intro"><p>What we do</p><h2>Solutions Built for Growth</h2></div>
          <p className="service-summary">From stunning websites to full-scale digital growth campaigns, we help businesses attract, engage and convert more customers online.</p>
          <div className="service-grid">
            {services.map((service) => <article className={service.href ? "has-link" : undefined} key={service.title}><span className="service-icon"><Icon name={service.icon} /></span><div><h3>{service.title}</h3><p>{service.text}</p></div>{service.href && <Link className="service-card-link" href={service.href} aria-label={`View ${service.title}`} />}</article>)}
          </div>
        </div>
      </section>

      <section className="work" id="work">
        <div className="shell"><div className="work-heading"><div><p className="section-label">Selected work</p><h2>Built to look exceptional.<br />Designed to perform.</h2></div><p className="work-intro">Explore websites created for brands across beauty, finance, healthcare, education, photography and technology. Hover over a project to scroll through the page.</p></div>
          <div className="work-grid">
            {portfolio.map(([name, image, url]) => <article key={name}><div className="scrolling-preview"><Image src={image} alt={`${name} created through our website development services`} width={1200} height={2400} sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 25vw" /></div><h3>{url?<a href={url} target="_blank" rel="noopener noreferrer">{name}</a>:name}</h3></article>)}
          </div>
        </div>
      </section>

      <section className="articles" id="resources">
        <div className="shell section-heading"><div><p className="section-label">Ideas for better growth</p><h2>Latest Articles</h2></div><p>Practical guidance for choosing, building and growing a business website in Nigeria.</p></div>
        <div className="shell article-grid"><LatestArticles /></div>
      </section>

      <section className="faq">
        <div className="shell faq-layout"><div><p className="section-label">Common questions</p><h2>What Our Clients Want to Know</h2></div><div className="faq-list">{faqs.map(({question,answer},index)=><details key={question}><summary><span>{String(index+1).padStart(2,"0")}</span>{question}<b>+</b></summary><p>{index===0?<>{answer} <Link href="/web-development-pricing/">View our web development pricing and packages.</Link></>:index===1?<>We provide <Link href="/web-development-pricing/">website development</Link>, <Link href="/ecommerce-website-design-in-nigeria/">ecommerce website design</Link>, <Link href="/mobile-app-development-in-nigeria/">mobile app development</Link>, <Link href="/shopify-store-pricing/">Shopify store design</Link>, <Link href="/seo-pricing/">SEO services</Link> and <Link href="/social-media-management-pricing/">social media management</Link>.</>:answer}</p></details>)}</div></div>
      </section>

      <section className="contact" id="contact"><div className="shell"><p className="section-label">Have a project in mind?</p><h2>Let&apos;s build something<br /><span>that wins online.</span></h2><a className="primary-button" href="https://wa.me/2347075876888" target="_blank" rel="noreferrer">Start Your Project <Arrow /></a></div></section>
      <footer className="site-footer">
        <div className="shell footer-grid">
          <div className="footer-company"><Link href="/"><Image src="/images/brand/footer-logo.png" alt="Website Designer Nigeria logo" width={210} height={48} /></Link><p>Website Designer Nigeria is a leading web design company in Lagos providing professional web development services. We are the best web designers in Nigeria.</p><div className="social-links"><a href="https://x.com/webdesignerng" target="_blank" rel="noreferrer" aria-label="X"><SocialIcon name="x" /></a><a href="https://www.tiktok.com/@websitedesigner.ng" target="_blank" rel="noreferrer" aria-label="TikTok"><SocialIcon name="tiktok" /></a><a href="https://www.instagram.com/websitedesigner_ng" target="_blank" rel="noreferrer" aria-label="Instagram"><SocialIcon name="instagram" /></a><a href="https://www.youtube.com/@websitedesignerng" target="_blank" rel="noreferrer" aria-label="YouTube"><SocialIcon name="youtube" /></a><a href="https://www.linkedin.com/company/website-designer-nigeria/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><SocialIcon name="linkedin" /></a></div></div>
          <div><h3>Quick Links</h3><Link href="/tech-courses/">Courses</Link><Link href="/portfolio/">Portfolio</Link><Link href="/book-consultation/">Book Consultation</Link><Link href="/earn-money/">Affiliate Program</Link><a href="https://hostingnigeria.com">Domain &amp; Hosting</a><a href="http://www.tempnumber.ng" target="_blank" rel="noreferrer">Temporary Number</a><Link href="/contact-website-designer-nigeria/">Contact Us</Link></div>
          <div><h3>Our Services</h3><Link href="/web-development-pricing/">Web Development</Link><Link href="/ecommerce-website-design-in-nigeria/">Ecommerce Design</Link><Link href="/mobile-app-development-in-nigeria/">Mobile App Development</Link><Link href="/shopify-store-pricing/">Shopify Design</Link><Link href="/seo-pricing/">SEO</Link><Link href="/social-media-management-pricing/">SM Management</Link></div>
          <div><h3>Contact Info</h3><a href="https://wa.me/2347075876888">07075876888</a><a href="mailto:contact@websitedesigner.ng">contact@websitedesigner.ng</a></div>
          <div><h3>Our Offices</h3><p>Otta road, Ijora Olopa, Lagos</p><p>Jabi, Gwarinpa 900108, F.C.T Abuja</p></div>
        </div>
        <div className="shell footer-bottom"><p>© 2026 <Link href="/">Website Designer Nigeria</Link> by WDN Agency.</p><div><Link href="/privacy-policy/">Privacy Policy</Link><span>|</span><Link href="/terms-of-service/">Terms of Service</Link></div></div>
      </footer>
    </main>
  );
}








