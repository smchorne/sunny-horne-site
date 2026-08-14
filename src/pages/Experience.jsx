import { motion } from "framer-motion";
import { experience, education, skills } from "../content/experience";

function RoleCard({ role, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-blush last:hidden" />
      {/* Timeline dot */}
      <div className="absolute left-[-4px] top-2 w-2.5 h-2.5 rounded-full bg-caramel border-2 border-cream" />

      <div className="bg-offwhite rounded-2xl p-6 md:p-8 border border-blush/40">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
          <div>
            <h3 className="font-serif text-xl text-forest font-semibold">{role.title}</h3>
            <p className="text-charcoal font-medium text-sm">{role.company}</p>
          </div>
          <div className="text-right text-xs text-charcoal/50 shrink-0">
            <div>{role.dates}</div>
            <div>{role.location}</div>
          </div>
        </div>

        {role.about && (
          <p className="text-xs text-charcoal/40 mb-3 italic">{role.about}</p>
        )}

        {role.intro && (
          <p className="text-sm text-charcoal/70 italic mb-4 border-l-2 border-caramel pl-3">
            {role.intro}
          </p>
        )}

        <ul className="space-y-2">
          {role.achievements.map((bullet, i) => (
            <li key={i} className="text-sm text-charcoal/80 leading-relaxed flex gap-3">
              <span className="text-caramel mt-1 shrink-0">–</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      {/* Page header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <p className="text-caramel text-sm font-medium uppercase tracking-widest mb-2">Career</p>
        <h1 className="font-serif text-5xl text-forest font-semibold mb-4">Experience</h1>
        <p className="text-charcoal/60 text-lg max-w-xl">
          12+ years across fulfillment operations, global marketing, and enterprise product, operations, and AI strategy.
        </p>
      </motion.div>

      {/* Timeline */}
      <section className="mb-20">
        {experience.map((role, i) => (
          <RoleCard key={`${role.company}-${role.dates}`} role={role} index={i} />
        ))}
      </section>

      {/* Education */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="font-serif text-3xl text-forest mb-8">Education</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {education.map((ed) => (
            <div key={ed.degree} className="bg-offwhite rounded-2xl p-6 border border-blush/40">
              <div className="text-xs text-caramel font-medium uppercase tracking-wider mb-1">{ed.note}</div>
              <div className="font-medium text-charcoal">{ed.degree}</div>
              <div className="text-sm text-charcoal/60">{ed.school}</div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Skills */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-serif text-3xl text-forest mb-6">Core Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-blush/50 text-charcoal/80 text-xs font-medium px-4 py-2 rounded-full border border-blush"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
