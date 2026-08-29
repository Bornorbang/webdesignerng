"use client";

import { useState } from "react";

const packages = [
  { name: "Corporate", ngn: "400,000", usd: "400", features: ["Domain & Hosting (1 Year)", "Business Emails", "Up to 5 Pages", "Logo Design", "On Page SEO"] },
  { name: "E-Commerce", ngn: "600,000", usd: "600", popular: true, features: ["Domain & Hosting (1 Year)", "Business Emails", "Logo Design", "On Page SEO", "Up to 100 products", "Payment Gateway", "1 Month Support", "Analytics Integration"] },
  { name: "Custom", ngn: "XXX,XXX", usd: "XXX", features: ["Domain & Hosting (1 Year)", "User & Admin Dashboard", "Payment Gateway", "Continuous Support", "Analytics Integration", "Social Media Integration", "On Page & Off Page SEO", "Content Management"] },
];

export default function PricingCards() {
  const [currency, setCurrency] = useState<"NGN" | "USD">("NGN");
  return <>
    <div className="currency-switch" aria-label="Select currency"><button className={currency === "NGN" ? "selected" : ""} onClick={() => setCurrency("NGN")}>NGN (₦)</button><button className={currency === "USD" ? "selected" : ""} onClick={() => setCurrency("USD")}>USD ($)</button></div>
    <div className="pricing-grid">{packages.map((plan) => <article className={`pricing-card${plan.popular ? " featured" : ""}`} key={plan.name}>{plan.popular && <span className="popular-tag">Popular</span>}<div className="pricing-card-head"><p>{plan.name}</p><h3><small>{currency === "NGN" ? "₦" : "$"}</small>{currency === "NGN" ? plan.ngn : plan.usd}</h3></div><ul>{plan.features.map((feature) => <li key={feature}><span>✓</span>{feature}</li>)}</ul><a href={plan.name === "Custom" ? "mailto:contact@websitedesigner.ng" : "https://wa.me/2347075876888"} target="_blank" rel="noreferrer">{plan.name === "Custom" ? "Contact Us" : "Order Now"}</a></article>)}</div>
  </>;
}








