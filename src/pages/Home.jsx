import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useModal } from "../components/ModalContext";
import { hero } from "../content/hero";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Home() {
  const { open } = useModal();

  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="bg-forest text-cream">
        <div className="max-w-5xl mx-auto px-6 py-24 md:py-36">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.p variants={fadeUp} className="text-caramel text-sm font-medium uppercase tracking-widest mb-4">
              Product &amp; Operations Leader
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-serif text-5xl md:text-7xl font-semibold leading-tight mb-6">
              {hero.name}
            </motion.h1>
            <motion.p variants={fadeUp} className="text-cream/80 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              {hero.tagline}
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <button
                onClick={open}
                className="bg-caramel text-charcoal font-medium px-7 py-3 rounded-full hover:bg-cream transition-colors"
              >
                {hero.ctaLabel}
              </button>
              <Link
                to="/experience"
                className="border border-cream/30 text-cream font-medium px-7 py-3 rounded-full hover:bg-cream/10 transition-colors"
              >
                View Experience
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── What I Do ────────────────────────────────────────────────────────── */}
      <section className="bg-offwhite">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif text-3xl text-forest mb-12 text-center"
          >
            What I do
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {hero.pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-cream rounded-2xl p-8 border border-blush/50"
              >
                <div className="w-10 h-1 bg-caramel rounded-full mb-5" />
                <h3 className="font-serif text-2xl text-forest mb-3">{pillar.title}</h3>
                <p className="text-charcoal/70 leading-relaxed text-sm">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────────────────── */}
      <section className="bg-cream border-y border-blush/50">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid sm:grid-cols-3 gap-10 text-center">
            {hero.stats.map((stat, i) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="font-serif text-5xl text-forest font-semibold mb-2">{stat.value}</div>
                <div className="text-charcoal/60 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About teaser ─────────────────────────────────────────────────────── */}
      <section className="bg-blush/30">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-2xl md:text-3xl text-forest italic max-w-2xl mx-auto mb-8 leading-snug"
          >
            &ldquo;{hero.pullQuote}&rdquo;
          </motion.blockquote>
          <Link
            to="/about"
            className="text-sm font-medium text-caramel hover:text-forest transition-colors underline underline-offset-4"
          >
            Read my story →
          </Link>
        </div>
      </section>
    </main>
  );
}
