import React, { useEffect } from 'react';

export default function Testimonials() {
  useEffect(() => {
    // Load Mailchimp validation script
    const script = document.createElement('script');
    script.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.jQuery) {
        const $ = window.jQuery;
        window.fnames = [];
        window.ftypes = [];
        window.fnames[0] = 'EMAIL';
        window.ftypes[0] = 'email';
        window.fnames[1] = 'FNAME';
        window.ftypes[1] = 'text';
        window.fnames[2] = 'LNAME';
        window.ftypes[2] = 'text';
        window.fnames[3] = 'ADDRESS';
        window.ftypes[3] = 'address';
        window.fnames[4] = 'PHONE';
        window.ftypes[4] = 'phone';
        window.fnames[5] = 'BIRTHDAY';
        window.ftypes[5] = 'birthday';
        window.fnames[6] = 'COMPANY';
        window.ftypes[6] = 'text';
        window.$mcj = $.noConflict(true);
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="testimonials" className="relative z-10 py-24">

      {/* Cyan Blobs at Top */}
      <div className="absolute top-0 left-0 right-0 h-72 bg-[radial-gradient(ellipse_60%_40%_at_30%_0%,rgba(173,251,246,0.12),transparent_60%),radial-gradient(ellipse_50%_35%_at_70%_0%,rgba(173,251,246,0.08),transparent_60%)] pointer-events-none"></div>

      <div className="relative max-w-[1000px] mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gray-900 bg-[#ADFBF6]/10 rounded-md mb-4">
            Newsletter
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Subscribe</h2>
          <p className="text-gray-600">Stay updated with our latest news and updates.</p>
        </div>

        {/* Mailchimp Form */}
        <div className="bg-white/80 border border-black/10 rounded-2xl p-8">
          <form
            action="https://greyai.us5.list-manage.com/subscribe/post?u=111c6476827efa766b460b5b2&amp;id=585b9170fd&amp;f_id=00bbf3e0f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
          >
            <div id="mc_embed_signup_scroll" className="space-y-5">
              {/* Email Field */}
              <div className="mc-field-group">
                <label htmlFor="mce-EMAIL" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="EMAIL"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ADFBF6] focus:border-[#ADFBF6] outline-none transition-all"
                  id="mce-EMAIL"
                  required
                />
              </div>

              {/* First Name and Last Name Fields - Side by Side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mc-field-group">
                  <label htmlFor="mce-FNAME" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="FNAME"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ADFBF6] focus:border-[#ADFBF6] outline-none transition-all"
                    id="mce-FNAME"
                    required
                  />
                </div>

                <div className="mc-field-group">
                  <label htmlFor="mce-LNAME" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="LNAME"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ADFBF6] focus:border-[#ADFBF6] outline-none transition-all"
                    id="mce-LNAME"
                    required
                  />
                </div>
              </div>

              {/* Response Messages */}
              <div id="mce-responses" className="clear">
                <div className="response text-red-500" id="mce-error-response" style={{ display: 'none' }}></div>
                <div className="response text-green-500" id="mce-success-response" style={{ display: 'none' }}></div>
              </div>

              {/* Honeypot field for bots */}
              <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                <input type="text" name="b_111c6476827efa766b460b5b2_585b9170fd" tabIndex="-1" defaultValue="" />
              </div>

              {/* Submit Button */}
              <div className="clear pt-2">
                <button
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="w-full px-6 py-3 bg-[#ADFBF6] text-gray-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-[#ADFBF6]/30 hover:-translate-y-0.5 transition-all"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}