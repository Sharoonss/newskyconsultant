
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Save to localStorage
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    submissions.push({
      ...formData,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

    // Show success message
    toast({
      title: "Success!",
      description: "Your message has been sent. We'll get back to you soon!",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: 'Level 5, 123 Collins Street, Melbourne VIC 3000, Australia'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+61 3 9123 4567'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@skyconsultants.com.au'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      content: 'Monday - Friday: 9:00 AM - 6:00 PM'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Sky Consultants</title>
        <meta name="description" content="Get in touch with Sky Consultants for expert education and migration guidance. We're here to help you achieve your goals." />
      </Helmet>

      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
              <h1 className="text-5xl font-bold mb-6">Get in Touch with Sky Consultants</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Have questions? We're here to help you every step of the way
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                <Card className="shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl">Send us a Message</CardTitle>
                    <CardDescription>Fill out the form below and we'll get back to you as soon as possible</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="name" className="text-gray-900">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="mt-1 bg-white text-gray-900"
                          placeholder="Your full name"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-gray-900">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="mt-1 bg-white text-gray-900"
                          placeholder="your.email@example.com"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone" className="text-gray-900">Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="mt-1 bg-white text-gray-900"
                          placeholder="+61 XXX XXX XXX"
                        />
                      </div>

                      <div>
                        <Label htmlFor="subject" className="text-gray-900">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="mt-1 bg-white text-gray-900"
                          placeholder="What is this regarding?"
                        />
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-gray-900">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="mt-1 bg-white text-gray-900"
                          placeholder="Tell us how we can help you..."
                        />
                      </div>

                      <Button type="submit" className="w-full bg-[#8B1A1A] hover:bg-[#6B1414] text-white py-6 text-lg">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Information */}
              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
                  
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="bg-[#8B1A1A] text-white p-3 rounded-lg">
                            <info.icon className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg text-gray-900 mb-1">{info.title}</h3>
                            <p className="text-gray-600">{info.content}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  {/* Map Placeholder */}
                  <Card className="shadow-lg overflow-hidden">
                    <div className="h-64 bg-gray-200 flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-600">Map Location</p>
                        <p className="text-sm text-gray-500">Melbourne CBD, Australia</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
