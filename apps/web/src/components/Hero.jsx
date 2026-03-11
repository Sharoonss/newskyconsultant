import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ChevronLeft, ChevronRight, Building2, FileText, Home as HomeIcon,
  GraduationCap, BookOpen, Settings, Shield, Award, Users, Target,
  Briefcase, TrendingUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Hero = () => {
  const [currentDestination, setCurrentDestination] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "left" ? -340 : 340, behavior: "smooth" });
    }
  };
  // Add this ref at the top of your component (alongside scrollRef)
const testimonialRef = useRef(null);

// Update testimonials array with headline field
  return (
    <>
      <Helmet>
        <title>Sky Consultants - Certified Education & Migration Consultants</title>
        <meta name="description" content="Your trusted partner for education, migration, and sponsorship opportunities in Australia. Expert guidance for visa assistance, admissions, and more." />
      </Helmet>

      <div className="min-h-screen">

        {/* Hero Section */}
       <section className="bg-white py-10 mt-[80px]">
  <div className="max-w-7xl mx-auto px-6">
    <div className="relative rounded-2xl overflow-hidden">

      {/* Background Image */}
      <img
        src="https://i.ibb.co/MDNNWx96/Subtract.png"
        alt="Sydney Opera House"
        className="w-full h-[520px]  object-right md:object-[70%_center]"
      />

      <div className="absolute inset-0"></div>

      <div className="absolute inset-0 flex items-center">
        <div className="max-w-xl px-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-white text-5xl font-bold leading-tight mb-5"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Certified Education &amp; <br /> Migration Consultants
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-gray-300 text-base mb-8 leading-relaxed"
          >
            Sky Consultant – Your Trusted Partner for Education,<br />
            Migration, and Sponsorship Opportunities in Australia.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="bg-[#B11212] hover:bg-[#8f0f0f] text-white px-10 py-3 rounded-lg font-semibold text-base tracking-wide"
          >
            Contact Now
          </motion.button>
        </div>
      </div>

      {/* Floating Canada Card */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.35 }}
        className="absolute bottom-1 right-0 bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.25)] p-5 w-[275px]"
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <img
              src="https://flagcdn.com/w40/ca.png"
              alt="Canada flag"
              className="w-7 h-5 rounded-sm object-cover"
            />
            <h3 className="font-bold text-lg text-gray-900">Canada</h3>
          </div>

          <div className="flex items-center gap-1">
            <button className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M7.5 9L4.5 6L7.5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <button className="w-7 h-7 rounded-full bg-[#B11212] flex items-center justify-center text-white hover:bg-[#8f0f0f] transition">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <p className="text-gray-500 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vestibulum vitae urna vel velit facilisis placerat
        </p>
      </motion.div>

    </div>
  </div>
</section>


      </div>
    </>
  );
};

export default Hero;