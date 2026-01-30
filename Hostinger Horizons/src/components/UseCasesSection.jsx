import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const departments = [
  {
    id: 'executives',
    label: 'For Executives',
    headline: 'Lead smarter, not harder',
    description: "Your calendar is packed, your inbox is overflowing, and strategic thinking keeps getting pushed aside. We'll build AI systems that handle the noise—so you can focus on what moves the needle.",
    cta: 'Learn More',
    ctaLink: '#products',
    products: [
      {
        icon: (
          <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        title: 'Your AI-Powered Chief of Staff',
        description: 'From daily briefings to meeting prep to email triage—get an executive assistant that actually understands your priorities.',
      },
      {
        icon: (
          <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        title: 'Smart Email Triage',
        description: 'Intelligent email management with priority sorting, categorization, and draft responses—never miss what matters.',
      },
      {
        icon: (
          <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        title: 'Digital Replica (ECHO)',
        description: 'Create a digital version of your expertise and communication style for consistent messaging.',
      },
    ],
  },
  {
    id: 'hr',
    label: 'For HR Teams',
    headline: 'Build an AI-ready workforce',
    description: "Your team is drowning in repetitive tasks while AI skills remain a mystery. We'll assess where your people stand, create personalized learning paths, and track real progress.",
    cta: 'Start Assessment',
    ctaLink: 'https://b2cspark.greyai.ai',
    external: true,
    products: [
      {
        icon: (
          <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        title: 'AI Literacy Assessment',
        description: 'Measure AI readiness with SPARK Score—understand exactly where your team stands.',
      },
      {
        icon: (
          <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        title: 'Personalized Learning Paths',
        description: 'Guide each employee through SPARK Path—adaptive curriculum that builds confidence.',
      },
      {
        icon: (
          <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        title: 'Onboarding Automation',
        description: 'Streamline employee onboarding with automated workflows and document collection.',
      },
    ],
  },
  {
    id: 'operations',
    label: 'For Operations',
    headline: 'Automate the busywork',
    description: "Your team is drowning in data entry, report building, and admin work. We'll map your workflows and build custom AI systems that handle the busywork.",
    cta: 'Learn More',
    ctaLink: '#products',
    products: [
      {
        icon: (
          <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        title: 'Turn Meetings into Money',
        description: 'Convert call transcripts into SOPs, blog drafts and LinkedIn posts in seconds.',
      },
      {
        icon: (
          <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        title: 'Operations Dashboard',
        description: 'Real-time operational insights with AI-powered anomaly detection.',
      },
      {
        icon: (
          <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        title: 'Custom Workflow Automation',
        description: 'Tailored AI solutions built specifically for your processes.',
      },
    ],
  },
  {
    id: 'finance',
    label: 'For Finance',
    headline: 'Streamline financial workflows',
    description: "Month-end closes, report generation, and data consolidation eating up your team's time. We'll automate the repetitive financial tasks.",
    cta: 'Learn More',
    ctaLink: '#products',
    products: [
      {
        icon: (
          <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        title: 'Automated Financial Reporting',
        description: 'Generate reports and distribute to stakeholders automatically—on schedule.',
      },
      {
        icon: (
          <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        title: 'CFO Automation Suite',
        description: 'Comprehensive automation for financial leadership—reports and meeting prep.',
      },
      {
        icon: (
          <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        title: 'Meeting Notes to Tasks',
        description: 'Automatically convert meetings into organized task lists with deadlines.',
      },
    ],
  },
];

function DepartmentSection({ department }) {
  return (
    <div className="bg-white border border-black/10 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow min-h-[500px] flex items-center">
      <div className="p-10 md:p-16 w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            <span className="inline-block text-base md:text-lg font-medium text-[#065A5C] mb-4">
              {department.label}
            </span>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {department.headline}
            </h3>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              {department.description}
            </p>
          </div>

          {/* Right Side - Product Carousel */}
          <div className="relative">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-bullet !bg-gray-300 !opacity-100',
                bulletActiveClass: '!bg-[#ADFBF6] !opacity-100',
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="department-swiper"
            >
              {department.products.map((product, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-gradient-to-br from-[#ADFBF6]/10 to-[#ADFBF6]/5 border border-[#ADFBF6]/30 rounded-xl p-8 min-h-[280px]">
                    {/* Icon */}
                    <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-[#ADFBF6]/20 text-[#065A5C] mb-5">
                      {product.icon}
                    </div>

                    <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                      {product.title}
                    </h4>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function UseCasesSection() {
  return (
    <section className="relative z-10 py-24">
      <style>{`
        .department-swiper .swiper-pagination {
          position: relative;
          margin-top: 1rem;
          display: flex;
          justify-content: center;
          gap: 0.5rem;
        }
        .department-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        .department-swiper .swiper-pagination-bullet-active {
          width: 24px;
          border-radius: 4px;
        }
      `}</style>

      <div className="max-w-[95vw] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gray-900 bg-[#ADFBF6]/30 rounded-md mb-4">
            Solutions by Role
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Built for how you actually work
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Different roles, different challenges. Find the AI solution that fits your world.
          </p>
        </div>

        {/* Department Sections */}
        <div className="space-y-6">
          {departments.map((department) => (
            <DepartmentSection key={department.id} department={department} />
          ))}
        </div>
      </div>
    </section>
  );
}