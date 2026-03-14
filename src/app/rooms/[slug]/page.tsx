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

        <aside className="sticky top-40 h-fit">
          <RoomBookingCard 
            price={room.price}
            roomType={room.title}
            guests={room.guests}
          />
        </aside>

      </RoomMainContent>

      {/* Related Rooms Selection */}
      <RelatedRooms rooms={otherRooms} />

      {/* Hotel-wide Details Section */}
      <section className="bg-white py-40 lg:py-64 relative border-t border-[var(--app-border)]">
        <div className="lux-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
            <div>
              <div className="flex items-center gap-8 mb-16">
                <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[var(--brand-gold)]">Service Excellence</span>
                <div className="h-[0.5px] flex-1 bg-[var(--app-border)]" />
              </div>
              <h2 className="text-5xl md:text-6xl font-serif mb-20 text-[var(--app-text)] leading-tight italic">Essential Amenities</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-12">
                {[
                  "Free WiFi", "Secure Parking", "AC Rooms", "Room Service", 
                  "24/7 Front Desk", "CCTV Security", "Breakfast Included", 
                  "Laundry Service", "Power Backup", "Elevator", 
                  "Hot/Cold Water", "Pick & Drop", "Wake up call", 
                  "Housekeeping"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-6 group">
                    <div className="w-1 h-1 rounded-full bg-[var(--brand-gold)] opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="text-xl font-serif text-[var(--app-text)] italic group-hover:text-[var(--brand-gold)] transition-colors duration-500">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col gap-24 lg:pl-12 lg:border-l border-[var(--app-border)]">
              <div className="group">
                <h3 className="text-[10px] uppercase tracking-[0.4em] text-[var(--brand-gold)] font-bold mb-8">Arrival & Departure</h3>
                <p className="text-5xl font-serif text-[var(--app-text)] italic leading-none group-hover:translate-x-2 transition-transform duration-700">12:00 Noon</p>
                <div className="h-[0.5px] w-full bg-[var(--app-border)] mt-10" />
              </div>

              <div>
                <h3 className="text-[10px] uppercase tracking-[0.4em] text-[var(--brand-gold)] font-bold mb-12">Collection Pricing</h3>
                <ul className="space-y-10">
                  {[
                    { type: 'Standard', price: '2,500' },
                    { type: 'Deluxe', price: '3,500' },
                    { type: 'Super Deluxe', price: '4,500' }
                  ].map((room, i) => (
                    <li key={i} className="group flex justify-between items-baseline border-b border-[var(--app-border)] pb-6 hover:border-[var(--brand-gold)] transition-colors duration-500">
                      <span className="text-3xl font-serif text-[var(--app-text)] italic">{room.type}</span>
                      <span className="text-2xl font-serif text-[var(--brand-gold)] font-medium">₹{room.price}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <h3 className="text-[10px] uppercase tracking-[0.4em] text-[var(--brand-gold)] font-bold mb-8">Official Registration</h3>
                <div className="relative group">
                  <p className="text-2xl font-serif text-[var(--app-text)] italic border border-[var(--app-border)] p-10 group-hover:border-[var(--brand-gold)] transition-all duration-700">
                    GST Identifier: <span className="font-sans not-italic text-[var(--brand-gold)] font-bold ml-4 tracking-wider">@HOTEL HIDER GM</span>
                  </p>
                  <div className="absolute top-0 right-0 w-2 h-2 bg-[var(--brand-gold)] -m-1 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
