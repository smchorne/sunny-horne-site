import { useModal } from "./ModalContext";
import { contact } from "../content/contact";

export default function Footer() {
  const { open } = useModal();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-blush/50 bg-cream mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-charcoal/50">
        <span>© {year} Sunny Horne</span>
        <div className="flex items-center gap-6">
          <a
            href={contact.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-caramel transition-colors"
          >
            LinkedIn
          </a>
          <button onClick={open} className="hover:text-caramel transition-colors">
            Get in Touch
          </button>
        </div>
      </div>
    </footer>
  );
}
