import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      { source: "/website-development-services/", destination: "/web-development-pricing/", permanent: true },
      { source: "/services/website-development/", destination: "/web-development-pricing/", permanent: true },
      { source: "/courses/", destination: "/tech-courses/", permanent: true },
      { source: "/courses/:slug/", destination: "/course-category/:slug/", permanent: true },
      { source: "/consultation/", destination: "/book-consultation/", permanent: true },
      { source: "/accounts/login/", destination: "/login/", permanent: true },
      { source: "/accounts/signup/", destination: "/signup/", permanent: true },
      { source: "/accounts/logout/", destination: "/login/", permanent: true },
      { source: "/payment/success/", destination: "/tech-courses/payment-complete/", permanent: true },
      { source: "/payment/failed/", destination: "/tech-courses/payment-complete/", permanent: true },
      { source: "/tech-courses/:slug/", destination: "/course/:slug/", permanent: true },
    ];
  },
};

export default nextConfig;
