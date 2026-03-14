import { roomsData } from '../../data/rooms';
import RoomHero from '../../components/rooms/RoomHero';
import RoomGallery from '../../components/rooms/RoomGallery';
import RoomExperience from '../../components/rooms/RoomExperience';

import SpecialOffer from '../../components/rooms/SpecialOffer';
import AmenitiesGrid from '../../components/rooms/AmenitiesGrid';
import RelatedRooms from '../../components/rooms/RelatedRooms';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import RoomMainContent from '../../components/rooms/RoomMainContent';
import { siteConfig } from '../../config';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const room = roomsData.find(r => r.slug === slug);
  return {
    title: room ? `${room.title} | Luxury Hotel Room in Manesar | Hotel Hider` : 'Room Not Found',
    description: room?.tagline || 'Experience high-end boutique hospitality in Manesar, Gurgaon.',
  };
}

export default async function RoomPage({ params }: PageProps) {
  const { slug } = await params;
  const room = roomsData.find((r) => r.slug === slug);

  if (!room) {
    notFound();
  }

  const otherRooms = roomsData.filter((r) => r.slug !== slug);

  const roomSpecs = [
    { label: 'Room Size', value: room.size },
    { label: 'Bed Type', value: room.bed },
    { label: 'Max Capacity', value: room.guests },
    { label: 'The View', value: room.view },
    { label: 'Bathroom', value: room.bathroom },
    { label: 'WiFi Status', value: 'Complimentary High Speed' }
  ];

  return (
    <main className="min-h-screen bg-[var(--app-bg)] selection:bg-[#C5A059] selection:text-white overflow-x-clip">
      <Navbar />
      
      <RoomHero 
        title={room.title} 
        images={room.galleryImages}
        price={room.price} 
        tagline={room.tagline}
      />

      <RoomMainContent>
        
        {/* Main Narrative Column */}
        <div className="flex flex-col gap-20">
          
          {/* Room Experience */}
          <RoomExperience 
            title={room.title}
            description={room.description}
            features={room.features}
            price={room.price}
          />

          {/* Amenities Grid */}
          <AmenitiesGrid amenities={room.amenities} />

          {/* Room Gallery */}
          <RoomGallery images={room.galleryImages} />

        </div>



      </RoomMainContent>

      {/* Related Rooms Selection */}
      <RelatedRooms rooms={otherRooms} />
      <Footer />
    </main>
  );
}

