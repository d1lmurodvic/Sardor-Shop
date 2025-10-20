"use client";
import { motion } from "framer-motion";
import { Heart, Leaf, Handshake } from "lucide-react";

export default function About() {

const teamMembers = [
    {
      name: "Sardor Xojimurodov",
      role: "Founder & CEO",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      desc: "Passionate about bringing fresh, quality food to every table.",
    },
    {
      name: "Kimdur",
      role: "Marketing Manager",
      img: "https://randomuser.me/api/portraits/women/45.jpg",
      desc: "Connecting our community with the best food experiences.",
    },
    {
      name: "Farruxbek",
      role: "Lead Developer",
      img: "https://randomuser.me/api/portraits/men/54.jpg",
      desc: "Building technology to make your shopping seamless.",
    },
];

const iconInfos = [
    {
      icon: <Leaf size={48} className="text-info" />,
      title: "Freshness",
      desc: "We source our products daily to ensure maximum freshness and quality.",
    },
    {
      icon: <Heart size={48} className="text-info"/>,
      title: "Quality",
      desc: "Every product meets our strict quality standards. Excellence only.",
    },
    {
      icon: <Handshake size={48} className="text-info"/>,
      title: "Trust",
      desc: "Building lasting relationships with our customers through honest service.",
    },
]


  return (
    <div className="min-h-screen max-w-[84%] mx-auto">
      <div className="mt-4 flex items-center justify-center">
        <p className="text-3xl font-bold text-info">Biz xaqimidzda</p>
      </div>

      <section className="max-w-6xl mx-auto px-6 my-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className=" dark:bg-base-200 rounded-2xl shadow-xl p-10"
        >
          <h2 className="text-3xl font-bold text-info mb-6">Bizning tariximiz</h2>
          <p className="text-lg leading-relaxed text-base-content/80">
            Welcome to <span className="font-bold text-base-content">Sardor Shop</span>!
            Since our founding, we've been passionate about bringing the freshest,
            highest-quality food products to your table. We believe that great food
            starts with great ingredients, and we're committed to sourcing only the
            best for our customers.
          </p>
          <p className="text-lg leading-relaxed mt-4 text-base-content/80">
            Our mission is simple: to make healthy, delicious food accessible to everyone.
            From farm-fresh produce to artisanal products, every item in our shop is
            carefully selected with love and care.
          </p>
        </motion.div>
      </section>

      <section>
        <p className="text-3xl font-bold text-center mb-12 text-info">
          Ustunliklarimiz
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto rounded-2xl ">
          {iconInfos.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="card  dark:bg-base-200 shadow-lg rounded-xl p-8 text-center hover:shadow-2xl transition-all"
            >
              <div className="text-base-content mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-base-content">
                {item.title}
              </h3>
              <p className="text-base-content/70">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className=" py-16">
        <p className="text-3xl font-bold text-center mb-12 text-info">
          Meet Our Team
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {teamMembers.map((person, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white dark:bg-base-200 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl border-1 border-info transition-all"
            >
              <div className="flex flex-col items-center p-8">
                <img
                  src={person.img}
                  alt={person.name}
                  className="rounded-full w-32 h-32 border-4 border-base-content object-cover"
                />
                <h3 className="mt-6 text-xl font-semibold text-base-content">
                  {person.name}
                </h3>
                <p className="text-sm font-medium text-base-content/80">
                  {person.role}
                </p>
                <p className="mt-3 text-base-content/70 text-center">{person.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
