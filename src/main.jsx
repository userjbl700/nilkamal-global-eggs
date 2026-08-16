import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight, Check, ChevronDown, ChevronRight, Globe2, Menu, MessageCircle,
  ShieldCheck, Truck, X, Mail, Phone, MapPin, Send, Egg, Factory, Leaf,
  PackageCheck, Users, Award, HeartHandshake, CircleCheckBig
} from "lucide-react";
import "./styles.css";

const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`;

const WHATSAPP = "919561789987";
const EMAIL = "nilkamalglobalegg@gmail.com";

const navItems = [
  { label: "Home", route: "/" },
  { label: "About", route: "/about" },
  { label: "Contact", route: "/contact" },
  { label: "Certificates", route: "/certificates" },
  { label: "For Farmers", route: "/farmers" },
  { label: "Services", route: "/services" },
];

const services = [
  {
    icon: Globe2,
    title: "Premier Global Poultry Exporter",
    text: "Connecting international markets with high-grade, farm-fresh eggs through stringent quality assurance, end-to-end cold-chain logistics, and dependable global delivery custom-tailored to your supply chain requirements."
  },
  {
    icon: Users,
    title: "Expert-Led Operations",
    text: "Driven by a veteran team of international trade and cold-chain logistics specialists who guarantee hassle-free customs clearance, full biosecurity compliance, and precise, on-time global fulfillment."
  },
  {
    icon: ShieldCheck,
    title: "Advanced Biosecurity Protocols",
    text: "Enforcing uncompromising sanitation frameworks, strict farm quarantine controls, and state-of-the-art disease prevention systems across all facilities to ensure safe and fully compliant global egg shipments."
  },
  {
    icon: Factory,
    title: "Stringent & Traceable Sourcing",
    text: "Partnering strictly with verified poultry units that enforce rigorous animal welfare standards, custom-blended nutritional feeds, and farm-to-carton egg traceability."
  },
  {
    icon: CircleCheckBig,
    title: "Multi-Tiered Quality Assurance",
    text: "Executing rigorous multi-point inspections from farm collection to international ports—leveraging optical grading, acoustic crack detection, and digital tracking to guarantee premium-grade eggs in every shipment."
  }
];

const nutrition = [
  ["Complete Protein Source", "Packed with bioavailable proteins containing all nine essential amino acids necessary for muscle repair and body maintenance."],
  ["Essential Vitamins & Minerals", "Rich in vital micronutrients including Vitamin A, B12, D, E, Selenium, and Zinc."],
  ["Dietary Iron", "Contains easily absorbable heme iron to support healthy blood circulation and energy levels."],
  ["Healthy Lipid Profile", "Provides beneficial fatty acids that aid nutrient absorption and metabolic health."],
  ["Functional Nutrients", "Naturally loaded with Choline for cognitive support and Lutein for eye health."]
];

const applications = [
  ["homepage8th.avif", "Retail & Supermarkets", "Uniformly graded, attractive packaging ideal for consumer shelves."],
  ["homepage9th.avif", "Food Service & Hospitality", "Reliable consistency in size, shell strength, and interior quality for high-volume culinary preparation."],
  ["homepage10th.jpeg", "Commercial Bakeries & Food Processing", "Firm whites and high-standing yolks that deliver superior aeration, emulsification, and binding performance."],
  ["homepage11th.jpg", "Institutional & Catering Supplies", "Long shelf life and low breakage rates designed to withstand extended distribution networks."]
];

function useHashRoute() {
  const getRoute = () => {
    const raw = window.location.hash.replace(/^#/, "") || "/";
    return raw.split("?")[0] || "/";
  };
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const onHash = () => setRoute(getRoute());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return route;
}

function go(route) {
  window.location.hash = route;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function WhatsAppButton({ compact = false }) {
  return (
    <a
      href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hello Nilkamal Global Eggs, I would like to discuss an egg export requirement.")}`}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#b6e43b] px-5 py-3 font-bold text-[#102018] shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl ${compact ? "text-sm" : ""}`}
    >
      <MessageCircle size={18} />
      Get in Touch
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [markets, setMarkets] = useState(false);

  const navigate = (route) => {
    setOpen(false);
    setMarkets(false);
    go(route);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#071811]/90 text-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-2 py-3 lg:px-6">
        <button onClick={() => navigate("/")} className="shrink-0" aria-label="Nilkamal Global Eggs home">
          <img src={asset("nilkamalglobalegglogo.png")} alt="Nilkamal Global Eggs" className="h-30 w-auto object-contain" />
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.slice(0, 3).map((item) => (
            <button key={item.label} onClick={() => navigate(item.route)} className="nav-link">{item.label}</button>
          ))}
          <div className="relative">
            <button onClick={() => setMarkets(!markets)} className="nav-link inline-flex items-center gap-1">
              Markets <ChevronDown size={15} className={markets ? "rotate-180 transition" : "transition"} />
            </button>
            {markets && (
              <div className="absolute left-0 top-full mt-3 w-52 rounded-2xl border border-white/10 bg-[#0d251b] p-2 shadow-2xl">
                <button onClick={() => navigate("/india")} className="dropdown-link">India <ChevronRight size={15}/></button>
                <button onClick={() => navigate("/world")} className="dropdown-link">To the World <ChevronRight size={15}/></button>
              </div>
            )}
          </div>
          {navItems.slice(3).map((item) => (
            <button key={item.label} onClick={() => navigate(item.route)} className="nav-link">{item.label}</button>
          ))}
        </nav>

        <div className="hidden lg:block">
          <WhatsAppButton compact />
        </div>

        <button onClick={() => setOpen(!open)} className="rounded-xl border border-white/10 p-2 lg:hidden" aria-label="Open menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#071811] px-5 pb-5 lg:hidden">
          <div className="flex flex-col gap-1 pt-3">
            {navItems.slice(0, 3).map((item) => (
              <button key={item.label} onClick={() => navigate(item.route)} className="mobile-link">{item.label}</button>
            ))}
            <button onClick={() => navigate("/india")} className="mobile-link text-left">Markets — India</button>
            <button onClick={() => navigate("/world")} className="mobile-link text-left">Markets — To the World</button>
            {navItems.slice(3).map((item) => (
              <button key={item.label} onClick={() => navigate(item.route)} className="mobile-link text-left">{item.label}</button>
            ))}
            <div className="pt-3"><WhatsAppButton /></div>
          </div>
        </div>
      )}
    </header>
  );
}

function SectionHeading({ eyebrow, title, text, light = false }) {
  return (
    <div className={`mx-auto max-w-3xl text-center ${light ? "text-white" : ""}`}>
      {eyebrow && <div className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-lime-500">{eyebrow}</div>}
      <h2 className="font-display text-4xl font-black tracking-tight sm:text-5xl">{title}</h2>
      {text && <p className={`mt-5 text-lg leading-8 ${light ? "text-white/75" : "text-slate-600"}`}>{text}</p>}
    </div>
  );
}

function Hero() {
  const trust = [
    ["Best Price Guarantee", "Commercially focused export pricing"],
    ["Trusted Across the Globe", "Reliable international supply"],
    ["24/7 Customer Support", "Responsive buyer communication"]
  ];
  return (
    <section className="relative min-h-[820px] overflow-hidden bg-[#081a12] pt-20">
      <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url("${asset("homepage1st.jpg")}")`}} />
      <div className="absolute inset-0 bg-gradient-to-r from-[#06150e]/95 via-[#06150e]/65 to-[#06150e]/20" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#06150e] to-transparent" />
      <div className="relative mx-auto flex min-h-[740px] max-w-7xl items-center px-5 py-24 lg:px-8">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
            <Globe2 size={16} className="text-lime-400" /> Premium Indian Egg Exporter
          </div>
          <h1 className="font-display text-5xl font-black leading-[0.98] tracking-tight text-white sm:text-7xl lg:text-8xl">
            Egg-sporting Premium Nutrition, <span className="text-lime-400">Boundless Reach!</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
            Export-ready White and Brown Table Eggs backed by quality control, dependable sourcing and professional international logistics.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <WhatsAppButton />
            <button onClick={() => document.getElementById("welcome")?.scrollIntoView({behavior:"smooth"})} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 font-bold text-white backdrop-blur hover:bg-white/15">
              Explore Company <ArrowRight size={18}/>
            </button>
          </div>
        </div>
      </div>
      <div className="relative z-10 mx-auto grid max-w-7xl gap-3 px-5 pb-10 sm:grid-cols-3 lg:px-8">
        {trust.map(([title, text], i) => (
          <div key={title} className="glass-card p-5">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-lime-400 text-[#102018]">
              {i === 0 ? <Award size={20}/> : i === 1 ? <Globe2 size={20}/> : <MessageCircle size={20}/>}
            </div>
            <h3 className="font-bold text-white">{title}</h3>
            <p className="mt-1 text-sm text-white/60">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Welcome() {
  return (
    <section id="welcome" className="section-pad bg-[#eef2e9]">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <div>
          <div className="eyebrow">Our Export Philosophy</div>
          <h2 className="font-display text-4xl font-black tracking-tight text-[#0c2117] sm:text-6xl">Welcome to Nilkamal Global Eggs</h2>
          <div className="mt-7 space-y-5 text-lg leading-8 text-slate-600">
            <p>At Nilkamal Global Eggs, we believe strong international partnerships are built on trust, consistency, and absolute operational clarity. Every global buyer deserves a supply partner who guarantees flock-to-carton integrity, maintains open communication, and executes every shipment with total precision.</p>
            <p>We are committed to delivering a seamless end-to-end export process—spanning rigorous egg quality grading, export-grade protective packaging, optimized international cold-chain logistics, and dedicated client service. We do more than just deliver orders; we serve as a dependable, seamless extension of your global poultry supply chain.</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Quality grading", "Protective packaging", "Cold-chain logistics", "Buyer support"].map(x => <span key={x} className="pill"><Check size={15}/>{x}</span>)}
          </div>
        </div>
        <div className="image-frame">
          <img src={asset("homepage2nd.webp")} alt="Nilkamal Global Eggs operations" />
        </div>
      </div>
    </section>
  );
}

function Difference() {
  return (
    <section className="section-pad bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="image-frame order-2 lg:order-1">
          <img src={asset("homepage3rd.jpg")} alt="Quality-focused egg export operations" />
        </div>
        <div className="order-1 lg:order-2">
          <div className="eyebrow">Why Us</div>
          <h2 className="font-display text-4xl font-black tracking-tight text-[#0c2117] sm:text-5xl">What Sets Nilkamal Global Eggs Apart?</h2>
          <div className="mt-8 space-y-6">
            {[
              ["Customer-Centric Support", "We listen actively, respond promptly, and adapt our egg supply, grading, and packaging formats to match your specific market demands."],
              ["Streamlined Export Logistics", "From cold-chain management to international customs documentation, our well-structured export operations ensure a smooth, worry-free delivery to your port."],
              ["Uninterrupted Supply Chain", "With our integrated poultry infrastructure, we guarantee a continuous, predictable egg supply that keeps your business and distribution channels running without delays."],
              ["International Quality Benchmarks", "Every shipment undergoes strict quality checks—ensuring superior shell strength, high Haugh units, and compliance with global food safety and biosecurity standards."],
              ["Dedicated Global Partnerships", "We prioritize sustainable, long-term trade relationships built on transparent communication, mutual trust, and shared commercial growth."]
            ].map(([title,text]) => (
              <div key={title} className="flex gap-4">
                <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e8f5ca] text-[#17321f]"><Check size={18}/></div>
                <div><h3 className="font-bold text-[#0c2117]">{title}</h3><p className="mt-1 leading-7 text-slate-600">{text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Distinction() {
  return (
    <section className="relative min-h-[650px] overflow-hidden bg-black">
      <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage:`url("${asset("homepage4rth.jpg")}")`}} />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/65 to-[#06150e]/95" />
      <div className="relative mx-auto flex min-h-[650px] max-w-5xl items-center px-5 py-24 text-center text-white">
        <div>
          <div className="eyebrow">Driven by Distinction</div>
          <h2 className="font-display text-5xl font-black sm:text-7xl">Driven by Distinction</h2>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-white/80">At Nilkamal Global Eggs, we look far beyond one-time trades. We build lasting international partnerships by earning your confidence through every shipment, every transparent interaction, and every promise we keep.</p>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/80">As your trusted global poultry partner, our objective is straight to the point—empowering your market growth while we handle the seamless delivery of farm-fresh, high-grade eggs that consistently surpass international standards.</p>
          <div className="mx-auto mt-9 inline-block rounded-2xl border border-lime-300/30 bg-lime-300/10 px-7 py-5 text-xl font-black text-lime-300 sm:text-2xl">“Your Growth. Our Guarantee. Every Batch, Every Destination.”</div>
        </div>
      </div>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section className="section-pad bg-[#f5f7f2]" id="services">
      <SectionHeading eyebrow="Our Services" title="What Makes You Choose Nilkamal Global Eggs?" text="A practical, export-focused operating model built around quality, traceability, biosecurity and dependable delivery." />
      <div className="mx-auto mt-14 grid max-w-7xl gap-5 px-5 sm:grid-cols-2 lg:grid-cols-5 lg:px-8">
        {services.map(({icon:Icon,title,text},i) => (
          <article key={title} className="card group">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8f5ca] text-[#15321f] transition group-hover:bg-[#15321f] group-hover:text-lime-300"><Icon size={23}/></div>
            <div className="mb-3 text-xs font-black text-lime-700">0{i+1}</div>
            <h3 className="text-xl font-black text-[#0c2117]">{title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Eggs() {
  const eggCards = [
    ["homepage6th.png","High-Grade White Eggs","Our White Eggs feature smooth, immaculate shells, exceptional structural strength, and high Haugh unit scores. Carefully sorted through automated optical grading systems, every batch delivers high nutritional value, superior interior quality, and extended shelf life—from farm collection straight to your destination port.","Clean aesthetic, uniform weight grading, high firm-white ratio, robust shell durability."],
    ["homepage7th.png","Farm-Fresh Brown Eggs","Our Brown Eggs are prized for their thick shell integrity, vibrant natural color, and superior yolk stability. Subjected to multi-stage quality checks and acoustic crack detection, they offer a rich presentation alongside consistent freshness—meeting the high standards expected by premium retailers, bakeries, and food service providers globally.","Natural deep shell color, high fracture resistance, rich yolk density, long transit stability."]
  ];
  return (
    <section className="section-pad bg-white">
      <SectionHeading eyebrow="Export-Ready Table Eggs" title="Premium White & Brown Table Eggs" text="At Nilkamal Global Eggs, we supply top-tier White and Brown Table Eggs, meticulously graded and handled under cold-chain standards to guarantee maximum freshness, structural integrity, and uniform size. Both options reflect our dedication to stable, export-ready poultry solutions tailored for international commercial and retail markets." />
      <div className="mx-auto mt-14 grid max-w-6xl gap-8 px-5 lg:grid-cols-2 lg:px-8">
        {eggCards.map(([image,title,text,attrs]) => (
          <article key={title} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-[#f7f9f5] shadow-sm">
            <img src={asset(image)} alt={title} className="h-72 w-full object-cover" />
            <div className="p-8">
              <h3 className="font-display text-3xl font-black text-[#0c2117]">{title}</h3>
              <p className="mt-4 leading-8 text-slate-600">{text}</p>
              <p className="mt-5 rounded-2xl bg-white p-4 text-sm font-semibold text-[#17321f]"><span className="text-lime-700">Key Attributes:</span> {attrs}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Nutrition() {
  return (
    <section className="section-pad bg-[#0b1f17] text-white">
      <SectionHeading light eyebrow="Nutrition" title="Exceptional Nutritional Profile" text="Eggs combine complete protein with essential micronutrients in a practical, versatile food format." />
      <div className="mx-auto mt-14 grid max-w-7xl gap-5 px-5 sm:grid-cols-2 lg:grid-cols-5 lg:px-8">
        {nutrition.map(([title,text],i) => (
          <article key={title} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl bg-lime-300 text-[#0b1f17] font-black">{i+1}</div>
            <h3 className="text-lg font-black">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-white/65">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Applications() {
  return (
    <section id="markets" className="section-pad bg-[#eef2e9]">
      <SectionHeading eyebrow="Market Applications" title="Versatile Applications Across Global Markets" text="With an uncompromising focus on farm freshness, biosecurity, and cold-chain integrity, Nilkamal Global Eggs delivers table eggs optimized for diverse international commercial uses." />
      <div className="mx-auto mt-14 grid max-w-7xl gap-6 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {applications.map(([image,title,text]) => (
          <article key={title} className="image-card">
            <img src={asset(image)} alt={title} />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/75 to-transparent p-6 pt-20 text-white">
              <h3 className="text-xl font-black">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/80">{text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactForm() {
  return (
    <form
      action="https://formsubmit.co/nilkamalglobalegg@gmail.com"
      method="POST"
      className="space-y-5"
    >
      <input type="hidden" name="_subject" value="New Egg Export Inquiry — Nilkamal Global Eggs" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value={window.location.href.split("#")[0] + "#/contact-success"} />
      <div>
        <label>Product / Service Looking For</label>
        <select name="Product / Service" required>
          <option value="">Select product</option>
          <option>White Egg</option>
          <option>Brown Egg</option>
        </select>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div><label>Your Name</label><input name="Name" required placeholder="Full name" /></div>
        <div><label>Email Address</label><input type="email" name="Email" required placeholder="name@company.com" /></div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div><label>Phone Number</label><input name="Phone" required placeholder="+Country code" /></div>
        <div><label>Subject</label><input name="Subject" required placeholder="Export enquiry" /></div>
      </div>
      <div><label>Leave a Message for Us</label><textarea name="Message" required rows="6" placeholder="Tell us your quantity, grade, destination port, packaging and delivery requirements." /></div>
      <button className="inline-flex items-center gap-2 rounded-full bg-[#10251a] px-7 py-4 font-black text-white transition hover:bg-[#173a28]" type="submit">
        Send Message <Send size={17}/>
      </button>
      <p className="text-xs leading-5 text-slate-500">This static website uses FormSubmit to forward form submissions to the company email. The first submission may require one-time activation of the FormSubmit email address.</p>
    </form>
  );
}

function ContactSection({ fullPage = false }) {
  return (
    <section id="contact" className={`section-pad ${fullPage ? "bg-white pt-36" : "bg-[#f5f7f2]"}`}>
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div>
          <div className="eyebrow">Export Enquiries</div>
          <h2 className="font-display text-4xl font-black tracking-tight text-[#0c2117] sm:text-6xl">Let’s Discuss Your Needs</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">Looking for a reliable egg supply partner? Contact us today to learn more about our products, packaging options, and export terms.</p>
          <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8"><ContactForm /></div>
        </div>
        <ContactInfo />
      </div>
    </section>
  );
}

function ContactInfo() {
  return (
    <aside className="rounded-[2rem] bg-[#0b1f17] p-8 text-white sm:p-10">
      <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-300 text-[#0b1f17]"><Globe2/></div>
      <h3 className="font-display text-3xl font-black">Contact Information</h3>
      <div className="mt-9 space-y-7">
        <div className="flex gap-4"><Users className="mt-1 text-lime-300" size={20}/><div><div className="text-xs font-bold uppercase tracking-wider text-white/45">Contact Person</div><div className="mt-1 font-semibold">Dr. Mahesh Eknath Mungase</div></div></div>
        <div className="flex gap-4"><MapPin className="mt-1 text-lime-300" size={20}/><div><div className="text-xs font-bold uppercase tracking-wider text-white/45">Address</div><div className="mt-1 leading-7">Nilkamal Global Eggs, Wavi Road, Chor Kauthe, Maharashtra 422611</div></div></div>
        <div className="flex gap-4"><Phone className="mt-1 text-lime-300" size={20}/><div><div className="text-xs font-bold uppercase tracking-wider text-white/45">Phone</div><a className="mt-1 block font-semibold hover:text-lime-300" href={`tel:+${WHATSAPP}`}>+91 95617 89987</a></div></div>
        <div className="flex gap-4"><Mail className="mt-1 text-lime-300" size={20}/><div><div className="text-xs font-bold uppercase tracking-wider text-white/45">E-mail</div><a className="mt-1 block break-all font-semibold hover:text-lime-300" href={`mailto:${EMAIL}`}>{EMAIL}</a></div></div>
      </div>
      <div className="mt-10"><WhatsAppButton /></div>
    </aside>
  );
}

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Welcome />
        <Difference />
        <Distinction />
        <ServicesPreview />
        <Eggs />
        <Nutrition />
        <Applications />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <PageHero title="About Nilkamal Global Eggs" eyebrow="Our Story" image="aboutpage1st.jpg" />
        <section className="section-pad bg-white">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
            <div className="prose-company">
              <p>Established in 2001, Nilkamal Global Eggs is a Central India-based enterprise specializing in integrated poultry farming, breeding, and global egg export. Driven by over two decades of dedicated industry leadership, our organization has evolved from a pioneer in regional poultry management into a global supplier of premium poultry products.</p>
              <p>We are dedicated to the poultry sector—combining modern biosecurity standards, specialized avian nutrition, and state-of-the-art infrastructure to deliver consistent quality to international markets.</p>
              <h3>Our Core Business Divisions</h3>
              <p>Our integrated infrastructure covers every stage of the poultry supply chain:</p>
              <ul>
                <li><b>Poultry Breeding & Hatcheries:</b> Production and distribution of high-yield day-old chicks across commercial layer, broiler, and specialty breeds.</li>
                <li><b>Commercial Egg Production:</b> Specialty, organic, and table egg production ranging from standard high-grade eggs to native breeds like Desi Country Chicken and Kadaknath.</li>
                <li><b>Custom Poultry Feed & Nutrition:</b> Balanced feed solutions tailored for flock vitality, eggshell strength, and rich yolk color.</li>
                <li><b>Specialty Poultry Farming:</b> Dedicated rearing facilities for native breeds and processed poultry.</li>
                <li><b>Poultry Healthcare & Welfare:</b> Science-backed flock management, biosecurity protocols, and targeted nutrition solutions.</li>
              </ul>
              <h3>Infrastructure & Export Standards</h3>
              <p>Our operating flow is designed around controlled handling: <b>Breeding & Hatchery → Specialized Feed Milling → Automated Egg Collection → Contamination-Controlled Packing → Cold-Chain Export.</b></p>
              <h3>Key Export Highlights</h3>
              <ul>
                <li><b>International Certifications:</b> Organic egg and feed products can be supplied to applicable Indian, US and European standards where certified and contractually specified.</li>
                <li><b>Contamination Prevention:</b> Purpose-built, segregated handling and packing processes help reduce cross-contamination risk.</li>
                <li><b>Global Distribution:</b> We target international markets including North America, Europe, Mediterranean, CIS, Middle East, and Far East regions.</li>
              </ul>
              <h3>Product Portfolio</h3>
              <p><b>Egg Varieties:</b> Certified Organic, Table Eggs, Free-Range, Omega-3 Enriched, Kadaknath, and Specialty Native Eggs.</p>
              <p><b>Poultry Breeds:</b> Commercial Layers, Broilers, Day-Old Chicks, and Live / Processed Desi and Kadaknath.</p>
              <p><b>Feed Solutions:</b> Certified Organic Poultry Feed, Layer Feeds, Starter and Grower Formulations.</p>
              <h3>Why Partner With Nilkamal Global Eggs?</h3>
              <ul>
                <li><b>Established Legacy:</b> Built on 25+ years of focused poultry expertise since 2001.</li>
                <li><b>100% Poultry Focused:</b> Every resource, facility, and research initiative is dedicated to poultry excellence.</li>
                <li><b>Uncompromising Hygiene:</b> Quality checks across the supply chain from farm collection to export carton.</li>
                <li><b>Farmer-Centric Sourcing:</b> Direct collaboration with farming communities for responsible sourcing and sustainable flock management.</li>
              </ul>
            </div>
            <div className="lg:sticky lg:top-28 lg:self-start"><div className="image-frame"><img src={asset("aboutpage1st.jpg")} alt="Nilkamal Global Eggs facility" /></div></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function PageHero({ title, eyebrow, image }) {
  return (
    <section className="relative flex min-h-[430px] items-end overflow-hidden bg-[#0b1f17]">
      {image && <div className="absolute inset-0 bg-cover bg-center opacity-45" style={{backgroundImage:`url("${asset(image)}")`}} />}
      <div className="absolute inset-0 bg-gradient-to-t from-[#071811] via-[#071811]/65 to-transparent" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 lg:px-8">
        <div className="eyebrow">{eyebrow}</div>
        <h1 className="font-display text-5xl font-black text-white sm:text-7xl">{title}</h1>
      </div>
    </section>
  );
}

function ContactPage() {
  return <><Header /><main><PageHero title="Contact Our Export Division" eyebrow="Talk to Our Team" image="homepage4rth.png" /><ContactSection fullPage /></main><Footer /></>;
}

function IndiaPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <PageHero title="Smart Protein — India" eyebrow="Domestic Market" image="homepage6th.png" />
        <section className="section-pad bg-white">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <SectionHeading title="Why Smart Protein?" text="Smart Protein is the consumer-ready retail egg brand from Nilkamal Global Eggs, engineered to deliver an unmatched combination of natural nutrition, farm freshness, hygiene, and everyday convenience." />
            <div className="mx-auto mt-10 max-w-4xl space-y-5 text-lg leading-8 text-slate-600">
              <p>The name embodies our core conviction: table eggs represent nature’s efficient source of bioavailable protein. Backed by Nilkamal’s established poultry heritage since 2001, every pack represents decades of expertise in farm management, cold-chain handling, and stringent biosecurity.</p>
            </div>
            <div className="mt-16 grid gap-4 sm:grid-cols-2">
              {[
                ["Naturally Dense Protein","Farm-fresh eggs delivering a complete amino acid profile essential for active, healthy lifestyles."],
                ["Cold-Chain Integrity","Strict temperature controls from collection to shelf to preserve freshness and shelf life."],
                ["Uniform Quality","Computer-graded for precise weight, shell finish, and consistently high interior quality."],
                ["Advanced Hygiene","Sanitized, touchless processing using automated washing, drying, and optical inspection systems."],
                ["Fully Traceable Sourcing","Produced through certified and audited poultry units following defined biosecurity standards."],
                ["Protective Retail Packaging","Eco-conscious, shock-absorbent cartons designed to protect shell integrity."],
                ["Versatile Pack Sizes","Custom retail configurations such as 6, 10, 12 and 30 egg packs, subject to market requirements."],
                ["Farm-to-Table Excellence","Efficient movement from poultry hubs to retail shelves and home kitchens."]
              ].map(([t,d]) => <div className="card" key={t}><h3 className="text-lg font-black text-[#0c2117]">{t}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{d}</p></div>)}
            </div>
            <div className="mt-16">
              <h3 className="font-display text-4xl font-black text-[#0c2117]">Packaging</h3>
              <p className="mt-3 text-lg text-slate-600">We provide custom packaging for consumer and trade requirements.</p>
              <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
                {["6 Eggs","12 Eggs","18 Eggs","30 Eggs"].map(x => <div key={x} className="group rounded-3xl border border-slate-200 bg-[#f5f7f2] p-8 text-center transition hover:-translate-y-2 hover:border-lime-400 hover:shadow-xl"><Egg className="mx-auto mb-5 text-[#17321f] transition group-hover:text-lime-600"/><div className="font-black">{x}</div></div>)}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function WorldPage() {
  return (
    <>
      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="relative min-h-[70vh] overflow-hidden bg-slate-950">
          <div className="absolute inset-0">
            <img
              src={asset("markets1st.jpg")}
              alt="Nilkamal Global Eggs international markets"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/30" />
          </div>

          <div className="relative mx-auto flex min-h-[70vh] w-full max-w-7xl items-center px-5 py-24 lg:px-8">
            <div className="max-w-4xl">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-lime-400">
                Nilkamal Global Eggs
              </p>

              <h1 className="font-display text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
                Global Footprint &
                <span className="block text-lime-400">
                  International Reach
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-base leading-8 text-white/80 sm:text-lg">
                Nilkamal Global Eggs has built a resilient international supply
                network, delivering farm-fresh, biosecure table eggs to
                commercial importers, retail chains, and food service partners
                across the globe.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#global-reach"
                  className="rounded-full bg-lime-400 px-7 py-3.5 text-sm font-bold text-[#102018] transition hover:bg-lime-300"
                >
                  Explore Our Global Reach
                </a>

                <a
                  href="https://wa.me/919561789987?text=Hello%20Nilkamal%20Global%20Eggs%2C%20I%20am%20interested%20in%20your%20international%20export%20solutions."
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  Discuss Your Requirements
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Global Reach */}
        <section
          id="global-reach"
          className="bg-white px-5 py-20 sm:px-8 lg:px-12"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-lime-700">
                  International Supply Network
                </span>

                <h2 className="mt-4 font-display text-4xl font-black leading-tight text-[#0c2117] sm:text-5xl">
                  Global Footprint & International Reach
                </h2>

                <p className="mt-6 text-base leading-8 text-slate-600">
                  Nilkamal Global Eggs has built a resilient international
                  supply network, delivering farm-fresh, biosecure table eggs
                  to commercial importers, retail chains, and food service
                  partners across the globe.
                </p>

                <p className="mt-5 text-base leading-8 text-slate-600">
                  Powered by specialized reefer shipping and streamlined
                  phytosanitary export protocols, we support consistent supply
                  continuity across key international corridors including the
                  Middle East, GCC, Southeast Asia, Africa, and CIS regions.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "Middle East & GCC",
                    "Southeast Asia",
                    "Africa",
                    "CIS Regions",
                  ].map((market) => (
                    <div
                      key={market}
                      className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-lime-300 hover:shadow-sm"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lime-100 font-bold text-lime-700">
                        ✓
                      </span>

                      <span className="font-semibold text-slate-800">
                        {market}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem] bg-lime-100/60 blur-2xl" />

                <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
                  <img
                    src={asset("markets2nd.jpg")}
                    alt="Nilkamal Global Eggs worldwide export"
                    className="aspect-[4/5] w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nilkamal Identity */}
        <section className="bg-[#0b1f17] px-5 py-20 text-white sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-lime-400">
                Our Competitive Advantage
              </span>

              <h2 className="mt-4 font-display text-4xl font-black sm:text-5xl">
                The Nilkamal Identity:
                <span className="block text-lime-400">
                  Direct Sourcing & End-to-End Control
                </span>
              </h2>
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Direct Farm Sourcing",
                  text:
                    "We supply high-grade White and Brown Table Eggs directly from primary farm operations to global markets.",
                },
                {
                  number: "02",
                  title: "Integrated Value Chain",
                  text:
                    "From hen nutrition and biosecure breeding to automated grading and cold-chain container loading, we control the critical stages of the supply chain.",
                },
                {
                  number: "03",
                  title: "Port-Ready Supply",
                  text:
                    "Our integrated structure supports shell freshness, extended shelf life, and competitive, market-driven pricing straight to your destination port.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="group rounded-3xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-lime-400/40"
                >
                  <div className="text-4xl font-black text-lime-400/40 transition group-hover:text-lime-400">
                    {item.number}
                  </div>

                  <h3 className="mt-5 text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-white/65">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* White Label / OEM */}
        <section className="bg-[#f5f7f2] px-5 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-4xl text-center">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-lime-700">
                OEM & Private Label
              </span>

              <h2 className="mt-4 font-display text-4xl font-black text-[#0c2117] sm:text-5xl">
                Complete White Labeling & OEM Export Solutions
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600">
                Beyond our core Nilkamal and Smart Protein brands, we serve as
                a reliable OEM partner for international importers, supermarket
                chains, and domestic trade houses seeking to export under
                their own private brands.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-600">
                We provide end-to-end contract packaging and custom
                white-labeling solutions tailored to your market's exact
                regulatory and aesthetic requirements.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Custom Retail Cartons",
                  text:
                    "Private-branded 6, 10, 12, 15, and 30-egg pulp or plastic consumer cartons with custom artwork, barcodes, and local language labeling.",
                },
                {
                  title: "Export Master Shipping Boxes",
                  text:
                    "Heavy-duty, shock-resistant 360-egg bulk master cartons designed for long-transit maritime stability.",
                },
                {
                  title: "Regulatory & Stamp Customization",
                  text:
                    "Brand-specific shell stamping using food-grade inks specifying origin, batch codes, packing dates, and expiry dates.",
                },
                {
                  title: "Turnkey Brand Execution",
                  text:
                    "From initial artwork approval and packaging compliance checks to final port dispatch, we handle full operational execution.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-100 text-xl text-lime-700">
                    ◆
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Export CTA */}
        <section className="bg-lime-400 px-5 py-14 sm:px-8 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-7 text-center lg:flex-row lg:text-left">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#102018]/60">
                Your Market. Our Supply.
              </p>

              <h2 className="mt-2 font-display text-4xl font-black text-[#102018]">
                Built for Global Trade.
              </h2>
            </div>

            <a
              id="world-contact"
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                "Hello Nilkamal Global Eggs, I am interested in your international export solutions."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#102018] px-8 py-4 text-sm font-bold text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#173a28]"
            >
              Start an Export Discussion
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function CertificatesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <PageHero title="Certified Quality & Global Compliance" eyebrow="Quality Assurance" image="certificate1st.jpg" />
        <section className="section-pad bg-white">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <p className="mx-auto max-w-4xl text-center text-lg leading-8 text-slate-600">At Nilkamal Global Eggs, our export operations are structured around international food safety regulations, veterinary health protocols, and biosecurity requirements. We use documented quality systems and applicable certifications to support compliant shipments for destination markets.</p>
            <div className="mt-14 grid gap-7 md:grid-cols-3">
              {["certificate1st.jpg","certificate2nd.png","certificate3rd.jpg"].map((x,i) => <div key={x} className="flex min-h-64 items-center justify-center rounded-[2rem] border border-slate-200 bg-[#f8faf6] p-8 shadow-sm"><img src={asset(x)} alt={`Nilkamal certificate ${i+1}`} className="max-h-48 w-full object-contain" /></div>)}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function FarmersPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <PageHero title="Sell Directly to Nilkamal Global Eggs" eyebrow="For Farmers" image="farmers1st.jpg" />
        <section className="section-pad bg-white">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading text="We help poultry farmers by buying eggs directly from their farms. We believe in fair, honest partnerships with transparent pricing, accurate weight checks, and clear quality testing. By cutting out middlemen, we make sure you get the full value for your hard work." title="A Direct Farm Partnership" />
            <div className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[["Fair Prices","Honest rates with no hidden cuts or middleman fees."],["Accurate Testing","Modern equipment checks egg weight and quality fairly."],["Regular Orders","We buy in large volumes all year long to support your farm."],["On-Time Payments","Fast and reliable payments so your farm runs smoothly."]].map(([t,d]) => <div className="card" key={t}><Check className="text-lime-700"/><h3 className="mt-5 font-black">{t}</h3><p className="mt-2 text-sm leading-7 text-slate-600">{d}</p></div>)}
            </div>
            <div className="mt-14 grid items-center gap-6 md:grid-cols-[1.25fr_0.75fr]">
              <img src={asset("farmers1st.jpg")} alt="Poultry farmers" className="h-[420px] w-full rounded-[2rem] object-cover" />
              <img src={asset("farmers2nd.jpeg")} alt="Egg collection at farm" className="h-[420px] w-full rounded-[2rem] object-cover" />
            </div>
            <div className="mx-auto mt-14 max-w-4xl rounded-[2rem] bg-[#0b1f17] p-8 text-white sm:p-10">
              <h3 className="font-display text-4xl font-black">Our Promise to Farmers</h3>
              <div className="mt-7 space-y-5">
                {["Direct Partner Buying: Zero middleman cuts—you deal directly with us.","Fair & Honest Pricing: Transparent grading with competitive market rates.","Reliable Payments: On-time settlements and long-term business support."].map(x => <div key={x} className="flex gap-3"><Check className="shrink-0 text-lime-300"/><p className="leading-7 text-white/80">{x}</p></div>)}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <PageHero title="Complete Egg Export Solutions" eyebrow="Services" image="homepage3rd.png" />
        <section className="section-pad bg-white">
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <SectionHeading text="At Nilkamal Global Eggs, we offer end-to-end egg export services built for international buyers. From initial sorting to final destination delivery, we protect quality, speed, and safety every step of the way." title="Export Services Built Around Your Supply Chain" />
            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {[
                ["Premium Table Egg Export","We specialize in exporting high-quality White and Brown table eggs. Through automatic sorting, strict quality checks, and protective packing, we make sure every order meets global market expectations."],
                ["Custom White Labeling","Build your own retail brand while we manage the supply. We print and pack high-grade eggs under your brand name, handling sourcing, testing, and packaging so you can focus on growing your business."],
                ["Tailored Packaging Options","Different markets need different formats. We provide flexible packaging—including consumer pulp cartons, plastic trays, and heavy-duty export master cartons—to meet retail, wholesale, and shipping needs."],
                ["Dependable Export Logistics","Our experienced logistics team handles every detail—from cold-chain container loading to phytosanitary certificates and customs paperwork. We keep shipping simple, smooth, and on time."],
                ["Built for Long-Term Growth","We partner directly with overseas importers, distributors, and supermarket chains. By delivering consistent supply, open communication, and steady pricing, we help global partners expand with confidence."]
              ].map(([t,d],i) => <article key={t} className="card md:p-8"><div className="mb-6 text-sm font-black text-lime-700">0{i+1}</div><h3 className="font-display text-3xl font-black text-[#0c2117]">{t}</h3><p className="mt-4 leading-8 text-slate-600">{d}</p></article>)}
            </div>
            <div className="mt-12 rounded-[2rem] bg-[#e8f5ca] p-8 text-center sm:p-12"><p className="font-display text-3xl font-black text-[#10251a]">At Nilkamal Global Eggs, we do more than export eggs—we build reliable supply lines that move your business forward.</p></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

const privacyText = {
  title: "Privacy Policy",
  intro: "Nilkamal Global Eggs values your privacy and is committed to protecting your personal and business data. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit nilkamalglobaleggs.com or interact with our export services.",
  sections: [
    ["1. Information We Collect", ["Contact Information: Name, corporate email address, phone number, and messaging details.","Commercial & Business Data: Company name, registered address, target port of destination, and import licensing details.","Transaction & Order Data: Order volumes, product specifications, custom packaging choices, and billing details.","Technical Data: IP address, browser type, operating system, and site usage statistics collected automatically via analytics."]],
    ["2. How We Use Your Data", ["Responding to trade inquiries and delivering customized bulk quotes.","Processing, fulfilling, and dispatching export orders.","Managing cold-chain logistics, customs declarations, and shipping documentation.","Improving website performance, service quality, and buyer experience.","Communicating critical service updates, seasonal availability, or policy changes."]],
    ["3. Data Sharing & Disclosure", ["We do not sell, rent, or trade your personal or business data. Information may be shared on a need-to-know basis with logistics and freight partners, regulatory and legal authorities where required, and trusted technical service providers operating our digital platform."]],
    ["4. Data Security", ["We deploy appropriate technical and organizational security measures to protect your data against unauthorized access, loss, alteration, or disclosure. No internet transmission or electronic storage method can be guaranteed 100% secure."]],
    ["5. Cookies & Analytics", ["Our website may use cookies and similar technologies to analyze web traffic, remember preferences, and optimize navigation. You can modify or disable cookie settings through your browser."]],
    ["6. Your Data Rights", ["Depending on your jurisdiction, you may request access, correction, deletion, or opt-out from commercial communications, subject to legal and transactional record-keeping obligations."]],
    ["7. Third-Party Websites", ["Our website may contain links to external platforms. Nilkamal Global Eggs is not responsible for the privacy practices, content, or data policies of external sites."]],
    ["8. Policy Updates", ["We reserve the right to modify this Privacy Policy as export regulations and business practices evolve. Updates will be published on this page with a revised date."]]
  ]
};

const termsText = {
  title: "Terms & Conditions",
  intro: "Last Updated: August 2026. By accessing, browsing, or utilizing the website nilkamalglobaleggs.com (the “Site”) or submitting trade inquiries to Nilkamal Global Eggs (“Company,” “we,” “us,” or “our”), you (“User,” “Buyer,” or “Visitor”) agree to be bound by these Terms & Conditions.",
  sections: [
    ["1. General Agreement", ["These terms govern your use of our digital platform and preliminary communications, inquiries, or trade requests facilitated through the Site. If you do not agree with any part of these terms, you must refrain from using our website."]],
    ["2. Digital Platform & Usage License", ["Nilkamal Global Eggs grants a limited, non-exclusive, non-transferable, and revocable license to access and view Site content for legitimate commercial inquiries and evaluation of export services.","You agree not to reproduce, duplicate, copy, sell, or exploit Site content without authorization; modify or reverse-engineer the Site; use crawlers, bots or scrapers to extract data; or introduce malicious code that disrupts site security or hosting performance."]],
    ["3. Commercial Trade Terms & Off-Platform Contracts", ["Information, specifications, and pricing displayed on the Site or provided via initial inquiries are informational and do not constitute a legally binding offer to sell.","Definitive export transactions, volumes, cold-chain specifications, payment terms, delivery schedules, and other commercial conditions are governed by formal sales contracts, Proforma Invoices, Bills of Lading, and related documents executed between the Company and buyer.","Global poultry and export markets fluctuate. Product specifications, minimum order quantities and trade terms may change before formal contract confirmation."]],
    ["4. Intellectual Property Rights", ["All trademarks, logos, brand names, imagery, text, layouts, and trade dress associated with Nilkamal Global Eggs are the property of the Company and protected by applicable Indian and international intellectual property laws."]],
    ["5. Third-Party Links & Services", ["The Site may contain links to external websites, logistics tracking tools, or regulatory portals. Nilkamal Global Eggs does not control, audit, or endorse external platforms and assumes no liability for interactions conducted outside the Site."]],
    ["6. Disclaimer of Warranties", ["The Site and its contents are provided on an “As Is” and “As Available” basis. The Company makes no representations or warranties regarding uninterrupted operation, absolute accuracy of third-party information, or server communications. Official export quality certifications and product warranties are provided through formal shipping documentation accompanying confirmed orders."]],
    ["7. Limitation of Liability", ["To the fullest extent permitted by law, Nilkamal Global Eggs and its directors, officers, employees, and affiliates shall not be liable for direct, indirect, incidental, consequential, or punitive damages arising from Site access, technical failures, server downtime, delayed inquiry transmission, or errors and omissions in online content."]],
    ["8. Indemnification", ["You agree to defend, indemnify, and hold harmless Nilkamal Global Eggs and its management from claims, liabilities, losses, damages, or reasonable legal expenses resulting from your violation of these Terms or misuse of the Site."]],
    ["9. Governing Law & Dispute Resolution", ["These Terms are governed by the laws of India. Any dispute shall first be addressed through good-faith informal negotiation. If unresolved within sixty days, the dispute shall be subject to the exclusive jurisdiction of the competent courts located in India."]],
    ["10. Revisions to Terms", ["Nilkamal Global Eggs reserves the right to amend, update, or modify these Terms at any time without prior notice. Continued use following changes constitutes acceptance of the modified terms."]]
  ]
};

function LegalPage({ data }) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-28">
        <article className="mx-auto max-w-4xl px-5 pb-24 lg:px-8">
          <div className="eyebrow">Legal</div>
          <h1 className="font-display text-5xl font-black text-[#0c2117] sm:text-6xl">{data.title}</h1>
          <div className="mt-8 space-y-9 text-slate-700">
            <p className="text-lg leading-8">{data.intro}</p>
            {data.sections.map(([heading,paras]) => (
              <section key={heading}>
                <h2 className="text-2xl font-black text-[#0c2117]">{heading}</h2>
                <div className="mt-3 space-y-3">
                  {paras.map((p,i) => <p key={i} className="leading-8">{p}</p>)}
                </div>
              </section>
            ))}
            <section>
              <h2 className="text-2xl font-black text-[#0c2117]">Contact Us</h2>
              <p className="mt-3 leading-8">For questions regarding this policy or these terms, contact Nilkamal Global Eggs at <a className="font-bold text-lime-700" href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

function Footer() {
  const quick = [
    ["Home","/"],["About","/about"],["Contact","/contact"],["Certificate","/certificates"],["For Farmers","/farmers"],["Services","/services"]
  ];
  return (
    <footer className="bg-[#06150e] text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-3 inline-flex rounded-2xl p-1"><img src={asset("nilkamalglobalegglogo.png")} alt="Nilkamal Global Eggs" className="h-25 w-auto"/></div>
            <h2 className="font-display text-4xl font-black sm:text-5xl">Expand Your Market with Nilkamal Global Eggs</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">Tell us your volume, grade, and delivery requirements, and we will package the ideal supply solution. Fresh, dependable, and export-ready—delivered straight to your port.</p>
            <p className="mt-6 max-w-2xl text-xl font-bold text-lime-300">“Tell us what you need, and we’ll crack open the perfect solution for your market.”</p>
          </div>
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-lime-300">Quick Links</h3>
            <div className="mt-5 grid grid-cols-2 gap-2">
              {quick.map(([label,route]) => <button key={label} onClick={() => go(route)} className="rounded-xl px-3 py-2 text-left text-white/70 transition hover:bg-white/5 hover:text-lime-300">{label}</button>)}
            </div>
            <div className="mt-6 grid grid-cols-2 gap-2">
              <button onClick={() => go("/privacy")} className="rounded-xl border border-white/10 px-4 py-3 text-left text-sm font-semibold text-white/70 hover:text-white">Privacy Policy</button>
              <button onClick={() => go("/terms")} className="rounded-xl border border-white/10 px-4 py-3 text-left text-sm font-semibold text-white/70 hover:text-white">Terms & Conditions</button>
            </div>
          </div>
        </div>
        <div className="my-10 h-px bg-white/10" />
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/50">Copyright © 2026 Nilkamal Global Eggs. All rights reserved.</p>
          <div className="flex gap-3">
            <a href="https://www.instagram.com/nilkamalglobalegg?igsh=MWw0bjQ1MHdqYTgyZA==" target="_blank" rel="noreferrer" className="rounded-xl bg-white p-2 transition hover:-translate-y-1"><img src={asset("footer1st.jpeg")} alt="Instagram" className="h-9 w-9 object-contain" /></a>
            <a href="https://share.google/79cAv1OUeEzA49Tku" target="_blank" rel="noreferrer" className="rounded-xl bg-white p-2 transition hover:-translate-y-1"><img src={asset("footer2nd.jpg")} alt="Google profile" className="h-9 w-9 object-contain" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const route = useHashRoute();

  useEffect(() => {
    const path = route === "/" ? "/" : route;
    document.title = path === "/about" ? "About | Nilkamal Global Eggs"
      : path === "/contact" ? "Contact | Nilkamal Global Eggs"
      : path === "/certificates" ? "Certificates | Nilkamal Global Eggs"
      : path === "/farmers" ? "For Farmers | Nilkamal Global Eggs"
      : path === "/services" ? "Services | Nilkamal Global Eggs"
      : path === "/india" ? "Smart Protein India | Nilkamal Global Eggs" 
      : path === "/privacy" ? "Privacy Policy | Nilkamal Global Eggs"
      : path === "/terms" ? "Terms & Conditions | Nilkamal Global Eggs"
      : "Nilkamal Global Eggs | Premium Egg Exporter from India";
  }, [route]);

  if (route === "/about") return <AboutPage />;
  if (route === "/contact") return <ContactPage />;
  if (route === "/india") return <IndiaPage />;
  if (route === "/world") return <WorldPage />;
  if (route === "/certificates") return <CertificatesPage />;
  if (route === "/farmers") return <FarmersPage />;
  if (route === "/services") return <ServicesPage />;
  if (route === "/privacy") return <LegalPage data={privacyText} />;
  if (route === "/terms") return <LegalPage data={termsText} />;
  if (route === "/contact-success") return <><Header /><main className="grid min-h-[70vh] place-items-center bg-[#eef2e9] px-5 pt-24"><div className="max-w-xl rounded-[2rem] bg-white p-10 text-center shadow-xl"><CircleCheckBig className="mx-auto text-lime-700" size={64}/><h1 className="mt-5 font-display text-4xl font-black text-[#0c2117]">Thank you!</h1><p className="mt-4 leading-7 text-slate-600">Your enquiry has been submitted. Our export team will contact you shortly.</p><button onClick={() => go("/")} className="mt-7 rounded-full bg-[#10251a] px-6 py-3 font-bold text-white">Back to Home</button></div></main><Footer /></>;
  return <Home />;
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);