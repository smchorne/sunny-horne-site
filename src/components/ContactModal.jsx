import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "./ModalContext";
import { contact } from "../content/contact";

export default function ContactModal() {
  const { isOpen, close } = useModal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") close(); };
    if (isOpen) document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, close]);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch(contact.formspreeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
            onClick={close}
          />

          {/* Modal panel */}
          <motion.div
            className="relative w-full max-w-lg bg-offwhite rounded-2xl shadow-2xl p-8 md:p-10"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Close button */}
            <button
              onClick={close}
              aria-label="Close"
              className="absolute top-4 right-4 text-charcoal/40 hover:text-charcoal transition-colors text-2xl leading-none"
            >
              ×
            </button>

            <h2 className="font-serif text-3xl text-forest mb-1">{contact.heading}</h2>
            <p className="text-charcoal/60 text-sm mb-6">{contact.subtext}</p>

            {status === "success" ? (
              <p className="text-forest font-medium text-center py-8">{contact.fields.success}</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-charcoal/60 mb-1 uppercase tracking-wider">
                    {contact.fields.name}
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-blush bg-cream px-4 py-3 text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-caramel"
                    placeholder="Jane Smith"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-charcoal/60 mb-1 uppercase tracking-wider">
                    {contact.fields.email}
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-blush bg-cream px-4 py-3 text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-caramel"
                    placeholder="jane@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-charcoal/60 mb-1 uppercase tracking-wider">
                    {contact.fields.message}
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-blush bg-cream px-4 py-3 text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-caramel resize-none"
                    placeholder="What's on your mind?"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-600">{contact.fields.error}</p>
                )}

                <div className="flex items-center justify-between pt-2">
                  <a
                    href={contact.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-caramel hover:text-forest transition-colors underline underline-offset-2"
                  >
                    Connect on LinkedIn
                  </a>
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="bg-forest text-cream px-6 py-3 rounded-lg text-sm font-medium hover:bg-caramel transition-colors disabled:opacity-50"
                  >
                    {status === "submitting" ? "Sending…" : contact.fields.submit}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
