
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
  Cake,
  CalendarDays,
  Gift,
  Aperture,
} from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "The Best Birthday and Anniversary Photos at Andheri East Max Studio",
  description:
    "For anniversary and birthday photos in Andheri East, go with Max Photo Studio. We swiftly produce gorgeous picture books while capturing unscripted moments and family grins.",
  alternates: {
    canonical:
      "https://www.maxphotostudio.in/birthday-anniversary-photography-andheri-east",
  },
};

const birthdayServices = [
  {
    number: "01",
    icon: Cake,
    title: "Kids & First Birthdays",
    description:
      "Our professionals capture joyful giggles, playful toddler steps, and sweet cake messes of your little ones.",
  },
  {
    number: "02",
    icon: Gift,
    title: "Milestone Galas",
    description:
      "We cover all range of sessions from sweet sixteens to energetic 50th celebrations. The professionals maintain the perfect balance between polished group portraits and candid snapshots.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Themed Celebrations",
    description:
      "Our elite photographers cover candid guest reactions, stage performances, and full family portraits. It’s time to choose our trusted Professional Birthday Photography Andheri packages.",
  },
];

const anniversaryServices = [
  "Vow Renewals & Receptions",
  "Family Milestones",
  "Couple Portraits",
];

const serviceTable = [
  {
    feature: "Birthday Photography Services Andheri",
    deliver: [
      "Candid Moments",
      "Cake Cuttings",
      "Decor Detail Shots",
      "High-Resolution Digital Albums",
    ],
    suitable: [
      "1st Birthdays",
      "Theme Parties",
      "Milestone Adult Celebrations",
    ],
  },
  {
    feature: "Anniversary Photography Services Andheri",
    deliver: [
      "Romantic Couple Sessions",
      "Guest Candid Shots",
      "Family Formals",
      "Premium Photobooks",
    ],
    suitable: [
      "Silver Jubilees",
      "Golden Milestones",
      "Private Dinner Parties",
    ],
  },
  {
    feature: "Cinematic Highlights",
    deliver: [
      "Short 4K Video Teasers",
      "Reels For Social Media",
      "Full Ceremony Recordings",
    ],
    suitable: ["Grand Banquet Events", "Themed Celebrations"],
  },
];

const bookingSteps = [
  {
    number: "01",
    title: "Connect With Our Team",
    description:
      "Reach out through our website and share your celebration date, venue, and photography requirements.",
  },
  {
    number: "02",
    title: "Plan Your Photography",
    description:
      "Discuss your preferred coverage, essential shots, family portraits, and special moments with our team.",
  },
  {
    number: "03",
    title: "Enjoy Your Celebration",
    description:
      "We arrive early on your big day, handle the visual coverage, and let you enjoy your party.",
  },
];

const faqs = [
  {
    question: "Do you provide edited and unedited RAW photos?",
    answer:
      "You may keep every click, and we provide the original camera files on a safe disk. For clear picture album prints, our staff additionally retouches your best photos.",
  },
  {
    question:
      "When should we reserve our event time slot in Andheri East?",
    answer:
      "You can call us as per the celebration date. We insist on calling us two to four weeks ahead of time. We accept last-minute weekend requests, but this guarantees your desired time window.",
  },
  {
    question:
      "How do you manage outdoor meal settings or dimly lit banquet halls?",
    answer:
      "Our team brings rapid lenses and powerful portable lighting to any party location. We uniformly light dim banquet areas so that your nighttime photographs appear crisp and dazzling.",
  },
  {
    question:
      "Is it possible for us to share a personalized shot list for particular family members?",
    answer:
      "Before your party, you can give us a list of essential shots. To ensure that no VIP guest is overlooked, our photographer crosses off each group.",
  },
  {
    question:
      "How long does it take to receive the final albums and photographs that have been edited?",
    answer:
      "For your Instagram updates, we provide digital sneak peek photographs in less than 48 hours. In ten to fourteen days, you will receive your whole updated gallery and albums.",
  },
  {
    question: "Do you carry backup camera equipment?",
    answer:
      "Yes, we do. It is the best way to avoid technological difficulties during the party. Every shooter carries spare lenses, memory cards, and backup camera bodies.",
  },
];

export default function BirthdayAnniversaryPhotographyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white selection:bg-secondary selection:text-white">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* HERO SECTION */}

        <section className="relative overflow-hidden bg-[#09090b] text-white">
          <div className="absolute inset-0">
            <Image
              src="/wedding/Page%20wed.webp"
              alt="Birthday and Anniversary Photography in Andheri East"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-35"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/50 to-primary/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-primary/70" />
          </div>

          <div className="container relative z-10 mx-auto px-6 py-16 md:px-12 md:py-20 lg:py-24">
            <div className="max-w-3xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-secondary" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary sm:text-xs sm:tracking-[0.35em]">
                  Birthday & Anniversary Photography
                </span>
              </div>

              <h1 className="text-3xl font-heading font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                Birthday and Anniversary Photography
             
              </h1>

              <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
                Special memories deserve beautiful frames. We capture
                unscripted moments, family grins, and the beautiful details
                that make every birthday and anniversary memorable.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-bold text-white transition-all hover:bg-white hover:text-primary"
                >
                  Book Your Celebration
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
                  <Cake size={15} className="text-secondary" />
                  Birthday Moments
                </span>
                <span className="flex items-center gap-2">
                  <Heart size={15} className="text-secondary" />
                  Anniversary Stories
                </span>
                <span className="flex items-center gap-2">
                  <Camera size={15} className="text-secondary" />
                  Family Portraits
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
                    src="/wedding/Page_0.webp"
                    alt="Max Photo Studio event photography"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>

                <div className="absolute -bottom-5 right-3 rounded-2xl bg-primary px-6 py-5 text-white shadow-xl sm:-right-5">
                  <Camera size={25} className="mb-2 text-secondary" />
                  <p className="text-sm font-bold">Every Moment</p>
                  <p className="mt-1 text-xs text-white/60">
                    Beautifully captured
                  </p>
                </div>
              </div>

              <div className="pt-5 lg:pt-0">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-secondary sm:tracking-[0.4em]">
                  Every Milestone Matters
                </span>

                <h2 className="mt-5 text-3xl font-heading font-extrabold leading-tight text-primary md:text-4xl lg:text-5xl">
                  Capture Every Precious Milestone: Birthday and Anniversary
                  Photography in Andheri East
                </h2>

                <div className="mt-6 h-1 w-16 rounded-full bg-secondary" />

                <div className="mt-7 space-y-5 text-base leading-relaxed text-slate-600">
                  <p>
                    Are you planning to make a birthday or anniversary grand
                    at your chosen venue? You've come to the right place. At{" "}
                    <strong className="font-semibold text-primary">
                      Max Photo Studio
                    </strong>
                    , our primary focus is to deliver premium{" "}
                    <strong className="font-semibold text-primary">
                      Birthday and Anniversary Photography in Andheri East
                    </strong>
                    .
                  </p>

                  <p>
                    Special memories deserve beautiful frames. We maintain
                    professionalism and help you relive your favorite days
                    forever. It’s time to capture your laugh with your best
                    friends and your dance with your family.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 font-bold text-primary transition-colors hover:text-secondary"
                >
                  Contact us now to book your slot at Max Photo Studio!
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
                The Max Photo Difference
              </span>

              <h2 className="mt-4 text-3xl font-heading font-extrabold leading-tight text-primary md:text-4xl lg:text-5xl">
                Why Choose Our Birthday and Anniversary Photography in
                Andheri East?
              </h2>

              <p className="mt-5 text-base leading-relaxed text-slate-600">
                Finding the right visual artist is always a major decision.
                This one decision can enhance the experience of wonderful
                memories that you live during the celebration of a birthday
                and an anniversary.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <article className="group rounded-[1.75rem] border border-slate-100 bg-white p-7 shadow-lg shadow-primary/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 text-secondary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Cake size={25} />
                </div>

                <h3 className="mt-6 text-xl font-heading font-extrabold text-primary">
                  Birthday Photography
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  When you book a{" "}
                  <Link
                    href="/services/event-videography"
                    className="font-semibold text-primary underline decoration-secondary underline-offset-4 hover:text-secondary"
                  >
                    Birthday Photographer in Andheri East
                  </Link>
                  ,{" "}
                  <Link
                    href="https://www.maxphotostudio.in/"
                    className="font-semibold text-primary underline decoration-secondary underline-offset-4 hover:text-secondary"
                  >
                    Max Photo Studio
                  </Link>{" "}
                  sends its professionals to your location. There is nothing
                  to worry about, as we arrive at your venue early to set up
                  every required asset.
                </p>
              </article>

              <article className="group rounded-[1.75rem] border border-slate-100 bg-white p-7 shadow-lg shadow-primary/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 text-secondary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Heart size={25} />
                </div>

                <h3 className="mt-6 text-xl font-heading font-extrabold text-primary">
                  Anniversary Photography
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Also, couples always trust an experienced{" "}
                  <Link
                    href="/services/event-photography"
                    className="font-semibold text-primary underline decoration-secondary underline-offset-4 hover:text-secondary"
                  >
                    Anniversary Photographer in Andheri East
                  </Link>
                  . We capture genuine smiles, surprise cake smashes, and
                  warm hugs. Whether it is your 1st paper anniversary or your
                  50th golden jubilee, we make everything memorable. Our
                  professional team crafts perfect portraits with natural
                  warmth and elegance.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* DEDICATED BIRTHDAY COVERAGE */}

        <section className="bg-white py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-6 md:px-12">
            <div className="mx-auto mb-12 max-w-3xl text-center md:mb-14">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-secondary sm:tracking-[0.4em]">
                Birthday Celebrations
              </span>

              <h2 className="mt-4 text-3xl font-heading font-extrabold text-primary md:text-4xl lg:text-5xl">
                Celebrate Life: Dedicated Birthday Coverage
              </h2>

              <p className="mt-5 text-base leading-relaxed text-slate-600">
                A birthday celebration is always a pure vibe for anyone. The
                addition of an experienced photography team just enhances
                the entire moment as they capture every live moment for
                future enjoyment.
              </p>

              <p className="mt-4 text-base leading-relaxed text-slate-600">
                At Max Photo Studio, we cover sessions of Birthday and
                Anniversary Photography in Andheri East with the help of a
                seasoned Birthday Photographer in Mumbai:
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {birthdayServices.map((service) => {
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

                      <span className="text-5xl font-black text-primary/10 group-hover:text-white/10">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="mt-7 text-xl font-heading font-extrabold text-primary transition-colors group-hover:text-white">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-slate-600 transition-colors group-hover:text-white/70">
                      {service.description}
                    </p>
                  </article>
                );
              })}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-secondary"
              >
                Book our Birthday Photography in Andheri by Clicking Here!
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        {/* ANNIVERSARY PHOTOGRAPHY */}

        <section className="relative overflow-hidden bg-primary py-16 text-white md:py-20 lg:py-24">
          <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />

          <div className="container relative z-10 mx-auto px-6 md:px-12">
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-secondary sm:tracking-[0.4em]">
                  Celebrating Togetherness
                </span>

                <h2 className="mt-4 text-3xl font-heading font-extrabold leading-tight md:text-4xl lg:text-5xl">
                  Cherish Your Bond: Romantic Anniversary Shoots
                </h2>

                <div className="mt-6 h-1 w-16 rounded-full bg-secondary" />

                <p className="mt-6 text-base leading-relaxed text-white/70">
                  We capture wonderful memories. From birthday to
                  anniversary, those memories grow stronger every single
                  year, and that connection deserves recognition.
                </p>

                <p className="mt-5 text-base leading-relaxed text-white/70">
                  Our{" "}
                  <strong className="font-semibold text-white">
                    Professional Anniversary Photography Andheri
                  </strong>{" "}
                  prioritizes the following:
                </p>

                <div className="mt-6 space-y-4">
                  {anniversaryServices.map((service) => (
                    <div
                      key={service}
                      className="flex items-center gap-3 text-sm font-medium text-white/85"
                    >
                      <CheckCircle2
                        size={19}
                        className="shrink-0 text-secondary"
                      />
                      {service}
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-sm leading-relaxed text-white/70 sm:text-base">
                  We meet the need for a skilled Anniversary Photographer in
                  Mumbai. Our specialized Anniversary Event Photography
                  Andheri blends photojournalism with classic portraiture.
                </p>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-white hover:text-primary"
                >
                  Book our heartfelt Anniversary Photography in Andheri now!
                  <ArrowRight size={17} />
                </Link>
              </div>

              <div className="relative">
                <div className="absolute inset-5 rounded-[2.5rem] bg-secondary/10 blur-3xl" />

                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                    <Image
                      src="/wedding/Page_00.webp"
                      alt="Anniversary and couple photography by Max Photo Studio"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMPLETE PHOTOGRAPHY SERVICES TABLE */}

        <section className="bg-slate-50 py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-6 md:px-12">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-secondary sm:tracking-[0.4em]">
                Our Packages
              </span>

              <h2 className="mt-4 text-3xl font-heading font-extrabold text-primary md:text-4xl lg:text-5xl">
                Our Complete Photography Services
              </h2>

              <p className="mt-5 text-base leading-relaxed text-slate-600">
                We design our packages in the following table:
              </p>
            </div>

            <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-lg shadow-primary/5">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[680px] border-collapse text-left">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="px-6 py-5 text-sm font-bold">
                        Service Feature
                      </th>
                      <th className="px-6 py-5 text-sm font-bold">
                        What We Deliver
                      </th>
                      <th className="px-6 py-5 text-sm font-bold">
                        Best Suited For
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {serviceTable.map((service, index) => (
                      <tr
                        key={service.feature}
                        className={
                          index % 2 === 0
                            ? "bg-white"
                            : "bg-slate-50/80"
                        }
                      >
                        <td className="border-b border-slate-100 px-6 py-6 align-top">
                          <span className="font-heading text-sm font-extrabold leading-relaxed text-primary">
                            {service.feature}
                          </span>
                        </td>

                        <td className="border-b border-slate-100 px-6 py-6 align-top">
                          <div className="space-y-3">
                            {service.deliver.map((item) => (
                              <div
                                key={item}
                                className="flex items-start gap-2 text-sm leading-relaxed text-slate-600"
                              >
                                <CheckCircle2
                                  size={16}
                                  className="mt-0.5 shrink-0 text-secondary"
                                />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </td>

                        <td className="border-b border-slate-100 px-6 py-6 align-top">
                          <div className="space-y-3">
                            {service.suitable.map((item) => (
                              <div
                                key={item}
                                className="flex items-start gap-2 text-sm leading-relaxed text-slate-600"
                              >
                                <Heart
                                  size={15}
                                  className="mt-0.5 shrink-0 text-secondary"
                                />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* SIMPLE BOOKING PROCESS */}

        <section className="bg-white py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-6 md:px-12">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-secondary sm:tracking-[0.4em]">
                Easy Event Planning
              </span>

              <h2 className="mt-4 text-3xl font-heading font-extrabold text-primary md:text-4xl lg:text-5xl">
                Simple Booking Process at Max Photo Studio
              </h2>

              <p className="mt-5 text-base leading-relaxed text-slate-600">
                We arrive early on your big day, handle the visual coverage,
                and let you enjoy your party.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {bookingSteps.map((step) => (
                <article
                  key={step.number}
                  className="rounded-[1.75rem] border border-slate-100 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 sm:p-8"
                >
                  <span className="text-5xl font-black text-secondary/25">
                    {step.number}
                  </span>

                  <h3 className="mt-5 text-xl font-heading font-extrabold text-primary">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="mb-6 text-base font-medium text-slate-600">
                Book our Birthday and Anniversary Photography in Andheri
                East today
              </p>

              <Link
                href="https://www.maxphotostudio.in/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-white transition-all hover:bg-secondary"
              >
                Reach out through Max Photo Studio
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

        <section className="relative overflow-hidden bg-primary py-16 text-white md:py-20 lg:py-24">
          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />

          <div className="container relative z-10 mx-auto px-6 text-center md:px-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-secondary">
              <Heart size={29} />
            </div>

            <span className="mt-7 block text-xs font-bold uppercase tracking-[0.35em] text-secondary sm:tracking-[0.45em]">
              Max Photo Studio
            </span>

            <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-heading font-extrabold leading-tight md:text-5xl">
              Make Every Birthday and Anniversary Unforgettable
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
              Preserve your celebration, family smiles, and special
              milestones with Max Photo Studio in Andheri East.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-8 py-4 text-sm font-bold text-white transition-all hover:bg-white hover:text-primary"
              >
                <CalendarDays size={17} />
                Book Your Photography
              </Link>

              <Link
                href="/gallery"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-white hover:text-primary"
              >
                Explore Our Gallery
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
