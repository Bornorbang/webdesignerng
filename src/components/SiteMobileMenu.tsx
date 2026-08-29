"use client";

import Link from "next/link";
import {useState} from "react";

const services = [["Web Development","/web-development-pricing/"],["Ecommerce Design","/ecommerce-website-design-in-nigeria/"],["Mobile App Development","/mobile-app-development-in-nigeria/"],["Shopify Design","/shopify-store-pricing/"],["SEO","/seo-pricing/"],["Social Media Management","/social-media-management-pricing/"],["Website Maintenance","/website-maintenance-pricing/"]];

export default function SiteMobileMenu(){
  const[open,setOpen]=useState(false);
  const close=()=>setOpen(false);
  return <div className={`site-mobile-menu${open?" is-open":""}`}>
    <Link className="mobile-menu-profile" href="/profile/" aria-label="My profile">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-5 3-8 8-8s8 3 8 8"/></svg>
    </Link>
    <button className="mobile-menu-toggle" type="button" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="site-mobile-drawer" aria-label={open?"Close navigation menu":"Open navigation menu"}><span/><span/><span/></button>
    <button className="mobile-menu-backdrop" type="button" onClick={close} aria-label="Close navigation menu"/>
    <aside id="site-mobile-drawer" aria-hidden={!open}>
      <div className="mobile-menu-heading"><span>Menu</span><button type="button" onClick={close} aria-label="Close navigation menu">×</button></div>
      <nav aria-label="Mobile navigation">
        <Link href="/" onClick={close}>Home</Link>
        <details><summary>Services <span>+</span></summary><div>{services.map(([label,url])=><Link href={url} key={url} onClick={close}>{label}</Link>)}</div></details>
        <Link href="/portfolio/" onClick={close}>Portfolio</Link><Link href="/about-website-designer-nigeria/" onClick={close}>About Us</Link><Link href="/tech-courses/" onClick={close}>Courses</Link>
        <details><summary>Resources <span>+</span></summary><div><Link href="/earn-money/" onClick={close}>Earn Money</Link><a href="https://www.hostingnigeria.com" target="_blank" rel="noreferrer">Domain &amp; Hosting</a><Link href="/tech-blog/" onClick={close}>Blog</Link><Link href="/book-consultation/" onClick={close}>Book Consultation</Link><a href="http://www.tempnumber.ng" target="_blank" rel="noreferrer">Temporary Number</a></div></details>
        <Link href="/contact-website-designer-nigeria/" onClick={close}>Contact Us</Link>
      </nav>
    </aside>
  </div>;
}
