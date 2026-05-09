import { Hero } from "@/components/campaign/Hero";
import { CampaignStory, } from "@/components/campaign/CampaignStory";
import { TransformationTimeline } from "@/components/campaign/TransformationTimeline";
import { ConceptGallery } from "@/components/campaign/ConceptGallery";
import { ArtistCall } from "@/components/campaign/ArtistCall";
import { DonationPanel } from "@/components/campaign/DonationPanel";
import { SponsorPanel } from "@/components/campaign/SponsorPanel";
import { AuctionPreview } from "@/components/campaign/AuctionPreview";
import { Faq } from "@/components/campaign/Faq";
import { LegalNotice } from "@/components/campaign/LegalNotice";
import { SiteFooter } from "@/components/campaign/SiteFooter";
import { ModelViewer } from "@/components/campaign/ModelViewer";
export default function Page(){return <main className='bg-zinc-950 text-white'><Hero /><CampaignStory /><TransformationTimeline /><ConceptGallery /><ArtistCall /><DonationPanel /><SponsorPanel /><AuctionPreview /><section className='px-6 py-10'><h2 className='text-2xl font-semibold'>Future 3D model support</h2><ModelViewer/></section><Faq /><LegalNotice /><SiteFooter /></main>}
