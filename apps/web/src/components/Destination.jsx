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
import Hero from '@/components/Hero';
const Destination = () => {
  const [currentDestination, setCurrentDestination] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "left" ? -340 : 340, behavior: "smooth" });
    }
  };

  const destinations = [
    {
      name: "Study in Australia",
      desc: "Access quality education, post-study work rights, and PR pathways",
      image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80",
    },
    {
      name: "Study in UK",
      desc: "Find prestigious institutes and work options after graduation",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
    },
    {
      name: "Study in USA",
      desc: "Explore diverse programs and top-ranked institutes",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80",
    },
    {
      name: "Study in Canada",
      desc: "World-class universities and post-graduation work permits",
      image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&q=80",
    },
    {
      name: "Study in Europe",
      desc: "Affordable tuition and rich cultural experiences across Europe",
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80",
    },
  ];



  return (
    <>
      <Helmet>
        <title>Sky Consultants - Certified Education & Migration Consultants</title>
        <meta name="description" content="Your trusted partner for education, migration, and sponsorship opportunities in Australia. Expert guidance for visa assistance, admissions, and more." />
      </Helmet>

      <div className="min-h-screen">
        {/* Top Destinations Section */}
        <section className="py-14 px-6 max-w-7xl mx-auto">
          <div className="mb-6">
            <span className="inline-block border border-gray-300 text-gray-600 text-sm px-4 py-1 rounded-full mb-3">
              Countries
            </span>
            <div className="flex items-center justify-between">
              <h2 className="text-4xl font-bold text-[#1a1a4b]" style={{ fontFamily: "Georgia, serif" }}>
                Top Destinations To Study Aboard
              </h2>
              <div className="flex gap-2">
                <button
                  onClick={() => scroll("left")}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => scroll("right")}
                  className="w-10 h-10 rounded-full bg-[#B11212] flex items-center justify-center text-white hover:bg-[#8f0f0f] transition"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-2 scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {destinations.map((dest, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative flex-shrink-0 w-[310px] h-[420px] rounded-2xl overflow-hidden cursor-pointer group"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4 bg-white text-gray-800 text-sm font-medium px-4 py-1.5 rounded-full shadow">
                  Try it Now
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white text-2xl font-bold mb-1" style={{ fontFamily: "Georgia, serif" }}>
                    {dest.name}
                  </h3>
                  <p className="text-gray-300 text-sm leading-snug">{dest.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Destination;