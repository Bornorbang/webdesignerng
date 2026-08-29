import type{Metadata}from"next";import ProfileClient from"@/components/ProfileClient";
export const metadata:Metadata={title:{absolute:"My Profile - Website Designer Nigeria"},description:"Manage your Website Designer Nigeria account and profile.",robots:{index:false,follow:false}};
export default function Page(){return <ProfileClient/>}
