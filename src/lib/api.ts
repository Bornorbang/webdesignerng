export type ProfileUser={id:number;username:string;first_name:string;last_name:string;name:string|null;email:string;is_active:boolean;created_at:string|null;last_login_at:string|null;profile:{phone_number:string|null;bio:string|null;profile_image:string|null}};
type ApiErrorBody={message?:string;errors?:Record<string,string[]>};
const API_URL=(process.env.NEXT_PUBLIC_API_URL??"http://localhost:8000/api").replace(/\/$/,"");
const TOKEN_KEY="wdn_api_token";
export class ApiError extends Error{constructor(message:string,public errors:Record<string,string[]>={}){super(message)}}
export function getToken(){if(typeof window==="undefined")return null;return localStorage.getItem(TOKEN_KEY)??sessionStorage.getItem(TOKEN_KEY)}
export function storeToken(token:string,remember=true){clearToken();(remember?localStorage:sessionStorage).setItem(TOKEN_KEY,token)}
export function clearToken(){if(typeof window==="undefined")return;localStorage.removeItem(TOKEN_KEY);sessionStorage.removeItem(TOKEN_KEY)}
export function backendAssetUrl(path:string|null){if(!path)return null;if(/^https?:\/\//i.test(path))return path;return `${API_URL.replace(/\/api$/,"")}/${path.replace(/^\/?(storage\/)?/,"storage/")}`}
export async function api<T>(path:string,options:RequestInit={}){const token=getToken(),isForm=options.body instanceof FormData;const response=await fetch(`${API_URL}${path}`,{...options,headers:{Accept:"application/json",...(!isForm?{"Content-Type":"application/json"}:{}),...(token?{Authorization:`Bearer ${token}`}:{...{}}),...options.headers}});const body=(await response.json().catch(()=>({})))as T&ApiErrorBody;if(!response.ok){if(response.status===401)clearToken();throw new ApiError(body.message??"Unable to complete your request.",body.errors??{})}return body as T}
