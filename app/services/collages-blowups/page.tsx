import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";
import { CollagesContent } from "./CollagesContent";

export const metadata: Metadata = {
   title: "Custom Collages & Photo Blow-Ups | Max Photo Mumbai",
   description: "Create stunning wall-ready photo compositions and large-scale blow-ups. Custom designs for gifting, home decor, and professional displays.",
};

export default function CollagesBlowupsPage() {
   return (
      <div className="flex flex-col min-h-screen bg-white selection:bg-secondary selection:text-white overflow-x-hidden">
         <Navbar />
         <CollagesContent />
         <Footer />
      </div>
   );
}
