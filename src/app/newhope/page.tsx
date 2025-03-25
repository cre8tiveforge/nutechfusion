'use client';

import { WavyBackground } from "@/components/ui/wavy-background";
import { BackgroundPaths } from "@/components/ui/background-paths";
import Link from "next/link";
import { useState, useEffect } from 'react';
import Script from "next/script";

export default function NewHopeChurch() {
  useEffect(() => {
    // Create the custom element after the component mounts (client-side only)
    const conversationWidget = document.createElement('elevenlabs-convai');
    conversationWidget.setAttribute('agent-id', 'EpwpQNqrc8uc0KPuZCLk');
    
    // Add it to the container
    const widgetContainer = document.getElementById('ai-assistant-container');
    if (widgetContainer) {
      widgetContainer.appendChild(conversationWidget);
    }
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* Header/Navigation */}
      <header className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
              <svg className="w-20 h-20" viewBox="0 0 64 64">
                {/* Cross */}
                <rect x="29" y="12" width="6" height="40" fill="#8B0000"/>
                <rect x="18" y="26" width="28" height="6" fill="#8B0000"/>

                {/* Leaf (symbolizing growth/hope) */}
                <path d="M32 52 C20 50, 12 40, 16 28 C28 30, 36 38, 32 52 Z" fill="#3D9970"/>
              </svg>
            </div>
            <h1 className="text-2xl font-bold">New Hope Methodist Church</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-sky-200 transition">About Us</a>
            <a href="#services" className="hover:text-sky-200 transition">Worship Services</a>
            <a href="#staff" className="hover:text-sky-200 transition">Our Staff</a>
            <a href="#ministries" className="hover:text-sky-200 transition">Ministries</a>
            <a href="#events" className="hover:text-sky-200 transition">Events</a>
            <a href="#contact" className="hover:text-sky-200 transition">Contact</a>
          </nav>
          <div className="md:hidden">
            <button className="text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-32">
        {/* Custom SVG Banner Background */}
        <div className="absolute inset-0 z-0">
          <svg width="100%" height="100%" viewBox="0 0 1200 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            {/* Background Gradient */}
            <defs>
              <linearGradient id="bannerGradient" gradientTransform="rotate(90)">
                <stop offset="0%" stopColor="#a3c9f1"/>
                <stop offset="100%" stopColor="#f9e0b7"/>
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#bannerGradient)"/>

            {/* Hills */}
            <path d="M0,250 Q300,200 600,250 T1200,250 V300 H0 Z" fill="#ffffff" opacity="0.5"/>
            <path d="M0,270 Q300,220 600,270 T1200,270 V300 H0 Z" fill="#ffffff" opacity="0.3"/>

            {/* Rising Sun (Symbolizing Hope) */}
            <circle cx="600" cy="220" r="40" fill="#ffdd94" opacity="0.8"/>
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Welcome to New Hope</h1>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            A beacon of hope sharing the love of Christ through worship, service, and community
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#services" className="px-6 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-blue-50 transition shadow-md">
              Service Times
            </a>
            <a href="#contact" className="px-6 py-3 bg-blue-700 text-white font-medium rounded-md hover:bg-blue-800 transition shadow-md">
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About Our Church</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                New Hope Methodist Church is a small but active community church known for its 
                welcoming atmosphere and outreach. It serves families and individuals of all ages, 
                offering a place to worship, learn, and connect with others in faith.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Founded in the mid-1980s by a handful of local families seeking a Methodist congregation 
                in their neighborhood, the church began in a rented chapel and moved to its current 
                Oakwood Drive location in 1990. Over the years, it has grown into a close-knit community hub, 
                playing an active role in local outreach and charity.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-blue-50 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">1980s</div>
                  <div className="text-gray-700">Founded</div>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">Community</div>
                  <div className="text-gray-700">Focused</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-4 italic">
                "To be a beacon of hope by sharing the love of Christ through worship, service, and community."
              </p>
              <h4 className="font-bold text-gray-900 mt-6 mb-2">Core Values</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                  </svg>
                  Faith in Jesus Christ
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                  </svg>
                  Inclusive hospitality
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                  </svg>
                  Outreach and service to those in need
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                  </svg>
                  Spiritual growth through discipleship
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                  </svg>
                  Nurturing families and youth
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Worship Services */}
      <section id="services" className="py-24 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Worship Services</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
              Join us in worship and fellowship throughout the week.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-blue-600 text-white p-4">
                <h3 className="text-xl font-bold">Sunday Worship</h3>
              </div>
              <div className="p-6">
                <p className="font-bold text-gray-900 mb-2">Sundays at 10:30 AM</p>
                <p className="text-gray-700 mb-4">
                  Our main weekly gathering featuring a blend of traditional hymns and contemporary praise songs.
                </p>
                <div className="space-y-2 text-gray-700">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                    </svg>
                    Service lasts about 1 hour
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"/>
                    </svg>
                    Children's activities available
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 3L4 9v12h16V9l-8-6zm-2 15c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm3-8l3-2v6H9V8l3 2zm5 8c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"/>
                    </svg>
                    Coffee fellowship follows service
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-blue-600 text-white p-4">
                <h3 className="text-xl font-bold">Sunday School</h3>
              </div>
              <div className="p-6">
                <p className="font-bold text-gray-900 mb-2">Sundays at 9:15 AM</p>
                <p className="text-gray-700 mb-4">
                  Classes for all ages to grow in knowledge and faith before the main service.
                </p>
                <div className="space-y-2 text-gray-700">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                    Children's Class (ages 4-11)
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87z"/>
                      <circle cx="9" cy="8" r="4"/>
                      <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24zm-6 1c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"/>
                    </svg>
                    Youth Class (ages 12-18)
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                    </svg>
                    Adult Bible Study
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-blue-600 text-white p-4">
                <h3 className="text-xl font-bold">Midweek Prayer & Bible Study</h3>
              </div>
              <div className="p-6">
                <p className="font-bold text-gray-900 mb-2">Wednesdays at 7:00 PM</p>
                <p className="text-gray-700 mb-4">
                  A time for prayer, Bible study, and spiritual refreshment in the middle of your week.
                </p>
                <div className="space-y-2 text-gray-700">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    Interactive Bible discussion
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-2 20h-4v-1h4v1zm3.25-3H6.75V4h10.5v14z"/>
                    </svg>
                    Online option available via Zoom
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                    </svg>
                    Lasts about 1 hour
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Special Services</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Christmas Eve Candlelight Service</h4>
                <p className="text-gray-700">December 24 at 7:00 PM</p>
                <p className="text-gray-700 mt-2">A beautiful service with carols, scripture readings, and candlelight.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Easter Services</h4>
                <p className="text-gray-700">Easter Sunday (6:30 AM Sunrise & 10:30 AM)</p>
                <p className="text-gray-700 mt-2">Celebrate the resurrection with special music and message.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section id="staff" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Staff</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
              Meet the dedicated individuals who lead and serve our church.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-100 h-48 flex items-center justify-center">
                <svg className="w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Rev. John Doe</h3>
                <p className="text-blue-600 mb-4">Senior Pastor</p>
                <p className="text-gray-700 mb-4">
                  Pastor John has led New Hope Methodist since 2010. He is known for his friendly, down-to-earth preaching style and passion for community service.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    <a href="mailto:pastorjohn@newhopemethodist.org" className="text-blue-600 hover:underline">
                      pastorjohn@newhopemethodist.org
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-100 h-48 flex items-center justify-center">
                <svg className="w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Rev. Lisa Smith</h3>
                <p className="text-blue-600 mb-4">Associate Pastor / Youth Minister</p>
                <p className="text-gray-700 mb-4">
                  Rev. Lisa oversees youth programs and assists with preaching and pastoral duties. She joined New Hope in 2018 after working with a Methodist campus ministry.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    <a href="mailto:lisas@newhopemethodist.org" className="text-blue-600 hover:underline">
                      lisas@newhopemethodist.org
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-100 h-48 flex items-center justify-center">
                <svg className="w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Mark Johnson</h3>
                <p className="text-blue-600 mb-4">Worship Leader</p>
                <p className="text-gray-700 mb-4">
                  Mark coordinates worship music each week, leading both our praise band and choir. An accomplished guitarist and vocalist, he has been with New Hope for 15 years.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    <a href="mailto:markj@newhopemethodist.org" className="text-blue-600 hover:underline">
                      markj@newhopemethodist.org
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ministries Section */}
      <section id="ministries" className="py-24 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Ministries</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
              We offer various ministries to help you grow in faith and connect with others.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-3 bg-blue-600"></div>
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-2 20h-4v-1h4v1zm3.25-3H6.75V4h10.5v14z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Youth Ministry</h3>
                <p className="text-gray-700 mb-4">
                  Our youth group meets weekly for fellowship, fun, and spiritual growth.
                </p>
                <div className="text-sm text-gray-600">
                  <p><span className="font-semibold">When:</span> Wednesdays at 7:00 PM</p>
                  <p><span className="font-semibold">Where:</span> Youth Room</p>
                  <p><span className="font-semibold">Ages:</span> 12-18</p>
                </div>
                <button className="mt-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition">
                  Learn More
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-3 bg-blue-600"></div>
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 10H5V7H3v3H0v2h3v3h2v-3h3v-2zm10 1c1.66 0 2.99-1.34 2.99-3S19.66 5 18 5c-.32 0-.63.05-.91.14.57.81.9 1.79.9 2.86s-.34 2.04-.9 2.86c.28.09.59.14.91.14zm-5 0c1.66 0 2.99-1.34 2.99-3S14.66 5 13 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm6.62 2.16c.83.73 1.38 1.66 1.38 2.84v2h3v-2c0-1.54-2.37-2.49-4.38-2.84zM13 13c-2 0-6 1-6 3v2h12v-2c0-2-4-3-6-3z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Children's Ministry</h3>
                <p className="text-gray-700 mb-4">
                  We provide a nurturing environment for children to grow in faith through age-appropriate activities.
                </p>
                <div className="text-sm text-gray-600">
                  <p><span className="font-semibold">Sunday School:</span> Sundays at 9:15 AM</p>
                  <p><span className="font-semibold">Children's Church:</span> During Sunday service</p>
                  <p><span className="font-semibold">Ages:</span> Infant through 5th grade</p>
                </div>
                <button className="mt-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition">
                  Learn More
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-3 bg-blue-600"></div>
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Adult Bible Studies</h3>
                <p className="text-gray-700 mb-4">
                  Various Bible study groups to deepen your understanding of Scripture and faith.
                </p>
                <div className="text-sm text-gray-600">
                  <p><span className="font-semibold">Sunday School:</span> Sundays at 9:15 AM</p>
                  <p><span className="font-semibold">Women's Bible Study:</span> Thursdays at 7:00 PM</p>
                  <p><span className="font-semibold">Men's Bible Study:</span> Saturdays at 8:00 AM</p>
                </div>
                <button className="mt-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition">
                  Learn More
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-3 bg-blue-600"></div>
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3L4 9v12h16V9l-8-6zm0 5.5l5 3.75V19h-2v-7.5h-6V19H7v-6.75l5-3.75z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Food Pantry</h3>
                <p className="text-gray-700 mb-4">
                  Providing groceries and essentials to families in need in our community.
                </p>
                <div className="text-sm text-gray-600">
                  <p><span className="font-semibold">Hours:</span> Saturdays from 9:00 AM to 11:00 AM</p>
                  <p><span className="font-semibold">Location:</span> Fellowship Hall</p>
                  <p><span className="font-semibold">Volunteers needed:</span> Setup, distribution, cleanup</p>
                </div>
                <button className="mt-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition">
                  Learn More
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-3 bg-blue-600"></div>
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6zm-2 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2zm3-8l3-2v6H9V8l3 2zm5 8c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Music Ministry</h3>
                <p className="text-gray-700 mb-4">
                  Join our choir or praise band to share your musical gifts in worship.
                </p>
                <div className="text-sm text-gray-600">
                  <p><span className="font-semibold">Choir Practice:</span> Wednesdays at 6:00 PM</p>
                  <p><span className="font-semibold">Praise Band Practice:</span> Tuesdays at 7:00 PM</p>
                  <p><span className="font-semibold">All skill levels welcome</span></p>
                </div>
                <button className="mt-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition">
                  Learn More
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-3 bg-blue-600"></div>
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c4.86-2.34 8-7 8-11.5C20 5.81 16.19 2 11.5 2zm1 14.5h-2v-2h2v2zm0-3.5h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Prayer Ministry</h3>
                <p className="text-gray-700 mb-4">
                  A dedicated team that prays for church, community, and individual needs.
                </p>
                <div className="text-sm text-gray-600">
                  <p><span className="font-semibold">Prayer Chain:</span> Submit requests via email or phone</p>
                  <p><span className="font-semibold">Prayer Team:</span> Meets Sundays at 8:45 AM</p>
                  <p><span className="font-semibold">Monthly Prayer Night:</span> First Wednesday at 7:00 PM</p>
                </div>
                <button className="mt-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition">
              View All Ministries
            </button>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
              Join us for these special events and activities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="bg-blue-600 text-white p-3 flex justify-between items-center">
                <div>
                  <span className="text-sm">UPCOMING</span>
                </div>
                <div className="bg-white text-blue-600 rounded px-2 py-1 text-sm font-semibold">
                  DEC 24
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Christmas Eve Candlelight Service</h3>
                <p className="text-gray-700 mb-4">
                  A beautiful service featuring carols, the Christmas story, and candlelight.
                </p>
                <div className="flex items-center text-gray-600 mb-2">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                  <span>7:00 PM</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span>Sanctuary</span>
                </div>
                <button className="w-full mt-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition">
                  Add to Calendar
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="bg-blue-600 text-white p-3 flex justify-between items-center">
                <div>
                  <span className="text-sm">UPCOMING</span>
                </div>
                <div className="bg-white text-blue-600 rounded px-2 py-1 text-sm font-semibold">
                  JAN 15
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Community Dinner</h3>
                <p className="text-gray-700 mb-4">
                  Free monthly meal open to everyone. Come enjoy food and fellowship.
                </p>
                <div className="flex items-center text-gray-600 mb-2">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                  <span>6:30 PM</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span>Fellowship Hall</span>
                </div>
                <button className="w-full mt-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition">
                  Add to Calendar
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="bg-blue-600 text-white p-3 flex justify-between items-center">
                <div>
                  <span className="text-sm">UPCOMING</span>
                </div>
                <div className="bg-white text-blue-600 rounded px-2 py-1 text-sm font-semibold">
                  FEB 10
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Couples Date Night</h3>
                <p className="text-gray-700 mb-4">
                  A special evening for couples with dinner, childcare, and an encouraging message on marriage.
                </p>
                <div className="flex items-center text-gray-600 mb-2">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                  <span>6:00 PM</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span>Fellowship Hall</span>
                </div>
                <button className="w-full mt-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition">
                  Add to Calendar
                </button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition">
              View All Events
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
              We'd love to hear from you. Reach out or visit us!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
                      placeholder="Your name" 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
                      placeholder="Your email" 
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
                    placeholder="Subject" 
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <div>
                  <button type="submit" className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            
            <div>
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Church Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Address</p>
                      <p className="text-gray-700">1567 Oakwood Drive</p>
                      <p className="text-gray-700">Houston, TX 77034</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <p className="text-gray-700">(713) 555-1234</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-700">info@newhopemethodist.org</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Office Hours</p>
                      <p className="text-gray-700">Monday-Thursday: 9:00 AM - 3:00 PM</p>
                      <p className="text-gray-700">Friday-Saturday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="https://facebook.com/NewHopeHouston" className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-200 transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a href="https://twitter.com/NewHopeHouston" className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-200 transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a href="https://www.youtube.com/channel/NewHopeHouston" className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-200 transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ElevenLabs AI Assistant */}
      <div id="ai-assistant-container" className="fixed bottom-5 right-5 z-50">
        {/* The custom element will be inserted here by useEffect */}
      </div>
      <Script src="https://elevenlabs.io/convai-widget/index.js" strategy="afterInteractive" />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">New Hope Methodist Church</h3>
              <p className="text-gray-400">
                A beacon of hope sharing the love of Christ through worship, service, and community.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition">About Us</a></li>
                <li><a href="#services" className="hover:text-white transition">Worship Services</a></li>
                <li><a href="#staff" className="hover:text-white transition">Our Staff</a></li>
                <li><a href="#ministries" className="hover:text-white transition">Ministries</a></li>
                <li><a href="#events" className="hover:text-white transition">Events</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Service Times</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Sunday School: 9:15 AM</li>
                <li>Sunday Worship: 10:30 AM</li>
                <li>Wednesday Bible Study: 7:00 PM</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>1567 Oakwood Drive</li>
                <li>Houston, TX 77034</li>
                <li>(713) 555-1234</li>
                <li>info@newhopemethodist.org</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} New Hope Methodist Church. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
} 