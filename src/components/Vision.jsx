import { ShieldCheck, Zap, Layers, BarChart3 } from "lucide-react";

const Vision = () => {
  const points = [
    { title: "Full-Stack Ownership", icon: <Layers size={18}/> },
    { title: "Startup-First Speed", icon: <Zap size={18}/> },
    { title: "Scalable Practices", icon: <ShieldCheck size={18}/> },
    { title: "Long-Term Thinking", icon: <BarChart3 size={18}/> }
  ];

  return (
    <section className="py-24 px-6 bg-[#FDFBF7]">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        
        <div className="lg:w-1/2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-100 rounded-full mb-6">
            <span className="text-[10px] font-bold tracking-widest text-brand-purple uppercase">Our Philosophy</span>
          </div>
          <h3 className="text-3xl sm:text-5xl font-bold text-[#0A0F2C] leading-tight mb-8">
            Engineering <span className="text-gradient">Foundations</span>, Not Just Features.
          </h3>
          <p className="text-gray-500 font-medium mb-10 leading-relaxed text-sm sm:text-base">
            Digital Astra Labs believes in speed without compromising quality. We use clean architecture to ensure your product can scale from 100 users to 1 million without a total rewrite. We build for the long term.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {points.map(item => (
              <div key={item.title} className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm border border-gray-50">
                <div className="text-cyan-blue">{item.icon}</div>
                <span className="text-sm font-bold text-[#0A0F2C]">{item.title}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2 w-full aspect-square  rounded-[4rem]  relative flex items-center justify-center  group overflow-hidden">
            {/* Moving Circle Decor */}
            <div className="absolute inset-0 border-[1px] border-cyan-blue/10 rounded-full scale-75 group-hover:scale-95 transition-transform duration-1000" />
            <div className="text-center relative z-10">
              <div className="text-7xl mb-6">
                <img src ="/img1.jpg" alt="development img"  className="rounded-4xl"></img>
              </div>
              <p className="text-xl font-bold text-[#0A0F2C]">Built to Scale.</p>
              <p className="text-sm text-gray-400 font-medium mt-2">Global Engineering Standards</p>
            </div>
        </div>
      </div>
    </section>
  );
};
export default Vision;