import CoursesPage, { metadata } from "../courses/page";
export { metadata };

const pageUrl="https://www.websitedesigner.ng/tech-courses/";
const faqs=[["Tell me more about these courses","Each course page includes descriptions, learning objectives and a complete curriculum."],["After payment, what happens next?","Once payment is confirmed, your course is automatically unlocked in your account."],["Which course should I choose?","Review each course description, learning objectives, curriculum and feedback."],["What support do students receive?","Every enrolled student receives mentorship and access to our learning community."]];
const collectionSchema={"@context":"https://schema.org","@type":"CollectionPage","@id":`${pageUrl}#webpage`,name:"Online Tech Courses in Nigeria",description:"Beginner-friendly online technology courses with practical projects, mentorship and certificates.",url:pageUrl,isPartOf:{"@id":"https://www.websitedesigner.ng/#website"},about:["Web development","Programming","UI/UX design","Search engine optimisation"],provider:{"@id":"https://www.websitedesigner.ng/#organization"}};
const faqSchema={"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(([name,text])=>({"@type":"Question",name,acceptedAnswer:{"@type":"Answer",text}}))};
const breadcrumbSchema={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://www.websitedesigner.ng/"},{"@type":"ListItem",position:2,name:"Online Tech Courses in Nigeria",item:pageUrl}]};

export default function Page(){return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(collectionSchema)}}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumbSchema)}}/><CoursesPage/></>}
