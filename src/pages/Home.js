import { Helmet } from 'react-helmet';
import HeroSection from './HeroSection';

function Home() {
  return (
    <>
      <Helmet>
        <title>Coach Dennis - Professional Tennis & Padel Coach in Lagos</title>
        <meta
          name="description"
          content="Train with Coach Dennis at Dennis Tennis Academy. Top-rated tennis & padel coaching in Lagos, Nigeria for beginners and pros."
        />
        <meta
          name="keywords"
          content="Coach Dennis, Tennis Coach Lagos, Tennis Academy Nigeria, Padel Coach, Tennis training for kids, Best tennis coach in Nigeria"
        />
        <meta name="author" content="Coach Dennis Tennis Academy" />
        <link rel="canonical" href="https://yourdomain.com/" />

        {/* ✅ Structured Data (Google Schema Markup) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Coach Dennis",
              "jobTitle": "Tennis and Padel Coach",
              "url": "https://yourdomain.com",
              "sameAs": [
                "https://www.instagram.com/coachdennis",
                "https://www.facebook.com/coachdennis"
              ],
              "worksFor": {
                "@type": "SportsOrganization",
                "name": "Dennis Tennis Academy"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lagos",
                "addressRegion": "Lagos State",
                "addressCountry": "Nigeria"
              }
            })
          }}
        />
      </Helmet>

      <div>
        <HeroSection />
      </div>
    </>
  );
}

export default Home;
