import type { Metadata } from "next";
import AffiliateTracker from "@/components/AffiliateTracker";
import "./globals.css";
import "./course-connected.css";
import "./dashboard.css";
import "./account-settings.css";
import "./password-page.css";
import "./button-sizing.css";
import "./auth-tweaks.css";
import "./course-detail.css";
import "./site-buttons.css";
import "./blog.css";
import "./mobile-responsive.css";
import "./extended-pages.css";
import "./location-services.css";
import "./affiliate-dashboard.css";
import "./editorial-overrides.css";
import "./earn-money.css";
import "./affiliate-benefit-sizing.css";
import "./blog-title-and-labels.css";
import "./category-links.css";
import "./profile-photo.css";
import "./graphic-design.css";
import "./font-fallback.css";

export const metadata:Metadata={metadataBase:new URL("https://www.websitedesigner.ng"),title:{default:"Website Designer Nigeria",template:"%s - Website Designer Nigeria"},description:"Conversion-focused web design, ecommerce and digital growth services in Nigeria.",icons:{icon:[{url:"/images/WDN-favicon.png",type:"image/png"}],shortcut:"/images/WDN-favicon.png",apple:"/images/WDN-favicon.png"}};

export default function RootLayout({children}:LayoutProps<"/">){return <html lang="en" className="h-full antialiased"><body className="min-h-full flex flex-col"><AffiliateTracker/>{children}<a className="whatsapp-widget" href="https://wa.me/2347075876888" target="_blank" rel="noreferrer" aria-label="Chat with Website Designer Nigeria on WhatsApp"><span>Chat with us</span><i><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.5 0 .2 5.3.2 11.9c0 2.1.6 4.1 1.6 5.9L0 24l6.4-1.7a12 12 0 0 0 5.7 1.5h.1c6.5 0 11.8-5.3 11.8-11.9 0-3.2-1.3-6.2-3.5-8.4Zm-8.4 18.3a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.8 1 1-3.7-.3-.4a9.8 9.8 0 1 1 8.5 4.7Zm5.4-7.3c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.4.2-.7.1-2-.9-3.4-1.8-4.7-4.1-.4-.6.4-.6 1-2 .1-.2.1-.4 0-.6l-1-2.3c-.3-.6-.5-.6-.7-.6H6.6c-.3 0-.7.1-1 .5-.4.4-1.4 1.4-1.4 3.3 0 2 1.4 3.8 1.6 4.1.2.3 2.8 4.3 6.8 6 2.5 1.1 3.5 1.1 4.8.9 1.5-.2 1.8-.9 2.1-1.8.3-.8.3-1.6.2-1.8-.1-.1-.3-.2-.6-.4l-1.6-.7Z"/></svg></i></a></body></html>}
