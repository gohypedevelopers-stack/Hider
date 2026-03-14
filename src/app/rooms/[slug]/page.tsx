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
import RoomMainContent from '../../components/rooms/RoomMainContent';
import HotelDetailsContent from '../../components/rooms/HotelDetailsContent';
import RoomBookingWrapper from '../../components/rooms/RoomBookingWrapper';
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
    title: room ? `${room.title} | Luxury Hotel Room in Mansa | Hotel Hider` : 'Room Not Found',
    description: room?.tagline || 'Experience high-end boutique hospitality in Mansa, Gujarat.',
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
        <div className="flex flex-col gap-[160px]">
          
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

        <aside style={{ 
          position: 'sticky', 
          top: '140px', 
          height: 'fit-content',
          width: '100%',
          zIndex: 40 
        }}>
          <RoomBookingWrapper>
            <RoomBookingCard 
              price={room.price}
              roomType={room.title}
              guests={room.guests}
            />
            <div className="mt-12 mb-4 p-4 rounded-[2.5rem] border border-[var(--brand-gold)]/30 shadow-[0_20px_50px_rgba(0,0,0,0.05)] bg-[var(--app-bg-accent)]/50 backdrop-blur-md relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-[var(--brand-gold)]" />
              <div className="mb-4 flex items-center justify-between">
                <span className="inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--brand-gold)] bg-white px-5 py-2 rounded-full shadow-sm">Special Privilege</span>
              </div>
              <SpecialOffer />
            </div>
          </RoomBookingWrapper>
        </aside>

      </RoomMainContent>

      {/* Related Rooms Selection */}
      <RelatedRooms rooms={otherRooms} />

      {/* Hotel-wide Details Section */}
      <section className="bg-[var(--app-bg-accent)] py-32 mt-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--brand-gold)]/5 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="hider-main-container mx-auto">
          <HotelDetailsContent>
            <div>
              <h2 className="text-5xl font-serif mb-12 text-[var(--app-text)] italic">Complete Services</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Free WiFi", "Parking", "AC Rooms", "Room Service", 
                  "24/7 Front Desk", "CCTV Security", "Breakfast Included", 
                  "Laundry Service", "Power Backup", "Elevator", 
                  "Hot and Cold water", "Iron with Boards", "Hot water kettle",
                  "Pick and drop service (Chargeable)", "Wake up call", 
                  "Housekeeping", "Child friendly", "etc."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg text-[var(--app-text-muted)] font-serif italic">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand-gold)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col gap-16">
              <div>
                <h3 className="text-xs uppercase tracking-[0.4em] text-[var(--brand-gold)] font-bold mb-6">Arrival & Departure</h3>
                <p className="text-3xl font-serif text-[var(--app-text)] italic">12:00 Noon</p>
                <div className="h-px w-32 bg-[var(--brand-gold)]/30 mt-6" />
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-[0.4em] text-[var(--brand-gold)] font-bold mb-6">Price Range</h3>
                <ul className="flex flex-col gap-4">
                  <li className="text-2xl font-serif text-[var(--app-text)] italic flex justify-between border-b border-[var(--app-border)] pb-4">
                    <span>Standard</span>
                    <span className="text-[var(--brand-gold)]">₹2,500</span>
                  </li>
                  <li className="text-2xl font-serif text-[var(--app-text)] italic flex justify-between border-b border-[var(--app-border)] pb-4">
                    <span>Deluxe</span>
                    <span className="text-[var(--brand-gold)]">₹3,500</span>
                  </li>
                  <li className="text-2xl font-serif text-[var(--app-text)] italic flex justify-between border-b border-[var(--app-border)] pb-4">
                    <span>Super Deluxe</span>
                    <span className="text-[var(--brand-gold)]">₹4,500</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-[0.4em] text-[var(--brand-gold)] font-bold mb-6">Registration</h3>
                <p className="text-2xl font-serif text-[var(--app-text)] italic bg-white/50 backdrop-blur-sm p-8 rounded-[2rem] border border-[var(--app-border)] inline-block">
                  GST: <span className="font-mono not-italic text-[var(--brand-gold)] ml-4">@HOTEL HIDER GM</span>
                </p>
              </div>
            </div>
          </HotelDetailsContent>
        </div>
      </section>

      <Footer />
    </main>
  );
}
