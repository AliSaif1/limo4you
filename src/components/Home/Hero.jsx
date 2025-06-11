import { motion } from 'framer-motion';
import { ArrowRight, ChevronsDown } from 'lucide-react';

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative bg-primary text-white overflow-hidden pt-32 pb-20 md:pt-40 md:pb-24 mt-16 mb-6">
      {/* Main background with subtle pattern animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark to-primary">
        <motion.div
          initial={{ x: '-50%', y: '-50%', opacity: 0 }}
          animate={{ x: '-30%', y: '-30%', opacity: 0.03 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/2 left-1/2 w-[150%] h-[150%] bg-repeat opacity-95"
        />
      </div>

      {/* Right side gradient */}
      <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-secondary/10 to-transparent" />

      {/* Floating blur circle */}
      <div className="absolute top-1/2 -right-20 w-80 h-80 bg-secondary rounded-full filter blur-[120px] opacity-15 -translate-y-1/2" />

      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Text content */}
          <div className="max-w-2xl lg:max-w-2xl xl:max-w-3xl">
            <motion.div variants={itemVariants}>
              <span className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4 tracking-wider">
                LUXURY REDEFINED
              </span>
            </motion.div>

            <motion.h1
              className="font-display text-4xl sm:text-5xl md:text-6xl xl:text-[3.8rem] font-bold mb-6 leading-tight"
              variants={itemVariants}
            >
              Premium <span className="text-secondary">Limousine</span> Services <br className="hidden md:block" />For Discerning Clients
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-10 max-w-lg leading-relaxed"
              variants={itemVariants}
            >
              Experience unparalleled luxury transportation with our executive fleet.
              Punctual, discreet, and tailored to your exact requirements.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-secondary hover:bg-secondary-dark text-primary font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <span>Book Now</span>
                <ArrowRight size={18} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-white/30 hover:border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 flex items-center gap-2"
              >
                <span>Explore Fleet</span>
                <ChevronsDown size={18} />
              </motion.button>
            </motion.div>
          </div>

          {/* Image placeholder */}
          <motion.div
            className="hidden lg:block relative w-full max-w-xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-2xl border-4 border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <span className="text-white text-lg font-medium">Premium Limousine Image</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary rounded-lg blur-[60px] opacity-20 z-[-1]" />
          </motion.div>
        </motion.div>
      </div>

      {/* Improved bottom fade - matches primary color */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-primary to-transparent z-0 opacity-95" />

      {/* Spacer for content below */}
      <div className="relative z-10 h-12 w-full"></div>
    </section>
  );
};

export default Hero;