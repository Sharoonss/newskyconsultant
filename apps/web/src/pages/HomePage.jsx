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
import Destination from "@/components/Destination";
import CoreServices from '@/components/CoreServices';
import FAQSection from '@/components/FAQSection';
const HomePage = () => {
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

  const services = [
    { title: 'Admission Services', description: 'Expert guidance for university admissions worldwide', icon: Building2, dark: true },
    { title: 'Visa Assistance', description: 'Complete visa application support and documentation', icon: FileText, dark: false },
    { title: 'Accommodation', description: 'Find the perfect place to stay during your studies', icon: HomeIcon, dark: false },
    { title: 'Professional Course', description: 'Career-focused courses for professional development', icon: GraduationCap, dark: false },
    { title: 'English Test Prep', description: 'IELTS, TOEFL, and PTE preparation courses', icon: BookOpen, dark: true },
    { title: 'NAATI CCL Services', description: 'Certified translation and interpretation services', icon: Settings, dark: false },
    { title: 'Health Insurance', description: 'Comprehensive health coverage for international students', icon: Shield, dark: false },
    { title: 'Skills Assessment', description: 'Professional skills evaluation for migration', icon: Award, dark: false },
  ];

  const features = [
    { title: 'Expert Guidance', icon: Users },
    { title: 'Ongoing Support', icon: Target },
    { title: 'Comprehensive Services', icon: Briefcase },
    { title: 'Proven Track Record', icon: TrendingUp, highlight: true },
    { title: 'Personalized Solutions', icon: Users },
    { title: 'Trusted Partnerships', icon: Target },
    { title: 'Comprehensive Services', icon: Briefcase },
    { title: 'Proven Track Record', icon: TrendingUp },
  ];

  const blogs = [
    { title: 'Study in Canada: Complete Guide 2025', date: 'March 5, 2026', image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=800', description: 'Everything you need to know about studying in Canada' },
    { title: 'Top Universities in Australia', date: 'March 3, 2026', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800', description: 'Discover the best universities down under' },
    { title: 'Visa Application Tips', date: 'March 1, 2026', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800', description: 'Expert tips for a successful visa application' },
  ];

  // Add this ref at the top of your component (alongside scrollRef)
const testimonialRef = useRef(null);

// Update testimonials array with headline field
const testimonials = [
  {
    name: 'Sophia Williams',
    role: 'Student',
    headline: 'Sky Consultant made my dream of studying in Australia a reality.',
    text: 'Exceptional service throughout my entire study abroad process. Their team\'s professionalism and on-time guidance made the entire process smooth. Thanks to their expert support',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
  },
  {
    name: 'Rafael Gomez',
    role: 'Skilled Worker',
    headline: 'Amazing support for my migration process!',
    text: 'Working with Sky Consultant has been a fantastic experience. They took the time to understand my situation and provided solutions for my visa application. I am grateful for their support',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    name: 'Emma Williams',
    role: 'Student, RMIT University',
    headline: 'From admission to accommodation, handled everything!',
    text: 'From admission to accommodation, Sky Consultants handled everything professionally. I felt supported every step of the way.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
  },
  {
    name: 'Michael Chen',
    role: 'Professional, Melbourne',
    headline: 'Navigated the complex migration process with ease.',
    text: 'The team helped me navigate the complex migration process with ease. I highly recommend their services to anyone looking to move to Australia.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
  },
];

  return (
    <>
      <Helmet>
        <title>Sky Consultants - Certified Education & Migration Consultants</title>
        <meta name="description" content="Your trusted partner for education, migration, and sponsorship opportunities in Australia. Expert guidance for visa assistance, admissions, and more." />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Component */}
        <Hero />
        {/* Hero Section */}
               < Destination />

        {/* Core Services Section */}
        <CoreServices />

        {/* Why Choose Section */}
<section className="py-20 bg-[#f5f5f7]">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-14 items-start">

      {/* Left Image */}
      <div className="relative">
        <img
          src="https://i.ibb.co/5Xh2VjTH/Subtract-1.png"
          alt="Golden Gate Bridge"
          className="rounded-3xl  w-[550px] h-[600px]"
        />

        {/* Arrow Button */}
        <div className="absolute -top-4 right-6 w-14 h-14 bg-[#8B1A1A] text-white rounded-full flex items-center justify-center shadow-lg">
          ↗
        </div>
      </div>

      {/* Right Content */}
      <div>

        <span className="bg-[#e9e9ef] text-[#6b6b8a] text-sm px-4 py-1 rounded-full">
          Why Choose Sky Consultant?
        </span>

        <h2 className="text-4xl font-semibold text-[#8B1A1A] mt-4 leading-snug">
          Your Trusted Partner for a Smooth <br />
          Australian Transition
        </h2>

        <p className="text-gray-600 mt-5 leading-relaxed">
          Sky Consultant is a registered consultancy firm that provides
          complete support to make your immigration and education journey
          smooth. Thousands of students, professionals, and migrants trust us
          to provide expert guidance every step of the way.
        </p>

        {/* Top Feature Cards */}
        <div className="grid grid-cols-2 gap-6 mt-8">

          <div className="bg-white rounded-xl p-6 border shadow-sm">
            <div className="text-[#8B1A1A] text-2xl mb-3">🎯</div>
            <h4 className="font-semibold text-gray-900 mb-2">
              Expert Guidance
            </h4>
            <p className="text-sm text-gray-500">
              Our certified migration and education consultants stay updated
              with immigration laws and visa requirements.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border shadow-sm">
            <div className="text-[#8B1A1A] text-2xl mb-3">🔄</div>
            <h4 className="font-semibold text-gray-900 mb-2">
              Ongoing Support
            </h4>
            <p className="text-sm text-gray-500">
              Our support doesn't stop after visa approval. We assist with
              accommodation, career guidance and more.
            </p>
          </div>

        </div>
      </div>

    </div>


    {/* Bottom Cards */}
    <div className="grid md:grid-cols-4 gap-6 mt-12">

      <div className="bg-white p-6 rounded-xl border shadow-sm">
        <div className="text-[#1E3A8A] text-2xl mb-3">👤</div>
        <h4 className="font-semibold text-gray-900 mb-2">
          Personalized Solutions
        </h4>
        <p className="text-sm text-gray-500">
          Whether you're a student or professional, we craft strategies
          tailored to your goals.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl border shadow-sm">
        <div className="text-[#1E3A8A] text-2xl mb-3">☑</div>
        <h4 className="font-semibold text-gray-900 mb-2">
          Trusted Partnerships
        </h4>
        <p className="text-sm text-gray-500">
          We collaborate with universities and service providers for
          better opportunities.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl border shadow-sm">
        <div className="text-[#1E3A8A] text-2xl mb-3">⚙</div>
        <h4 className="font-semibold text-gray-900 mb-2">
          Comprehensive Services
        </h4>
        <p className="text-sm text-gray-500">
          From admissions to immigration support, we provide complete
          assistance.
        </p>
      </div>

      <div className="bg-[#8B1A1A] p-6 rounded-xl text-white shadow-lg">
        <div className="text-2xl mb-3">📊</div>
        <h4 className="font-semibold mb-2">
          Proven Track Record
        </h4>
        <p className="text-sm text-white/80">
          With years of experience helping students and migrants succeed,
          our results speak for themselves.
        </p>
      </div>

    </div>

  </div>
</section>

        {/* Blog Section */}
       <section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* Header */}
    <div className="mb-10">
      <span className="inline-block border border-gray-300 text-gray-600 text-sm px-4 py-1 rounded-full mb-3">
        Our Blogs
      </span>
      <div className="flex items-center justify-between">
        <h2 className="text-4xl font-bold text-[#1a1a4b]" style={{ fontFamily: "Georgia, serif" }}>
          Go Through our Recent Blogs Articles
        </h2>
        <Link
          to="/blog"
          className="text-[#B11212] hover:text-[#8f0f0f] font-semibold text-base whitespace-nowrap ml-8"
        >
          See All Articles →
        </Link>
      </div>
    </div>

    {/* Blog List */}
    <div className="flex flex-col gap-6">
      {blogs.map((blog, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex gap-8 items-start group cursor-pointer"
        >
          {/* Left: Image with date badge */}
          <div className="relative flex-shrink-0 w-[280px] h-[180px] rounded-2xl overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <span className="absolute top-3 left-3 bg-white text-gray-700 text-xs font-medium px-3 py-1 rounded-full shadow">
              {blog.date}
            </span>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col justify-center py-2">
            <h3
              className="text-xl font-bold text-[#1a1a4b] mb-3 group-hover:text-[#B11212] transition-colors"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {blog.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
              {blog.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>

  </div>
</section>

       
< FAQSection />

        {/* Success Stories Section */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* Header */}
    <div className="mb-10">
      <span className="inline-block border border-gray-300 text-gray-600 text-sm px-4 py-1 rounded-full mb-3">
        Success Stories
      </span>
      <div className="flex items-center justify-between">
        <h2 className="text-4xl font-bold text-[#1a1a4b]" style={{ fontFamily: "Georgia, serif" }}>
          Look at our Successful Results
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => testimonialRef.current?.scrollBy({ left: -520, behavior: "smooth" })}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => testimonialRef.current?.scrollBy({ left: 520, behavior: "smooth" })}
            className="w-10 h-10 rounded-full bg-[#B11212] flex items-center justify-center text-white hover:bg-[#8f0f0f] transition"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>

    {/* Scrollable Cards */}
    <div
      ref={testimonialRef}
      className="flex gap-6 overflow-x-auto pb-2 scroll-smooth"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex-shrink-0 w-[480px] flex items-stretch bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
        >
          {/* Left: Portrait Image */}
          <div className="w-[170px] flex-shrink-0">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Content */}
          <div className="flex flex-col justify-between p-6 flex-1">
            <div>
              <p className="font-bold text-gray-900 text-sm leading-snug mb-3">
                {testimonial.headline}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>

            {/* Divider + Name */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="font-semibold text-[#B11212] text-sm">{testimonial.name}</p>
              <p className="text-gray-500 text-xs mt-0.5">{testimonial.role}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

        {/* CTA Section */}
        <section className="py-20 bg-[#f4f4f4]">
  <div className="max-w-7xl mx-auto px-6">

    <div className="relative rounded-2xl overflow-hidden">

      {/* Background Image */}
      <img
        src="https://horizons-cdn.hostinger.com/ce47f01a-4864-4c27-9dfc-a6a64bd0dfe1/816b00e9d0b90baedaa4c88c6412b5bb.png"
        alt="Airplane wing view"
        className="w-full h-[320px] object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Connect With Us Now!
          </h2>

          <p className="text-gray-200 text-sm md:text-base mb-8 leading-relaxed">
            Our team of expert consultants is always here to provide personalized
            guidance and support tailored to your unique needs. Whether you have
            questions about student visas, migration processes, or accommodation,
            we are just a call away. Reach out to us today and start your Australian
            journey with confidence!
          </p>

          <Button
            asChild
            className="bg-[#B11212] hover:bg-[#8f0f0f] text-white px-8 py-3 rounded-lg text-sm font-medium"
          >
            <Link to="/contact">Connect with Sky Consultant</Link>
          </Button>
        </motion.div>
      </div>

    </div>
  </div>
</section>

      </div>
    </>
  );
};

export default HomePage;