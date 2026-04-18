import { motion } from "framer-motion";
import { about } from "../content/about";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <main>
      {/* ── Page header ──────────────────────────────────────────────────────── */}
      <section className="bg-forest text-cream">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <p className="text-caramel text-sm font-medium uppercase tracking-widest mb-3">About</p>
            <h1 className="font-serif text-5xl md:text-6xl font-semibold mb-4">{about.headline}</h1>
          </motion.div>
        </div>
      </section>

      {/* ── Origin story ─────────────────────────────────────────────────────── */}
      <section className="bg-cream">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-8 h-1 bg-caramel rounded-full" />
              <h2 className="font-serif text-3xl text-forest">{about.origin.heading}</h2>
            </motion.div>
            <div className="space-y-5">
              {about.origin.body.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-charcoal/80 leading-relaxed text-base"
                >
                  {para}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How I work ───────────────────────────────────────────────────────── */}
      <section className="bg-offwhite">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-1 bg-caramel rounded-full" />
            <h2 className="font-serif text-3xl text-forest">{about.values.heading}</h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-charcoal/70 text-base mb-10 max-w-2xl"
          >
            {about.values.intro}
          </motion.p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {about.values.list.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-cream rounded-2xl p-6 border border-blush/40"
              >
                <div className="font-medium text-forest mb-2">{item.label}</div>
                <p className="text-sm text-charcoal/65 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Building toward something ─────────────────────────────────────────── */}
      <section className="bg-forest text-cream">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-8 h-1 bg-caramel rounded-full" />
              <h2 className="font-serif text-3xl text-cream">{about.entrepreneur.heading}</h2>
            </motion.div>
            <div className="space-y-5">
              {about.entrepreneur.body.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-cream/80 leading-relaxed text-base"
                >
                  {para}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Outside of work ──────────────────────────────────────────────────── */}
      <section className="bg-blush/30">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-1 bg-caramel rounded-full" />
            <h2 className="font-serif text-3xl text-forest">{about.outside.heading}</h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-charcoal/80 leading-relaxed text-base max-w-2xl"
          >
            {about.outside.body}
          </motion.p>
        </div>
      </section>
    </main>
  );
}
