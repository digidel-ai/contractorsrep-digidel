import { motion } from "framer-motion";
import { 
  Shield, 
  Star, 
  TrendingUp,
  Building,
  Award,
  MapPin,
  Smartphone
} from "lucide-react";
import { Badge } from "../../ui/badge";
import { 
  staggerContainer, 
  fadeInScale 
} from "../../../utils/animations";

// Solution Overview Section
function SolutionSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0a0f] to-[#020203] relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,123,255,0.02)_50%,transparent_75%)] bg-[length:60px_60px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="outline" className="mb-4 border-[#007bff]/30 text-[#00d4ff] bg-[#007bff]/10">
            The Solution
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007bff] to-[#00d4ff]">Contractor's Rep</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A complete digital credibility and reputation management suite designed specifically for roofing contractors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Benefits */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              {[
                {
                  icon: Shield,
                  title: "Build Instant Trust",
                  description: "Professional digital profiles sent before appointments create familiarity and comfort",
                  highlight: "89% higher close rates"
                },
                {
                  icon: Star,
                  title: "Capture Reviews at Peak Satisfaction",
                  description: "On-site review generation during the 'golden hour' when customers are happiest",
                  highlight: "3x more reviews"
                },
                {
                  icon: TrendingUp,
                  title: "Dominate Local Search",
                  description: "Consistent 5-star reviews boost your Google rankings and local visibility",
                  highlight: "Top 3 rankings"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-gradient-to-r from-[#007bff]/10 to-transparent rounded-xl border border-[#007bff]/20 hover:border-[#007bff]/40 transition-all group"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#007bff] to-[#00d4ff] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-white">{benefit.title}</h3>
                      <Badge className="bg-[#00d4ff] text-black text-xs">{benefit.highlight}</Badge>
                    </div>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Visual Showcase */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main Display */}
              <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-[#007bff]/30 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-bold">Mike Johnson - Elite Roofer</h3>
                    <Badge className="bg-[#007bff] text-white">GAF Master Elite®</Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="aspect-video bg-gradient-to-br from-[#007bff]/20 to-[#00d4ff]/20 rounded-lg flex items-center justify-center">
                      <Building className="w-8 h-8 text-[#00d4ff]" />
                    </div>
                    <div className="aspect-video bg-gradient-to-br from-[#007bff]/20 to-[#00d4ff]/20 rounded-lg flex items-center justify-center">
                      <Award className="w-8 h-8 text-[#00d4ff]" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-300">
                      <Star className="w-4 h-4 text-yellow-400 mr-2" />
                      <span>127 Google Reviews • 4.9 Rating</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <MapPin className="w-4 h-4 text-[#00d4ff] mr-2" />
                      <span>23 Projects in Your Area</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-gradient-to-r from-[#007bff] to-[#00d4ff] p-3 rounded-full shadow-lg"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Smartphone className="w-6 h-6 text-white" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-yellow-400 to-yellow-500 p-3 rounded-full shadow-lg"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <Star className="w-6 h-6 text-white" />
              </motion.div>

              {/* Background Glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#007bff]/10 to-[#00d4ff]/10 rounded-2xl blur-xl -z-10 scale-110"
                animate={{ 
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export { SolutionSection };
