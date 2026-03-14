"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Eye } from "lucide-react";
import ContactForm from "@/components/ui/ContactForm";
import PageTransition from "@/components/ui/PageTransition";
import { personalInfo } from "@/data/portfolio";

const contactLinks = [
  {
    icon: Github,
    label: "GitHub",
    value: "@ShivaniMishra726",
    href: personalInfo.github,
    color: "hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Shivani Mishra",
    href: personalInfo.linkedin,
    color: "hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20",
  },
  {
    icon: Mail,
    label: "College Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: "hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20",
  },
];

export default function ContactPage() {
  const [phoneRevealed, setPhoneRevealed] = useState(false);

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16 px-4 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="section-title">Get In Touch</h1>
          <p className="section-subtitle">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Left: Contact form */}
          <div>
            <h2 className="font-heading font-semibold text-xl text-gray-900 dark:text-white mb-6">
              Send a Message
            </h2>
            <ContactForm />
          </div>

          {/* Right: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="font-heading font-semibold text-xl text-gray-900 dark:text-white">
              Contact Info
            </h2>

            {/* Links */}
            <div className="space-y-3">
              {contactLinks.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`flex items-center gap-4 p-4 glass-card transition-all ${contact.color}`}
                >
                  <div className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800">
                    <contact.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">
                      {contact.label}
                    </div>
                    <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                      {contact.value}
                    </div>
                  </div>
                </a>
              ))}

              {/* Phone (hidden behind reveal) */}
              <div className="p-4 glass-card">
                <div className="flex items-center gap-4">
                  <div className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800">
                    <Phone className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider mb-0.5">
                      Phone
                    </div>
                    {phoneRevealed ? (
                      <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                        {/* Replace with actual phone number */}
                        +91 XXXXX XXXXX
                      </div>
                    ) : (
                      <button
                        onClick={() => setPhoneRevealed(true)}
                        className="flex items-center gap-1.5 text-sm text-primary-500 font-medium hover:text-primary-600 transition-colors"
                      >
                        <Eye className="w-4 h-4" /> Reveal Contact
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Response time */}
            <div className="glass-card p-5">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  Usually responds within 24 hours
                </span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Currently open to internships, collaborations, and interesting projects.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
