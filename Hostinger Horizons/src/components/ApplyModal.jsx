import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const N8N_WEBHOOK_URL = 'https://n8n.srv1203909.hstgr.cloud/webhook-test/af018eab-d954-4a9c-bb19-f14d90300f8c';

const PRODUCT_OPTIONS = [
  'AI Literacy',
  'Custom AI',
  'AI Agents',
];

export default function ApplyModal({ isOpen, onClose, product }) {
  const isGeneralInquiry = product === 'General Inquiry';

  const [formData, setFormData] = useState({
    selectedProduct: '',
    firstName: '',
    lastName: '',
    email: '',
    teamSize: '',
    projectBudget: '',
    automationPlatform: '',
    technicalLeadership: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Reset form when modal opens with new product
  useEffect(() => {
    if (isOpen) {
      setFormData({
        selectedProduct: '',
        firstName: '',
        lastName: '',
        email: '',
        teamSize: '',
        projectBudget: '',
        automationPlatform: '',
        technicalLeadership: '',
        message: '',
      });
      setSubmitStatus(null);
    }
  }, [isOpen, product]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product: isGeneralInquiry ? formData.selectedProduct : product,
          ...formData,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setTimeout(() => {
          onClose();
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  const selectStyles = "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#ADFBF6]/50 focus:border-[#ADFBF6] transition-all appearance-none cursor-pointer";
  const inputStyles = "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ADFBF6]/50 focus:border-[#ADFBF6] transition-all";

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg max-h-[90vh] bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div>
            <h2 className="text-xl font-semibold text-white">Apply Now</h2>
            {!isGeneralInquiry && (
              <p className="text-sm text-gray-400 mt-1">
                Interested in <span className="text-[#ADFBF6] font-medium">{product}</span>
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-88px)]">
          {submitStatus === 'success' ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#ADFBF6]/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-[#ADFBF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Application Submitted!</h3>
              <p className="text-gray-400">We'll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Product - Capsule Selector or Display */}
              {isGeneralInquiry ? (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Product <span className="text-red-400">*</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {PRODUCT_OPTIONS.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setFormData((prev) => ({ ...prev, selectedProduct: opt }))}
                        className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                          formData.selectedProduct === opt
                            ? 'bg-[#ADFBF6] text-gray-900 shadow-lg shadow-[#ADFBF6]/25'
                            : 'bg-white/5 text-gray-300 border border-white/10 hover:border-[#ADFBF6]/50 hover:text-white'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                  {/* Hidden input for form validation */}
                  <input
                    type="text"
                    value={formData.selectedProduct}
                    required
                    className="sr-only"
                    onChange={() => {}}
                  />
                </div>
              ) : (
                <div className="px-4 py-3 bg-[#ADFBF6]/10 border border-[#ADFBF6]/20 rounded-lg">
                  <span className="text-xs text-gray-400 uppercase tracking-wide">Product</span>
                  <p className="text-white font-medium">{product}</p>
                </div>
              )}

              {/* First Name & Last Name Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                    First Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className={inputStyles}
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className={inputStyles}
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputStyles}
                  placeholder="john@company.com"
                />
              </div>

              {/* Team Size */}
              <div>
                <label htmlFor="teamSize" className="block text-sm font-medium text-gray-300 mb-2">
                  Team Size <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <select
                    id="teamSize"
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleChange}
                    required
                    className={selectStyles}
                  >
                    <option value="" disabled className="bg-[#0a0a0a] text-gray-500">Select team size</option>
                    <option value="Just me" className="bg-[#0a0a0a]">Just me</option>
                    <option value="2-10" className="bg-[#0a0a0a]">2-10</option>
                    <option value="11-25" className="bg-[#0a0a0a]">11-25</option>
                    <option value="26-50" className="bg-[#0a0a0a]">26-50</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Project Budget */}
              <div>
                <label htmlFor="projectBudget" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Budget <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <select
                    id="projectBudget"
                    name="projectBudget"
                    value={formData.projectBudget}
                    onChange={handleChange}
                    required
                    className={selectStyles}
                  >
                    <option value="" disabled className="bg-[#0a0a0a] text-gray-500">Select budget range</option>
                    <option value="Under $2,000" className="bg-[#0a0a0a]">Under $2,000</option>
                    <option value="$2,000 - $5,999" className="bg-[#0a0a0a]">$2,000 - $5,999</option>
                    <option value="$6,000 - $9,999" className="bg-[#0a0a0a]">$6,000 - $9,999</option>
                    <option value="$10,000 - $24,999" className="bg-[#0a0a0a]">$10,000 - $24,999</option>
                    <option value="$25,000+" className="bg-[#0a0a0a]">$25,000+</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Automation Platform */}
              <div>
                <label htmlFor="automationPlatform" className="block text-sm font-medium text-gray-300 mb-2">
                  What automation platform do you currently use? <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <select
                    id="automationPlatform"
                    name="automationPlatform"
                    value={formData.automationPlatform}
                    onChange={handleChange}
                    required
                    className={selectStyles}
                  >
                    <option value="" disabled className="bg-[#0a0a0a] text-gray-500">Select platform</option>
                    <option value="n8n" className="bg-[#0a0a0a]">n8n</option>
                    <option value="Zapier" className="bg-[#0a0a0a]">Zapier</option>
                    <option value="Make" className="bg-[#0a0a0a]">Make</option>
                    <option value="None" className="bg-[#0a0a0a]">None</option>
                    <option value="Other" className="bg-[#0a0a0a]">Other</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Technical Leadership */}
              <div>
                <label htmlFor="technicalLeadership" className="block text-sm font-medium text-gray-300 mb-2">
                  Do you have a CTO, technical lead, or someone technical on your team? <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <select
                    id="technicalLeadership"
                    name="technicalLeadership"
                    value={formData.technicalLeadership}
                    onChange={handleChange}
                    required
                    className={selectStyles}
                  >
                    <option value="" disabled className="bg-[#0a0a0a] text-gray-500">Select option</option>
                    <option value="Yes, we have dedicated technical leadership" className="bg-[#0a0a0a]">Yes, we have dedicated technical leadership</option>
                    <option value="Yes, but they're part-time or a consultant" className="bg-[#0a0a0a]">Yes, but they're part-time or a consultant</option>
                    <option value="No, but I'm comfortable with technology" className="bg-[#0a0a0a]">No, but I'm comfortable with technology</option>
                    <option value="No, we'd need guidance" className="bg-[#0a0a0a]">No, we'd need guidance</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className={`${inputStyles} resize-none`}
                  placeholder="Tell us about your project or any questions you have..."
                />
              </div>

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 bg-[#ADFBF6] text-gray-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-[#ADFBF6]/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  'Submit Application'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
