"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ensureReferralId } from "@/components/AffiliateTracker";
import { api, getToken } from "@/lib/api";
type Props = { slug:string; status:string; canAccess:boolean; pending:boolean; isFree:boolean; priceLabel:string; variant?:"sidebar"|"hero" };
export default function CourseEnrollButton({slug,status,canAccess,pending,isFree,priceLabel,variant="sidebar"}:Props){
 const[busy,setBusy]=useState(false),[error,setError]=useState(""),[signedIn,setSignedIn]=useState(false);
 useEffect(()=>{const timer=window.setTimeout(()=>setSignedIn(Boolean(getToken())),0);return()=>window.clearTimeout(timer)},[]);
 if(canAccess)return <button className="course-enrolled-button" disabled><span>✓</span> Enrolled</button>;
 if(status==="coming_soon")return <button className="course-coming-button" disabled>Coming soon</button>;
 if(!signedIn)return <div className="course-auth-actions"><Link className="course-signup-button" href={`/signup/?course_id=${encodeURIComponent(slug)}&next=/course/${encodeURIComponent(slug)}/`}>{variant==="hero"?"Enroll Now":"Sign up to enrol"} <span>→</span></Link><small>Already have an account? <Link href={`/login/?next=/course/${encodeURIComponent(slug)}/`}>Sign in here</Link></small></div>;
 async function enroll(){setBusy(true);setError("");try{const referralId=await ensureReferralId();const result=await api<{authorization_url?:string;enrolled?:boolean}>(`/courses/${encodeURIComponent(slug)}/payments`,{method:"POST",body:JSON.stringify({referral_id:referralId})});if(result.authorization_url)window.location.assign(result.authorization_url);else if(result.enrolled)window.location.reload();else throw new Error()}catch{setError("Checkout could not be opened. Please try again.");setBusy(false)}}
 return <>{error&&<p className="course-enrol-error">{error}</p>}<button className={pending?"course-pending-button":"course-buy-button"} onClick={enroll} disabled={busy}>{busy?"Opening secure checkout...":pending?"Payment pending":variant==="hero"?"Enroll Now":isFree?"Enrol for free":`Buy now - ${priceLabel}`}<span>→</span></button></>;
}
