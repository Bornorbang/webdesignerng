"use client";
import Link from "next/link";
import {useEffect,useState} from "react";
import {api} from "@/lib/api";

type Dashboard={summary:{courses:number;consultations:number;affiliate_earnings:string};courses:Array<{id:number;status:string;is_paid:boolean;progress:string;course:{title:string;slug:string;lectures_count:number}}>;consultations:Array<{id:number;consultation_type:string;preferred_date:string|null;session_duration:string;consultation_cost:string;status:string;payment:{status:string}|null}>;affiliate:null|{status:string;affiliate_code:string;commission_rate:string;total_earned:string;pending_balance:string;total_referrals:number;successful_conversions:number}};
const date=(value:string|null)=>value?new Intl.DateTimeFormat("en-NG",{dateStyle:"medium"}).format(new Date(value)):"Not scheduled";
const money=(value:string)=>new Intl.NumberFormat("en-NG",{style:"currency",currency:"NGN",maximumFractionDigits:0}).format(Number(value));

export default function DashboardPanels(){
 const[data,setData]=useState<Dashboard|null>(null),[error,setError]=useState("");
 useEffect(()=>{api<Dashboard>("/me/dashboard").then(setData).catch(()=>setError("Your dashboard information could not be loaded."))},[]);
 if(error)return <p className="form-message form-error">{error}</p>;
 if(!data)return <div className="dashboard-loading">Loading courses and bookings…</div>;
 const consultations=data.consultations.filter(item=>item.status!=="pending");
 return <>
  <div className="dashboard-summary dashboard-summary-three"><article><span>My courses</span><strong>{data.summary.courses}</strong></article><article><span>Confirmed consultations</span><strong>{consultations.length}</strong></article><article><span>Affiliate earnings</span><strong>{money(data.summary.affiliate_earnings)}</strong></article></div>
  <Panel title="My courses" label="Learning" link="/tech-courses/" linkText="Browse courses →" id="courses">{data.courses.length?<div className="dashboard-list">{data.courses.map(item=><article key={item.id}><div><strong>{item.course.title}</strong><span>{item.course.lectures_count} lessons · {item.progress}% complete</span></div><span className={`status status-${item.status}`}>{item.status}</span><Link href={`/course/${item.course.slug}/`}>{item.is_paid?"Continue":"Complete payment"} →</Link></article>)}</div>:<Empty>You have not enrolled in a course yet.</Empty>}</Panel>
  <Panel title="My consultations" label="Advisory" link="/book-consultation/" linkText="Book a session →" id="consultations">{consultations.length?<div className="dashboard-list">{consultations.map(item=><article key={item.id}><div><strong>{item.consultation_type.replaceAll("-"," ")}</strong><span>{date(item.preferred_date)} · {item.session_duration} minutes · ₦{item.consultation_cost}</span></div><span className={`status status-${item.status}`}>{item.status}</span><small>{item.payment?.status??"payment unavailable"}</small></article>)}</div>:<Empty>No confirmed or completed consultations yet.</Empty>}</Panel>
  <Panel title="Earnings and referrals" label="Affiliate programme" link="/earn-money/" linkText="Programme details →" id="affiliate">{data.affiliate?<><div className="affiliate-dashboard-stats"><article><span>Affiliate code</span><strong>{data.affiliate.affiliate_code}</strong></article><article><span>Commission rate</span><strong>{data.affiliate.commission_rate}%</strong></article><article><span>Total earned</span><strong>{money(data.affiliate.total_earned)}</strong></article><article><span>Pending balance</span><strong>{money(data.affiliate.pending_balance)}</strong></article><article><span>Referrals</span><strong>{data.affiliate.total_referrals}</strong></article><article><span>Conversions</span><strong>{data.affiliate.successful_conversions}</strong></article></div><p className={`affiliate-account-status status status-${data.affiliate.status}`}>Account {data.affiliate.status}</p></>:<div className="affiliate-empty"><span>You have not joined the affiliate programme yet.</span><Link href="/earn-money/">Join now</Link></div>}</Panel>
 </>
}
function Panel({title,label,link,linkText,id,children}:{title:string;label:string;link:string;linkText:string;id:string;children:React.ReactNode}){return <section className="dashboard-panel" id={id}><div className="dashboard-heading"><div><p className="section-label">{label}</p><h2>{title}</h2></div><Link href={link}>{linkText}</Link></div>{children}</section>}
function Empty({children}:{children:React.ReactNode}){return <div className="dashboard-empty"><p>{children}</p></div>}
