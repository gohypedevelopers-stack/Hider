export default function HouseRules() {
  const policies = [
    { title: 'Standard Timings', items: ['Check-in: 12:00 Noon', 'Check-out: 12:00 Noon'] },
    { title: 'Guest Protocols', items: ['Valid Govt. ID is mandatory', 'Child Friendly environment'] },
    { title: 'Comfort & Care', items: ['Non-smoking rooms only', 'Pets are not allowed'] },
  ];

  return (
    <section className="py-24 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-playfair mb-4 uppercase tracking-[0.2em]">Guest Policies</h2>
            <div className="w-12 h-1 bg-black mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {policies.map((policy, idx) => (
              <div key={idx} className="flex flex-col group">
                <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-6 group-hover:text-black transition-colors">
                  {policy.title}
                </h3>
                <ul className="space-y-4">
                  {policy.items.map((item, i) => (
                    <li key={i} className="flex items-center text-sm font-poppins text-gray-600 font-light">
                      <span className="w-4 h-[1px] bg-black/20 mr-4"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-20 p-8 border border-gray-100 bg-[#FAF9F6] text-center">
            <p className="text-xs font-poppins text-gray-400 uppercase tracking-widest leading-relaxed">
              For any special requests or earlier check-in, please contact our 24/7 Front Desk in advance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
