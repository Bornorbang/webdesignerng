"use client";

import { useEffect } from "react";
import { api } from "@/lib/api";
import SiteMobileMenu from "@/components/SiteMobileMenu";
import SiteIntegrations from "@/components/SiteIntegrations";
import PaymentResultToast from "@/components/PaymentResultToast";

export const AFFILIATE_REFERRAL_KEY = "wdn_affiliate_referral";

export function currentReferralId(): number | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = JSON.parse(localStorage.getItem(AFFILIATE_REFERRAL_KEY) ?? "null") as { id?: number; expires_at?: number } | null;
    if (!stored?.id || !stored.expires_at || stored.expires_at < Date.now()) {
      localStorage.removeItem(AFFILIATE_REFERRAL_KEY);
      return null;
    }
    return stored.id;
  } catch {
    localStorage.removeItem(AFFILIATE_REFERRAL_KEY);
    return null;
  }
}

export async function ensureReferralId(): Promise<number | null> {
  const existing = currentReferralId();
  if (existing) return existing;
  if (typeof window === "undefined") return null;
  const code = new URLSearchParams(window.location.search).get("ref")?.trim();
  if (!code) return null;
  try {
    const { referral_id } = await api<{ referral_id: number }>("/affiliate/track", {
      method: "POST",
      body: JSON.stringify({ ref: code, landing_page: window.location.href }),
    });
    localStorage.setItem(AFFILIATE_REFERRAL_KEY, JSON.stringify({ id: referral_id, expires_at: Date.now() + 30 * 24 * 60 * 60 * 1000 }));
    return referral_id;
  } catch {
    return null;
  }
}

export default function AffiliateTracker() {
  useEffect(() => {
    void ensureReferralId();
  }, []);
  return <><SiteIntegrations/><SiteMobileMenu/><PaymentResultToast/></>;
}
