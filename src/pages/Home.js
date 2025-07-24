import { Helmet } from 'react-helmet';
import HeroSection from './HeroSection';

function Home() {
  return (
    <>
      <Helmet>
        <title>Nigerian Tennis | Home</title>
        <meta name="description" content="Promoting tennis in Nigeria through tournaments, player highlights, and sponsorships." />
        <meta name="keywords" content="Nigerian Tennis, Tennis Players in Nigeria, Tennis Tournaments Nigeria, Tennis Sponsorships, Nigerian sports" />
        <meta name="author" content="Melvin Benjamin" />
      </Helmet>
      <div>
        <HeroSection />
      </div>
    </>
  );
}
export default Home;