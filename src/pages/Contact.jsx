import { Phone, Mail, MapPin, Clock } from 'lucide-react';

function Contact() {
  return (
    <div className="bg-background min-h-screen py-12 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
            Contact Limo4You
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Get in touch with our team for bookings, inquiries, or support.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Methods */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-display font-bold text-primary mb-6">
              Contact Methods
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-accent mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-primary mb-1">Phone</h3>
                  <p className="text-text-secondary">(555) 123-4567</p>
                  <p className="text-sm text-text-secondary">24/7 availability</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-6 h-6 text-accent mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-primary mb-1">Email</h3>
                  <p className="text-text-secondary">bookings@limo4you.com</p>
                  <p className="text-sm text-text-secondary">Response within 1 business day</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-accent mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-primary mb-1">Office</h3>
                  <p className="text-text-secondary">123 Luxury Lane</p>
                  <p className="text-text-secondary">Metro City, MC 10001</p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-display font-bold text-primary mb-6">
              Business Hours
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-accent mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-primary mb-1">Dispatch Hours</h3>
                  <p className="text-text-secondary">24 hours / 7 days</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-6 h-6 text-accent mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-primary mb-1">Office Hours</h3>
                  <p className="text-text-secondary">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-text-secondary">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-text-secondary">Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-medium text-primary mb-3">Emergency After Hours</h3>
              <p className="text-text-secondary mb-2">
                For urgent matters outside office hours, call our 24/7 dispatch:
              </p>
              <p className="text-accent font-medium">(555) 987-6543</p>
            </div>
          </div>
        </div>

        {/* Simple Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-display font-bold text-primary mb-6">
            Send Us a Message
          </h2>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-text-secondary mb-1">
                Phone (optional)
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="(555) 123-4567"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-accent hover:bg-accent-light text-white font-medium py-3 px-4 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;