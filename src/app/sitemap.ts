import type {MetadataRoute} from "next";

const site="https://www.websitedesigner.ng";
const api=(process.env.NEXT_PUBLIC_API_URL??"http://localhost:8000/api").replace(/\/$/,"");
const staticPaths=["","about-website-designer-nigeria","our-team","contact-website-designer-nigeria","portfolio","web-designer-in-lagos","seo-company-in-nigeria","best-graphic-designer-nigeria","web-development-pricing","ecommerce-website-design-in-nigeria","mobile-app-development-in-nigeria","shopify-store-pricing","seo-pricing","social-media-management-pricing","website-maintenance-pricing","tech-blog","tech-tips","tech-reviews","tech-courses","categories","advertise-with-us","earn-money","book-consultation","20-days-with-wdn","terms-of-service","privacy-policy"];

async function pages(path:string){
  const records:Record<string,unknown>[]=[];let page=1,last=1;
  try{do{const response=await fetch(`${api}${path}${path.includes("?")?"&":"?"}page=${page}`,{next:{revalidate:3600}});if(!response.ok)break;const json=await response.json() as {data?:Record<string,unknown>[];posts?:{data:Record<string,unknown>[];last_page:number};last_page?:number};const payload=json.posts??json;records.push(...(payload.data??[]));last=Number(payload.last_page??1);page++}while(page<=last)}catch{}
  return records;
}

export default async function sitemap():Promise<MetadataRoute.Sitemap>{
  const[blogs,courses,categories,courseCategories]=await Promise.all([pages("/blogs"),pages("/courses"),fetch(`${api}/blog-categories`,{next:{revalidate:3600}}).then(r=>r.ok?r.json():{categories:[]}).then((r:{categories:Record<string,unknown>[]})=>r.categories).catch(()=>[]),fetch(`${api}/course-categories`,{next:{revalidate:3600}}).then(r=>r.ok?r.json():{categories:[]}).then((r:{categories:Record<string,unknown>[]})=>r.categories).catch(()=>[])]);
  const entries:MetadataRoute.Sitemap=staticPaths.map(path=>({url:`${site}/${path?`${path}/`:""}`,changeFrequency:"weekly",priority:path===""?1:.8}));
  for(const post of blogs){const category=post.category as {slug?:string}|undefined;if(category?.slug&&post.slug)entries.push({url:`${site}/${category.slug}/${post.slug}/`,lastModified:String(post.updated_at??post.published_at??new Date().toISOString()),changeFrequency:"weekly",priority:.7})}
  for(const course of courses)if(course.slug)entries.push({url:`${site}/course/${course.slug}/`,lastModified:String(course.updated_at??new Date().toISOString()),changeFrequency:"weekly",priority:.7});
  for(const category of categories)if(category.slug)entries.push({url:`${site}/categories/${category.slug}/`,changeFrequency:"monthly",priority:.6});
  for(const category of courseCategories)if(category.slug)entries.push({url:`${site}/course-category/${category.slug}/`,changeFrequency:"monthly",priority:.6});
  return entries;
}
