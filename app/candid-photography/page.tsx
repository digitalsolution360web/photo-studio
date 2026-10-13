
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Camera,
  Heart,
  MapPin,
  Clock3,
  Sparkles,
  Film,
  Users,
  CheckCircle2,
  ArrowRight,
  Aperture,
  CalendarDays,
  Sun,
} from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Max Photo Studio Experts' Unguarded Photography in Andheri, Mumbai",
  description:
    "Max Photo Studio offers professional candid photography in Andheri, Mumbai. We provide exciting event coverage, natural family photographs, and beautiful wedding photos around Mumbai.",
  alternates: {
    canonical:
      "https://www.maxphotostudio.in/candid-photography-andheri-mumbai",
  },
};

const advantages = [
  {
    icon: Camera,
    title: "Natural Expressions",
    description:
      "A soft smile, an emotive tear, and an impromptu giggle all convey profound meaning. We capture these genuine moments without interruption.",
  },
  {
    icon: Clock3,
    title: "Seamless Event Coverage",
    description:
      "Our staff blends seamlessly into your party while capturing your best moments without interrupting the celebration.",
  },
  {
    icon: Heart,
    title: "Memories That Last",
    description:
      "When you employ a skilled Candid Photographer in Andheri, you receive timeless photographs full of vitality.",
  },
];

const photographyServices = [
  {
    number: "01",
    icon: Heart,
    title: "Engagement and Wedding Narratives",
    description:
      "Weddings are full of fast-moving, passionate moments. You require a dependable, unwavering candid photographer in Mumbai. We capture your celebration, your family ties, and your customs with genuine creative flair.",
    points: [
      "Capture emotional wedding moments and celebrations.",
      "Preserve family connections and traditional customs.",
      "Document genuine expressions throughout the event.",
    ],
  },
  {
    number: "02",
    icon: Users,
    title: "Lifestyle and Family Meetings",
    description:
      "Children develop fast, and families grow fast too. Schedule a laid-back Candid Photoshoot Andheri session in your house or at your preferred local location. We maintain a lighthearted and enjoyable atmosphere, and you get pictures that show genuine affection.",
    points: [
      "Relaxed family photography sessions.",
      "Natural portraits of children and loved ones.",
      "Indoor and preferred local location options.",
    ],
  },
  {
    number: "03",
    icon: Camera,
    title: "Milestone and Corporate Events",
    description:
      "Corporate events should be covered with contemporary visuals. Our Professional Candid Photography Andheri crew photographs your conferences, award evenings, and office milestones with crisp accuracy.",
    points: [
      "Conference and business event coverage.",
      "Award ceremonies and office milestones.",
      "Contemporary, professional event photographs.",
    ],
  },
];

const locations = [
  {
    number: "01",
    title: "East Andheri",
    label: "Corporate & Grand Celebrations",
    icon: MapPin,
    description:
      "Grand event facilities, busy corporate centers, and upscale hotels can be found in this neighborhood. For lavish dinners, brand launches, and ballroom events, we offer specialized candid photography in Andheri East.",
    features: [
      "Grand event facilities",
      "Corporate gatherings",
      "Brand launches and ballroom events",
    ],
  },
  {
    number: "02",
    title: "West Andheri",
    label: "Creative & Casual Sessions",
    icon: Sun,
    description:
      "This area is well-known for its hip cafés, outdoor gardens, and artistic areas. It provides the perfect atmosphere for informal picture sessions, private birthday celebrations, and pre-wedding shots.",
    features: [
      "Café and outdoor photography",
      "Private birthday celebrations",
      "Pre-wedding photoshoots",
    ],
  },
];

const studioBenefits = [
  {
    icon: Aperture,
    title: "Superior Equipment",
    description:
      "We employ prime lenses and professional cameras to capture soft and natural portraits.",
  },
  {
    icon: Sparkles,
    title: "Expert Storytellers",
    description:
      "With years of practical expertise, we provide top-notch candid photography services in Mumbai.",
  },
  {
    icon: MapPin,
    title: "Committed Local Studio",
    description:
      "You are welcome to come to our cozy Get in touch with Candid Photography Studio Andheri to talk about your vision.",
  },
  {
    icon: CheckCircle2,
    title: "Verified Reputation",
    description:
      "Each member of our team, Professional Candid Photographer Mumbai, is courteous, on time, and committed to quality.",
  },
  {
    icon: Heart,
    title: "Personalized Packages",
    description:
      "Our candid photography services in Andheri are suitable for both small get-togethers and extravagant parties, and we provide clear pricing.",
  },
];

const planningSteps = [
  {
    number: "01",
    title: "Get to Know Your Team Early",
    description:
      "Before the event, talk about your schedule and expectations.",
  },
  {
    number: "02",
    title: "Emphasize Natural Comfort",
    description:
      "Dress comfortably so that you may move about freely and remain at ease throughout the photo session.",
  },
  {
    number: "03",
    title: "Enjoy Your Event",
    description:
      "Ignore the cameras, mingle with your guests, and let us manage the rest.",
  },
];

const faqs = [
  {
    question:
      "Will you share both modified and unprocessed RAW image files?",
    answer:
      "Since RAW data are incomplete digital negatives, we provide fully color-corrected, high-resolution JPG photos. You can request RAW images for personal archiving needs.",
  },
  {
    question:
      "What happens if it rains heavily during an outdoor Mumbai shoot?",
    answer:
      "We provide flexible rescheduling for monsoon showers and keep a careful eye on coastal weather forecasts. As an alternative, we can use our comfortable indoor studio setting or the protected heritage corridors.",
  },
  {
    question:
      "How long does it take to receive the finished or edited pictures?",
    answer:
      "Within 48 hours following your session, we email you a preview of twenty of the best photos. In three to four weeks, the whole album of high-resolution, edited photos will be delivered.",
  },
  {
    question:
      "Can users coordinate with our separate traditional photographer?",
    answer:
      "Yes, we work well together with conventional stage crews so that we don't obstruct each other's frames. We roam freely to capture spontaneous background emotions while they do formal family photographs.",
  },
  {
    question:
      "How do your photographers manage Andheri's dimly lit banquet halls?",
    answer:
      "For dark interior environments, our team employs covert off-camera bounce flashes and wide-aperture prime lenses. We take clear, silent candid photos without detracting from your hall's organic atmosphere.",
  },
  {
    question:
      "Do we encourage a precise shot list for candid photography?",
    answer:
      "Yes, we do. Before the event begins, you can discuss important VIP family members and must-capture moments. Our experts create creative spaces for impromptu interactions; we apply that framework for priority coverage.",
  },
];

export default function CandidPhotographyAndheriPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white selection:bg-secondary selection:text-white">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* HERO SECTION */}

        <section className="relative overflow-hidden bg-[#09090b] text-white">
          <div className="absolute inset-0">
            <Image
              src="/candid/Dalreen-Birthday-Album_Page_001.webp"
              alt="Candid Photography in Andheri Mumbai"
              fill
              priority
              className="object-cover opacity-35"
              sizes="100vw"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/40 to-primary/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-primary" />
          </div>

          <div className="container relative z-10 mx-auto px-6 py-16 md:px-12 md:py-20 lg:py-24">
            <div className="max-w-3xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-secondary" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary sm:text-xs sm:tracking-[0.35em]">
                  Candid Photography 
                </span>
              </div>

              <h1 className="max-w-3xl text-3xl font-heading font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                Candid Photography
              </h1>

              <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
                Unscripted grins convey the most authentic stories, and real
                emotions create the finest memories. Preserve your memorable
                moments with Max Photo Studio.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-bold text-white transition-all hover:bg-white hover:text-primary"
                >
                  Book Your Shoot
                  <ArrowRight size={17} />
                </Link>

                <Link
                  href="/gallery"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white hover:text-primary"
                >
                  Explore Portfolio
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/65">
                <span className="flex items-center gap-2">
                  <Heart size={15} className="text-secondary" />
                  Real Emotions
                </span>
                <span className="flex items-center gap-2">
                  <Camera size={15} className="text-secondary" />
                  Natural Portraits
                </span>
                <span className="flex items-center gap-2">
                  <Film size={15} className="text-secondary" />
                  Event Stories
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
                    alt="Max Photo Studio candid photography"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                <div className="absolute -bottom-5 right-3 rounded-2xl bg-primary px-6 py-5 text-white shadow-xl sm:-right-5">
                  <Camera size={25} className="mb-2 text-secondary" />
                  <p className="text-sm font-bold">Real Moments</p>
                  <p className="mt-1 text-xs text-white/60">
                    Beautifully preserved
                  </p>
                </div>
              </div>

              <div className="pt-5 lg:pt-0">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-secondary sm:tracking-[0.4em]">
                  Capturing the Real Moments
                </span>

                <h2 className="mt-5 text-3xl font-heading font-extrabold leading-tight text-primary md:text-4xl lg:text-5xl">
                  The Perfect Candid Photography in Andheri Mumbai
                </h2>

                <div className="mt-6 h-1 w-16 rounded-full bg-secondary" />

                <div className="mt-7 space-y-5 text-base leading-relaxed text-slate-600">
                  <p>
                    Unscripted grins convey the most authentic stories, and
                    real emotions create the finest memories.
                  </p>

                  <p>
                    In Andheri, Mumbai,{" "}
                    <Link
                      href="https://www.maxphotostudio.in/"
                      className="font-semibold text-primary underline decoration-secondary underline-offset-4 hover:text-secondary"
                    >
                      Max Photo
                    </Link>{" "}
                    specializes in candid photography and helps you preserve
                    your memorable moments for all time.
                  </p>
                </div>

                <Link
                  href="/gallery"
                  className="mt-8 inline-flex items-center gap-2 font-bold text-primary transition-colors hover:text-secondary"
                >
                  Explore Our Gallery
                  <ArrowRight size={18} />
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
                Why Choose Candid Photography in Andheri Mumbai?
              </h2>

              <p className="mt-5 text-base leading-relaxed text-slate-600">
                A soft smile, an emotive tear, and an impromptu giggle all
                convey profound meaning. Our staff blends seamlessly into
                your party while capturing your best moments without
                interruption.
              </p>

              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Selecting the appropriate team is crucial. When you employ a
                skilled Candid Photographer in Andheri, you receive timeless
                photographs full of vitality.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {advantages.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group rounded-[1.75rem] border border-slate-100 bg-white p-7 shadow-lg shadow-primary/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl md:p-8"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 text-secondary transition-colors group-hover:bg-primary group-hover:text-white">
                      <Icon size={25} />
                    </div>

                    <h3 className="mt-6 text-xl font-heading font-extrabold text-primary">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CANDID PHOTOGRAPHY SERVICES */}

        <section className="bg-white py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-6 md:px-12">
            <div className="mx-auto mb-12 max-w-3xl text-center md:mb-14">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-secondary sm:tracking-[0.4em]">
                What We Offer
              </span>

              <h2 className="mt-4 text-3xl font-heading font-extrabold text-primary md:text-4xl lg:text-5xl">
                Complete Candid Photography Services in Andheri
              </h2>

              <p className="mt-5 text-base leading-relaxed text-slate-600">
                Since every event has a different pace, we provide
                customizable packages for each customer. What we deliver
                around the city is as follows:
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {photographyServices.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.number}
                    className="group relative overflow-hidden rounded-[2rem] border border-slate-100 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-primary sm:p-8"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-secondary shadow-sm transition-colors group-hover:bg-white/10">
                        <Icon size={25} />
                      </div>

                      <span className="text-5xl font-black text-primary/10 transition-colors group-hover:text-white/10">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="mt-7 text-xl font-heading font-extrabold text-primary transition-colors group-hover:text-white">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-slate-600 transition-colors group-hover:text-white/70">
                      {service.description}
                    </p>

                    <div className="mt-6 space-y-3">
                      {service.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-start gap-3 text-sm text-slate-600 transition-colors group-hover:text-white/80"
                        >
                          <CheckCircle2
                            size={17}
                            className="mt-0.5 shrink-0 text-secondary"
                          />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* EAST VS WEST ANDHERI */}

        <section className="bg-slate-50 py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-6 md:px-12">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-secondary sm:tracking-[0.4em]">
                Explore Local Locations
              </span>

              <h2 className="mt-4 text-3xl font-heading font-extrabold text-primary md:text-4xl lg:text-5xl">
                Investigating Places: East Vs. West Andheri
              </h2>

              <p className="mt-5 text-base leading-relaxed text-slate-600">
                Andheri is a vibrant place. Its neighborhoods offer fantastic
                backdrops for every session of{" "}
                <Link
                  href="https://www.maxphotostudio.in/gallery"
                  className="font-semibold text-primary underline decoration-secondary underline-offset-4 hover:text-secondary"
                >
                  Candid Photography in Andheri Mumbai
                </Link>
                .
              </p>
            </div>

            <div className="grid gap-7 lg:grid-cols-2">
              {locations.map((location) => {
                const Icon = location.icon;

                return (
                  <article
                    key={location.title}
                    className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-lg shadow-primary/5"
                  >
                    <div className="relative overflow-hidden bg-primary p-7 text-white sm:p-9">
                      <div className="absolute -right-12 -top-16 h-48 w-48 rounded-full bg-secondary/15 blur-3xl" />

                      <div className="relative z-10 flex items-start justify-between gap-4">
                        <div>
                          <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                            {location.label}
                          </span>

                          <h3 className="mt-3 text-2xl font-heading font-extrabold sm:text-3xl">
                            {location.title}
                          </h3>
                        </div>

                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-secondary">
                          <Icon size={25} />
                        </div>
                      </div>

                      <span className="relative z-10 mt-5 block text-sm text-white/50">
                        Photography Location {location.number}
                      </span>
                    </div>

                    <div className="p-7 sm:p-9">
                      <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                        {location.description}
                      </p>

                      <div className="mt-6 space-y-3">
                        {location.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-3 text-sm font-medium text-primary"
                          >
                            <CheckCircle2
                              size={17}
                              className="shrink-0 text-secondary"
                            />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <p className="mx-auto mt-9 max-w-3xl text-center text-sm leading-relaxed text-slate-600 sm:text-base">
              If you need a reliable Candid Photographer in Andheri East or
              an artistic crew in the West, we have you covered.
            </p>
          </div>
        </section>

        {/* WHY MAX PHOTO STUDIO */}

        <section className="relative overflow-hidden bg-primary py-16 text-white md:py-20 lg:py-24">
          <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />

          <div className="container relative z-10 mx-auto px-6 md:px-12">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-secondary sm:tracking-[0.4em]">
                The Max Photo Difference
              </span>

              <h2 className="mt-4 text-3xl font-heading font-extrabold leading-tight md:text-4xl lg:text-5xl">
                Why Max Photo Studio Stands Out
              </h2>

              <p className="mt-5 text-base leading-relaxed text-white/65">
                It should never be difficult to choose the ideal studio with
                its Candid Photography Services Mumbai. Clients trust our
                staff for the following reasons:
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {studioBenefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={benefit.title}
                    className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 sm:p-7"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
                      <Icon size={23} />
                    </div>

                    <h3 className="mt-5 text-lg font-heading font-extrabold">
                      {benefit.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-white/65">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-white hover:text-primary"
              >
                Discuss Your Photography Needs
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        {/* HOW TO PLAN YOUR SHOOT */}

        <section className="bg-white py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-secondary sm:tracking-[0.4em]">
                  Prepare for Your Session
                </span>

                <h2 className="mt-4 text-3xl font-heading font-extrabold leading-tight text-primary md:text-4xl lg:text-5xl">
                  How to Plan Your Candid Shoot
                </h2>

                <div className="mt-6 h-1 w-16 rounded-full bg-secondary" />

                <p className="mt-6 text-base leading-relaxed text-slate-600">
                  Excellent planning requires strategic decisions. As part of
                  our Candid Photography in Andheri Mumbai, we work on ideas
                  and transform them into productive photo sessions.
                </p>

                <Link
                  href="/contact"
                  className="mt-7 inline-flex items-center gap-2 font-bold text-primary transition-colors hover:text-secondary"
                >
                  Plan Your Shoot
                  <ArrowRight size={18} />
                </Link>
              </div>

              <div className="space-y-5">
                {planningSteps.map((step) => (
                  <div
                    key={step.number}
                    className="flex gap-5 rounded-2xl border border-slate-100 bg-slate-50 p-5 sm:gap-6 sm:p-7"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-sm font-extrabold text-secondary">
                      {step.number}
                    </div>

                    <div>
                      <h3 className="text-lg font-heading font-extrabold text-primary">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PORTFOLIO CTA */}

        <section className="relative overflow-hidden bg-primary py-16 text-white md:py-20 lg:py-24">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/candid/Dalreen-Birthday-Album_Page_004.webp"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>

          <div className="absolute inset-0 bg-primary/85" />

          <div className="container relative z-10 mx-auto px-6 text-center md:px-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-secondary backdrop-blur-md">
              <Camera size={30} />
            </div>

            <span className="mt-7 block text-xs font-bold uppercase tracking-[0.35em] text-secondary sm:tracking-[0.45em]">
              Max Photo Studio
            </span>

            <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-heading font-extrabold leading-tight md:text-5xl lg:text-6xl">
              Schedule Your Consultation Now
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70">
              Are You Ready for the Best Candid Photography in Andheri
              Mumbai? Visit our most recent portfolio online.
            </p>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
              Make an appointment, get in touch with our staff, and let our
              professionals capture the beauty of your memorable moments.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/gallery"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-primary transition-all hover:bg-secondary hover:text-white"
              >
                <Camera size={17} />
                View Our Portfolio
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-white hover:text-primary"
              >
                <CalendarDays size={17} />
                Book a Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}

        <section className="bg-slate-50 py-16 md:py-20 lg:py-24">
          <div className="container mx-auto max-w-4xl px-6 md:px-12">
            <div className="mb-10 text-center md:mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-secondary sm:tracking-[0.4em]">
                FAQs
              </span>

              <h2 className="mt-4 text-3xl font-heading font-extrabold text-primary md:text-4xl lg:text-5xl">
                Frequently Asked Questions
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                Find answers to common questions about our candid
                photography services in Andheri, Mumbai.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 font-heading font-bold text-primary sm:px-7">
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
              Capture Your Real Moments with Max Photo Studio
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600">
              Looking for Candid Photography in Andheri Mumbai? Connect
              with Max Photo Studio to discuss your event, photography
              requirements, and preferred location.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-bold text-white transition-all hover:bg-secondary"
              >
                Visit Max Photo Studio
              </Link>

              <Link
                href="/contact"
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
