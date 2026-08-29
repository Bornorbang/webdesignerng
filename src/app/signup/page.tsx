import type{Metadata}from"next";import Link from"next/link";import AuthShell from"@/components/AuthShell";import SignupForm from"@/components/SignupForm";
export const metadata:Metadata={title:{absolute:"Sign Up - Website Designer Nigeria"},description:"Create your Website Designer Nigeria account.",robots:{index:false,follow:true}};
export default function Page(){return <AuthShell eyebrow="Join the community" title="Create your account" footer={<p>Already have an account? <Link href="/login/">Sign in</Link></p>}><SignupForm/></AuthShell>}
