import type { ReactNode } from "react";

const pageUrl = "https://www.websitedesigner.ng/portfolio/";
const portfolioItems = [
  ["Finance Web Design", "owodex.png"],
  ["Photography Web Design", "wizzypro.png"],
  ["Makeup Web Design", "Naijabeauty.png"],
  ["Business Web Design", "omega_website.png"],
  ["Crypto Web Design", "Accelede.png"],
  ["E-commerce Web Design", "azafricanstore.png"],
  ["Fashion Brand Design", "baebronx.png"],
  ["Education Web Design", "graceempoweredearlyyears.png"],
];

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${pageUrl}#webpage`,
  name: "Web Design Portfolio in Nigeria",
  description: "Selected website design projects created for Nigerian brands across multiple industries.",
  url: pageUrl,
  isPartOf: { "@id": "https://www.websitedesigner.ng/#website" },
  about: { "@id": "https://www.websitedesigner.ng/#organization" },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: portfolioItems.length,
    itemListElement: portfolioItems.map(([name, image], index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name,
        image: `https://www.websitedesigner.ng/images/portfolio/${image}`,
        creator: { "@id": "https://www.websitedesigner.ng/#organization" },
      },
    })),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.websitedesigner.ng/" },
    { "@type": "ListItem", position: 2, name: "Web Design Portfolio", item: pageUrl },
  ],
};

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}/>{children}</>;
}
