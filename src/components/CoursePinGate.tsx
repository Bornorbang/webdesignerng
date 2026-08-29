"use client";

import { FormEvent, useState } from "react";
import { ApiError, api } from "@/lib/api";
import { ResourceHeader } from "@/components/ResourceChrome";

export default function CoursePinGate({slug,title,onGranted}:{slug:string;title:string;onGranted:(token:string)=>void}){
 const[busy,setBusy]=useState(false),[error,setError]=useState("");
 async function submit(event:FormEvent<HTMLFormElement>){
  event.preventDefault();setBusy(true);setError("");
  const pin=new FormData(event.currentTarget).get("pin");
  try{
   const result=await api<{access_token:string}>(`/courses/${encodeURIComponent(slug)}/verify-pin`,{method:"POST",body:JSON.stringify({pin})});
   sessionStorage.setItem(`wdn_course_pin_${slug}`,result.access_token);
   onGranted(result.access_token);
  }catch(exception){setError(exception instanceof ApiError?Object.values(exception.errors).flat()[0]??exception.message:"Invalid PIN. Please check and try again.")}
  finally{setBusy(false)}
 }
 return <main className="course-detail-page"><ResourceHeader/><section className="portal-hero"><div className="shell"><p className="kicker">Early course access</p><h1>{title}</h1><p>Enter the access PIN supplied by Website Designer Nigeria to view this coming-soon course.</p></div></section><section className="resource-light"><div className="shell portal-shell"><form className="programme-form" onSubmit={submit}>{error&&<p className="form-message form-error">{error}</p>}<label>Access PIN<input name="pin" required autoComplete="one-time-code"/></label><button disabled={busy}>{busy?"Checking…":"Access course"} <span>→</span></button></form></div></section></main>;
}
