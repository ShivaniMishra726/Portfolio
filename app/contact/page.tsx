"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Eye, ArrowUpRight } from "lucide-react";
import ContactForm from "@/components/ui/ContactForm";
import PageTransition from "@/components/ui/PageTransition";
import { personalInfo } from "@/data/portfolio";

const contactLinks = [
  {
    icon: Github,
    label: "GitHub",
    value: "@ShivaniMishra726",
    href: personalInfo.github,
    color: "hover:text-gray-900 dark:hover:text-white",
    bg: "hover:bg-gray-50 dark:hover:bg-white/5",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Shivani Mishra",
    href: personalInfo.linkedin,
    color: "hover:text-blue-600 dark:hover:text-blue-400",
    bg: "hover:bg-blue-50/50 dark:hover:bg-blue-900/10",
  },
  {
    icon: Mail,
    label: "College Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: "hover:text-primary-500",
    bg: "hover:bg-primary-50/50 dark:hover:bg-primary-900/10",
  },
];

export default function ContactPage() {
  const [phoneRevealed, setPhoneRevealed] = useState(false);

  return (
    <PageTransition>
      <div className="min-h-screen pt-28 pb-20 px-4 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h1 className="section-title">Get In Touch</h1>
          <p className="section-subtitle">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left: Contact form (3 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <h2 className="font-heading font-semibold text-sm text-gray-900 dark:text-white mb-5 uppercase tracking-widest">
              Send a Message
            </h2>
            <ContactForm />
          </motion.div>

          {/* Right: Contact info (2 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 space-y-4"
          >
            <h2 className="font-heading font-semibold text-sm text-gray-900 dark:text-white uppercase tracking-widest">
              Contact Info
            </h2>

            {/* Links */}
            <div className="space-y-2">
              {contactLinks.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`flex items-center gap-3 p-4 glass-card group transition-all duration-200 ${contact.bg} ${contact.color}`}
                >
                  <div className="p-2 rounded-lg bg-gray-100/80 dark:bg-white/8 border border-gray-200/60 dark:border-white/8">
                    <contact.icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] text-gray-400 dark:text-gray-500 font-medium uppercase tracking-widest">
                      {contact.label}
                    </div>
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-200 truncate">
                      {contact.value}
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-60 transition-opacity flex-shrink-0" />
                </a>
              ))}

              {/* Phone (hidden behind reveal) */}
              <div className="p-4 glass-card">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gray-100/80 dark:bg-white/8 border border-gray-200/60 dark:border-white/8">
                    <Phone className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] text-gray-400 dark:text-gray-500 font-medium uppercase tracking-widest mb-0.5">
                      Phone
                    </div>
                    {phoneRevealed ? (
                      <div className="text-sm font-medium text-gray-700 dark:text-gray-200">
                        +91 XXXXX XXXXX
                      </div>
                    ) : (
                      <button
                        onClick={() => setPhoneRevealed(true)}
                        className="flex items-center gap-1.5 text-sm text-primary-500 font-medium hover:text-primary-600 transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" /> Reveal Contact
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Response time */}
            <div className="glass-card p-5 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent" />
              <div className="relative flex items-center gap-2 mb-1.5">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  Available
                </span>
              </div>
              <p className="text-xs text-gray-400 dark:text-gray-500 leading-relaxed">
                Open to internships, collaborations, and interesting projects. Usually responds within 24 hours.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
