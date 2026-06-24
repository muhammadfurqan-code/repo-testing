import NavbarSection from './NavbarSection';
import HeroSection from './HeroSection';
import ServiceTilesSection from './ServiceTilesSection';
import AboutSection from './AboutSection';
import CapabilitiesSection from './CapabilitiesSection';
import QualityCertificationsSection from './QualityCertificationsSection';
import StatsSection from './StatsSection';
import VideoTourSection from './VideoTourSection';
import WhyMatrixSection from './WhyMatrixSection';
import GallerySection from './GallerySection';
import AssociationsSection from './AssociationsSection';
import CtaBannerSection from './CtaBannerSection';
import FooterSection from './FooterSection';
import IframeWithFallback from '../components/IframeWithFallback';
import { ScaledContentPanel, ScaledIframePanel } from '../components/ScaledFrame';

const OLD_SITE_URL = 'http://www.matrixplastic.com/';
const OLD_SITE_SCREENSHOT =
  'https://storage.googleapis.com/firecrawl-scrape-media/screenshot-a8a17d58-be79-47ce-8f5f-602dec78b50e.png?GoogleAccessId=scrape-bucket-accessor%40firecrawl.iam.gserviceaccount.com&Expires=1782926013&Signature=ehYJoUGCLwnhHrGFL1hqAyayqEYeHpM%2F8cy0OttzfI%2BTW5ISxjz4gG%2BFNm%2FXRkZv9jjjXXy%2F5mIf7hYhB9ZQrupmd%2FtJMYW6nreQEuGN5%2BcvcSArNztzC4omamvemBDjzlnKqTbdHz68xtqHaPEQpRtGLLA2JtWRtDD7xX%2F%2FT%2BlECK0z0VOPaBXGgevVTgDuN5sqPyWFau7ILgrhEdEUVXIUIjMh0lqT84gZ9fjJEZHbHtwKnAVYsvwv2DFWp0%2B6M3%2BFGpGhPj8WJlZ45%2Fi7i9SgHfbpZ8FZyrrumU%2B%2BcAuUy%2BznLKR4NwtQ726ak4TTHB5biEf7%2Ff2QNPId17ruQg%3D%3D';

function HoverTile({ label }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-20 flex items-start justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
      <span className="mt-[16px] px-[16px] py-[8px] rounded-[6px] bg-[#0F2340]/90 backdrop-blur-sm border border-[#D0D9E8]/20 text-[#FFFFFF] text-[12px] font-['Barlow_Condensed'] font-[700] tracking-[0.08em] uppercase shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
        {label}
      </span>
    </div>
  );
}

function SiteComparisonSection() {
  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      <div className="group relative w-full md:w-1/2 h-1/2 md:h-full overflow-hidden border-b md:border-b-0 md:border-r border-[#D0D9E8]/15">
        <HoverTile label="Your New Website" />
        <ScaledContentPanel>
          <NavbarSection />
          <HeroSection />
          <ServiceTilesSection />
          <AboutSection />
          <CapabilitiesSection />
          <QualityCertificationsSection />
          <StatsSection />
          <VideoTourSection />
          <WhyMatrixSection />
          <GallerySection />
          <AssociationsSection />
          <CtaBannerSection />
          <FooterSection />
        </ScaledContentPanel>
      </div>

      <div className="group relative w-full md:w-1/2 h-1/2 md:h-full overflow-hidden">
        <HoverTile label="Your Old Website" />
        <ScaledIframePanel>
          <IframeWithFallback
            src={OLD_SITE_URL}
            fallbackSrc={OLD_SITE_SCREENSHOT}
            title="Matrix Plastic Products — old website"
          />
        </ScaledIframePanel>
      </div>
    </div>
  );
}

export default SiteComparisonSection;
