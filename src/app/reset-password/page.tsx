import type{Metadata}from"next";import Link from"next/link";import{Suspense}from"react";import AuthShell from"@/components/AuthShell";import ResetPasswordForm from"@/components/ResetPasswordForm";
export const metadata:Metadata={title:{absolute:"Reset Password - Website Designer Nigeria"},robots:{index:false,follow:true}};
export default function Page(){return <AuthShell eyebrow="Account recovery" title="Choose a new password" footer={<p>Return to <Link href="/login/">sign in</Link></p>}><Suspense fallback={<p>Loading secure reset form…</p>}><ResetPasswordForm/></Suspense></AuthShell>}
