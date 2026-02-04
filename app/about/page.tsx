"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import PolaroidCard from "@/components/ui/polaroid-card";
import { Heart, Users, Sparkles } from "lucide-react";

export default function AboutPage() {
  const team = [
    {
      name: "Raaj Patkar",
      role: "Co-Founder",
      image: "https://instagram.fbom3-5.fna.fbcdn.net/v/t51.2885-19/587533919_17929565742153747_4228546220121328475_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby41MzAuYzIifQ&_nc_ht=instagram.fbom3-5.fna.fbcdn.net&_nc_cat=103&_nc_oc=Q6cZ2QFTDwAe22IvZX9BUt68QZltzjBrVDh8kyE8Y4VAolCK6_WnbvfZ4N9IRngnA-Spi9AsAm_H7ZMQPoT8CRRhiKMZ&_nc_ohc=cOW1QV_AIzcQ7kNvwH4Ev2G&_nc_gid=8SmBrqn5kqCb-6xXSUK6cg&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_Aft3t47HLXIRqTTYSofiPHg2NU5o9vzS4dufVpnL7M0r4Q&oe=698627E6&_nc_sid=7a9f4b",
    },
    {
      name: "Sam Rivera",
      role: "Co-Founder",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      name: "Jordan Park",
      role: "Lead Engineer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
    {
      name: "Taylor Morgan",
      role: "Design Lead",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    },
  ];

  const supporters = [
    "KC College Of Engineering",
    "Google Developers Group"
  ];

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-orange-950/20 via-amber-950/10 to-black overflow-hidden">
      {/* Warm Bokeh Background Effect */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-orange-400/5 blur-3xl"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            

            <h1 className="font-serif text-6xl md:text-7xl text-amber-50 leading-tight">
              Built & run by{" "}
              <span className="italic text-orange-300">students</span>
            </h1>

            <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              We're a team of builders, dreamers, and problem-solvers who believe
              that the best products come from people who care deeply about the
              impact they create.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
     

      {/* Team Section */}
      <section className="relative z-10 py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            
          </motion.div>

          {/* Polaroid Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <PolaroidCard
                  name={member.name}
                  role={member.role}
                  image={member.image}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supporters Section */}
      <section className="relative z-10 py-20 px-8 border-t border-zinc-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-zinc-500 text-sm uppercase tracking-wider mb-8">
              Backed & Supported By
            </p>
            <div className="flex flex-wrap items-center justify-center gap-12">
              {supporters.map((supporter, index) => (
                <motion.div
                  key={supporter}
                  className="text-zinc-600 font-display text-2xl font-bold tracking-wide hover:text-zinc-400 transition-colors cursor-pointer"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {supporter}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Paper Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] mix-blend-multiply">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          }}
        />
      </div>
    </main>
  );
}
