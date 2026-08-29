import type{Metadata}from"next";import{Suspense}from"react";import CoursePaymentStatus from"@/components/CoursePaymentStatus";
export const metadata:Metadata={title:"Course Payment - Website Designer Nigeria",robots:{index:false,follow:false}};
export default function Page(){return <main className="payment-result-page"><Suspense fallback={<p>Checking payment…</p>}><CoursePaymentStatus/></Suspense></main>}
