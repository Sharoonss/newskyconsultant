import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    id: 1,
    question: "How can you help with my visa application?",
    answer: "We provide end-to-end visa assistance including documentation, application submission, and interview preparation to maximize your chances of approval.",
  },
  {
    id: 2,
    question: "What services do you offer?",
    answer: (
      <p className="text-white text-sm leading-relaxed">
        <span className="font-bold">Sky Consultant</span> provides expert guidance for student admissions,
        visa applications, PTE preparation, student accommodation, skills
        assessments, professional year courses, health insurance, and more.
      </p>
    ),
  },
  {
    id: 3,
    question: "Do I need health insurance for studying in Australia?",
    answer: "Yes, health insurance is mandatory for international students in Australia. We help you find the best OSHC or OVHC coverage that suits your needs.",
  },
  {
    id: 4,
    question: "How can I get in touch with Sky Consultant for consultation?",
    answer: "You can contact us through our contact form, email, or phone. Our team is available to assist you every step of the way.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState(2);

  return (
    <section className="bg-[#f0f2f8]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">

          {/* Left Side */}
          <div className="py-16 px-8 lg:px-14 flex flex-col justify-center">

            {/* Badge */}
            <span className="inline-block border border-gray-300 bg-white text-gray-500 text-sm px-5 py-1.5 rounded-full mb-6 w-fit">
              FAQ
            </span>

            {/* Heading */}
            <h2
              className="text-4xl font-bold text-[#1a1a4b] leading-tight mb-3"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Taking you to the destination you want to reach in case
            </h2>
            <p className="text-gray-400 text-sm mb-10">Frequently asked questions!</p>

            {/* Custom Accordion */}
            <div className="flex flex-col gap-3">
              {faqs.map((faq) => {
                const isOpen = openId === faq.id;

                return (
                  <div
                    key={faq.id}
                    className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                      isOpen ? "bg-[#8B1A1A] shadow-lg" : "bg-white shadow-sm"
                    }`}
                  >
                    {/* Question Row */}
                    <button
                      onClick={() => setOpenId(isOpen ? null : faq.id)}
                      className="w-full flex items-center justify-between px-6 py-4 text-left"
                    >
                      <span
                        className={`text-base font-semibold transition-colors duration-200 ${
                          isOpen ? "text-white" : "text-[#1a1a4b]"
                        }`}
                      >
                        {faq.question}
                      </span>
                      <span
                        className={`ml-4 flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-200 ${
                          isOpen
                            ? "border-white text-white"
                            : "border-[#B11212] text-[#B11212]"
                        }`}
                      >
                        {isOpen ? (
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M2 2l8 8M10 2L2 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                          </svg>
                        ) : (
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                          </svg>
                        )}
                      </span>
                    </button>

                    {/* Answer */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5 pt-1">
                            {typeof faq.answer === "string" ? (
                              <p className="text-sm leading-relaxed text-red-100">
                                {faq.answer}
                              </p>
                            ) : (
                              faq.answer
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side — Full bleed image */}
          <div className="hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80"
              alt="Consultation"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}