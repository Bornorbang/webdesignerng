"use client";
import Link from "next/link";
import { useEffect,useState } from "react";
import { useSearchParams } from "next/navigation";
import { api } from "@/lib/api";
export default function ConsultationPaymentStatus(){
 const params=useSearchParams(),reference=params.get("reference")??params.get("trxref");
 const[state,setState]=useState<"checking"|"success"|"failed">(reference?"checking":"failed"),[message,setMessage]=useState(reference?"Confirming your payment securely…":"No payment reference was supplied.");
 useEffect(()=>{if(!reference)return;api<{message:string}>(`/consultations/payments/${encodeURIComponent(reference)}/verify`).then(r=>{setState("success");setMessage(r.message)}).catch(()=>{setState("failed");setMessage("We could not confirm this payment. If you were charged, please contact support with your reference.")})},[reference]);
 return <section className={`payment-result payment-${state}`}><p className="section-label">Consultation payment</p><h1>{state==="checking"?"Checking payment":state==="success"?"Payment confirmed":"Confirmation needed"}</h1><p>{message}</p>{reference&&<small>Reference: {reference}</small>}<div>{state==="success"?<Link className="primary-button" href="/profile/">View your account <span>→</span></Link>:<a className="primary-button" href="https://wa.me/2347075876888">Contact support <span>→</span></a>}<Link className="secondary-button" href="/">Return home</Link></div></section>;
}
