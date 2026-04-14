import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";
import { Plus, Minus, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ | Max Photo Mumbai",
  description: "Frequently asked questions about Max Photo wedding photography, films, and booking process in Mumbai.",
};

export default function FAQPage() {
  const faqs = [
    {
      q: "Do you cover weddings outside Mumbai?",
      a: "Yes, we cover weddings and events across Mumbai and selected travel locations. We love destination weddings and are happy to travel to preserve your special moments."
    },
    {
      q: "How early should we book?",
      a: "It is best to book as early as possible, especially for peak wedding seasons (November to February). Most couples book our services 6 to 12 months in advance."
    },
    {
      q: "Do you provide albums and films?",
      a: "Yes, we offer both premium handcrafted heirloom albums and cinematic wedding films. Our films are edited to tell a story, and our albums are designed to last for generations."
    },
    {
      q: "Can we customize the package?",
      a: "Yes, packages can be tailored based on event type, coverage needs, and deliverables. We understand that every wedding is unique and we're happy to create a custom solution for you."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      
      <main className="flex-grow pt-32">
        {/* Header Section */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6 md:px-12 text-center">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-secondary mb-8 mx-auto shadow-sm">
                <HelpCircle size={32} />
            </div>
            <h1 className="text-5xl md:text-8xl font-heading font-extrabold text-primary mb-10 tracking-tighter leading-tight">
              Frequently Asked <br /><span className="text-secondary italic">Questions</span>
            </h1>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 md:px-12 max-w-4xl">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group"
                >
                  <h3 className="text-2xl font-heading font-extrabold text-primary mb-6 flex justify-between items-center group-hover:text-secondary transition-colors">
                    {faq.q}
                  </h3>
                  <p className="text-lg text-slate-500 leading-relaxed font-light">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-24 bg-primary text-white text-center">
             <div className="container mx-auto px-6">
                <h2 className="text-3xl font-heading font-extrabold mb-8 italic">Still have questions?</h2>
                <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">We're here to help you understand every part of the process.</p>
                <a href="/contact" className="inline-block px-12 py-5 bg-secondary text-white rounded-full font-bold text-lg hover:scale-105 transition-transform active:scale-95 shadow-2xl">
                    Ask Us Anything
                </a>
             </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
