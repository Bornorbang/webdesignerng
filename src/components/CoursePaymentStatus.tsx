"use client";
import Link from "next/link";
import {useEffect,useState} from "react";
import {useRouter,useSearchParams} from "next/navigation";
import {api,getToken} from "@/lib/api";

type VerifiedPayment={message:string;payment:{course:{slug:string}}};

export default function CoursePaymentStatus(){
 const router=useRouter(),params=useSearchParams(),reference=params.get("reference")??params.get("trxref"),[error,setError]=useState("");
 useEffect(()=>{async function verify(){if(!reference||!getToken()){setError(!getToken()?"Please sign in to the account used for this payment.":"No payment reference was supplied.");return}try{const result=await api<VerifiedPayment>(`/courses/payments/${encodeURIComponent(reference)}/verify`);router.replace(`/course/${encodeURIComponent(result.payment.course.slug)}/?enrollment=successful`)}catch{setError("We could not confirm this payment. If you were charged, contact support with the payment reference.")}}void verify()},[reference,router]);
 if(!error)return <section className="payment-result payment-checking"><p className="section-label">Course enrollment</p><h1>Confirming payment</h1><p>Please wait while we securely confirm your enrollment…</p></section>;
 return <section className="payment-result payment-failed"><p className="section-label">Course enrollment</p><h1>Confirmation needed</h1><p>{error}</p>{reference&&<small>Reference: {reference}</small>}<div><Link className="primary-button" href="/login/">Sign in <span>→</span></Link><Link className="secondary-button" href="/tech-courses/">All courses</Link></div></section>;
}
