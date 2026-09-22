"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";

const existingPixelId = process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID ?? "D3S02KRC77U93U3T6OU0";
const pixelIds = [...new Set([existingPixelId, "DAPC0VRC77U77GG14APG"].filter(Boolean))];

// TikTok's base loader, shared by the existing pixel and the WFB Course pixel.
// Page views are queued below so client-side navigation is also recorded.
const pixelCode = `!function (w, d, t) {
  w.TiktokAnalyticsObject=t;
  var ttq=w[t]=w[t]||[];
  ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"];
  ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};
  for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);
  ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e};
  ttq.load=function(e,n){
    var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;
    ttq._i=ttq._i||{};ttq._i[e]=[];ttq._i[e]._u=r;
    ttq._t=ttq._t||{};ttq._t[e]=+new Date;
    ttq._o=ttq._o||{};ttq._o[e]=n||{};
    n=document.createElement("script");n.type="text/javascript";n.async=!0;
    n.src=r+"?sdkid="+e+"&lib="+t;
    e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e);
  };
  ${pixelIds.map(id => `ttq.load(${JSON.stringify(id)});`).join("\n  ")}
}(window, document, 'ttq');`;

export default function TikTokPixel() {
  const pathname = usePathname();
  const ready = useRef(false);
  const lastPath = useRef<string | null>(null);

  const trackPage = useCallback(() => {
    if (!ready.current || !pathname || lastPath.current === pathname) return;
    const ttq = (window as Window & { ttq?: { page: () => void } }).ttq;
    if (!ttq) return;
    ttq.page();
    lastPath.current = pathname;
  }, [pathname]);

  useEffect(() => { trackPage(); }, [trackPage]);

  return <Script id="wdn-tiktok-pixel" strategy="afterInteractive" onReady={() => {
    ready.current = true;
    trackPage();
  }}>{pixelCode}</Script>;
}
