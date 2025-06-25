import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Sparkle } from 'lucide-react';

const Hero = () => {
  const whatsappNumber = '+16473131786';
  const whatsappMessage = 'Hello%20Limo%204%20All,%20I%20would%20like%20to%20inquire%20about%20your%20services';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section
      className="relative bg-primary text-white overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20 mt-20 mb-6"
      aria-label="Premium Limousine Services"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      {/* ✅ Required LocalBusiness fields */}
      <meta itemProp="name" content="Executive Transportation For Discerning Clients" />
      <meta itemProp="telephone" content="+1-647-123-4567" />
      <meta itemProp="priceRange" content="$$" />
      <meta itemProp="image" content="https://www.limo4all.ca/Hero.png" />

      <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress" className="sr-only">
        <meta itemProp="streetAddress" content="250 Front Street W" />
        <meta itemProp="addressLocality" content="Toronto" />
        <meta itemProp="addressRegion" content="ON" />
        <meta itemProp="postalCode" content="M5V 3G5" />
        <meta itemProp="addressCountry" content="CA" />
      </div>

      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-primary">
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1.3 }}
            transition={{ duration: 30, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                linear-gradient(45deg, #ffffff 2.5px, transparent 2.5px),
                linear-gradient(135deg, #ffffff 2.5px, transparent 2.5px),
                linear-gradient(225deg, #ffffff 2.5px, transparent 2.5px),
                linear-gradient(315deg, #ffffff 2.5px, transparent 2.5px)
              `,
              backgroundSize: '100px 100px',
              backgroundPosition: '0 0, 50px 0, 50px -50px, 0px 50px'
            }}
          />
        </div>
      </div>

      {/* 3D elements */}
      <motion.div
        initial={{ x: '30%', y: '-20%', rotate: 15 }}
        animate={{ x: '25%', y: '-15%', rotate: 20 }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-0 right-0 w-64 h-64 md:w-80 md:h-80 rounded-3xl bg-secondary/10 border-2 border-white/5 backdrop-blur-sm"
      />
      <motion.div
        initial={{ x: '-10%', y: '30%', rotate: -10 }}
        animate={{ x: '-15%', y: '25%', rotate: -15 }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 rounded-full bg-white/5 border-2 border-white/5 backdrop-blur-sm"
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Image */}
          <motion.div
            className="order-1 lg:order-2 relative w-full max-w-2xl lg:flex-1"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative aspect-[5/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/5 group">
              <img
                src="https://www.limo4all.ca/Hero.png"
                alt="Luxury limousine with professional chauffeur"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                loading="eager"
                itemProp="image"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/30" />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white/5 to-transparent" />
            </div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-secondary rounded-full blur-[80px] opacity-20 z-[-1]" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-white rounded-full blur-[60px] opacity-10 z-[-1]" />
          </motion.div>

          {/* Text */}
          <div className="order-2 lg:order-1 lg:flex-1">
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4 tracking-wider">
                <Sparkle size={14} className="mr-2" />
                <span>TORONTO'S PREMIER LUXURY SERVICE</span>
              </span>
            </motion.div>

            <motion.h1
              className="font-display text-4xl sm:text-5xl md:text-[3.5rem] xl:text-[4rem] font-bold mb-6 leading-tight"
              variants={itemVariants}
              itemProp="name"
            >
              <span className="text-secondary">Executive Transportation</span>  <br className="hidden md:block" /> Serving Toronto & Surrounding Areas
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed"
              variants={itemVariants}
              itemProp="description"
            >
              Experience <strong>unmatched luxury</strong> with our premium fleet serving all of Greater Toronto Area.
              Punctual, discreet service for corporate events, weddings, and special occasions throughout Toronto,
              Vaughan, Mississauga, Newmarket, Barrie, Simcoe, and all GTA regions.
            </motion.p>

            {/* ✅ Structured Offer for LocalBusiness */}
            <div itemProp="makesOffer" itemScope itemType="https://schema.org/Offer" className="sr-only">
              <meta itemProp="name" content="Executive Transportation For Discerning Clients" />
              <meta itemProp="description" content="Experience unmatched luxury with our premium fleet of limousines and professional chauffeurs. Punctual, discreet service tailored to your exact requirements for corporate events, weddings, and special occasions." />
              <meta itemProp="url" content="https://www.limo4all.ca/#booking-form" />
              <meta itemProp="priceCurrency" content="CAD" />
              <meta itemProp="price" content="150" />
              <meta itemProp="availability" content="https://schema.org/InStock" />
            </div>

            {/* CTA Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
              <motion.a
                href="#booking-form"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-secondary hover:bg-secondary-dark text-primary font-bold py-4 px-8 rounded-xl shadow-lg flex items-center gap-3 group"
                aria-label="Book your limousine now"
              >
                <span>Book Now</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </motion.a>

              <motion.a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-accent hover:bg-accent-light text-white font-bold py-4 px-8 rounded-xl shadow-lg flex items-center gap-3 group"
                aria-label="Chat with us on WhatsApp"
              >
                <MessageCircle size={18} className="transition-transform group-hover:scale-110" />
                <span>Instant Chat</span>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent z-0" />
    </section>
  );
};

export default Hero;