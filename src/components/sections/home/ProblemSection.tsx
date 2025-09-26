import { motion } from "framer-motion";
import { 
  Shield, 
  Users,
  Star
} from "lucide-react";
import { Card } from "../../ui/card";
import { Badge } from "../../ui/badge";
import { 
  staggerContainer, 
  fadeInScale 
} from "../../../utils/animations";

// Problem Section Component
function ProblemSection() {
  const problems = [
    {
      icon: Shield,
      title: "Homeowner Skepticism",
      description: "72% of homeowners don't trust door-to-door contractors",
      stat: "72%"
    },
    {
      icon: Users,
      title: "Generic First Impressions",
      description: "Sales reps blend in with every other contractor",
      stat: "89%"
    },
    {
      icon: Star,
      title: "Inconsistent Reviews",
      description: "Only 1 in 10 satisfied customers leave reviews",
      stat: "10%"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#020203] to-[#0a0a0f]">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="outline" className="mb-4 border-red-500/30 text-red-400 bg-red-500/10">
            The Problem
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Why Homeowners Say 
            <span className="block text-red-400">"We'll Think About It"</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every roofing contractor faces the same challenges. Homeowners have heard the horror stories and built up walls of skepticism.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={fadeInScale}
              className="relative group"
            >
              <Card className="p-8 bg-gradient-to-br from-red-500/10 to-red-600/5 border-red-500/20 hover:border-red-400/40 transition-all duration-300 group-hover:scale-105">
                <div className="text-center space-y-6">
                  <div className="relative">
                    <motion.div 
                      className="w-20 h-20 mx-auto bg-red-500/20 rounded-full flex items-center justify-center group-hover:bg-red-500/30 transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <problem.icon className="w-10 h-10 text-red-400" />
                    </motion.div>
                    <Badge className="absolute -top-2 -right-2 bg-red-500 text-white">
                      {problem.stat}
                    </Badge>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{problem.title}</h3>
                    <p className="text-gray-300">{problem.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export { ProblemSection };
