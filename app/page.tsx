import { Hero } from "@/components/campaign/Hero";
import { CampaignStory } from "@/components/campaign/CampaignStory";
import { BeforeGallery } from "@/components/campaign/BeforeGallery";
import { TransformationTimeline } from "@/components/campaign/TransformationTimeline";
import { ConceptGallery } from "@/components/campaign/ConceptGallery";
import { ArtistCall } from "@/components/campaign/ArtistCall";
import { DonationPanel } from "@/components/campaign/DonationPanel";
import { SponsorPanel } from "@/components/campaign/SponsorPanel";
import { AuctionPreview } from "@/components/campaign/AuctionPreview";
import { Faq } from "@/components/campaign/Faq";
import { LegalNotice } from "@/components/campaign/LegalNotice";
import { SiteFooter } from "@/components/campaign/SiteFooter";
import { KineticMarquee } from "@/components/cinematic/KineticMarquee";

export default function Page() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <KineticMarquee>LOWRIDER • ART • COMMUNITY • RESTORATION • YOUTH • CRAFT</KineticMarquee>
      <CampaignStory />
      <BeforeGallery />
      <TransformationTimeline />
      <ConceptGallery />
      <ArtistCall />
      <DonationPanel />
      <SponsorPanel />
      <AuctionPreview />
      <Faq />
      <LegalNotice />
      <SiteFooter />
    </main>
  );
}
