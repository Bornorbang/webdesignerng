import Link from "next/link";
import { ResourceFooter, ResourceHeader } from "./ResourceChrome";

export type LegalSection={title:string;items?:string[];text?:string};
export default function LegalPage({label,title,intro,sections}:{label:string;title:string;intro:string;sections:LegalSection[]}){return <main className="legal-page"><ResourceHeader/><section className="legal-hero"><div className="hero-grid"/><div className="shell"><p className="kicker">Website Designer Nigeria</p><h1>{title}</h1><p>{label}</p></div></section><section className="legal-content"><div className="shell legal-layout"><aside><p className="section-label">On this page</p>{sections.map((s,i)=><a href={`#section-${i+1}`} key={s.title}>{s.title}</a>)}</aside><article><p className="legal-date">Effective Date: January 7, 2025</p><p>{intro}</p>{sections.map((s,i)=><section id={`section-${i+1}`} key={s.title}><span>{String(i+1).padStart(2,"0")}</span><h2>{s.title}</h2>{s.text&&<p>{s.text}</p>}{s.items&&<ul>{s.items.map(x=><li key={x}>{x}</li>)}</ul>}</section>)}<div className="legal-help"><h2>Still have a question?</h2><p>Contact us at <a href="mailto:contact@websitedesigner.ng">contact@websitedesigner.ng</a>.</p><Link className="primary-button" href="/contact-website-designer-nigeria/">Contact Us <span>→</span></Link></div></article></div></section><ResourceFooter/></main>}




