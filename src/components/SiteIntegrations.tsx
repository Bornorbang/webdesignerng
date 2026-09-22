import Script from "next/script";
import TikTokPixel from "@/components/TikTokPixel";

const ga=process.env.NEXT_PUBLIC_GA_ID??"G-657ZXEZN1X";
const adsense=process.env.NEXT_PUBLIC_ADSENSE_CLIENT??"ca-pub-4756517876694191";
const oneSignal=process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID??"b4c2411e-d809-489b-8020-750c7535ef79";

export default function SiteIntegrations(){return <>
 <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga}`} strategy="afterInteractive"/>
 <Script id="wdn-google-analytics" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${ga}',{anonymize_ip:true});`}</Script>
 <TikTokPixel/>
 <Script src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js" strategy="afterInteractive"/>
 <Script id="wdn-onesignal" strategy="afterInteractive">{`window.OneSignalDeferred=window.OneSignalDeferred||[];window.OneSignalDeferred.push(async function(OneSignal){await OneSignal.init({appId:'${oneSignal}'});});`}</Script>
 <Script async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsense}`} crossOrigin="anonymous" strategy="afterInteractive"/>
 </>}
