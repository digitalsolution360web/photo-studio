"use client";

import { useState } from "react";
import { Send, Calendar, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export function InquiryForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    eventType: "Select Option",
    details: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Add a 1.5s delay to make it feel more professional and "official"
      await new Promise(resolve => setTimeout(resolve, 1500));

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          phone: "",
          date: "",
          eventType: "Select Option",
          details: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (status === "success") {
    return (
      <div className="bg-white p-10 md:p-14 rounded-[3.5rem] border border-slate-100 shadow-2xl shadow-primary/5 text-center space-y-8 animate-in fade-in zoom-in duration-500">
        <div className="relative mx-auto w-24 h-24">
          <div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-20"></div>
          <div className="relative w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 size={48} />
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-3xl font-heading font-extrabold text-primary">Inquiry Received</h3>
          <p className="text-slate-500 leading-relaxed max-w-sm mx-auto font-light">
            Thank you for choosing <span className="text-secondary font-bold">Max Photo Studio</span>. Your details have been securely transmitted to our team.
          </p>
          <div className="pt-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Expect a response within 12-24 hours
            </div>
          </div>
        </div>
        <button 
          onClick={() => setStatus("idle")}
          className="px-10 py-4 bg-primary text-white rounded-full font-bold hover:bg-secondary transition-all shadow-lg active:scale-95"
        >
          Back to Form
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-10 md:p-14 rounded-[3.5rem] border border-slate-100 shadow-2xl shadow-primary/5">
      <div className="mb-10 space-y-2">
        <h3 className="text-2xl font-heading font-extrabold text-primary">Inquiry Form</h3>
        <p className="text-slate-400 text-sm">Fields marked with * are required.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-extrabold text-primary ml-4">Full Name *</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Rahul Sharma" 
              className="w-full px-8 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-secondary/20 transition-all font-medium text-primary" 
              required 
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-extrabold text-primary ml-4">Phone Number *</label>
            <input 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +91 98765 43210" 
              className="w-full px-8 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-secondary/20 transition-all font-medium text-primary" 
              required 
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-extrabold text-primary ml-4">Event Date</label>
            <div className="relative">
              <input 
                type="date" 
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full pl-14 pr-8 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-secondary/20 transition-all font-medium text-primary" 
              />
              <Calendar size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-extrabold text-primary ml-4">Event Flow</label>
            <select 
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              className="w-full px-8 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-secondary/20 transition-all font-medium text-primary appearance-none"
            >
              <option>Select Option</option>
              <option>Wedding & Reception</option>
              <option>Pre-Wedding Session</option>
              <option>Social Event</option>
              <option>Custom Package</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest font-extrabold text-primary ml-4">Details & Venue *</label>
          <textarea 
            name="details"
            value={formData.details}
            onChange={handleChange}
            rows={4} 
            placeholder="Tell us about your celebration..." 
            className="w-full px-8 py-6 rounded-[2rem] bg-slate-50 border-none focus:ring-2 focus:ring-secondary/20 transition-all font-medium text-primary" 
            required 
          ></textarea>
        </div>

        {status === "error" && (
          <div className="flex items-center gap-3 p-4 bg-red-50 text-red-600 rounded-2xl text-sm">
            <AlertCircle size={18} />
            <p>Something went wrong. Please try again or contact us directly.</p>
          </div>
        )}

        <button 
          type="submit" 
          disabled={status === "loading"}
          className="w-full py-5 bg-primary text-white rounded-full font-extrabold text-lg hover:bg-secondary transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 active:scale-95 group disabled:opacity-70"
        >
          {status === "loading" ? (
            <>
              <Loader2 size={20} className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Inquiry
              <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </>
          )}
        </button>

        <p className="text-center text-[10px] text-slate-400 uppercase tracking-widest">
          We typically respond within 12-24 hours.
        </p>
      </form>
    </div>
  );
}
