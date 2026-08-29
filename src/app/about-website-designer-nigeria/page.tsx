import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PortfolioPanels, ResourceFooter, ResourceHeader } from "@/components/ResourceChrome";

export const metadata: Metadata = {
  title: { absolute: "Web Design Agency in Nigeria - Website Designer Nigeria" },
  description: "Meet Website Designer Nigeria, a web design agency in Nigeria creating strategic websites, ecommerce stores, mobile products and digital growth solutions.",
  keywords: ["Web Design Agency in Nigeria", "Website Designer Nigeria"],
  alternates: { canonical: "/about-website-designer-nigeria/" },
  robots: { index: true, follow: true },
  openGraph: { title: "Web Design Agency in Nigeria - Website Designer Nigeria", description: "Discover the people, purpose and approach behind Website Designer Nigeria, a web design agency serving businesses from Lagos and Abuja.", url: "/about-website-designer-nigeria/", siteName: "Website Designer Nigeria", type: "website", images: [{ url: "/images/about-us.jfif", alt: "Website Designer Nigeria web design agency team" }] },
  twitter: { card: "summary_large_image", title: "Web Design Agency in Nigeria", description: "Meet the team and discover the approach behind Website Designer Nigeria.", images: ["/images/about-us.jfif"] },
};

const faqs = [
  ["How long does it take to develop a website?", "Most professional business websites take between three and eight weeks, depending on scope, content readiness and required functionality."],
  ["What is the pricing for your web development services?", "Pricing depends on your pages, features and integrations. Our web development pricing page provides clear package starting points."],
  ["What types of websites do you create?", "We create corporate websites, ecommerce stores, portfolios, platforms and custom web applications for different industries."],
  ["What other services do you offer?", "We provide SEO, mobile app development, Shopify design, social media management, content and related digital services."],
  ["Do you provide post-launch maintenance?", "Yes. We provide an initial support period and offer ongoing maintenance options for updates, security and performance."],
  ["What do you need from me to get started?", "We need information about your business, customers, goals, required features, content and brand assets. We guide you through everything else."],
];

export default function About() {
  return <main className="inner-page about-page">
    <ResourceHeader />
    <section className="hero inner-page-hero"><div className="hero-grid"/><div className="hero-halo"/><PortfolioPanels seed="about-wdn-agency"/><div className="hero-copy shell"><p className="kicker">Website Designer Nigeria</p><h1>A Web Design Agency<br/><span>Built for Ambition</span></h1><p className="hero-description">Website Designer Nigeria is a web design agency in Nigeria helping ambitious businesses build credible, useful and growth-focused digital experiences.</p><div className="hero-actions"><Link className="primary-button" href="/#services">Our Services <span>→</span></Link><Link className="secondary-button" href="/contact-website-designer-nigeria/">Get Started <span>→</span></Link></div></div><div className="hero-stage"><span/><i/></div></section>
    <section className="about-story"><div className="shell about-story-grid"><div className="about-story-image"><Image src="/images/about-us.jfif" alt="Website Designer Nigeria web design agency in Nigeria" fill sizes="(max-width:900px) 100vw,46vw"/></div><div className="about-story-copy"><p className="section-label">Our story</p><h2>Building digital experiences from Nigeria.</h2><p>Website Designer Nigeria (RC 8598183) began with a straightforward belief: Nigerian businesses should not have to choose between a website that looks exceptional and one that genuinely works. We built our agency to bring strategy, design and dependable development into one focused process.</p><p>From our presence in Lagos and Abuja, we work with founders, established companies and organisations at different stages of growth. We take time to understand the business behind every brief—its audience, position, challenges and commercial goals—before deciding how a page should look or which technology should power it.</p><p>Our work spans corporate websites, ecommerce stores, custom web platforms, mobile applications and search visibility. Every engagement is shaped around clarity and usefulness: clear messages, intuitive journeys, responsive layouts and a technical foundation that can support the business after launch.</p><p>Today, Website Designer Nigeria continues to grow as a multidisciplinary web design agency in Nigeria. Alongside client work, we remain committed to sharing practical digital knowledge and helping more people use technology to create opportunities, strengthen businesses and compete with confidence.</p></div></div></section>
    <section className="about-purpose"><div className="shell purpose-layout"><div className="purpose-intro"><p className="section-label">Mission &amp; Vision</p><h2>What we are building—and why it matters.</h2><p>Our purpose is bigger than producing attractive pages. We want thoughtful digital work created in Nigeria to set a standard for clarity, usefulness and lasting commercial value.</p></div><div className="purpose-grid"><article><div className="purpose-card-head"><span>01</span><p>What drives us now</p></div><h3>Our Mission</h3><p>To help businesses turn their ideas, expertise and ambition into digital products that people understand, trust and enjoy using.</p><ul><li>Start with the business problem</li><li>Design around real customer needs</li><li>Build for performance and growth</li></ul></article><article className="vision-card"><div className="purpose-card-head"><span>02</span><p>Where we are going</p></div><h3>Our Vision</h3><p>To make Website Designer Nigeria a defining web design agency in Nigeria—recognised for world-class work, dependable partnerships and positive impact.</p><ul><li>Raise the standard of Nigerian digital work</li><li>Help local brands compete globally</li><li>Create knowledge and opportunity through technology</li></ul></article></div></div></section>
    <section className="pricing-value about-values"><div className="shell"><p className="section-label">What guides our work</p><h2>Clear thinking. Dependable delivery.</h2><div className="pricing-value-grid"><article><span>01</span><h3>Business first</h3><p>Every creative and technical decision begins with the outcome the business needs.</p></article><article><span>02</span><h3>Useful design</h3><p>We value clarity, accessibility and ease of use over decoration without purpose.</p></article><article><span>03</span><h3>Lasting partnership</h3><p>We support clients beyond launch as their platforms and ambitions evolve.</p></article></div></div></section>
    <section className="pricing-faq"><div className="shell"><div className="pricing-heading"><p>Frequently Asked Questions</p><h2>What Clients Ask About WDN</h2></div><div className="pricing-faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>
    <section className="service-cta"><div className="shell"><p className="section-label">Ready to begin?</p><h2>Let&apos;s build your next<br/><span>digital success story.</span></h2><Link className="primary-button" href="/contact-website-designer-nigeria/">Contact Us <span>→</span></Link></div></section>
    <ResourceFooter />
  </main>;
}




