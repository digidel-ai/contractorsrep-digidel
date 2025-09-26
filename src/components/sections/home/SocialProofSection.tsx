import { motion } from "framer-motion";
import { 
  Star,
  Shield, 
  TrendingUp,
  Users,
  MapPin,
  Building,
  ArrowRight,
  Target,
  Clock
} from "lucide-react";
import { Card } from "../../ui/card";
import { Badge } from "../../ui/badge";
import { 
  staggerContainer, 
  fadeInScale 
} from "../../../utils/animations";

// Social Proof Section
function SocialProofSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      company: "Elite Roofing Solutions",
      avatar: "SC",
      rating: 5,
      quote: "Our close rate went from 23% to 67% in just two months. Homeowners actually look forward to meeting our reps now.",
      result: "+191% close rate increase"
    },
    {
      name: "Mike Rodriguez",
      company: "Peak Performance Roofing",
      avatar: "MR", 
      rating: 5,
      quote: "We went from 2-3 reviews per month to 40+. Our Google ranking jumped from page 3 to the #1 spot locally.",
      result: "1,200% more reviews"
    },
    {
      name: "David Thompson",
      company: "Apex Contractors",
      avatar: "DT",
      rating: 5,
      quote: "The digital profiles are game-changers. Customers research our team before we even arrive. Total trust builder.",
      result: "89% faster sales cycles"
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
        >
          <Badge variant="outline" className="mb-4 border-green-500/30 text-green-400 bg-green-500/10">
            Success Stories
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Real Results from 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              Real Contractors
            </span>
          </h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInScale}
              className="group"
            >
              <Card className="p-8 h-full bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-gray-800 hover:border-[#007bff]/40 transition-all duration-300 group-hover:scale-105">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#007bff] to-[#00d4ff] rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">{testimonial.avatar}</span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{testimonial.name}</h4>
                        <p className="text-gray-400 text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-gray-300 italic">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Result Badge */}
                  <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                    {testimonial.result}
                  </Badge>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {[
            { stat: "500+", label: "Contractors" },
            { stat: "12,000+", label: "Digital Profiles" }, 
            { stat: "89%", label: "Avg. Close Rate" },
            { stat: "4.9★", label: "Customer Rating" }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="space-y-2"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#007bff] to-[#00d4ff]">
                {item.stat}
              </div>
              <div className="text-gray-400">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export { SocialProofSection };
