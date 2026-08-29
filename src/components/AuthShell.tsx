import type{ReactNode}from"react";import Image from"next/image";import Link from"next/link";
export default function AuthShell({eyebrow,title,copy,children,footer}:{eyebrow:string;title:string;copy?:string;children:ReactNode;footer:ReactNode}){return <main className="auth-page"><div className="auth-visual"><Link href="/"><Image src="/images/brand/footer-logo.png" alt="best web designers in Nigeria" width={210} height={48} priority/></Link><div className="auth-visual-copy"><h1>One account.<br/><span>More opportunity.</span></h1><p>Access consultations, learning resources, affiliate tools and your Website Designer Nigeria profile.</p></div></div><div className="auth-panel"><div className="auth-panel-inner"><Link className="auth-back" href="/">← Back to website</Link><p className="section-label">{eyebrow}</p><h2>{title}</h2>{copy&&<p className="auth-copy">{copy}</p>}{children}<div className="auth-footer">{footer}</div></div></div></main>}



