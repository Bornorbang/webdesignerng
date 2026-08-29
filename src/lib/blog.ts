export type BlogCategory={id:number;name:string;slug:string;blogs_count?:number};
export type BlogComment={id:number;name:string;content:string;created_at:string};
export type BlogPost={id:number;title:string;author:string;slug:string;meta_description:string|null;tags:string[]|null;content:string;image:string|null;comments_count:number;published_at:string;category:BlogCategory;comments?:BlogComment[]};
export type BlogBanner={id:number;title:string|null;image:string;link:string|null};
export const blogUrl=(post:BlogPost)=>`/${post.category.slug}/${post.slug}/`;
export const mediaUrl=(path:string|null)=>{if(!path)return "/images/portfolio/Accelede.png";if(/^https?:\/\//i.test(path))return path;const base=process.env.NEXT_PUBLIC_LEGACY_MEDIA_URL??"http://127.0.0.1:8010/media";return `${base.replace(/\/$/,"")}/${path.replace(/^\/?(media\/|storage\/)?/,"")}`};
export const excerpt=(post:BlogPost,limit=165)=>{const source=post.meta_description||post.content||"";const plain=source.replace(/<[^>]*>/g," ").replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/&#39;/g,"'").replace(/&quot;/g,'"').replace(/\s+/g," ").trim();return plain.length>limit?`${plain.slice(0,limit).trimEnd()}…`:plain};
export const postDate=(value:string)=>new Date(value).toLocaleDateString("en-NG",{day:"numeric",month:"long",year:"numeric"});
