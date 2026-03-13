interface RoomOverviewProps {
  description: string;
  specs: {
    size: string;
    bed: string;
    guests: string;
    view: string;
    bathroom: string;
    checkIn: string;
    checkOut: string;
  };
}

export default function RoomOverview({ description, specs }: RoomOverviewProps) {
  const specItems = [
    { label: 'Room Size', value: specs.size },
    { label: 'Bed Type', value: specs.bed },
    { label: 'Max Guests', value: specs.guests },
    { label: 'The View', value: specs.view },
    { label: 'Bath', value: specs.bathroom },
    { label: 'In/Out', value: `${specs.checkIn} / ${specs.checkOut}` },
  ];

  return (
    <section className="py-24 bg-[#FAF9F6] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-20 items-stretch">
          <div className="lg:w-3/5 flex flex-col justify-center">
            <span className="text-sm font-poppins tracking-[0.3em] text-gray-400 uppercase mb-4 block">Refined Comfort</span>
            <h2 className="text-4xl md:text-5xl font-playfair mb-10 text-black leading-tight italic">
              "Experience the ultimate blend of style and serenity."
            </h2>
            <div className="w-20 h-px bg-black/10 mb-10"></div>
            <p className="text-xl text-gray-600 leading-relaxed font-poppins font-light">
              {description}
            </p>
          </div>
          
          <div className="lg:w-2/5 flex">
            <div className="w-full bg-white p-10 md:p-14 shadow-[0_40px_100px_rgba(0,0,0,0.04)] border border-gray-100/50 flex flex-col justify-between">
              <h3 className="text-2xl font-playfair mb-12 uppercase tracking-widest text-black flex items-center">
                Specifications
                <span className="ml-4 flex-1 h-px bg-black/5"></span>
              </h3>
              
              <div className="grid grid-cols-1 gap-y-10">
                {specItems.map((item, idx) => (
                  <div key={idx} className="flex items-center group">
                    <div className="w-1.5 h-1.5 bg-black rotate-45 mr-6 group-hover:scale-150 transition-transform"></div>
                    <div className="flex-1 flex justify-between items-end border-b border-gray-100 pb-2">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-semibold">{item.label}</span>
                      <span className="text-sm font-poppins text-black font-medium">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
