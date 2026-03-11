
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building2, FileText, Home as HomeIcon, GraduationCap, BookOpen, Settings, Shield, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesPage = () => {
  const services = [
    {
      title: 'Admission Services',
      icon: Building2,
      description: 'Navigate the complex university admission process with our expert guidance. We help you choose the right institution and program that aligns with your career goals.',
      benefits: [
        'University selection assistance',
        'Application preparation and review',
        'Document verification and submission',
        'Scholarship guidance',
        'Course selection counseling'
      ]
    },
    {
      title: 'Visa Assistance',
      icon: FileText,
      description: 'Complete support for your visa application process. Our experienced team ensures your application is accurate, complete, and submitted on time.',
      benefits: [
        'Visa category assessment',
        'Document preparation and checklist',
        'Application form assistance',
        'Interview preparation',
        'Post-visa support'
      ]
    },
    {
      title: 'Accommodation',
      icon: HomeIcon,
      description: 'Find safe, comfortable, and affordable accommodation near your university. We help you settle into your new home away from home.',
      benefits: [
        'On-campus housing assistance',
        'Off-campus apartment search',
        'Homestay arrangements',
        'Lease agreement support',
        'Roommate matching services'
      ]
    },
    {
      title: 'Professional Course',
      icon: GraduationCap,
      description: 'Access career-focused professional courses designed to enhance your skills and improve your employability in the global job market.',
      benefits: [
        'Industry-recognized certifications',
        'Practical skill development',
        'Career counseling',
        'Internship opportunities',
        'Job placement assistance'
      ]
    },
    {
      title: 'English Test Prep',
      icon: BookOpen,
      description: 'Comprehensive preparation for IELTS, TOEFL, and PTE exams. Our expert instructors help you achieve the scores you need for admission and visa requirements.',
      benefits: [
        'Personalized study plans',
        'Practice tests and materials',
        'Speaking and writing feedback',
        'Test-taking strategies',
        'Score improvement guarantee'
      ]
    },
    {
      title: 'NAATI CCL Services',
      icon: Settings,
      description: 'Prepare for the NAATI CCL test to gain additional points for your Australian PR application. Our certified trainers provide comprehensive preparation.',
      benefits: [
        'Expert NAATI trainers',
        'Mock test sessions',
        'Language pair specialization',
        'Cultural context training',
        'Post-test support'
      ]
    },
    {
      title: 'Health Insurance',
      icon: Shield,
      description: 'Secure comprehensive health coverage that meets visa requirements. We help you choose the right insurance plan for your needs and budget.',
      benefits: [
        'OSHC policy comparison',
        'Coverage customization',
        'Claims assistance',
        'Policy renewal support',
        'Emergency medical guidance'
      ]
    },
    {
      title: 'Skills Assessment',
      icon: Award,
      description: 'Professional skills assessment services for migration purposes. We guide you through the assessment process with relevant authorities.',
      benefits: [
        'Assessment body identification',
        'Document preparation',
        'Application submission',
        'Follow-up and tracking',
        'Appeal assistance if needed'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Sky Consultants</title>
        <meta name="description" content="Comprehensive education and migration services including admissions, visa assistance, accommodation, test preparation, and more." />
      </Helmet>

      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
              <h1 className="text-5xl font-bold mb-6">Our Comprehensive Services</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From admission to settlement, we provide end-to-end support for your education and migration journey
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="space-y-12">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                      <div className={`${index % 2 === 0 ? 'bg-[#0F172A]' : 'bg-[#8B1A1A]'} text-white p-8 flex flex-col justify-center items-center text-center`}>
                        <service.icon className="h-20 w-20 mb-4" />
                        <h3 className="text-2xl font-bold">{service.title}</h3>
                      </div>
                      
                      <div className="lg:col-span-2 p-8">
                        <p className="text-lg text-gray-700 mb-6">{service.description}</p>
                        
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits:</h4>
                        <ul className="space-y-3">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-[#8B1A1A] mr-2 text-xl">✓</span>
                              <span className="text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#0F172A] text-white">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how we can help you achieve your education and migration goals
            </p>
            <Button asChild className="bg-[#8B1A1A] hover:bg-[#6B1414] text-white px-10 py-6 text-lg rounded-lg">
              <Link to="/contact">Contact Us Now</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;
