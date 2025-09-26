import { motion } from "framer-motion";
import { 
  ArrowRight,
  Shield, 
  Target,
  Clock
} from "lucide-react";
import { Button } from "../../ui/button";
import { 
  staggerContainer, 
  fadeInScale 
} from "../../../utils/animations";

// CTA Section
function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#007bff] via-[#0056b3] to-[#00d4ff] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%)] bg-[length:60px_60px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Ready to Stop Losing Deals to 
            <span className="block">"We'll Think About It"?</span>
          </h2>
          
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Join 500+ roofing contractors who've transformed skeptical homeowners into confident customers with Contractor's Rep.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInScale}>
              <Button 
                size="lg"
                className="bg-white text-[#007bff] hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 group px-8 py-4 text-lg"
              >
                Get Started - Stage 1 (24hr Setup)
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            
            <motion.div variants={fadeInScale} transition={{ delay: 0.1 }}>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-[#007bff] transition-all duration-300 group px-8 py-4 text-lg"
              >
                <Clock className="mr-2 w-5 h-5" />
                Book 15-min Demo Call
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { icon: Clock, text: "Setup in 24 hours" },
              { icon: Shield, text: "No long-term contracts" },
              { icon: Target, text: "Results guaranteed" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center space-y-2"
                variants={fadeInScale}
              >
                <item.icon className="w-8 h-8 text-white" />
                <span className="text-blue-100">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </section>
  );
}

export { CTASection };
