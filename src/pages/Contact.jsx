import React, { useState, useEffect } from 'react';
import { Phone, Mail, Clock, Send, Loader2, ShieldCheck, Star, Calendar, Headset, MapPin, Car, Plane } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

// SEO Component
const ContactSEO = () => (
  <Helmet>
    <title>Contact Limo4All | Luxury Transportation Services</title>
    <meta name="description" content="Get in touch with Limo4All for premium limousine services. Book your luxury ride today with our 24/7 customer support." />
    <meta name="keywords" content="limo service, luxury transportation, book limo, limo contact" />
    <meta property="og:title" content="Contact Limo4All | Luxury Transportation Services" />
    <meta property="og:description" content="Get in touch with Limo4All for premium limousine services. Book your luxury ride today with our 24/7 customer support." />
    <link rel="canonical" href="https://www.limo4all.com/contact" />
  </Helmet>
);

// Contact Information Card Component
const ContactInfoCard = () => (
  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
    <h2 className="text-2xl font-bold text-primary mb-8 font-serif relative pb-4 after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-secondary">
      Contact Methods
    </h2>

    <div className="space-y-8">
      <div className="flex items-start group" itemScope itemType="https://schema.org/ContactPoint">
        <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
          <Phone className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">Phone</h3>
          <p className="text-gray-600" itemProp="telephone">
            <a href="tel:+15551234567">(555) 123-4567</a>
          </p>
          <p className="text-sm text-gray-500 mt-1">24/7 availability</p>
          <meta itemProp="contactType" content="customer service" />
          <meta itemProp="areaServed" content="National" />
        </div>
      </div>

      <div className="flex items-start group" itemScope itemType="https://schema.org/ContactPoint">
        <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
          <Mail className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">Email</h3>
          <p className="text-gray-600">
            <a href="mailto:bookings@limo4all.com" itemProp="email">bookings@limo4all.com</a>
          </p>
          <p className="text-sm text-gray-500 mt-1">Response within 1 business day</p>
        </div>
      </div>

      <div className="flex items-start group">
        <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
          <Headset className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">Live Chat</h3>
          <p className="text-gray-600">Available during business hours</p>
          <p className="text-sm text-gray-500 mt-1">Look for the chat icon in the corner</p>
        </div>
      </div>
    </div>
  </div>
);

// Business Hours Card Component
const BusinessHoursCard = () => (
  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
    <h2 className="text-2xl font-bold text-primary mb-8 font-serif relative pb-4 after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-secondary">
      Business Hours
    </h2>

    <div className="space-y-8">
      <div className="flex items-start group">
        <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
          <Clock className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">Dispatch Hours</h3>
          <p className="text-gray-600">24 hours / 7 days</p>
        </div>
      </div>

      <div className="flex items-start group">
        <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
          <Calendar className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">Booking Hours</h3>
          <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
          <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
          <p className="text-gray-600">Sunday: Closed</p>
        </div>
      </div>
    </div>

    <div className="mt-12 pt-6 border-t border-gray-200">
      <h3 className="text-lg font-medium text-gray-900 mb-3">Emergency After Hours</h3>
      <p className="text-gray-600 mb-2">
        For urgent matters outside office hours, call our 24/7 dispatch:
      </p>
      <p className="text-primary font-medium flex items-center">
        <Phone className="w-5 h-5 mr-2" />
        <a href="tel:+15559876543">(555) 987-6543</a>
      </p>
    </div>
  </div>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/send-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setSubmitStatus({ success: true, message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form
    } catch (error) {
      setSubmitStatus({ success: false, message: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
      <h2 className="text-2xl font-bold text-primary mb-8 font-serif relative pb-4 after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-secondary">
        Send Us a Message
      </h2>

      {submitStatus && (
        <div className={`mb-6 p-4 rounded-lg ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6" itemScope itemType="https://schema.org/ContactPage">
        {/* Rest of your form fields remain the same */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Name <span className="text-secondary">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="Your name"
              required
              itemProp="name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email <span className="text-secondary">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="your@email.com"
              required
              itemProp="email"
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="(555) 123-4567"
            itemProp="telephone"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message <span className="text-secondary">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="How can we help you?"
            required
            itemProp="description"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              Sending...
              <Loader2 className="w-5 h-5 ml-2 animate-spin" />
            </>
          ) : (
            <>
              Send Message
              <Send className="w-5 h-5 ml-2" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

// Service Area Component (replacing physical office)
const ServiceArea = () => (
  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
    <h2 className="text-2xl font-bold text-primary mb-8 font-serif relative pb-4 after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-secondary">
      Service Area
    </h2>

    <div className="space-y-6">
      <div className="flex items-start">
        <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary">
          <MapPin className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Metropolitan Coverage</h3>
          <p className="text-gray-600">
            We serve the entire metro area including surrounding suburbs and airports.
          </p>
        </div>
      </div>

      <div className="flex items-start">
        <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary">
          <Car className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Special Events</h3>
          <p className="text-gray-600">
            Available for weddings, proms, corporate events throughout the region.
          </p>
        </div>
      </div>

      <div className="flex items-start">
        <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary">
          <Plane className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Airport Transfers</h3>
          <p className="text-gray-600">
            Service to all major airports within a 100-mile radius.
          </p>
        </div>
      </div>
    </div>
  </div>
);

// Main Contact Component
function Contact() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#contact-form') {
      const element = document.getElementById('contact-form');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <ContactSEO />
      <div className="bg-gray-50 min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 mt-20">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-medium tracking-wider uppercase mb-4 shadow-md">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
            Contact <span className="text-primary">Limo4All</span>
          </h1>
          <div className="w-16 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reach out for bookings, inquiries, or support. Our virtual office is always open.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          {/* Contact Cards Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
              <ContactInfoCard />
              <BusinessHoursCard />
            </div>
            <ServiceArea />
          </div>

          {/* Contact Form Section */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
                Why Choose <span className="text-primary">Limo4All</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Professional Service</h3>
                    <p className="text-gray-600">
                      Our chauffeurs are trained to provide the highest level of service and discretion.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary">
                    <Star className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Luxury Fleet</h3>
                    <p className="text-gray-600">
                      We maintain only the finest vehicles with premium amenities for your comfort.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">24/7 Availability</h3>
                    <p className="text-gray-600">
                      Whether it's an early flight or late event, we're always available.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="contact-form">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;