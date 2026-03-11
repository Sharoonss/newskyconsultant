import { motion } from "framer-motion";

const services = [
  {
    title: "Admission Services",
    description: "Our expert guidance helps you choose the right course and university ensuring a smooth and successful application process.",
    dark: "navy",
    icon: (
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Visa Assistance",
    description: "We simplify the visa application process for students, families, and professionals & increase your chances of approval.",
    dark: null,
    icon: (
      <div className="border-2 border-current rounded px-2 py-1 inline-block font-bold tracking-widest" style={{ fontSize: "13px", letterSpacing: "2px" }}>
        VISA
      </div>
    ),
  },
  {
    title: "Accommodation",
    description: "Finding affordable and comfortable student accommodation that meets your preferences and requirements.",
    dark: null,
    icon: (
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 3l18 18" strokeLinecap="round" />
        <rect x="3" y="3" width="7" height="7" rx="1" strokeLinecap="round" />
        <rect x="14" y="14" width="7" height="7" rx="1" strokeLinecap="round" />
        <path d="M14 3h7v7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 14v7h7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Professional Course",
    description: "Enroll in the Professional Year Program to enhance your career prospects through skill development & work experience.",
    dark: null,
    icon: (
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l9 4.5-9 4.5-9-4.5L12 2z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 7v5M6 11.5V17c0 2 2.686 3 6 3s6-1 6-3v-5.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "English Test Prep",
    description: "Access specialized coaching & strategies to ensure you achieve your desired score on the PTE, IELTS, and language CERT exam.",
    dark: "red",
    icon: (
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "NAATI CCL Services",
    description: "Expert preparation and guidance for the NAATI CCL test to help meet language requirements for Australian permanent residency.",
    dark: null,
    icon: (
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <circle cx="12" cy="12" r="8" strokeDasharray="3 2" />
        <path d="M12 4V2M12 22v-2M4 12H2M22 12h-2M6.34 6.34L4.93 4.93M19.07 19.07l-1.41-1.41M17.66 6.34l1.41-1.41M4.93 19.07l1.41-1.41" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Health Insurance",
    description: "We provide support in selecting the right OSHC or OVHC health insurance policy and provide peace of mind.",
    dark: null,
    icon: (
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 8v4M10 10h4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Skills Assessment",
    description: "Our team assists you in appropriate skills assessment through authorities, such as AACA, AASW, AIMS, IPA & ACS etc",
    dark: null,
    icon: (
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="8" r="3" />
        <path d="M6.5 19a5.5 5.5 0 0111 0" strokeLinecap="round" />
        <path d="M17 14l1.5 1.5L21 13" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="19" cy="19" r="3" />
        <path d="M17.5 18.5l1 1 2-2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function CoreServices() {
  return (
    <section className="py-16 bg-[#f0f2f8]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-12 gap-6">
          <div>
            <span className="inline-block border border-gray-300 bg-white text-gray-600 text-sm px-4 py-1.5 rounded-full mb-4">
              Services
            </span>
            <h2
              className="text-4xl font-bold text-[#1a1a4b]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Explore our Core Services
            </h2>
          </div>
          <p className="text-gray-500 text-base max-w-xs md:text-right leading-relaxed md:pt-10">
            Looking to settle in Australia, or preparing for exams, we provide comprehensive support every step of the way.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => {
            const isNavy = service.dark === "navy";
            const isRed = service.dark === "red";
            const isDark = isNavy || isRed;

            const baseBg = isNavy
              ? "bg-[#1a1a4b]"
              : isRed
              ? "bg-[#8B1A1A]"
              : "bg-white";

            const hoverBg = isNavy
              ? "hover:bg-[#141438]"
              : isRed
              ? "hover:bg-[#701515]"
              : "hover:bg-[#1a1a4b]";

            const titleColor = isDark
              ? "text-white"
              : "text-[#1a1a4b] group-hover:text-white";

            const descColor = isDark
              ? "text-blue-100"
              : "text-gray-500 group-hover:text-blue-100";

            const iconColor = isDark
              ? "text-white"
              : "text-[#1a1a4b] group-hover:text-white";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07, duration: 0.4 }}
                className={`
                  group rounded-2xl p-6 cursor-pointer
                  transition-all duration-300
                  ${baseBg} ${hoverBg}
                  shadow-sm hover:shadow-2xl
                `}
              >
                {/* Icon */}
                <div className={`mb-5 transition-colors duration-300 ${iconColor}`}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3
                  className={`text-[17px] font-bold mb-3 transition-colors duration-300 ${titleColor}`}
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className={`text-sm leading-relaxed transition-colors duration-300 ${descColor}`}>
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}