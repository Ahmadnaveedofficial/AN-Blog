import React, { useState } from 'react';
import { Calendar, Clock, Phone, Video, MessageSquare, CheckCircle, User, Mail, Building, ArrowRight } from 'lucide-react';

export default function ScheduleCallService() {
  const [selectedService, setSelectedService] = useState('consultation');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const services = [
    {
      id: 'consultation',
      title: 'Free Consultation',
      duration: '30 mins',
      price: 'Free',
      icon: MessageSquare,
      description: 'Initial discussion about your needs and how we can help'
    },
    {
      id: 'technical',
      title: 'Technical Review',
      duration: '45 mins',
      price: '$150',
      icon: Phone,
      description: 'In-depth technical discussion and project planning'
    },
    {
      id: 'strategy',
      title: 'Strategy Session',
      duration: '60 mins',
      price: '$250',
      icon: Video,
      description: 'Comprehensive business strategy and roadmap planning'
    }
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form submitted:', { selectedService, selectedDate, selectedTime, formData });
    alert('Call scheduled successfully! We\'ll send you a confirmation email shortly.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-12 relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>
      <div className="fixed top-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="fixed bottom-20 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight">
            Schedule a Call
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Book a personalized consultation with our experts to discuss your project needs and explore how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Service Selection */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-slate-900/80 via-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Phone className="w-6 h-6 text-blue-400" />
                Choose Your Service
              </h2>
              
              <div className="space-y-4">
                {services.map((service) => {
                  const IconComponent = service.icon;
                  return (
                    <div
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                        selectedService === service.id
                          ? 'border-blue-500/50 bg-blue-500/10 shadow-lg shadow-blue-500/25'
                          : 'border-slate-700/50 bg-slate-800/30 hover:border-slate-600/50'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl ${
                          selectedService === service.id
                            ? 'bg-blue-500/20 text-blue-400'
                            : 'bg-slate-700/50 text-slate-400'
                        }`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                            <div className="text-right">
                              <div className="text-sm text-slate-400">{service.duration}</div>
                              <div className={`text-lg font-bold ${
                                service.price === 'Free' ? 'text-green-400' : 'text-blue-400'
                              }`}>{service.price}</div>
                            </div>
                          </div>
                          <p className="text-slate-300 text-sm">{service.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Date & Time Selection */}
            <div className="bg-gradient-to-br from-slate-900/80 via-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Calendar className="w-6 h-6 text-purple-400" />
                Select Date & Time
              </h2>

              <div className="space-y-6">
                {/* Date Selection */}
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-3">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
                  />
                </div>

                {/* Time Selection */}
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-3">
                    Available Time Slots
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-3 rounded-xl border transition-all duration-300 hover:scale-105 ${
                          selectedTime === time
                            ? 'border-purple-500/50 bg-purple-500/10 text-purple-400 shadow-lg shadow-purple-500/25'
                            : 'border-slate-700/50 bg-slate-800/30 text-slate-300 hover:border-slate-600/50'
                        }`}
                      >
                        <Clock className="w-4 h-4 mx-auto mb-1" />
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-slate-900/80 via-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <User className="w-6 h-6 text-cyan-400" />
              Your Information
            </h2>

            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div className="group/input">
                  <label className="block text-sm font-semibold text-slate-300 mb-2 group-focus-within/input:text-cyan-400 transition-colors duration-300">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300 hover:border-slate-600/50"
                  />
                </div>

                <div className="group/input">
                  <label className="block text-sm font-semibold text-slate-300 mb-2 group-focus-within/input:text-cyan-400 transition-colors duration-300">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300 hover:border-slate-600/50"
                  />
                </div>

                <div className="group/input">
                  <label className="block text-sm font-semibold text-slate-300 mb-2 group-focus-within/input:text-cyan-400 transition-colors duration-300">
                    <Building className="w-4 h-4 inline mr-2" />
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Enter your company name"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300 hover:border-slate-600/50"
                  />
                </div>

                <div className="group/input">
                  <label className="block text-sm font-semibold text-slate-300 mb-2 group-focus-within/input:text-cyan-400 transition-colors duration-300">
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Tell us about your project or any specific questions..."
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300 hover:border-slate-600/50 resize-none"
                  />
                </div>
              </div>

              {/* Summary */}
              <div className="p-6 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl border border-slate-600/30">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Booking Summary
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Service:</span>
                    <span className="text-white font-medium">
                      {services.find(s => s.id === selectedService)?.title || 'Please select'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Date:</span>
                    <span className="text-white font-medium">
                      {selectedDate || 'Please select'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Time:</span>
                    <span className="text-white font-medium">
                      {selectedTime || 'Please select'}
                    </span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-slate-600/30">
                    <span className="text-slate-400">Price:</span>
                    <span className="text-green-400 font-bold">
                      {services.find(s => s.id === selectedService)?.price || '$0'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!selectedDate || !selectedTime || !formData.name || !formData.email}
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-semibold rounded-2xl hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 active:scale-95 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:translate-y-0 group/btn"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Schedule Call</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </span>
              </button>

              <p className="text-xs text-slate-400 text-center">
                By scheduling a call, you agree to our Terms of Service and Privacy Policy.
                You'll receive a confirmation email with meeting details.
              </p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Video,
              title: 'Video & Audio Calls',
              description: 'High-quality video conferences or phone calls based on your preference'
            },
            {
              icon: Calendar,
              title: 'Flexible Scheduling',
              description: 'Book at your convenience with easy rescheduling options'
            },
            {
              icon: CheckCircle,
              title: 'Expert Consultation',
              description: 'Get professional advice from industry experts and specialists'
            }
          ].map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-900/50 via-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/30 rounded-2xl p-6 text-center hover:border-slate-600/50 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}