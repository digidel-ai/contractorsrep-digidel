import { motion } from "framer-motion";
import { useState } from "react";
import { 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Users,
  QrCode,
  Award,
  Smartphone
} from "lucide-react";
import { Button } from "../../ui/button";
import { Badge } from "../../ui/badge";
import { 
  staggerContainer, 
  fadeInScale 
} from "../../../utils/animations";

// Two-Stage Approach Section
function TwoStageSection() {
  const [activeStage, setActiveStage] = useState(1);

  const stages = [
    {
      id: 1,
      title: "Stage 1: Digital Foundation",
      subtitle: "Build Instant Credibility & Generate Reviews",
      description: "Professional digital profiles and on-site review capture system",
      features: [
        "Digital Sales Rep Profiles with credentials",
        "On-the-spot Google Review generation",
        "Professional portfolio showcase",
        "Interactive project mapping"
      ],
      results: "89% higher close rates, 3x more reviews",
      timeline: "Setup in 24 hours"
    },
    {
      id: 2,
      title: "Stage 2: Physical Brand Assets",
      subtitle: "Keep Your Brand Top-of-Mind",
      description: "NFC-enabled business cards and branded assets for long-term recall",
      features: [
        "Custom NFC business cards",
        "Branded refrigerator magnets",
        "Weatherproof QR stickers",
        "Professional marketing materials"
      ],
      results: "Year-round brand visibility, more referrals",
      timeline: "2-week production"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#020203] via-[#0a0a0f] to-[#020203]">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-4 border-[#007bff]/30 text-[#00d4ff] bg-[#007bff]/10">
            Our Approach
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Two-Stage 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#007bff] to-[#00d4ff]">
              Success System
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Start with immediate credibility wins, then expand to long-term brand building
          </p>
        </motion.div>

        {/* Stage Selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-[#1a1a1a] rounded-lg p-2 border border-gray-800">
            {stages.map((stage) => (
              <button
                key={stage.id}
                onClick={() => setActiveStage(stage.id)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeStage === stage.id
                    ? 'bg-gradient-to-r from-[#007bff] to-[#00d4ff] text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Stage {stage.id}
              </button>
            ))}
          </div>
        </div>

        {/* Stage Content */}
        {stages.map((stage) => (
          <motion.div
            key={stage.id}
            className={`${activeStage === stage.id ? 'block' : 'hidden'}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <div className="space-y-8">
                <div>
                  <Badge className="mb-4 bg-[#007bff] text-white">
                    {stage.title}
                  </Badge>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {stage.subtitle}
                  </h3>
                  <p className="text-xl text-gray-300 mb-8">
                    {stage.description}
                  </p>
                </div>

                <div className="space-y-4">
                  {stage.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <CheckCircle className="w-5 h-5 text-[#00d4ff]" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-800">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Results</div>
                    <div className="text-[#00d4ff] font-semibold">{stage.results}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Timeline</div>
                    <div className="text-[#00d4ff] font-semibold">{stage.timeline}</div>
                  </div>
                </div>

                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-[#007bff] to-[#00d4ff] text-white hover:from-[#0056b3] hover:to-[#007bff] group"
                >
                  Start Stage {stage.id} Today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Visual */}
              <div className="relative">
                <motion.div 
                  className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] p-8 rounded-2xl border border-[#007bff]/30 shadow-2xl"
                  animate={stage.id === activeStage ? { scale: [1, 1.02, 1] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {stage.id === 1 ? (
                    // Stage 1 Visual
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#007bff] to-[#00d4ff] rounded-full flex items-center justify-center">
                          <Users className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <div className="h-4 bg-white/20 rounded w-40 mb-2"></div>
                          <div className="h-3 bg-white/10 rounded w-32"></div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="aspect-video bg-[#007bff]/20 rounded-lg flex items-center justify-center">
                          <Award className="w-6 h-6 text-[#00d4ff]" />
                        </div>
                        <div className="aspect-video bg-[#007bff]/20 rounded-lg flex items-center justify-center">
                          <Star className="w-6 h-6 text-yellow-400" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Stage 2 Visual
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="h-24 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center border border-[#007bff]/30">
                          <QrCode className="w-8 h-8 text-[#00d4ff]" />
                        </div>
                        <div className="h-24 bg-gradient-to-br from-[#007bff]/20 to-[#00d4ff]/20 rounded-lg flex items-center justify-center">
                          <Smartphone className="w-8 h-8 text-[#00d4ff]" />
                        </div>
                      </div>
                      <div className="text-center space-y-2">
                        <div className="h-3 bg-white/10 rounded w-full"></div>
                        <div className="h-3 bg-white/10 rounded w-3/4 mx-auto"></div>
                      </div>
                    </div>
                  )}
                </motion.div>

                {/* Floating Badge */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-[#007bff] to-[#00d4ff] px-4 py-2 rounded-full shadow-lg"
                  animate={{ 
                    y: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <span className="text-white text-sm font-semibold">
                    {stage.id === 1 ? 'Fast Setup' : 'Premium Quality'}
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export { TwoStageSection };
