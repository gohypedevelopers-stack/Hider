import Link from 'next/link';

interface BookingCardProps {
  price: string;
  roomType: string;
  guests: string;
  whatsappNumber: string;
  whatsappMessage: string;
}

export default function BookingCard({ price, roomType, guests, whatsappNumber, whatsappMessage }: BookingCardProps) {
  return (
    <div className="bg-white p-10 shadow-[0_30px_70px_rgba(0,0,0,0.08)] border border-gray-50 flex flex-col items-center text-center sticky top-32 rounded-sm transition-all duration-500 hover:shadow-[0_40px_100px_rgba(0,0,0,0.12)]">
      <div className="w-12 h-0.5 bg-black/10 mb-8 mx-auto"></div>
      
      <div className="mb-3 text-gray-400 text-[10px] uppercase tracking-[0.3em] font-bold">Standard Rate</div>
      <div className="text-4xl font-playfair mb-1 text-black font-medium">
        {price} 
        <span className="text-[13px] font-poppins text-gray-400 font-light ml-2">/ NIGHT</span>
      </div>
      <div className="text-[11px] text-gray-400 mb-8 uppercase tracking-widest italic font-poppins">+ Applicable Taxes</div>
      
      <div className="w-full bg-gray-50/50 p-6 space-y-4 mb-10 rounded-sm">
        <div className="flex justify-between items-center text-[11px] border-b border-gray-200/50 pb-3">
          <span className="text-gray-400 uppercase tracking-widest font-semibold">Accommodation</span>
          <span className="font-poppins text-black font-semibold uppercase">{roomType}</span>
        </div>
        <div className="flex justify-between items-center text-[11px] border-b border-gray-200/50 pb-3">
          <span className="text-gray-400 uppercase tracking-widest font-semibold">Max Occupancy</span>
          <span className="font-poppins text-black font-semibold uppercase">{guests}</span>
        </div>
        <div className="flex justify-between items-center text-[11px]">
          <span className="text-gray-400 uppercase tracking-widest font-semibold">Daily Breakfast</span>
          <span className="font-poppins text-green-600 font-bold uppercase">Included</span>
        </div>
      </div>

      <div className="w-full space-y-4">
        <button className="w-full bg-black text-white py-5 font-poppins text-[11px] font-bold tracking-[0.3em] hover:bg-gray-800 transition-all rounded-sm uppercase shadow-lg shadow-black/10 active:scale-[0.98]">
          Reserve Now
        </button>

        <Link 
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          className="w-full block border-2 border-black text-black py-5 font-poppins text-[11px] font-bold tracking-[0.3em] hover:bg-black hover:text-white transition-all rounded-sm uppercase active:scale-[0.98]"
        >
          WhatsApp Concierge
        </Link>
      </div>

      <div className="mt-10 flex flex-col items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <p className="text-[10px] text-gray-400 font-medium tracking-widest uppercase">Best Price Guaranteed</p>
        </div>
        
        {/* GST Info Placeholder */}
        <p className="text-[9px] text-gray-300 font-poppins italic leading-loose">
          GST No: (Available at Counter)<br/>
          Terms & conditions apply.
        </p>
      </div>
    </div>
  );
}
