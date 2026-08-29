import type {MetadataRoute} from "next";

export default function robots():MetadataRoute.Robots{
  return {rules:{userAgent:"*",allow:"/",disallow:["/profile/","/affiliate/dashboard/","/affiliate/payout/","/wdnadmin/"]},sitemap:"https://www.websitedesigner.ng/sitemap.xml",host:"https://www.websitedesigner.ng"};
}
