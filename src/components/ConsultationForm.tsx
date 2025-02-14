'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function ConsultationForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    description: ''
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push('/success');
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto card p-8" id="consultation">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          pattern="[A-Za-z\s]{2,}"
          className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Your name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Your email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="projectType" className="block text-sm font-medium text-gray-300">
          Project Type
        </label>
        <select
          id="projectType"
          name="projectType"
          required
          className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={formData.projectType}
          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
        >
          <option value="">Select project type</option>
          <option value="virtual-reality">Virtual Reality</option>
          <option value="ai-integration">AI Integration</option>
          <option value="3d-production">3D Production</option>
          <option value="tech-solutions">Technical Solutions</option>
          <option value="consulting">Consulting</option>
        </select>
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-300">
          Project Description
        </label>
        <textarea
          id="description"
          name="description"
          required
          minLength={10}
          rows={4}
          className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Tell us about your project"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
      </div>

      <div>
        <button
          type="submit"
          className="w-full btn-primary"
        >
          Schedule a Consultation
        </button>
      </div>
    </form>
  );
} 