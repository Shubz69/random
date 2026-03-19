import AuraBackground from "@/components/AuraBackground";
import AuraDashboard from "@/components/AuraDashboard";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#02050d] text-white">
      <AuraBackground />

      <section className="relative z-10 mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-14 pt-8 pb-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1.15fr]">
          <div>
            <h1 className="max-w-[720px] text-[56px] font-bold leading-[0.96] tracking-[-0.04em] sm:text-[72px] xl:text-[86px]">
              TRADE SMARTER
              <br />
              WITH <span className="text-[#e0ac69]">AURA TERMINAL</span>
            </h1>

            <p className="mt-8 max-w-[760px] text-[24px] uppercase leading-[1.45] text-white/90 sm:text-[30px]">
              AI-powered trading tools for precision,
              <br />
              <span className="text-[#e0ac69]">discipline and performance</span>
            </p>
          </div>

          <AuraDashboard />
        </div>
      </section>
    </main>
  );
}
