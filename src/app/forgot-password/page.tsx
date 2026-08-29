import type{Metadata}from"next";import Link from"next/link";import AuthShell from"@/components/AuthShell";import ForgotPasswordForm from"@/components/ForgotPasswordForm";
export const metadata:Metadata={title:{absolute:"Forgot Password - Website Designer Nigeria"},robots:{index:false,follow:true}};
export default function Page(){return <AuthShell eyebrow="Account recovery" title="Reset your password" copy="Enter the email address connected to your account." footer={<p>Remember your password? <Link href="/login/">Sign in</Link></p>}><ForgotPasswordForm/></AuthShell>}
