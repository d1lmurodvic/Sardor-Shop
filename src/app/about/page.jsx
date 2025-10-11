"use client";
import { motion } from "framer-motion";
import { Heart, Leaf, Handshake } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen  max-w-[95%] mx-auto">
        <div className="mt-3 flex items-center justify-center">
            <p className="text-3xl font-bold text-rose-600">About us</p>    
        </div>     

      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-base-200 rounded-2xl shadow-xl p-10"
        >
          <h2 className="text-3xl font-bold text-rose-600 mb-6">Our Story</h2>
          <p className="text-lg leading-relaxed text-base-content/80">
            Welcome to <span className="font-bold text-rose-600">Sardor Shop</span>! 
            Since our founding, we've been passionate about bringing the freshest, 
            highest-quality food products to your table. We believe that great food 
            starts with great ingredients, and we're committed to sourcing only the 
            best for our customers.
          </p>x
          <p className="text-lg leading-relaxed mt-4 text-base-content/80">
            Our mission is simple: to make healthy, delicious food accessible to everyone. 
            From farm-fresh produce to artisanal products, every item in our shop is 
            carefully selected with love and care.
          </p>
        </motion.div>
      </section>

      <section className="bg-base-100 ">
        <h2 className="text-3xl font-bold text-center mb-12 text-rose-600">
          What We Stand For
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            { icon: <Leaf size={48} />, title: "Freshness", desc: "We source our products daily to ensure maximum freshness and quality." },
            { icon: <Heart size={48} />, title: "Quality", desc: "Every product meets our strict quality standards. Excellence only." },
            { icon: <Handshake size={48} />, title: "Trust", desc: "Building lasting relationships with our customers through honest service." },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="card bg-white dark:bg-base-200 shadow-lg rounded-xl p-8 text-center hover:shadow-2xl transition-all"
            >
              <div className="text-rose-600 mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-base-content/70">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8">
        <motion.div
          whileHover={{ y: -6 }}
          className="bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-2xl shadow-xl p-8"
        >
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p>
            To provide our community with access to the freshest, most nutritious food 
            while supporting local farmers and producers. We're more than a shop – 
            we're your partner in healthy living.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -6 }}
          className="bg-white dark:bg-base-200 rounded-2xl shadow-xl p-8"
        >
          <h2 className="text-2xl font-bold mb-4 text-rose-600">Our Vision</h2>
          <p className="text-base-content/80">
            To become the most trusted name in food retail, known for quality, 
            freshness, and exceptional service. We dream of a world where 
            everyone has access to healthy, delicious food.
          </p>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="bg-base-100 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-rose-600">
          Meet Our Team
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            { name: "Sardor Xojimurodov", role: "Founder & CEO", img: "https://randomuser.me/api/portraits/men/32.jpg", desc: "Passionate about bringing fresh, quality food to every table." },
            { name: "Dildora", role: "Marketing Manager", img: "https://randomuser.me/api/portraits/women/45.jpg", desc: "Connecting our community with the best food experiences." },
            { name: "Jamshid", role: "Lead Developer", img: "https://randomuser.me/api/portraits/men/54.jpg", desc: "Building technology to make your shopping seamless." },
          ].map((person, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white dark:bg-base-200 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all"
            >
              <div className="flex flex-col items-center p-8">
                <img
                  src={person.img}
                  alt={person.name}
                  className="rounded-full w-32 h-32 border-4 border-rose-600 object-cover"
                />
                <h3 className="mt-6 text-xl font-semibold text-rose-600">{person.name}</h3>
                <p className="text-sm font-medium">{person.role}</p>
                <p className="mt-3 text-base-content/70 text-center">{person.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>   
    </div>
  );
}
