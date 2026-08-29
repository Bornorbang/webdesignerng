import type{Metadata}from"next";import Link from"next/link";import AuthShell from"@/components/AuthShell";import LoginForm from"@/components/LoginForm";
export const metadata:Metadata={title:{absolute:"Login - Website Designer Nigeria"},description:"Sign in to your Website Designer Nigeria account.",robots:{index:false,follow:true}};
export default function Page(){return <AuthShell eyebrow="Welcome back" title="Sign in to your account" footer={<p>New to WDN? <Link href="/signup/">Create an account</Link></p>}><LoginForm/></AuthShell>}
