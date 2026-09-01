"use client";
import {useEffect,useState} from "react";

export default function PaymentResultToast(){
 const[message,setMessage]=useState("");
 useEffect(()=>{const url=new URL(window.location.href);if(url.searchParams.get("consultation")!=="successful")return;url.searchParams.delete("consultation");window.history.replaceState({},"",`${url.pathname}${url.search}${url.hash}`);const showTimer=window.setTimeout(()=>setMessage("Consultation booked successfully"),0),hideTimer=window.setTimeout(()=>setMessage(""),5000);return()=>{window.clearTimeout(showTimer);window.clearTimeout(hideTimer)}},[]);
 if(!message)return null;
 return <div className="enrollment-success-toast" role="status"><span>✓</span><div><strong>{message}</strong><small>Payment confirmed. A confirmation email has been sent.</small></div><button type="button" onClick={()=>setMessage("")} aria-label="Dismiss notification">×</button></div>;
}
