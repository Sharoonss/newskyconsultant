
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [visiblePosts, setVisiblePosts] = useState(6);

  const blogPosts = [
    {
      title: 'Complete Guide to Studying in Australia 2026',
      date: 'March 8, 2026',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
      description: 'Everything you need to know about pursuing higher education in Australia, from choosing universities to visa requirements.',
      slug: 'study-australia-guide-2026'
    },
    {
      title: 'Student Visa Application: Step-by-Step Process',
      date: 'March 5, 2026',
      category: 'Visa',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
      description: 'A comprehensive guide to the Australian student visa application process, including required documents and timelines.',
      slug: 'student-visa-application-guide'
    },
    {
      title: 'Top 10 Universities in Canada for International Students',
      date: 'March 3, 2026',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=800',
      description: 'Discover the best Canadian universities offering world-class education and excellent opportunities for international students.',
      slug: 'top-universities-canada'
    },
    {
      title: 'IELTS Preparation Tips: Achieve Your Target Score',
      date: 'March 1, 2026',
      category: 'Test Prep',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800',
      description: 'Expert tips and strategies to help you prepare for the IELTS exam and achieve the score you need for admission.',
      slug: 'ielts-preparation-tips'
    },
    {
      title: 'Understanding Australian PR Pathways',
      date: 'February 28, 2026',
      category: 'Migration',
      image: 'https://images.unsplash.com/photo-1569098644584-210bcd375b59?w=800',
      description: 'Explore different pathways to Australian permanent residency and find the one that suits your profile.',
      slug: 'australian-pr-pathways'
    },
    {
      title: 'Cost of Living for Students in Melbourne',
      date: 'February 25, 2026',
      category: 'Student Life',
      image: 'https://images.unsplash.com/photo-1514395462725-fb4566210144?w=800',
      description: 'A detailed breakdown of living expenses for international students in Melbourne, including accommodation and daily costs.',
      slug: 'cost-living-melbourne'
    },
    {
      title: 'Scholarship Opportunities for International Students',
      date: 'February 22, 2026',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800',
      description: 'Discover various scholarship programs available for international students studying in Australia and how to apply.',
      slug: 'scholarship-opportunities'
    },
    {
      title: 'Working While Studying in Australia',
      date: 'February 20, 2026',
      category: 'Student Life',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800',
      description: 'Learn about work rights for international students, part-time job opportunities, and balancing work with studies.',
      slug: 'working-while-studying'
    },
    {
      title: 'Health Insurance Guide for International Students',
      date: 'February 18, 2026',
      category: 'Student Life',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
      description: 'Everything you need to know about Overseas Student Health Cover (OSHC) and choosing the right insurance plan.',
      slug: 'health-insurance-guide'
    }
  ];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayedPosts = filteredPosts.slice(0, visiblePosts);

  const loadMore = () => {
    setVisiblePosts(prev => prev + 3);
  };

  return (
    <>
      <Helmet>
        <title>Blog - Sky Consultants</title>
        <meta name="description" content="Read our latest articles about education, migration, visa tips, and opportunities in Australia and beyond." />
      </Helmet>

      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
              <h1 className="text-5xl font-bold mb-6">Our Blog Articles</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Stay updated with the latest insights on education, migration, and student life
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 py-6 text-lg bg-white text-gray-900"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedPosts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                      <Badge className="absolute top-4 left-4 bg-[#8B1A1A] text-white">{post.category}</Badge>
                    </div>
                    <CardHeader className="flex-grow">
                      <div className="flex items-center text-sm text-gray-600 mb-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        {post.date}
                      </div>
                      <CardTitle className="text-xl hover:text-[#8B1A1A] transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription>{post.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="ghost" className="text-[#8B1A1A] hover:text-[#6B1414] p-0">
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Load More Button */}
            {visiblePosts < filteredPosts.length && (
              <div className="text-center mt-12">
                <Button onClick={loadMore} className="bg-[#8B1A1A] hover:bg-[#6B1414] text-white px-8 py-6 text-lg">
                  Load More Articles
                </Button>
              </div>
            )}

            {/* No Results */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">No articles found matching your search.</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;
