const Stats = () => {
  const data = [
    { val: "6-8", label: "Weeks to MVP", detail: "Rapid Engineering" },
    { val: "100%", label: "Startup Success", detail: "Technical Partner" },
    { val: "1M+", label: "Lines of Code", detail: "Clean Architecture" },
    { val: "24/7", label: "Global Delivery", detail: "Milestone-Based" }
  ];

  return (
    <section className="py-20 px-6 bg-[#0A0F2C] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,#00B5E210_0%,transparent_70%)]" />
      
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {data.map((item, i) => (
          <div key={i} className="text-center group">
            <p className="text-4xl sm:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-500">
              {item.val}
            </p>
            <p className="text-[10px] font-bold text-cyan-blue uppercase tracking-[0.2em] mb-1">
              {item.label}
            </p>
            <p className="text-[9px] text-gray-500 uppercase font-medium">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Stats;