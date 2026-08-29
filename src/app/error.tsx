"use client";import StatusPage from"@/components/StatusPage";export default function Error({reset}:{error:Error&{digest?:string};reset:()=>void}){return <StatusPage code={500} reset={reset}/>}
