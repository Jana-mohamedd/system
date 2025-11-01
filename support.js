mport { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MessageCircle, Clock, Shield, Users, Award, ChevronRight, Search, FileText, Video, Calendar, Headphones, ArrowRight } from 'lucide-react';

function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const supportCategories = [
    { id: 'all', name: 'All Support', icon: Headphones },
    { id: 'technical', name: 'Technical Support', icon: Shield },
    { id: 'clinical', name: 'Clinical Support', icon: Users },
    { id: 'training', name: 'Training', icon: Award },
  ];

  const supportOptions = [
    {
      title: '24/7 Emergency Support',
      description: 'Round-the-clock assistance for critical system issues',
      icon: Phone,
      contact: '1-800-MEDICAL',
      availability: '24/7',
      priority: 'high'
    },

    {
      title: 'Severe Email Support',
      description: 'Detailed assistance for non-urgent inquiries',
      icon: Mail,
      contact: 'support@clinicalsystem.com',
      availability: 'Response within 4 hours',
      priority: 'low'
    },

  ];

  const faqs = [
    {
      question: 'How do I reset my clinical system password?',
      answer: 'You can reset your password by clicking "Forgot Password" link on login page. You will receive a secure reset link via email within 5 minutes. For immediate assistance, contact our 24/7 support line.'
    },
    {
      question: 'What are the system requirements for the clinical platform?',
      answer: 'Our clinical system requires: Windows 10/11 or macOS 10.15+, 8GB RAM minimum, 2GHz processor, and a stable internet connection (10 Mbps+). Mobile apps are available for iOS 13+ and Android 8+.'
    },
    {
      question: 'How do I access patient training materials?',
      answer: 'Training materials are available in the Resources section of your dashboard. Navigate to Help > Training Materials to access video tutorials, user guides, and best practice documentation.'
    },
    {
      question: 'Is my patient data secure and HIPAA compliant?',
      answer: 'Yes, our system exceeds HIPAA compliance standards with end-to-end encryption, regular security audits, and SOC 2 Type II certification. All data is stored in secure, redundant facilities with 24/7 monitoring.'
    },
    {
      question: 'How can I schedule a training session for my team?',
      answer: 'Contact our training team at training@clinicalsystem.com or use the scheduling portal in your admin dashboard. We offer both on-site and remote training sessions tailored to your organization\'s needs.'
    }
  ];

  const resources = [
    { title: 'User Manual', icon: FileText, description: 'Comprehensive system guide' },
    { title: 'Video Tutorials', icon: Video, description: 'Step-by-step visual guides' },
    { title: 'Training Calendar', icon: Calendar, description: 'Upcoming training sessions' },
    { title: 'System Status', icon: Shield, description: 'Real-time system updates' }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-neutral-50 to-amber-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-stone-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-stone-400 to-stone-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-semibold text-gray-900 italic text-sm tracking-wide">JORY CLINIC</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                System Status: <span className="text-green-600 font-medium">Operational</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-50 via-neutral-50 to-amber-50 text-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-stone-100/40 to-amber-100/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight italic text-gray-900">
              JORY CLINIC
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed italic">
              We are here for your help. Our certified clinical specialists are here to ensure your practice runs smoothly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-stone-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-stone-600 transition-colors flex items-center justify-center space-x-2 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                <span>Emergency: 1-800-MEDICAL</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-stone-700 px-8 py-4 rounded-xl font-semibold hover:bg-stone-50 transition-colors flex items-center justify-center space-x-2 border-2 border-stone-300 shadow-lg"
              >

              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Support Channels</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Multiple ways to connect with our expert support team</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-stone-200"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  option.priority === 'high' ? 'bg-stone-100' : 
                  option.priority === 'medium' ? 'bg-neutral-100' : 'bg-amber-50'
                }`}>
                  <option.icon className={`w-6 h-6 ${
                    option.priority === 'high' ? 'text-stone-600' : 
                    option.priority === 'medium' ? 'text-neutral-600' : 'text-amber-600'
                  }`} />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{option.title}</h4>
                <p className="text-gray-600 mb-4 text-sm">{option.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-900">{option.contact}</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock className="w-3 h-3 mr-1" />
                    {option.availability}
                  </div>
                </div>
                <button className="mt-4 w-full bg-gradient-to-r from-stone-500 to-stone-600 text-white py-2 rounded-lg hover:from-stone-600 hover:to-stone-700 transition-all duration-200 flex items-center justify-center space-x-1 shadow-md">
                  <span>Contact</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-stone-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </motion.div>

          {/* Search */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-transparent bg-white"
              />
            </div>
          </div>

          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-stone-50 transition-colors"
                >
                  <h4 className="font-semibold text-gray-900 pr-4">{faq.question}</h4>
                  <ChevronRight className={`w-5 h-5 text-stone-500 transform transition-transform ${
                    expandedFaq === index ? 'rotate-90' : ''
                  }`} />
                </button>
                <AnimatePresence>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4"
                    >
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Resources & Documentation</h3>
            <p className="text-xl text-gray-600">Self-service resources for immediate assistance</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl border border-stone-200 hover:border-stone-400 hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <div className="w-12 h-12 bg-stone-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-stone-200 transition-colors">
                  <resource.icon className="w-6 h-6 text-stone-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{resource.title}</h4>
                <p className="text-sm text-gray-600 mb-4">{resource.description}</p>
                <div className="flex items-center text-stone-600 font-medium text-sm group-hover:text-stone-700">
                  <span>Access</span>
                  <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-stone-500 to-stone-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Still Need Help?</h3>
            <p className="text-xl text-stone-100 mb-8">Our dedicated support team is ready to assist you with any questions or concerns.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-stone-700 px-8 py-4 rounded-xl font-semibold hover:bg-stone-50 transition-colors flex items-center justify-center space-x-2 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                <span>Call Support Team</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-stone-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-stone-800 transition-colors flex items-center justify-center space-x-2 border border-stone-600 shadow-lg"
              >
                <Mail className="w-5 h-5" />
                <span>Email Support</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Support Hours</h4>
              <p className="text-gray-400 text-sm">Emergency: 24/7</p>
              <p className="text-gray-400 text-sm">Standard: Mon-Fri 8AM-8PM EST</p>
              <p className="text-gray-400 text-sm">Weekend: 9AM-5PM EST</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">System Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Training Portal</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400 text-sm">Phone: 1-800-MEDICAL</p>
              <p className="text-gray-400 text-sm">Email: support@clinicalsystem.com</p>
              <p className="text-gray-400 text-sm">Chat: Available in dashboard</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Certifications</h4>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Shield className="w-4 h-4" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400 mt-1">
                <Award className="w-4 h-4" />
                <span>SOC 2 Type II</span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 JORY CLINIC Support Center. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default A