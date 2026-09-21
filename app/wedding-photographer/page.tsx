import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
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
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Exploring the Best Portfolio: Max Photo Studio is the Ultimate Solution for a Talent-Packed Wedding Photographer in Andheri Mumbai",
  description:
    "Make no mistake. Find your top wedding photographer in Andheri Mumbai at Max Photo Studio. Book now!",
};

const localAdvantages = [
  {
    icon: <MapPin size={24} />,
    title: "Knowledge of Top Local Venues:",
    description:
      "We navigate the busy streets and understand venue lighting conditions.",
  },
  {
    icon: <Clock3 size={24} />,
    title: "Punctual and Stress-Free Logistics",
    description:
      "We navigate the busy streets and understand venue lighting conditions.",
  },
  {
    icon: <Heart size={24} />,
    title: "Understanding of Rituals",
    description:
      "We navigate the busy streets and understand venue lighting conditions.",
  },
];

const photographyStyles = [
  {
    icon: <Camera size={25} />,
    number: "01",
    title: "Candid Wedding Photography Mumbai",
    description:
      "Candid Wedding Photography Mumbai",
    points: [
      "Focuses on raw and genuine emotions.",
      "Capture a stolen glance between the couple, and we frame the proud tears of parents.",
      "Never feel forced to smile unnaturally.",
    ],
  },
  {
    icon: <Film size={25} />,
    number: "02",
    title: "Cinematic Wedding Films Mumbai",
    description:
      "Create cinematic wedding films Mumbai.",
    points: [
      "Create cinematic wedding films Mumbai.",
      "Gives a vibe of real movies.",
      "Relive your wedding story just like a feature film.",
    ],
  },
  {
    icon: <Sparkles size={25} />,
    number: "03",
    title: "Pre-Wedding Photoshoot Mumbai",
    description:
      "Comprehensive pre-wedding photoshoot Mumbai",
    points: [
      "Comprehensive pre-wedding photoshoot Mumbai",
      "Freedom for clients to choose their destinations",
      "Makes you comfortable throughout the entire shoot",
    ],
  },
];

const bookingTips = [
  {
    number: "1.",
    title: "Review Full Wedding Albums:",
    description:
      "Do not look only at social media highlights. Ask to see complete albums from single weddings.",
  },
  {
    number: "2.",
    title: "Meet the Lead Photographer:",
    description:
      "Connect with the exact artists who will handle your event. A friendly connection makes everyone feel relaxed.",
  },
  {
    number: "3.",
    title: "Clarify Deliverables and Timelines:",
    description:
      "Always confirm delivery dates for your photo previews, final edits, and printed photo books.",
  },
];

const faqs = [
  {
    question:
      "After our wedding, do we get all unaltered RAW picture files?",
    answer:
      "To uphold our creative standards, most professional studios provide only hand-selected, fully color-graded photographs. Unfinished digital negatives are known as RAW files, although you can occasionally request them for an extra charge.",
  },
  {
    question:
      "What would happen if our designated lead photographer were ill on that particular day?",
    answer:
      "Reputable photography studios have committed backup photographers available for last-minute crises. Without changing your contractual coverage approach, a backup shooter who is well-prepared may step in with ease.",
  },
  {
    question:
      "How do you manage backup equipment and avoid unintentional data loss at events?",
    answer:
      "Dual-card slot cameras are used by our team to quickly write images to two different cards. Following every wedding event, we also save many offline copies on safe hard drives.",
  },
  {
    question:
      "What is your policy on meals, travel, and unexpected overtime?",
    answer:
      "Venue travel, basic crew lunches, and hourly overtime costs are all clearly outlined in client contracts. Before you confirm any event extensions, you are always given clear billing conditions.",
  },
  {
    question:
      "Is it possible for us to offer a personalized shot list with certain family photographs and details?",
    answer:
      "Yes, couples are encouraged to provide a well-chosen list of significant ceremonies and VIP family members. This guarantees that during crowded celebration hours, no important rite or elderly family member is overlooked.",
  },
];

export default function WeddingPhotographerAndheriPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white selection:bg-secondary selection:text-white">
      <Navbar />

      <main className="flex-grow pt-24">

        {/* =========================================================
            HERO SECTION
        ========================================================= */}

        <section className="relative overflow-hidden bg-[#09090b] text-white">
          <div className="absolute inset-0">
            <Image
              src="/samford-album/Samford Ro.webp"
              alt="Wedding Photographer in Andheri Mumbai"
              fill
              priority
              className="object-cover opacity-35"
              sizes="100vw"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-primary" />
          </div>

          <div className="relative z-10 container mx-auto px-6 py-16 md:px-12 md:py-20 lg:py-24">
            <div className="max-w-3xl">

              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-secondary" />

                <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-secondary">
                  Wedding Photography Mumbai
                </span>
              </div>

              <h1 className="max-w-3xl text-3xl font-heading font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                Wedding Photographer
                <span className="block bg-gradient-to-r from-secondary to-white bg-clip-text text-transparent">
                  in Andheri Mumbai
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/65 md:text-base">
                Never miss a single moment of your wedding. Yes, it’s time to
                capture all of your beautiful and memorable moments through a
                digital lens.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-bold text-white transition-all hover:bg-white hover:text-primary"
                >
                  Book Your Wedding
                  <ArrowRight size={17} />
                </Link>

                <Link
                  href="/gallery"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white hover:text-primary"
                >
                  Explore Portfolio
                </Link>
              </div>

              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/55">
                <span className="flex items-center gap-2">
                  <Heart size={14} className="text-secondary" />
                  Candid Moments
                </span>

                <span className="flex items-center gap-2">
                  <Film size={14} className="text-secondary" />
                  Cinematic Films
                </span>

                <span className="flex items-center gap-2">
                  <Camera size={14} className="text-secondary" />
                  Wedding Stories
                </span>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================
            INTRODUCTION
        ========================================================= */}

        <section className="bg-white py-20 md:py-24">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

              <div className="relative">
                <div className="absolute -left-5 -top-5 h-32 w-32 rounded-full bg-secondary/10 blur-3xl" />

                <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-[0_25px_70px_rgba(0,0,0,0.15)]">
                  <Image
                    src="/aeron-album/Aaron Album.webp"
                    alt="Max Photo Studio Wedding Photography"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                <div className="absolute -bottom-7 -right-4 rounded-[2rem] bg-primary px-7 py-6 text-white shadow-2xl md:-right-8">
                  <p className="text-3xl font-extrabold">33+</p>

                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                    Years Experience
                  </p>
                </div>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-secondary">
                  Your Moments. Our Lens.
                </span>

                <h2 className="mt-5 text-3xl font-heading font-extrabold leading-tight text-primary md:text-5xl">
                  How to Choose the Best Wedding Photographer in Andheri Mumbai
                  for Your Big Day
                </h2>

                <div className="mt-6 h-1 w-16 rounded-full bg-secondary" />

                <div className="mt-7 space-y-5 text-base leading-relaxed text-slate-500 md:text-lg">

                  <p>
                    Never miss a single moment of your wedding. Yes, it’s time
                    to capture all of your beautiful and memorable moments
                    through a digital lens. Yes, it's Max Photo Studio, known
                    for its amazing work in wedding photography in Mumbai.
                  </p>

                  <p>
                    Yes, we never fail to preserve these precious memories. We
                    turn your wedding photography into exceptional visual
                    artistry. So, when you have the he right{" "}
                    <strong className="font-semibold text-primary">
                      wedding photographer in Andheri Mumbai
                    </strong>
                    , you won’t face any challenge.
                  </p>

                </div>

                <Link
                  href="/gallery"
                  className="mt-8 inline-flex items-center gap-2 font-bold text-primary transition-colors hover:text-secondary"
                >
                  Explore our masterpieces by clicking here!
                  <ArrowRight size={18} />
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================
            WHY DEDICATED PHOTOGRAPHER
        ========================================================= */}

        <section className="relative overflow-hidden bg-slate-50 py-20 md:py-24">
          <div className="container relative z-10 mx-auto px-6 md:px-12">

            <div className="mx-auto mb-14 max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-secondary">
                Andheri Wedding Photography
              </span>

              <h2 className="mt-4 text-3xl font-heading font-extrabold leading-tight text-primary md:text-5xl">
                Why You Need a Dedicated Wedding Photographer in Andheri Mumbai
              </h2>

              <p className="mt-5 text-base leading-relaxed text-slate-500 md:text-lg">
                Andheri is the lively heart of Mumbai's celebrations. The right
                photography and an experienced crew of photographers can make
                memories grand and elegant. From various venues to different
                outdoor pre- and post-wedding shoots, we do it all.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {localAdvantages.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-[2rem] border border-slate-100 bg-white p-8 shadow-xl shadow-primary/5 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 text-secondary transition-all group-hover:bg-primary group-hover:text-white">
                    {item.icon}
                  </div>

                  <h3 className="mt-6 text-xl font-heading font-extrabold text-primary">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-500">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-slate-500 md:text-lg">
              When you hire Max Photo Studio, you will experience the
              following:
            </p>

            <div className="mt-6 text-center text-sm font-semibold text-primary">
              Knowledge of Top Local Venues:
              <span className="mx-2">•</span>
              Punctual and Stress-Free Logistics
              <span className="mx-2">•</span>
              Understanding of Rituals
            </div>

            <div className="mt-10 text-center">
              <p className="mb-6 text-base leading-relaxed text-slate-500 md:text-lg">
                We navigate the busy streets and understand venue lighting
                conditions. Contact us now to experience the best wedding
                photography at the right price range.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-white transition-all hover:bg-secondary"
              >
                Contact Us
                <ArrowRight size={17} />
              </Link>
            </div>

          </div>
        </section>

        {/* =========================================================
            STUDIO DIFFERENCE
        ========================================================= */}

        <section className="relative overflow-hidden bg-primary py-20 text-white md:py-28">
          <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />

          <div className="container relative z-10 mx-auto px-6 md:px-12">
            <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

              <div>
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-secondary">
                  The Max Photo Difference
                </span>

                <h2 className="mt-5 text-3xl font-heading font-extrabold leading-tight md:text-5xl">
                  What Makes Our Wedding Photography Studio Mumbai Stand Out?
                </h2>

                <p className="mt-6 max-w-xl text-base leading-relaxed text-white/55 md:text-lg">
                  As a premier{" "}
                  <strong className="font-semibold text-white">
                    wedding photography studio Mumbai
                  </strong>
                  , Mas Studionorganize from start to end about the sessions
                  of photography. We blend modern technology with creative
                  storytelling. Our high-end cameras, fast lenses, and
                  dedicated lighting gear can bring memories to life.
                </p>

                <p className="mt-6 max-w-xl text-base leading-relaxed text-white/55 md:text-lg">
                  Our team captures every smile, tear, and dance move with
                  crisp clarity. We treat every wedding as an artistic project,
                  and we never use a one-size-fits-all approach.
                </p>

              </div>

              <div className="relative">
                <div className="absolute inset-6 rounded-[2.5rem] bg-secondary/10 blur-3xl" />

                <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-2">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
                    <Image
                      src="/samford-album/Samford Ro.webp"
                      alt="Wedding Photography Studio Mumbai"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================
            PHOTOGRAPHY STYLES
        ========================================================= */}

        <section className="bg-white py-20 md:py-24">
          <div className="container mx-auto px-6 md:px-12">

            <div className="mx-auto mb-14 max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-secondary">
                Our Photography Styles
              </span>

              <h2 className="mt-4 text-3xl font-heading font-extrabold text-primary md:text-5xl">
                Key Photography Styles for Your Celebration
              </h2>

              <p className="mt-5 text-base leading-relaxed text-slate-500 md:text-lg">
                In our list of elegant wedding photography, we specialize in
                the following categories. The experience will be different as
                we produce a completely new vibe for the entire session.
              </p>

              <p className="mt-4 text-base leading-relaxed text-slate-500 md:text-lg">
                With our team, we ensure a complete visual archive of your
                celebration.
              </p>
            </div>

            <div className="grid gap-7 lg:grid-cols-3">
              {photographyStyles.map((style) => (
                <div
                  key={style.title}
                  className="group relative overflow-hidden rounded-[2.5rem] border border-slate-100 bg-slate-50 p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-primary"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-secondary shadow-sm transition-all group-hover:bg-white/10">
                      {style.icon}
                    </div>

                    <span className="text-5xl font-black text-primary/5 group-hover:text-white/5">
                      {style.number}
                    </span>
                  </div>

                  <h3 className="mt-8 text-xl font-heading font-extrabold text-primary group-hover:text-white">
                    {style.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-slate-500 group-hover:text-white/60">
                    {style.description}
                  </p>

                  <div className="mt-7 space-y-3">
                    {style.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-start gap-2 text-sm text-slate-600 group-hover:text-white/75"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  {style.number === "03" && (
                    <Link
                      href="/services/pre-wedding"
                      className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-secondary"
                    >
                      Pre-Wedding Photoshoot Mumbai
                      <ArrowRight size={16} />
                    </Link>
                  )}
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* =========================================================
            ANDHERI EAST SECTION
        ========================================================= */}

        <section className="bg-slate-50 py-20 md:py-24">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">

              <div className="relative overflow-hidden rounded-[2.5rem] bg-primary p-8 text-white md:p-12">
                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-secondary/10 blur-3xl" />

                <div className="relative z-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-secondary">
                    <Users size={26} />
                  </div>

                  <p className="mt-8 text-5xl font-black text-secondary">
                    Every
                  </p>

                  <p className="mt-1 text-3xl font-heading font-extrabold">
                    Story Matters.
                  </p>

                  <p className="mt-6 text-sm leading-relaxed text-white/55">
                    If you are searching for the{" "}
                    <strong className="font-semibold text-white">
                      best wedding photographers Andheri East
                    </strong>
                    , we can handle large guest lists and high-profile
                    functions.
                  </p>
                </div>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-secondary">
                  Local Wedding Expertise
                </span>

                <h2 className="mt-4 text-3xl font-heading font-extrabold leading-tight text-primary md:text-5xl">
                  Why Couples Choose the Best Wedding Photographers Andheri
                  East
                </h2>

                <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-500 md:text-lg">

                  <p>
                    If you are searching for the{" "}
                    <strong className="font-semibold text-primary">
                      best wedding photographers Andheri East
                    </strong>
                    , we can handle large guest lists and high-profile
                    functions.
                  </p>

                  <p>
                    From pre-wedding to your reception, we cover it all. Our
                    skilled team manages family portraits quickly, so your
                    guests can enjoy the delicious food without long delays.
                  </p>

                </div>

              </div>

            </div>
          </div>
        </section>

        {/* =========================================================
            BOOKING TIPS
        ========================================================= */}

        <section className="bg-white py-20 md:py-24">
          <div className="container mx-auto px-6 md:px-12">

            <div className="mx-auto mb-14 max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-secondary">
                Before You Book
              </span>

              <h2 className="mt-4 text-3xl font-heading font-extrabold text-primary md:text-5xl">
                Essential Tips Before Booking Your Photographer
              </h2>

              <p className="mt-5 text-base leading-relaxed text-slate-500 md:text-lg">
                Choosing your photography team is an important decision. Follow
                these helpful tips to secure the right professionals:
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {bookingTips.map((tip) => (
                <div
                  key={tip.number}
                  className="rounded-[2rem] border border-slate-100 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
                >
                  <span className="text-5xl font-black text-secondary/20">
                    {tip.number}
                  </span>

                  <h3 className="mt-5 text-xl font-heading font-extrabold text-primary">
                    {tip.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-slate-500">
                    {tip.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* =========================================================
            PORTFOLIO CTA
        ========================================================= */}

        <section className="relative overflow-hidden bg-primary py-20 text-white md:py-28">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/samford-album/Samford Ro.webp"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>

          <div className="absolute inset-0 bg-primary/80" />

          <div className="relative z-10 container mx-auto px-6 text-center md:px-12">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-secondary backdrop-blur-md">
              <Camera size={30} />
            </div>

            <span className="mt-7 block text-xs font-bold uppercase tracking-[0.45em] text-secondary">
              Max Photo Studio
            </span>

            <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-heading font-extrabold leading-tight md:text-5xl lg:text-6xl">
              Book Max Photo Studio
              <span className="block text-secondary">
                for Your Dream Wedding
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/55 md:text-lg">
              Are you looking for a trusted wedding photographer in Andheri
              Mumbai? Visit Max Photo Studio today to view our portfolio and
              reserve your wedding dates.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

              <Link
                href="/"
                className="rounded-full bg-white px-8 py-4 text-sm font-bold text-primary transition-all hover:bg-secondary hover:text-white"
              >
                Visit Max Photo Studio
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white hover:text-primary"
              >
                Contact us now for reservation!
              </Link>

            </div>

          </div>
        </section>

        {/* =========================================================
            FAQ SECTION
        ========================================================= */}

        <section className="bg-slate-50 py-20 md:py-24">
          <div className="container mx-auto max-w-4xl px-6 md:px-12">

            <div className="mb-12 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-secondary">
                FAQs
              </span>

              <h2 className="mt-4 text-3xl font-heading font-extrabold text-primary md:text-5xl">
                FAQs
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 font-heading font-bold text-primary md:px-7">
                    <span>{faq.question}</span>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-50 text-secondary transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <div className="border-t border-slate-100 px-6 py-5 text-sm leading-relaxed text-slate-500 md:px-7">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>

          </div>
        </section>

        {/* =========================================================
            FINAL CTA
        ========================================================= */}

        <section className="bg-white py-20 text-center md:py-24">
          <div className="container mx-auto px-6">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
              <Heart size={27} />
            </div>

            <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-heading font-extrabold leading-tight text-primary md:text-5xl">
              Book Max Photo Studio for Your Dream Wedding
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-500 md:text-lg">
              Are you looking for a trusted wedding photographer in Andheri
              Mumbai? Visit Max Photo Studio today to view our portfolio and
              reserve your wedding dates.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

              <Link
                href="/"
                className="rounded-full bg-primary px-9 py-4 text-sm font-bold text-white transition-all hover:bg-secondary"
              >
                Visit Max Photo Studio
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-slate-200 bg-white px-9 py-4 text-sm font-bold text-primary transition-all hover:border-primary hover:bg-slate-50"
              >
                Contact us now for reservation!
              </Link>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}