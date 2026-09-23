
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "The Max Photo Studio Official | Achieve Elegant Event Photography in Andheri Mumbai",
  description:
    "Make an appointment for the best event photography in Andheri, Mumbai. For both intimate gatherings and large business galas, Max Photo Studio offers natural moments, colorful photos, and prompt delivery.",
};

const whyChooseUs = [
  {
    title: "Candid and Traditional Harmony",
    text: "We photograph joyful unscripted laughter, yet we never ignore classic family group portraits.",
  },
  {
    title: "High-End Camera Gear",
    text: "Our team shoots on full-frame cameras with cinema lighting, and we always carry backup gear.",
  },
  {
    title: "Over Three Decades of Legacy",
    text: "We have documented celebrations across Maharashtra for over thirty-three years.",
  },
  {
    title: "Speedy Delivery",
    text: "We edit your pictures with care, and we deliver digital galleries swiftly.",
  },
];

const eventTypes = [
  {
    number: "01",
    title: "1. Engagements and Weddings",
    text: "Heartfelt care is required for weddings. We record the boisterous energy of the dance floor, while our cameras catch the silent, anxious looks. You receive heritage album prints, frank laughs, and beautiful pictures.",
  },
  {
    number: "02",
    title: "2. Brand Launches and Corporate Galas",
    text: "Clean, crisp images are necessary for business conferences. We take pictures of networking events, executive awards, and keynote speakers. Your business program won't be interrupted while our staff travels silently across the meeting room.",
  },
  {
    number: "03",
    title: "3. Celebrations for birthdays and anniversaries",
    text: "Generations get together on milestone birthdays. Our team, who also takes pictures of the cake cutting, captures every happy toast on camera. For many years to come, these pictures will be cherished family mementos.",
  },
  {
    number: "04",
    title: "4. Cultural Gatherings and Society Functions",
    text: "Capture the celebration of tradition in Andheri with ease. Our professionals understand the assignment and use lenses to capture vivid colors, stage performances, and festive decor.",
  },
];

const processSteps = [
  "You share your schedule, venue details, and key guest list with us.",
  "Our shooters arrive early, scout lighting, and document the entire occasion smoothly.",
  "We balance colors, sharpen key frames, and polish every selected photograph.",
  "You receive a secure cloud link, and we design handcrafted leather albums upon request.",
];

const faqs = [
  {
    question:
      "Is it possible for us to offer a selection of essential photos for our celebration?",
    answer:
      "Yes, a prioritized checklist of important occasions, VIP visitors, and family members is appreciated. This guarantees that our photographers capture your specific goals without overlooking important turning points.",
  },
  {
    question:
      "How are our digital images safeguarded from event-related hardware malfunctions?",
    answer:
      "Our cameras instantly create an on-site copy by recording concurrently to two memory cards. Once the shot is over, we move all files to encrypted cloud and physical storage.",
  },
  {
    question:
      "After the shoot, do you offer all unaltered RAW image files?",
    answer:
      "We don't offer RAW files; we only supply completed, color-balanced JPEGs. In addition to saving you the trouble of sifting through thousands of test frames, professional curation preserves visual consistency.",
  },
  {
    question:
      "On the day of the event, how do you handle unexpected schedule overruns?",
    answer:
      "On-the-spot shooting hours might be extended, and overtime is charged for each extra hour. You never feel hurried since our staff waits until your important festivities are over.",
  },
  {
    question: "If a team member falls ill, what is your backup plan?",
    answer:
      "An ongoing internal roster of skilled photographers is maintained by Max Photo Studio. Your event coverage continues uninterrupted as a fully equipped colleague steps in right away.",
  },
  {
    question:
      "Do we own all commercial and private rights to the images?",
    answer:
      "You are granted unlimited rights for social media sharing, framing, and personal printing. Standard commercial licensing is provided to corporate clients for news releases, internal PR, and marketing materials.",
  },
];

export default function EventPhotographyPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Navbar />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative isolate overflow-hidden bg-primary text-white">
        <div className="absolute inset-0">
          <Image
            src="/samford-album/Samford Ro.webp"
            alt="Event photography in Andheri Mumbai"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-slate-950/75" />

          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-primary/40" />
        </div>

        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-5 py-24 sm:px-8 lg:px-10">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-md">
              Event Photography in Andheri Mumbai
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              From Candids to Keepsakes: Trusted Event Photography in Andheri
              Mumbai
            </h1>

            <div className="mt-7 h-1 w-20 rounded-full bg-secondary" />

            <p className="mt-7 max-w-3xl text-base leading-8 text-white/80 sm:text-lg">
              Every celebration holds real magic. So, we ensure to grab every
              single detail. Max Photo Studio brings thirty-three years of
              visual storytelling to your special occasions.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-secondary px-7 py-3.5 font-semibold text-white transition hover:opacity-90"
              >
                Book Your Event Photography
              </Link>

              <a
                href="tel:+919820685643"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
              >
                Call +91 9820685643
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
            <Image
              src="/aeron-album/Aaron Album.webp"
              alt="Event photography in Andheri"
              width={900}
              height={700}
              className="h-[480px] w-full object-cover"
            />

            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-slate-950/75 p-5 text-white backdrop-blur-md">
              <p className="font-semibold">Thirty-Three Years of Legacy</p>

              <p className="mt-1 text-sm text-white/70">
                Visual storytelling with a timeless artistic vision.
              </p>
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Event Photography
            </p>

            <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              From Candids to Keepsakes: Trusted Event Photography in Andheri
              Mumbai
            </h2>

            <div className="mt-5 h-1 w-16 rounded-full bg-secondary" />

            <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
              <p>
                Every celebration holds real magic. So, we ensure to grab every
                single detail. Max Photo Studio brings thirty-three years of
                visual storytelling to your special occasions. Our objective is
                to capture the visuals of social events, gatherings, and
                special milestones.
              </p>

              <p>
                As a reliable{" "}
                <a
                  href="/event-photography"
                  className="font-semibold text-primary underline decoration-secondary underline-offset-4"
                >
                  Event Photographer in Andheri
                </a>
                , our team is always on time to keep beautiful moments alive
                forever. We combine modern technology with classic artistic
                vision. You will cherish the final photo collection for
                decades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY CHOOSE US
      ========================================================= */}
      <section className="bg-slate-950 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-secondary">
              Why Choose Us
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Why Choose Us for Event Photography in Andheri Mumbai
            </h2>

            <div className="mt-5 h-1 w-16 rounded-full bg-secondary" />

            <p className="mt-6 leading-8 text-white/70">
              A celebration brings people together. That’s why your big day
              requires skilled hands. That’s why local expertise with a
              knowledgeable crew matters. In Andheri,{" "}
              <a
                href="https://www.maxphotostudio.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white underline underline-offset-4"
              >
                Max Photo’s
              </a>{" "}
              crew arrives early at every venue and delivers the following:
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, index) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-7 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.09]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-sm font-bold text-white">
                  0{index + 1}
                </div>

                <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>

                <p className="mt-4 text-sm leading-7 text-white/65">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-4xl leading-8 text-white/70">
            We take pride in our craft, and we treat every client like family.
            So, we prioritize quality coverage as it remains a primary aspect
            of our event photography service.
          </p>
        </div>
      </section>

      {/* =========================================================
          COMPLETE VISUAL COVERAGE
      ========================================================= */}
      <section className="bg-slate-100 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-4xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Complete Visual Coverage
            </p>

            <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              Complete Visual Coverage for Every Gathering
            </h2>

            <div className="mt-5 h-1 w-16 rounded-full bg-secondary" />

            <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
              <p>
                Andheri East is a busy place where you will notice many grand
                ballrooms, luxury hotels, and corporate parks. We are the
                premier Event Photographer in Andheri East, who know the local
                banquet spaces intimately.
              </p>

              <p>
                Our experienced{" "}
                <strong>Professional Photographer in Andheri Mumbai</strong>{" "}
                understands the situation and works seamlessly with a unique
                rhythm at different occasions:
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {eventTypes.map((item) => (
              <div
                key={item.number}
                className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-sm font-bold text-white">
                    {item.number}
                  </div>

                  <div className="text-2xl font-bold text-secondary">
                    +
                  </div>
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PACKAGES
      ========================================================= */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              The Max Photo Solution
            </p>

            <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              Tailored Event Photography Services in Andheri | The Max Photo
              Solution
            </h2>

            <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-secondary" />

            <p className="mt-6 leading-8 text-slate-600">
              We design custom Event Photography Services in Andheri for both
              private homes and massive luxury banquets.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-[2rem] border border-slate-200 shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse text-left">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-6 py-5 font-semibold">
                      Service Feature
                    </th>

                    <th className="px-6 py-5 font-semibold">
                      Basic Celebration Package
                    </th>

                    <th className="px-6 py-5 font-semibold">
                      Premium Gala Package
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-6 py-5 font-semibold text-slate-900">
                      Photographer Crew
                    </td>

                    <td className="px-6 py-5 text-slate-600">
                      1 Candid Photographer
                    </td>

                    <td className="px-6 py-5 text-slate-600">
                      2 Candid + 1 Traditional Shooter
                    </td>
                  </tr>

                  <tr className="bg-slate-50">
                    <td className="px-6 py-5 font-semibold text-slate-900">
                      Coverage Duration
                    </td>

                    <td className="px-6 py-5 text-slate-600">
                      Up to 4 Hours
                    </td>

                    <td className="px-6 py-5 text-slate-600">
                      Full Event Day (8+ Hours)
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-5 font-semibold text-slate-900">
                      Deliverables
                    </td>

                    <td className="px-6 py-5 text-slate-600">
                      High-Res Digital Gallery
                    </td>

                    <td className="px-6 py-5 text-slate-600">
                      Curated Album + 4K Teaser Film
                    </td>
                  </tr>

                  <tr className="bg-slate-50">
                    <td className="px-6 py-5 font-semibold text-slate-900">
                      Best For
                    </td>

                    <td className="px-6 py-5 text-slate-600">
                      Birthdays & Anniversaries
                    </td>

                    <td className="px-6 py-5 text-slate-600">
                      Weddings & Corporate Summits
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-primary/10 bg-primary/[0.04] p-6 text-center">
            <p className="leading-8 text-slate-700">
              Looking for dedicated{" "}
              <strong>Event Photography in Andheri East</strong>? At Max Photo
              Studio, we encourage prompt communication, transparent package
              rates, and complete peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================= */}
      <section className="bg-slate-950 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-4xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-secondary">
              Our Work Process
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Trusted Event Photography Services in Andheri East
            </h2>

            <div className="mt-5 h-1 w-16 rounded-full bg-secondary" />

            <p className="mt-6 leading-8 text-white/70">
              Our <strong>Professional Event Photography Andheri</strong>{" "}
              packages guarantee high aesthetic standards on every assignment.
            </p>

            <p className="mt-4 leading-8 text-white/70">
              The following steps are our simple work process:
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div
                key={step}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-sm font-bold text-white">
                  {index + 1}
                </div>

                <p className="mt-6 leading-7 text-white/75">{step}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-4xl leading-8 text-white/70">
            We deliver outstanding Event Photography Services in Andheri East.
            You focus on hosting your guests, and our cameras handle the rest.
          </p>
        </div>
      </section>

      {/* =========================================================
          BOOK YOUR EVENT
      ========================================================= */}
      <section className="bg-slate-100 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="overflow-hidden rounded-[2rem] bg-primary shadow-2xl">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-8 text-white sm:p-12 lg:p-14">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl font-bold text-secondary">
                  +
                </div>

                <h2 className="mt-7 text-3xl font-bold leading-tight sm:text-4xl">
                  Book Your Event Photography in Andheri Mumbai Today
                </h2>

                <div className="mt-5 h-1 w-16 rounded-full bg-secondary" />

                <div className="mt-7 space-y-5 leading-8 text-white/75">
                  <p>
                    Many clients look for top Event Photographers in Mumbai,
                    and they choose Max Photo Studio. We do not rely on stiff
                    poses. Other than that, we let your guests relax, laugh,
                    and celebrate naturally.
                  </p>

                  <p>
                    Max Photo Studio guarantees reliable visual coverage,
                    creative angles, and respectful service.
                  </p>

                  <p>
                    Remember, our <strong>Event Photography Mumbai</strong> is
                    truly vibrant and memorable.
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="tel:+919820685643"
                    className="inline-flex items-center justify-center rounded-full bg-secondary px-7 py-3.5 font-semibold text-white transition hover:opacity-90"
                  >
                    Direct Call: +91 9820685643
                  </a>

                  <a
                    href="https://www.maxphotostudio.in/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-3.5 font-semibold text-white transition hover:bg-white/20"
                  >
                    Inquiry Form
                  </a>
                </div>
              </div>

              <div className="relative min-h-[360px]">
                <Image
                  src="/samford-album/Samford Ro.webp"
                  alt="Max Photo Studio event photography"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-slate-950/30" />

                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-slate-950/70 p-5 text-white backdrop-blur-md">
                  <p className="text-sm text-white/70">
                    Official Website
                  </p>

                  <a
                    href="https://www.maxphotostudio.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block font-semibold underline underline-offset-4"
                  >
                    https://www.maxphotostudio.in/
                  </a>

                  <a
                    href="https://maps.app.goo.gl/ahPtL6Wz1TSgdzAq9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm font-semibold text-secondary underline underline-offset-4"
                  >
                    Find Our Studio Here!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Frequently Asked Questions
            </p>

            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>

            <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-secondary" />
          </div>

          <div className="mt-12 space-y-5">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-7"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    Q
                  </div>

                  <div>
                    <h3 className="text-lg font-bold leading-7 text-slate-900">
                      {faq.question}
                    </h3>

                    <p className="mt-4 leading-8 text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-xl font-bold">
            +
          </div>

          <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
            Let Your Guests Celebrate Naturally
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/65">
            Max Photo Studio guarantees reliable visual coverage, creative
            angles, and respectful service.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="tel:+919820685643"
              className="inline-flex items-center justify-center rounded-full bg-secondary px-8 py-3.5 font-semibold text-white transition hover:opacity-90"
            >
              +91 9820685643
            </a>

            <a
              href="https://www.maxphotostudio.in/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3.5 font-semibold text-white transition hover:bg-white/20"
            >
              Contact Max Photo
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
