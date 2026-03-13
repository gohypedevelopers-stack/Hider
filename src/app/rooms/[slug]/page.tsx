import { roomsData } from '../../data/rooms';
import RoomHero from '../../components/rooms/RoomHero';
import RoomGallery from '../../components/rooms/RoomGallery';
import RoomExperience from '../../components/rooms/RoomExperience';
import RoomBookingCard from '../../components/rooms/RoomBookingCard';
import SpecialOffer from '../../components/rooms/SpecialOffer';
import AmenitiesGrid from '../../components/rooms/AmenitiesGrid';
import RelatedRooms from '../../components/rooms/RelatedRooms';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
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
    <main className="min-h-screen bg-white selection:bg-[#C5A059] selection:text-white">
      <Navbar />
      
      <RoomHero 
        title={room.title} 
        image={room.galleryImages[0]}
        price={room.price} 
      />

      {/* Main Content Flow - Forced Grid via Inline Styles */}
      <div 
        className="max-w-[1400px] mx-auto px-6 pb-32"
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'minmax(0, 1fr) 450px', 
          gap: '60px',
          alignItems: 'start' 
        }}
      >
        
        {/* Main Content Column */}
        <div style={{ width: '100%', minWidth: 0 }}>
          
          {/* Room Experience */}
          <RoomExperience 
            title={room.title}
            description={room.description}
          />

          {/* Amenities Grid */}
          <AmenitiesGrid amenities={room.amenities} />

          {/* Room Gallery */}
          <RoomGallery images={room.galleryImages} />

        </div>

        {/* Sidebar Area for Booking Card */}
        <div style={{ 
          position: 'sticky', 
          top: '120px', 
          height: 'fit-content',
          width: '450px',
          zIndex: 40 
        }}>
          <RoomBookingCard 
            price={room.price}
            roomType={room.title}
            guests={room.guests}
          />
          <SpecialOffer />
        </div>

      </div>

      {/* Related Rooms Selection */}
      <RelatedRooms rooms={otherRooms} />
      
      <Footer />
    </main>
  );
}
