
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Camera,
  Heart,
  Clock3,
  Sparkles,
  Users,
  CheckCircle2,
  ArrowRight,
  Aperture,
  CalendarDays,
  Sun,
  Shirt,
  Droplets,
  Gift,
  Flower2,
  Baby,
  Palette,
} from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Premium Sessions Before Immense Joy: Maternity Photoshoot in Andheri East Mumbai",
  description:
    "Keep your motherhood journey with Max Photo Studio. Book an unforgettable maternity photoshoot in Andheri East.",
  alternates: {
    canonical:
      "https://www.maxphotostudio.in/maternity-photoshoot-andheri-east",
  },
};

const setups = [
  {
    icon: Camera,
    title: "Spacious and Sanitized Studio",
  },
  {
    icon: Shirt,
    title: "Curated Wardrobe",
  },
  {
    icon: Sun,
    title: "Outdoor Sessions",
  },
  {
    icon: Palette,
    title: "Custom Themes",
  },
  {
    icon: Heart,
    title: "Family Inclusion with Beloved Pets",
  },
];

const services = [
  {
    number: "01",
    icon: Aperture,
    title: "1. Studio Elegance",
    description:
      "We start our session for the Maternity Studio Photoshoot Andheri with controlled lighting, total privacy, and cozy changing areas.",
    extra:
      "You can enjoy a stress-free session with our professionals.",
    image: "/candid/Dalreen-Birthday-Album_Page_005.webp",
    alt: "Studio photography session",
  },
  {
    number: "02",
    icon: Sun,
    title: "2. Candid and Outdoor Vibes",
    description:
      "Are you fond of golden sunsets and lush greenery? Well, these sessions can be yours too. A sunlit Maternity Shoot in Andheri brings out natural warmth, laughter, and timeless grace.",
    image: "/candid/Dalreen-Birthday-Album_Page_004.webp",
    alt: "Outdoor photography session",
  },
  {
    number: "03",
    icon: Users,
    title: "3. Couple and Family Portraits",
    description:
      "We encourage couple photography, as a maternity session can help us to capture intimate portraits that highlight your bond and the excitement of waiting together.",
    image: "/candid/Dalreen-Birthday-Album_Page_001.webp",
    alt: "Couple and family portrait photography",
  },
];

const tips = [
  {
    icon: Shirt,
    title: "Keep Clothes Comfortable",
    description:
      "Choose breathable materials that don't squeeze your bump.",
  },
  {
    icon: Droplets,
    title: "Stay Hydrated",
    description:
      "Get a good night's sleep and drink plenty of water before your shoot.",
  },
  {
    icon: CheckCircle2,
    title: "Select Soft Undergarments",
    description:
      "For clean lines, use seamless, nude-colored undergarments beneath your dresses.",
  },
  {
    icon: Gift,
    title: "Bring Personal Keepsakes",
    description:
      "To add sentimental significance, bring family heirlooms, small baby booties, or ultrasound pictures.",
  },
  {
    icon: Sparkles,
    title: "Treat Yourself",
    description:
      "Under studio lighting, lovely curls and light, natural makeup look stunning.",
  },
];

const faqs = [
  {
    question:
      "What should my spouse wear to go with my maternity attire?",
    answer:
      "Solid neutral colors like beige, white, cream, or navy blue should be chosen by your partner. Loud logos, vivid hues, and cluttered images should be avoided.",
  },
  {
    question:
      "Is it possible for my partner and I to bring our family pet along to the session?",
    answer:
      "Well-behaved dogs are welcome, but please let our staff know in advance. To help your pet during solo portraiture, you also need to bring a handler.",
  },
  {
    question:
      "How far in advance must we reserve the date of our shoot?",
    answer:
      "We advise scheduling your appointment four to six weeks ahead. Your ideal weekend time slot is guaranteed throughout your busiest 28–34 week pregnant window if you plan beforehand.",
  },
  {
    question:
      "Do you correct blemishes, swollen ankles, and stretch marks?",
    answer:
      "Yes, we naturally reduce transient swelling and smooth skin tones with our expert retouching. We maintain the images' cleanliness and brightness while preserving your true attractiveness.",
  },
  {
    question:
      "If I go into early labor before our planned date, what will happen?",
    answer:
      "Your health is our priority, so your money will be promptly applied to a future infant session. Just let our studio crew know as soon as you can.",
  },
  {
    question:
      "Is it possible for our older child to participate in the maternity picture shoot?",
    answer:
      "We love to capture their tender moments with the baby belly, and older siblings are always welcome. To give kids time to relax, we advise taking pictures of family groups first.",
  },
  {
    question:
      "Can I bring my own personal theme props or cultural items?",
    answer:
      "You can bring traditional jewelry, milestone letterboards, fresh flowers, or custom gifts. We will blend these keepsakes seamlessly into your chosen studio backdrop.",
  },
];

export default function MaternityPhotoshootAndheriPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white selection:bg-secondary selection:text-white">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-[#09090b] text-white">
          <div className="absolute inset-0">
            <Image
              src="/candid/Dalreen-Birthday-Album_Page_001.webp"
              alt="Maternity Photoshoot in Andheri East"
              fill
              priority
              className="object-cover opacity-35"
              sizes="100vw"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/40 to-primary/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-primary" />
          </div>

          <div className="container relative z-10 mx-auto px-6 py-16 md:px-12 md:py-20 lg:py-24">
            <div className="max-w-4xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-secondary" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary sm:text-xs sm:tracking-[0.35em]">
                  Maternity Photography
                </span>
              </div>

              <h1 className="max-w-4xl text-3xl font-heading font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                Maternity Photoshoot 
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
                Capture the Magic with Max Photo Studio | Your Perfect Partner
                for a Maternity Photoshoot 
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="https://www.maxphotostudio.in/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-bold text-white transition-all hover:bg-white hover:text-primary"
                >
                  Click Here to Book Your Reservation Now!
                  <ArrowRight size={17} />
                </Link>

                <Link
                  href="https://www.maxphotostudio.in/work"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white hover:text-primary"
                >
                  Explore Portfolio
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/65">
                <span className="flex items-center gap-2">
                  <Heart size={15} className="text-secondary" />
                  Celebrate Motherhood
                </span>
                <span className="flex items-center gap-2">
                  <Camera size={15} className="text-secondary" />
                  Beautiful Portraits
                </span>
                <span className="flex items-center gap-2">
                  <Baby size={15} className="text-secondary" />
                  Precious Memories
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="bg-white py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <div className="relative">
                <div className="absolute -left-5 -top-5 h-32 w-32 rounded-full bg-secondary/10 blur-3xl" />

                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_25px_70px_rgba(0,0,0,0.15)]">
                  <Image
                    src="/candid/Dalreen-Birthday-Album_Page_005.webp"
                    alt="Max Photo Studio photography"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                <div className="absolute -bottom-5 right-3 rounded-2xl bg-primary px-6 py-5 text-white shadow-xl sm:-right-5">
                  <Camera size={25} className="mb-2 text-secondary" />
                  <p className="text-sm font-bold">Max Photo Studio</p>
                  <p className="mt-1 text-xs text-white/60">
                    Celebrate motherhood
                  </p>
                </div>
              </div>

              <div className="pt-5 lg:pt-0">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-secondary sm:tracking-[0.4em]">
                  Capture the Magic
                </span>

                <h2 className="mt-5 text-3xl font-heading font-extrabold leading-tight text-primary md:text-4xl lg:text-5xl">
                  Capture the Magic with Max Photo Studio | Your Perfect
                  Partner for a Maternity Photoshoot in Andheri East
                </h2>

                <div className="mt-6 h-1 w-16 rounded-full bg-secondary" />

                <div className="mt-7 space-y-5 text-base leading-relaxed text-slate-600">
                  <p>
                    Are you planning a{" "}
                    <Link
                      href="https://www.maxphotostudio.in/work"
                      className="font-semibold text-primary underline decoration-secondary underline-offset-4 hover:text-secondary"
                    >
                      Maternity Photoshoot in Andheri East
                    </Link>
                    ? You are in the right place. At{" "}
                    <Link
                      href="https://www.maxphotostudio.in/"
                      className="font-semibold text-primary underline decoration-secondary underline-offset-4 hover:text-secondary"
                    >
                      Max Photo Studio
                    </Link>
                    , we transform these golden moments into timeless memories.
                  </p>

                  <p>
                    We capture every precious moment that starts with your
                    journey into motherhood. Every mother deserves to celebrate
                    it. Let us help you celebrate motherhood in style.
                  </p>
                </div>

                <Link
                  href="https://www.maxphotostudio.in/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-bold text-white transition-all hover:bg-primary"
                >
                  Click Here to Book Your Reservation Now!
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="relative overflow-hidden bg-slate-50 py-16 md:py-20 lg:py-24">
          <div className="container relative z-10 mx-auto px-6 md:px-12">
            <div className="mx-auto mb-12 max-w-3xl text-center md:mb-14">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-secondary sm:tracking-[0.4em]">
                Why Choose Us
              </span>

              <h2 className="mt-4 text-3xl font-heading font-extrabold leading-tight text-primary md:text-4xl lg:text-5xl">
                Why Choose Our Maternity Photoshoot in Andheri East?
              </h2>

              <p className="mt-5 text-base leading-relaxed text-slate-600">
                Our dedicated{" "}
                <strong className="font-bold text-primary">
                  Maternity Photographer in Andheri East
                </strong>{" "}
                takes care of the entire maternity photoshoot session with
                elegance. This memory brings glowing smiles and tender emotions
                later when you witness them with your family, friends, and
                relatives.
              </p>

              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Thanks to our amazing crew members, who create a calm
                atmosphere, we guide you through flattering poses.
              </p>

              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Our{" "}
                <strong className="font-bold text-primary">
                  Maternity Photography in Andheri East
                </strong>{" "}
                is special, as we prioritize the following setups:
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {setups.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group rounded-[1.75rem] border border-slate-100 bg-white p-6 shadow-lg shadow-primary/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl md:p-8"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 text-secondary transition-colors group-hover:bg-primary group-hover:text-white">
                      <Icon size={25} />
                    </div>

                    <h3 className="mt-5 text-lg font-heading font-extrabold text-primary">
                      {item.title}
                    </h3>

                    <div className="mt-4 h-1 w-10 rounded-full bg-secondary transition-all group-hover:w-16" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* MATERNITY PHOTOGRAPHY SERVICES */}
        <section className="bg-white py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-6 md:px-12">
            <div className="mx-auto mb-12 max-w-4xl text-center md:mb-14">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-secondary sm:tracking-[0.4em]">
                What We Offer
              </span>

              <h2 className="mt-4 text-3xl font-heading font-extrabold text-primary md:text-4xl lg:text-5xl">
                Tailored Maternity Photography Services Andheri Expecting
                Parents Love
              </h2>

              <p className="mt-5 text-base leading-relaxed text-slate-600">
                As a{" "}
                <strong className="font-bold text-primary">
                  Professional Maternity Photographer Andheri
                </strong>
                , we design personalized packages for every family. In your
                special journey, we create a unique story that shows every
                pregnancy journey with elegance.
              </p>

              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Customized sessions always suit your taste. Let’s understand
                our special services:
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.number}
                    className="group relative overflow-hidden rounded-[2rem] border border-slate-100 bg-slate-50 transition-all duration-300 hover:-translate-y-1 hover:bg-primary"
                  >
                    <div className="relative h-60 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />

                      <span className="absolute bottom-5 left-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-secondary shadow-sm">
                        <Icon size={24} />
                      </span>

                      <span className="absolute right-5 top-5 text-5xl font-black text-white/80">
                        {service.number}
                      </span>
                    </div>

                    <div className="p-7 sm:p-8">
                      <h3 className="text-xl font-heading font-extrabold text-primary transition-colors group-hover:text-white">
                        {service.title}
                      </h3>

                      <p className="mt-4 text-sm leading-relaxed text-slate-600 transition-colors group-hover:text-white/75">
                        {service.description}
                      </p>

                      {service.extra && (
                        <p className="mt-4 text-sm leading-relaxed text-slate-600 transition-colors group-hover:text-white/75">
                          {service.extra}
                        </p>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* BEST TIME */}
        <section className="relative overflow-hidden bg-primary py-16 text-white md:py-20 lg:py-24">
          <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />

          <div className="container relative z-10 mx-auto px-6 md:px-12">
            <div className="grid items-center gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
              <div className="flex justify-center">
                <div className="flex h-52 w-52 flex-col items-center justify-center rounded-full border border-white/20 bg-white/[0.06] text-center sm:h-64 sm:w-64">
                  <CalendarDays size={36} className="mb-4 text-secondary" />
                  <p className="text-4xl font-heading font-extrabold">
                    28–34
                  </p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.25em] text-white/60">
                    Weeks
                  </p>
                </div>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-secondary sm:tracking-[0.4em]">
                  Plan Your Session
                </span>

                <h2 className="mt-4 text-3xl font-heading font-extrabold leading-tight md:text-4xl lg:text-5xl">
                  The Best Time for Your Maternity Photoshoot
                </h2>

                <div className="mt-6 h-1 w-16 rounded-full bg-secondary" />

                <div className="mt-7 space-y-5 text-base leading-relaxed text-white/70">
                  <p>
                    The best time to book a maternity photography session
                    between your 28th and 34th weeks of pregnancy. In this
                    period, you will notice a beautiful baby bump.
                  </p>

                  <p>
                    If you are expecting twins, we recommend scheduling your
                    Maternity Photoshoot in Andheri slightly earlier. In this
                    period, you can still feel energetic enough to pose
                    comfortably.
                  </p>
                </div>

                <Link
                  href="https://www.maxphotostudio.in/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-white hover:text-primary"
                >
                  Book Your Session
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* PHOTOSHOOT TIPS */}
        <section className="bg-white py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-6 md:px-12">
            <div className="mx-auto mb-12 max-w-3xl text-center md:mb-14">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-secondary sm:tracking-[0.4em]">
                Prepare for Your Session
              </span>

              <h2 className="mt-4 text-3xl font-heading font-extrabold leading-tight text-primary md:text-4xl lg:text-5xl">
                Helpful Tips for a Seamless Photoshoot Day
              </h2>

              <p className="mt-5 text-base leading-relaxed text-slate-600">
                Before you join our session, we recommend mother to follow
                these simple tips to get picture-perfect results:
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {tips.map((tip, index) => {
                const Icon = tip.icon;

                return (
                  <article
                    key={tip.title}
                    className="group rounded-[1.75rem] border border-slate-100 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 text-secondary transition-colors group-hover:bg-primary group-hover:text-white">
                        <Icon size={24} />
                      </div>

                      <span className="text-4xl font-black text-primary/10">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-heading font-extrabold text-primary">
                      {tip.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {tip.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* MUMBAI MATERNITY PHOTOGRAPHY */}
        <section className="bg-slate-50 py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <div className="relative">
                <div className="absolute -left-5 -top-5 h-32 w-32 rounded-full bg-secondary/10 blur-3xl" />

                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_25px_70px_rgba(0,0,0,0.15)]">
                  <Image
                    src="/candid/Dalreen-Birthday-Album_Page_004.webp"
                    alt="Professional photography by Max Photo Studio in Mumbai"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>

                <div className="absolute -bottom-5 right-3 rounded-2xl bg-primary px-6 py-5 text-white shadow-xl sm:-right-5">
                  <Heart size={25} className="mb-2 text-secondary" />
                  <p className="text-sm font-bold">Timeless Memories</p>
                  <p className="mt-1 text-xs text-white/60">
                    Max Photo Studio
                  </p>
                </div>
              </div>

              <div className="pt-5 lg:pt-0">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-secondary sm:tracking-[0.4em]">
                  Trusted Photography
                </span>

                <h2 className="mt-5 text-3xl font-heading font-extrabold leading-tight text-primary md:text-4xl lg:text-5xl">
                  Trusted Maternity Photography Services Mumbai Families Adore
                </h2>

                <div className="mt-6 h-1 w-16 rounded-full bg-secondary" />

                <div className="mt-7 space-y-5 text-base leading-relaxed text-slate-600">
                  <p>
                    In Mumbai, Max Photo Studio is regarded as a premier
                    maternity photographer. Clients come from across the city,
                    though our main studio is in Andheri East.
                  </p>

                  <p>
                    We take pleasure in providing top-notch maternity
                    photography services that Mumbai locals depend on for
                    significant life events.
                  </p>

                  <p>
                    We record your expanding family with unadulterated love,
                    from your first pregnancy photo to newborn memories. A
                    carefully thought-out maternity photo shoot that Mumbai
                    parents treasure is passed down through the generations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* APPOINTMENT CTA */}
        <section className="relative overflow-hidden bg-primary py-16 text-white md:py-20 lg:py-24">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/candid/Dalreen-Birthday-Album_Page_001.webp"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>

          <div className="absolute inset-0 bg-primary/85" />

          <div className="container relative z-10 mx-auto px-6 text-center md:px-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-secondary backdrop-blur-md">
              <CalendarDays size={30} />
            </div>

            <h2 className="mx-auto mt-7 max-w-4xl text-3xl font-heading font-extrabold leading-tight md:text-5xl lg:text-6xl">
              Make an Appointment With Max Photo Studio Right Now
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/70">
              Your maternity journey should be lovingly and elegantly
              remembered. Let us create pictures that will make you smile for
              years to come.
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-white/60 sm:text-base">
              visit view our portfolio and prices; go visit Max Photo Studio's
              official website. Get in touch with our welcoming staff right
              now, and let us organize your ideal maternity photo shoot in
              Andheri East!
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="https://www.maxphotostudio.in/work"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-primary transition-all hover:bg-secondary hover:text-white"
              >
                <Camera size={17} />
                View Our Portfolio
              </Link>

              <Link
                href="https://www.maxphotostudio.in/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-white hover:text-primary"
              >
                <CalendarDays size={17} />
                Click Here to Book Your Reservation Now!
              </Link>

              <Link
                href="https://www.maxphotostudio.in/"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-white hover:text-primary"
              >
                Official Website
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="bg-slate-50 py-16 md:py-20 lg:py-24">
          <div className="container mx-auto max-w-4xl px-6 md:px-12">
            <div className="mb-10 text-center md:mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-secondary sm:tracking-[0.4em]">
                FAQs
              </span>

              <h2 className="mt-4 text-3xl font-heading font-extrabold text-primary md:text-4xl lg:text-5xl">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={faq.question}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white"
                  open={index === 0}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 font-heading font-bold text-primary sm:px-7 [&::-webkit-details-marker]:hidden">
                    <span className="text-sm leading-relaxed sm:text-base">
                      {faq.question}
                    </span>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-50 text-lg text-secondary transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <div className="border-t border-slate-100 px-5 py-5 text-sm leading-relaxed text-slate-600 sm:px-7">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-white py-16 text-center md:py-20 lg:py-24">
          <div className="container mx-auto px-6">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
              <Heart size={27} />
            </div>

            <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-heading font-extrabold leading-tight text-primary md:text-4xl lg:text-5xl">
              Maternity Photoshoot in Andheri East
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600">
              Your maternity journey should be lovingly and elegantly
              remembered. Let us create pictures that will make you smile for
              years to come.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="https://www.maxphotostudio.in/"
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-bold text-white transition-all hover:bg-secondary"
              >
                Visit Max Photo Studio
              </Link>

              <Link
                href="https://www.maxphotostudio.in/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-bold text-primary transition-all hover:border-primary hover:bg-slate-50"
              >
                Contact Us
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
