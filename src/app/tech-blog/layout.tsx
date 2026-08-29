import type { ReactNode } from "react";

const pageUrl="https://www.websitedesigner.ng/tech-blog/";
const blogSchema={"@context":"https://schema.org","@type":"Blog","@id":`${pageUrl}#blog`,name:"Tech Blog in Nigeria",description:"Technology, website, ecommerce, SEO and digital-business guidance for Nigerian businesses.",url:pageUrl,publisher:{"@id":"https://www.websitedesigner.ng/#organization"},inLanguage:"en-NG"};
const breadcrumbSchema={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://www.websitedesigner.ng/"},{"@type":"ListItem",position:2,name:"Tech Blog",item:pageUrl}]};

export default function TechBlogLayout({children}:{children:ReactNode}){return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(blogSchema)}}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumbSchema)}}/>{children}</>}
