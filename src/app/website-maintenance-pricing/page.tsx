import type { Metadata } from "next";
import ServicePricingTemplate, { type ServicePricingData } from "@/components/ServicePricingTemplate";

export const metadata: Metadata = {
  title: { absolute: "Website Maintenance Pricing in Nigeria - Support Packages" },
  description: "Compare website maintenance pricing in Nigeria for updates, backups, security monitoring, technical support and ongoing website care.",
  keywords: ["Website Maintenance Pricing in Nigeria", "Website Maintenance Packages Nigeria", "Website Support Services Nigeria", "WordPress Maintenance Nigeria"],
  alternates: { canonical: "/website-maintenance-pricing/" },
  robots: { index: true, follow: true },
  openGraph: { title: "Website Maintenance Pricing in Nigeria - Support Packages", description: "Monthly website maintenance packages for Nigerian businesses that need dependable updates, backups, security and technical support.", url: "/website-maintenance-pricing/", siteName: "Website Designer Nigeria", type: "website", images: [{ url: "/images/portfolio/aanchor.png", alt: "Website maintenance services in Nigeria" }] },
  twitter: { card: "summary_large_image", title: "Website Maintenance Pricing in Nigeria", description: "Compare dependable monthly website support and maintenance packages in Nigeria.", images: ["/images/portfolio/aanchor.png"] },
};

const data: ServicePricingData = {
  eyebrow: "Website Maintenance Pricing in Nigeria",
  title: "Keep Your Website Secure,",
  accent: "Current and Performing",
  description: "Dependable monthly website care for Nigerian businesses that need updates, backups, security monitoring and responsive technical support.",
  sectionLabel: "Website Maintenance Pricing",
  sectionTitle: "Website Maintenance Packages",
  sectionCopy: "Choose a monthly website maintenance package based on how frequently your website changes and the level of technical support your business requires.",
  plans: [
    { name: "Essential Care", ngn: "75,000", usd: "75", features: ["Monthly Software Updates", "Weekly Cloud Backups", "Security & Uptime Monitoring", "Up to 2 Content Updates", "Broken Link Checks", "Monthly Maintenance Report", "Email Support"] },
    { name: "Business Care", ngn: "150,000", usd: "150", popular: true, features: ["Everything in Essential Care", "Weekly Software Updates", "Daily Cloud Backups", "Up to 5 Content Updates", "Performance Optimisation", "Form & Checkout Testing", "Priority Technical Support"] },
    { name: "Advanced Care", ngn: "300,000", usd: "300", features: ["Everything in Business Care", "Continuous Security Monitoring", "Daily Off-site Backups", "Up to 12 Content Updates", "Ecommerce & Integration Checks", "Emergency Issue Response", "Monthly Performance Review"] },
  ],
  faqTitle: "Website Maintenance FAQs",
  faqs: [
    ["How much does website maintenance cost in Nigeria?", "Our monthly website maintenance packages start at ₦75,000. The appropriate plan depends on your platform, website size, update frequency, integrations and required response time."],
    ["Why does my website need ongoing maintenance?", "Websites rely on software, hosting, integrations and security controls that change over time. Regular care reduces avoidable downtime, vulnerabilities, broken features and outdated content."],
    ["Do your packages include website content updates?", "Yes. Each package includes a defined number of reasonable content updates such as replacing text, images, contact information or existing product details."],
    ["Can you maintain a website another company developed?", "Yes. We first review the website, hosting access and technical condition. If substantial repairs are required before maintenance can begin, we will provide a separate recommendation."],
    ["Is hosting included in the maintenance price?", "No. Hosting, domain renewals, premium software licences and third-party subscriptions are charged separately unless they are expressly included in your written agreement."],
    ["What happens if my website goes offline?", "We monitor availability and investigate maintenance-related issues according to your plan. Problems caused by hosting providers or third-party platforms may require their support teams, but we will help coordinate resolution."],
    ["Can I cancel a monthly maintenance plan?", "Yes. Maintenance is billed monthly and can be cancelled according to the notice terms in your service agreement. Work already completed during a billing period is non-refundable."],
  ],
  benefits: [
    ["Website maintenance protects the value of your digital investment.", "A website should not be abandoned after launch. Planned updates, backups and monitoring help preserve security, customer trust and reliable business performance."],
    ["Prevent avoidable problems", "Routine checks identify outdated software, broken features and security concerns before they become larger disruptions."],
    ["Stay current", "Content updates keep your services, offers and business information accurate for customers and search engines."],
    ["Get dependable support", "A familiar technical team can investigate issues faster and recommend practical improvements as your website evolves."],
  ],
};

export default function Page() { return <ServicePricingTemplate data={data} />; }
