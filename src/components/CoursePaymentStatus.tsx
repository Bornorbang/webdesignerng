"use client";
import Link from "next/link";
import { useEffect,useState } from "react";
import { useSearchParams } from "next/navigation";
import { api,getToken } from "@/lib/api";
export default function CoursePaymentStatus(){
 const params=useSearchParams(),reference=params.get("reference")??params.get("trxref"),[state,setState]=useState<"checking"|"success"|"failed">("checking"),[message,setMessage]=useState("Confirming your course payment…");
 useEffect(()=>{async function verify(){if(!reference||!getToken()){await Promise.resolve();setState("failed");setMessage(!getToken()?"Please sign in to the account used for this payment.":"No payment reference was supplied.");return}try{const r=await api<{message:string}>(`/courses/payments/${encodeURIComponent(reference)}/verify`);setState("success");setMessage(r.message)}catch{setState("failed");setMessage("We could not confirm this payment. If you were charged, contact support with the reference below.")}}void verify()},[reference]);
 return <section className={`payment-result payment-${state}`}><p className="section-label">Course enrollment</p><h1>{state==="checking"?"Checking payment":state==="success"?"Course unlocked":"Confirmation needed"}</h1><p>{message}</p>{reference&&<small>Reference: {reference}</small>}<div>{state==="success"?<Link className="primary-button" href="/profile/">Open my courses <span>→</span></Link>:<Link className="primary-button" href="/login/">Sign in <span>→</span></Link>}<Link className="secondary-button" href="/tech-courses/">All courses</Link></div></section>;
}
