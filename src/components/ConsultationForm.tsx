'use client';

import { useState, FormEvent } from 'react';
import { Toast } from './ui/toast';

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: 'success' | 'error';
  } | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Show success toast
        setToast({
          message: data.message || 'Your consultation request has been received. We\'ll be in touch within 1-2 business days.',
          type: 'success'
        });

        // Clear form
        setFormData({
          name: '',
          email: '',
          projectType: '',
          description: ''
        });
      } else {
        // Show error toast
        setToast({
          message: data.message || 'There was an error submitting the form. Please try again.',
          type: 'error'
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setToast({
        message: 'There was an error submitting the form. Please try again.',
        type: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto bg-card/80 backdrop-blur-sm border border-border rounded-lg p-8 shadow-lg" id="consultation">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            pattern="[A-Za-z\s]{2,}"
            className="block w-full px-3 py-2 bg-background border border-input rounded-md shadow-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            className="block w-full px-3 py-2 bg-background border border-input rounded-md shadow-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
            placeholder="Your email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-2">
            Project Type
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            className="block w-full px-3 py-2 bg-background border border-input rounded-md shadow-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
            value={formData.projectType}
            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
            disabled={isSubmitting}
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
          <label htmlFor="description" className="block text-sm font-medium text-foreground mb-2">
            Project Description
          </label>
          <textarea
            id="description"
            name="description"
            required
            minLength={10}
            rows={4}
            className="block w-full px-3 py-2 bg-background border border-input rounded-md shadow-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
            placeholder="Tell us about your project"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            disabled={isSubmitting}
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Schedule a Consultation'}
          </button>
        </div>
      </form>
    </>
  );
} 