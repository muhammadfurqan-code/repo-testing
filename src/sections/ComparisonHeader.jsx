function ComparisonHeader() {
  return (
    <header className="bg-[#0F2340] font-['Inter'] py-[32px] border-b border-[#D0D9E8]/10">
      <div className="max-w-[1200px] mx-auto px-[24px] text-center">
        <div className="flex items-center justify-center gap-[12px] mb-[12px]">
          <span className="inline-block w-[32px] h-[2px] bg-[#C95C0A] rounded-full"></span>
          <span className="text-[#C95C0A] text-[11px] font-['Barlow_Condensed'] font-[700] tracking-[0.12em] uppercase">
            Side-by-Side Comparison
          </span>
          <span className="inline-block w-[32px] h-[2px] bg-[#C95C0A] rounded-full"></span>
        </div>
        <h1 className="text-[#FFFFFF] text-[28px] md:text-[36px] font-['Barlow_Condensed'] font-[700] tracking-[0.02em] uppercase">
          Old Site vs. New Site
        </h1>
        <p className="text-[#FFFFFF]/65 text-[14px] mt-[8px]">
          Hover either side below to see which is which.
        </p>
      </div>
    </header>
  );
}

export default ComparisonHeader;
