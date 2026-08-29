import Script from "next/script";

const ga=process.env.NEXT_PUBLIC_GA_ID??"G-657ZXEZN1X";
const adsense=process.env.NEXT_PUBLIC_ADSENSE_CLIENT??"ca-pub-4756517876694191";
const tiktok=process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID??"D3S02KRC77U93U3T6OU0";
const oneSignal=process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID??"b4c2411e-d809-489b-8020-750c7535ef79";

export default function SiteIntegrations(){return <>
 <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga}`} strategy="afterInteractive"/>
 <Script id="wdn-google-analytics" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${ga}',{anonymize_ip:true});`}</Script>
 <Script id="wdn-tiktok-pixel" strategy="afterInteractive">{`!function(w,d,t){w.TiktokAnalyticsObject=t;var q=w[t]=w[t]||[];q.methods=['page','track','identify','instances','debug','on','off','once','ready','alias','group','enableCookie','disableCookie','holdConsent','revokeConsent','grantConsent'];q.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat([].slice.call(arguments)))}};for(var i=0;i<q.methods.length;i++)q.setAndDefer(q,q.methods[i]);q.load=function(e){var n=d.createElement('script');n.async=true;n.src='https://analytics.tiktok.com/i18n/pixel/events.js?sdkid='+e+'&lib='+t;var s=d.getElementsByTagName('script')[0];s.parentNode.insertBefore(n,s)};q.load('${tiktok}');q.page()}(window,document,'ttq');`}</Script>
 <Script src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js" strategy="afterInteractive"/>
 <Script id="wdn-onesignal" strategy="afterInteractive">{`window.OneSignalDeferred=window.OneSignalDeferred||[];window.OneSignalDeferred.push(async function(OneSignal){await OneSignal.init({appId:'${oneSignal}'});});`}</Script>
 <Script async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsense}`} crossOrigin="anonymous" strategy="afterInteractive"/>
 </>}
