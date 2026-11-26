export type ProjectCategory =
  | "Enterprise & Gov"
  | "Enterprise & SaaS"
  | "SaaS & AI"
  | "Microservices & DevOps"
  | "E-Commerce & EdTech";

export interface ArchitectureNode {
  title: string;
  role: string;
  tech: string;
}

export interface FlagshipProject {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  badge: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  description: string;
  highlights: string[];
  architectureNodes: ArchitectureNode[];
  architectureOverview: string;
  keyModules: { title: string; desc: string }[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: ProjectCategory;
  badge: string;
  stack: string[];
  description: string;
  liveUrl?: string;
  githubUrl?: string;
  extraLinks?: { label: string; url: string }[];
  isFlagship?: boolean;
}

export interface SandboxTab {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  request: string;
  response: string;
  requestLabel: string;
  responseLabel: string;
  flowNodes: ArchitectureNode[];
  flowOverview: string;
}

export const CANDIDATE_INFO = {
  name: "Subodh Kumar",
  roleHeadline: "Full Stack Developer",
  roleString:
    "Full Stack Developer | Node.js, React.js, Next.js, PHP/Laravel, PostgreSQL/MySQL",
  subHeadline:
    "Full-Stack Engineer crafting production SaaS, enterprise ERPs & resilient APIs.",
  statusBadge:
    "2.5+ Yrs Full-Stack & Backend Engineer | Greater Noida / Delhi NCR | Immediate / Short Notice",
  bio:
    "2.5+ years of production experience across React.js, Next.js, Node.js, TypeScript, Angular, and PHP/Laravel with PostgreSQL, MySQL, MongoDB, Redis, and Docker. Proven delivery in payment webhooks, GST billing engines, zero-downtime DB migrations, and real-time telemetry.",
  location: "Greater Noida / Delhi NCR",
  experienceYears: "2.5+ Yrs Experience",
  phone: "+91 8650162716",
  email: "subodhkumar2520@gmail.com",
  github: "https://github.com/subodhkumar86",
  linkedin: "https://linkedin.com/in/subodh-kumar-3466b4226",
  resumePath: "/resume.pdf",
  noticePeriod: "Immediate / Short Notice",
  coreStackList: [
    "React.js",
    "Next.js",
    "Node.js",
    "PHP/Laravel",
    "PostgreSQL",
    "MySQL",
    "Redis",
    "Docker",
  ],
  topHighlights: [
    "GMDA TDR Portal: Government of Assam state regulatory ledger system",
    "Fleetovo: End-to-End Commercial Car Rental & Fleet Operations OS (ERP + CRM)",
    "BusinessOS: Multi-tenant ERP with PostgreSQL Row-Level Security (RLS)",
    "DronaAIm: Backend-only Node.js/Express.js telematics APIs & MongoDB-to-PostgreSQL migration",
  ],
};
export const FLAGSHIP_PROJECTS: FlagshipProject[] = [
  {
    id: "gmda-tdr",
    title: "GMDA TDR Portal",
    subtitle: "Government of Assam Urban Development Regulatory Platform",
    category: "Enterprise & Gov",
    badge: "Production Gov Portal",
    stack: ["React.js", "TypeScript", "PHP", "Laravel", "MySQL"],
    liveUrl: "https://gmda.assam.gov.in",
    description:
      "Engineered full-stack modules for the Guwahati Metropolitan Development Authority (GMDA) Transferable Development Rights (TDR) web platform—supporting multi-department application processing, transfer approvals, cancellation workflows, ledger tracking, and strict departmental role-based access controls.",
    highlights: [
      "Digitized paperless land surrender and TDR certificate transfers across municipal administrative zones",
      "Enforced multi-department state machine approvals across Town Planning, Revenue, and Commission tiers",
      "Double-entry ledger audit integrity preventing duplicate DRC generation or unauthorized allocations",
    ],
    architectureOverview:
      "Citizens and builders submit TDR applications through a React frontend. Requests flow through a Laravel API gateway into a MySQL regulatory ledger. A multi-department state machine (Town Planning → Revenue → Commission) gates each approval, while RBAC middleware enforces per-department data visibility. An audit log captures every state transition for compliance.",
    architectureNodes: [
      {
        title: "Citizen / Builder Portal",
        role: "TDR application submission & tracking",
        tech: "React.js, TypeScript",
      },
      {
        title: "API Gateway",
        role: "Request routing, auth & RBAC enforcement",
        tech: "PHP, Laravel",
      },
      {
        title: "Regulatory Ledger",
        role: "TDR certificates, transfers, cancellations, audit trail",
        tech: "MySQL (InnoDB)",
      },
      {
        title: "State Machine Engine",
        role: "Multi-department approval workflow (Town Planning, Revenue, Commission)",
        tech: "Laravel",
      },
    ],
    keyModules: [
      {
        title: "TDR Application Processing",
        desc: "End-to-end land surrender and certificate transfer workflows across municipal zones.",
      },
      {
        title: "Multi-Department RBAC",
        desc: "Role-based access controls isolating Town Planning, Revenue, and Commission data.",
      },
      {
        title: "Double-Entry Ledger",
        desc: "Audit integrity layer preventing duplicate DRC generation or unauthorized allocations.",
      },
    ],
  },
  {
    id: "fleetovo",
    title: "Fleetovo",
    subtitle: "End-to-End Commercial Car Rental & Fleet Operations OS (ERP + CRM)",
    category: "Enterprise & SaaS",
    badge: "Live SaaS",
    stack: ["React.js", "Node.js", "Express.js", "Razorpay Webhooks", "PostgreSQL/MySQL"],
    liveUrl: "https://fleetovo.com",
    description:
      "Architected a multi-tenant cloud Operations OS that unifies the entire lifecycle of commercial car rental and fleet businesses—connecting CRM lead pipelines, dynamic rate cards, live duty dispatch, fleet maintenance, risk compliance, and automated GST accounting into a single platform with granular Role-Based Access Control (RBAC).",
    highlights: [
      "7-Module Operations Architecture: Unified Customers & Pricing (CRM), Bookings & Duty Control, Own/Partner Fleet Management, Risk & Maintenance tracking, and GST Finance across multi-tenant workspaces.",
      "Exception-Driven Command Center: Built a rule-based dashboard that surfaces real-time operational bottlenecks across Sales, Operations, and Accounts (e.g., unallocated duties, viewed estimates >24h, missing GST invoices).",
      "Zero-App Driver Portal & Payment Automation: Integrated view-tracked public estimate links, Razorpay webhook auto-booking conversion, mobile driver duty portals (odometer/toll capture), and single-use dynamic UPI QR collections.",
      "Granular RBAC & Multi-Entity Governance: Enforced authority-based UI/action filtering, departmental data isolation, and automated CGST/SGST/IGST PDF invoicing with attached trip proofs."
    ],
    architectureOverview:
      "Customers browse fleet and generate estimate links. On payment, Razorpay webhooks trigger asynchronous booking conversion inside Express.js. The POST /v1/client/bookings endpoint validates idempotency keys, writes to PostgreSQL/MySQL, and emits events for driver duty assignment. Invoices are generated as PDFs with correct GST tax splits.",
    architectureNodes: [
      {
        title: "Public Estimate Portal",
        role: "View-tracked estimate links & vehicle browsing",
        tech: "React.js",
      },
      {
        title: "Razorpay Webhook Listener",
        role: "Payment success → auto-booking conversion",
        tech: "Node.js, Express.js",
      },
      {
        title: "Booking Service",
        role: "POST /v1/client/bookings with idempotency & UPI QR",
        tech: "Node.js, Express.js",
      },
      {
        title: "Transactional Store",
        role: "Bookings, invoices & GST ledger",
        tech: "PostgreSQL / MySQL",
      },
      {
        title: "Driver Duty Portal",
        role: "Mobile duty roster & dynamic UPI QR collection",
        tech: "React.js",
      },
    ],
    keyModules: [
      {
        title: "7-Module Operations OS",
        desc: "Unified CRM, rate cards, live duty dispatch, fleet maintenance, risk compliance & GST accounting.",
      },
      {
        title: "Razorpay Webhook Conversion",
        desc: "Asynchronous booking confirmation triggered by payment webhooks.",
      },
      {
        title: "GST PDF Invoicing",
        desc: "Automated CGST/SGST/IGST invoice generation per transaction.",
      },
    ],
  },

  {
    id: "businessos",
    title: "BusinessOS",
    subtitle: "Multi-Tenant ERP & Business Management Platform",
    category: "SaaS & AI",
    badge: "Live + Open Source",
    stack: ["React.js", "Next.js", "TypeScript", "Node.js", "PostgreSQL (RLS)", "Redis", "Docker"],
    liveUrl: "https://businessos-topaz.vercel.app",
    githubUrl: "https://github.com/subodhkumar86/BUSINESSOS",
    description:
      "Multi-tenant SaaS for CRM, invoicing, inventory, HR & expenses with PostgreSQL Row-Level Security (RLS), ACID row-locking, optimistic concurrency, idempotency keys, Redis sessions & CSRF protection.",
    highlights: [
      "PostgreSQL RLS policies enforcing strict tenant data isolation",
      "ACID row-locking and optimistic concurrency for inventory & invoicing",
      "Idempotency keys preventing duplicate financial transactions",
      "Redis-backed sessions and CSRF protection across tenants",
    ],
    architectureOverview:
      "Each tenant is provisioned with a logical schema boundary enforced at the database row level via PostgreSQL RLS. Requests carry a tenant context that the RLS policy injects into every query, guaranteeing cross-tenant isolation even under concurrent writes. Redis handles session state and rate limiting; Docker orchestrates the multi-container stack.",
    architectureNodes: [
      {
        title: "Tenant Context Middleware",
        role: "Extracts tenant ID & sets RLS session variable",
        tech: "Node.js, Express.js",
      },
      {
        title: "PostgreSQL RLS Policies",
        role: "Row-level tenant isolation on every table",
        tech: "PostgreSQL (RLS)",
      },
      {
        title: "ACID Transaction Layer",
        role: "Row-locking + idempotency keys for financial safety",
        tech: "Node.js, PostgreSQL",
      },
      {
        title: "Redis Session Store",
        role: "Distributed sessions, CSRF tokens & rate limiting",
        tech: "Redis, Docker",
      },
    ],
    keyModules: [
      {
        title: "Multi-Tenant CRM",
        desc: "Isolated customer records per tenant enforced by RLS.",
      },
      {
        title: "Invoicing & Inventory",
        desc: "ACID row-locked stock movements and invoice generation.",
      },
      {
        title: "HR & Expenses",
        desc: "Role-scoped employee and expense management per tenant.",
      },
    ],
  },
  {
    id: "dronaaim",
    title: "DronaAIm",
    subtitle: "Backend-Only Fleet Telematics & Workflow API Platform",
    category: "Enterprise & Gov",
    badge: "Backend & DB Migration",
    stack: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "REST APIs", "RBAC"],
    liveUrl: "https://www.app.dronaaim.ai/",
    description:
      "Worked specifically on the backend using Node.js and Express.js—building role-based REST APIs across multiple modules, handling driving/telematics events, alerts/logs, and system workflows, and leading the database migration from MongoDB to PostgreSQL. Strictly backend ownership (no frontend).",
    highlights: [
      "Role-Based REST APIs & Multi-Module Backend: Built modular REST endpoints in Node.js and Express.js with role-scoped access across multiple operational modules.",
      "Driving & Telematics Event Workflows: Handled driving/telematics event ingestion, alerts/logs generation, and system state/workflow APIs.",
      "MongoDB to PostgreSQL Migration: Modeled relational schemas and migrated backend data from MongoDB to PostgreSQL with optimized SQL indexing.",
      "Backend-Only Engineering Scope: Owned server-side API architecture, business logic, and database reliability without frontend involvement.",
    ],
    architectureOverview:
      "Client applications and telematics devices communicate with a modular Node.js and Express.js REST API layer. Role-based middleware enforces module-level permissions, while event and workflow handlers process driving/telematics events, alerts, and logs. Core operational and telemetry data was migrated from MongoDB to PostgreSQL for relational integrity and faster indexed queries.",
    architectureNodes: [
      {
        title: "Role-Based API Gateway",
        role: "JWT/RBAC middleware routing requests across backend modules",
        tech: "Node.js, Express.js",
      },
      {
        title: "Telematics & Event Handler",
        role: "Driving event processing, alerts & audit log APIs",
        tech: "Node.js, Express.js",
      },
      {
        title: "Workflow & State Engine",
        role: "Multi-module business workflows & status transitions",
        tech: "Node.js, Express.js",
      },
      {
        title: "Relational Data Layer",
        role: "Backend data modeling & migration from MongoDB to PostgreSQL",
        tech: "PostgreSQL, MongoDB",
      },
    ],
    keyModules: [
      {
        title: "Multi-Module REST APIs",
        desc: "Role-based Node.js & Express.js endpoints across core backend modules.",
      },
      {
        title: "Driving Events & Alerts",
        desc: "Telematics event handling, alert triggers, logs, and workflow APIs.",
      },
      {
        title: "MongoDB → PostgreSQL Migration",
        desc: "Relational data modeling and database transition to PostgreSQL.",
      },
    ],
  },
];

export const ALL_PROJECTS: PortfolioProject[] = [
  {
    id: "rb-corporation",
    title: "RB Corporation",
    category: "E-Commerce & EdTech",
    badge: "Corporate Platform",
    stack: ["React.js", "Next.js", "JavaScript/TypeScript", "Responsive UI"],
    githubUrl: "https://github.com/subodhkumar86",
    description:
      "Custom corporate web platform built for RB Corporation featuring service catalogs, business inquiry workflows, responsive UI architecture, and SEO-optimized page structure.",
  },
  {
    id: "luxorides-ecosystem",
    title: "Luxorides & Weddings Ecosystem",
    category: "Enterprise & Gov",
    badge: "Luxury Fleet Platform",
    stack: ["Next.js", "React", "Node.js", "Admin CMS"],
    liveUrl: "https://luxorides.com",
    extraLinks: [
      { label: "Weddings Portal", url: "https://weddings.luxorides.com" },
      { label: "Admin CMS", url: "https://admin.luxorides.com" },
    ],
    description:
      "Luxury & wedding chauffeur car rental platforms paired with a custom internal Admin CMS for fleet catalogs, convoy coordination, and booking inquiries.",
  },
  {
    id: "order-processing-system",
    title: "Order Processing System",
    category: "Microservices & DevOps",
    badge: "Saga Orchestration",
    stack: ["Node.js", "Express.js", "MySQL", "Angular"],
    githubUrl: "https://github.com/subodhkumar86/order-processing-system",
    description:
      "Distributed Saga orchestration coordinating order, inventory, payment, and shipping workflows with parallel execution, timeouts, retries, compensating rollbacks, and CSV bulk ingestion.",
  },
  {
    id: "deploy-panel",
    title: "Deploy Control Panel",
    category: "Microservices & DevOps",
    badge: "CI/CD Orchestrator",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Redis", "BullMQ", "Socket.IO", "AWS SSM/Lambda"],
    githubUrl: "https://github.com/subodhkumar86/deploy-panel",
    description:
      "Automated deployment dashboard powered by BullMQ and Redis queues, streaming real-time build logs via Socket.IO with AWS SSM/Lambda Docker automation.",
  },
  {
    id: "ai-recruiter",
    title: "AI Recruitment Calling Agent",
    category: "SaaS & AI",
    badge: "AI Voice Agent",
    stack: ["Next.js", "TypeScript", "OpenAI API"],
    liveUrl: "https://airecruiter-ten.vercel.app",
    githubUrl: "https://github.com/subodhkumar86/ai_recruiter",
    description:
      "Automated AI voice/screening recruitment agent streamlining candidate shortlisting and interview scheduling.",
  },
  {
    id: "career-plateform",
    title: "Career & Demo Consultation Platform",
    category: "SaaS & AI",
    badge: "Consultation Booking",
    stack: ["Next.js", "React", "TypeScript"],
    liveUrl: "https://career-plateform-beryl.vercel.app",
    githubUrl: "https://github.com/subodhkumar86/career-plateform",
    description:
      "Resilient career advisory and demo consultation booking web platform with automated scheduling flows.",
  },
  {
    id: "isikko",
    title: "ISIKKO Travel Agency Platform",
    category: "E-Commerce & EdTech",
    badge: "Travel Booking Engine",
    stack: ["Full Stack Web", "Booking Engine"],
    liveUrl: "https://www.isikko.com",
    description:
      "Production travel agency web platform for tour packages, itinerary browsing, and customer trip inquiries.",
  },

  {
    id: "kriyax",
    title: "KriyaX Gym Management SaaS",
    category: "SaaS & AI",
    badge: "Fitness SaaS",
    liveUrl: "https://kriyax.app",
    stack: ["MERN Stack", "RBAC", "Billing"],
    description:
      "End-to-end fitness center SaaS managing member subscriptions, attendance tracking, trainer schedules, and fee renewals.",
  },
  {
    id: "eduerp",
    title: "EduERP School Management System",
    category: "SaaS & AI",
    badge: "School ERP",
    stack: ["React.js", "Node.js", "REST APIs"],
    liveUrl: "https://eduerpschool.netlify.app",
    description:
      "School ERP portal for student admissions, fee records, class schedules, and administrative workflows.",
  },
  {
    id: "lms",
    title: "Learning Management System (LMS)",
    category: "SaaS & AI",
    badge: "E-Learning Portal",
    stack: ["React.js", "JavaScript"],
    liveUrl: "https://lms-subodh-p.netlify.app",
    description:
      "Interactive e-learning portal for course delivery, student progress tracking, and structured module navigation.",
  },
  {
    id: "eccomerce-pro",
    title: "E-Commerce Pro",
    category: "E-Commerce & EdTech",
    badge: "Retail Storefront",
    stack: ["Next.js", "React", "Tailwind CSS"],
    liveUrl: "https://eccomerce-pro-psi.vercel.app",
    githubUrl: "https://github.com/subodhkumar86/eccomerce-pro",
    description:
      "Full-featured modern e-commerce storefront with product catalogs, cart state management, and checkout flows.",
  },
  {
    id: "jewellery-store",
    title: "Jewellery & Retail E-Commerce Storefronts",
    category: "E-Commerce & EdTech",
    badge: "Retail Storefront",
    stack: ["React.js", "JavaScript", "Responsive CSS"],
    liveUrl: "https://eccomerce-jwallery.netlify.app",
    description:
      "Custom retail & jewellery storefront with collection filtering, product showcase, and mobile-first checkout UI.",
  },
  {
    id: "plant-disease",
    title: "Plant Disease Detection & Classification",
    category: "SaaS & AI",
    badge: "ML Inference",
    stack: ["React", "ML Model Inference", "Vercel"],
    liveUrl: "https://plant-disease-detection-and-classification-hajq1pi3x.vercel.app",
    description:
      "Computer-vision web application for automated crop leaf disease detection and classification.",
  },
  {
    id: "via-farm",
    title: "Via Farm Backend & Matrimonial Platforms",
    category: "Enterprise & Gov",
    badge: "Production Backend",
    stack: ["Node.js", "Express", "PHP/Laravel", "MySQL", "Render"],
    description:
      "Production REST API backend services for Via Farm alongside multi-role matrimonial web portals with search/matching workflows.",
  },
  {
    id: "urv-staff",
    title: "URV Staff Management System",
    category: "Enterprise & Gov",
    badge: "Enterprise HRMS & Workforce Portal",
    stack: ["Next.js", "React.js", "Node.js", "MySQL", "RBAC"],
    liveUrl: "https://staff.urv.ltd",
    description:
      "Full-stack enterprise HRMS and workforce operations platform built for Umbrella Room Ventures (URV). Features a multi-panel architecture (Employee, HR, and Admin views) with daily check-in/check-out attendance tracking, automated leave entitlement rules (monthly CL, bi-annual SL resets, carry-forward EL), payroll & salary processing, employee task assignment, document management, and company-wide notices/birthday alerts.",
  },
  {
    id: 'eccomerce-website',
    title: 'E-Commerce Website',
    category: 'E-Commerce & EdTech',
    badge: 'Retail Storefront',
    stack: ['Next.js', 'React', 'Tailwind CSS'],
    liveUrl: 'https://eccomerce-website-subodhkumar86.netlify.app/',
    githubUrl: 'https://github.com/subodhkumar86/eccomerce-website',
    description: 'Modern e-commerce storefront with product catalogs, cart management, and checkout flows.',
  },
  {
    id: 'investinpro-noida',
    title: 'InvestInPro Noida',
    category: 'E-Commerce & EdTech',
    badge: 'Property Investment',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://investinpro-noida.vercel.app/',
    description: 'Property investment and real estate platform for Noida featuring property listings, investment analysis, and user booking system.',
  },

];

export const EXPERIENCE_ITEMS = [
  {
    company: "Umbrella Room Ventures",
    role: "Full-Stack & Backend Engineer",
    period: "Sep 2026 – Present",
    type: "Full-Time",
    location: "Greater Noida, India",
    highlights: [
      "Architecting and shipping full-stack products across the portfolio stack.",
      "Leading backend API design, database modeling, and deployment pipelines.",
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "TypeScript", "Docker"],
  },
  {
    company: "Maaze Underwriting Solution Pvt. Ltd.",
    role: "Backend Developer",
    period: "Jan 2026 – Aug 2026",
    type: "Full-Time",
    location: "India",
    highlights: [
      "Engineered high-throughput telematics ingestion and insurance underwriting calculation algorithms for commercial fleets.",
      "Led the transition of time-series geospatial tracking points from MongoDB into PostgreSQL with PostGIS indexing."
    ],
    technologies: ["Node.js", "PostgreSQL", "MongoDB", "Docker"],
  },
  {
    company: "Qurilo Solutions",
    role: "Full Stack Developer",
    period: "Aug 2025 – Jan 2026",
    type: "Full-Time",
    location: "India",
    highlights: [
      "Built scalable web applications and enterprise workflows across React.js, Express.js, and relational databases.",
      "Implemented comprehensive Role-Based Access Controls (RBAC) and JWT authentication layers across customer portals.",
      "Integrated third-party payment gateways and transactional notification workflows.",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MySQL", "Tailwind CSS", "REST APIs"],
  },
  {
    company: "Etaya Innovations Pvt. Ltd.",
    role: "Software Developer (Remote)",
    period: "Aug 2024 – Jul 2025",
    type: "Remote",
    location: "Remote",
    highlights: [
      "Developed responsive frontend modules and robust backend RESTful APIs for client software suites.",
      "Wrote optimized SQL queries, database migrations, and backend automated integration tests.",
      "Collaborated remotely within agile sprints, participating in architectural reviews and deployment cycles.",
    ],
    technologies: ["React.js", "JavaScript", "PHP", "Laravel", "MySQL", "Git"],
  },
];

export const EDUCATION_DATA = {
  degree: "B.Tech in Computer Science and Engineering",
  institution: "JSS Academy of Technical Education, Noida",
  period: "2021 – 2025",
  location: "Noida, Uttar Pradesh",
  highlights: [
    "Comprehensive studies in Data Structures & Algorithms, Database Management Systems (DBMS), Operating Systems, Computer Networks, and Distributed Architecture.",
    "Led technical development for university hackathon initiatives and built production systems.",
  ],
};

export const SKILL_GROUPS = [
  {
    title: "Languages",
    icon: "Code2",
    skills: ["JavaScript (ES6+)", "TypeScript", "PHP", "SQL", "C++"],
  },
  {
    title: "Frontend",
    icon: "Layout",
    skills: ["React.js", "Next.js", "Angular", "React Native", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    title: "Backend & Architecture",
    icon: "Server",
    skills: [
      "Node.js",
      "Express.js",
      "Laravel",
      "Core PHP",
      "REST APIs",
      "Microservices",
      "RBAC",
      "JWT",
      "WebSockets",
      "BullMQ",
      "Razorpay Webhooks",
    ],
  },
  {
    title: "Databases & DevOps",
    icon: "Database",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis",
      "Docker",
      "AWS (SSM, Lambda)",
      "Git",
    ],
  },
];

export const SANDBOX_TABS: SandboxTab[] = [
  {
    id: "fleetovo-bookings",
    title: "Fleetovo Booking API",
    subtitle: "POST /v1/client/bookings — Razorpay Webhook Flow",
    category: "SaaS & AI",
    requestLabel: "Request (POST /v1/client/bookings)",
    responseLabel: "Response (201 Created)",
    request: `{
  "idempotency_key": "book_abc123xyz",
  "customer_id": "cust_7f2a9b",
  "vehicle_id": "veh_toyota_innova",
  "pickup": {
    "location": "Connaught Place, New Delhi",
    "lat": 28.6139,
    "lng": 77.2090,
    "scheduled_at": "2026-02-15T09:00:00Z"
  },
  "dropoff": {
    "location": "IGI Airport T3, New Delhi",
    "lat": 28.5562,
    "lng": 77.1011,
    "scheduled_at": "2026-02-15T11:30:00Z"
  },
  "rental_plan": "self_drive",
  "payment": {
    "method": "upi_qr",
    "amount": 4850,
    "currency": "INR",
    "gst_breakdown": {
      "cgst": 436.5,
      "sgst": 436.5,
      "igst": 0
    }
  },
  "driver_required": false,
  "insurance": "comprehensive"
}`,
    response: `{
  "booking_id": "bk_9x2m4p8",
  "status": "confirmed",
  "reference": "FVO-2026-0215-001",
  "upi_qr": {
    "payload": "upi://pay?pa=merchant@fleetovo&pn=Fleetovo&am=4850&cu=INR&tn=Booking+bk_9x2m4p8",
    "expires_at": "2026-02-15T08:45:00Z"
  },
  "invoice": {
    "pdf_url": "https://api.fleetovo.com/invoices/bk_9x2m4p8.pdf",
    "cgst": 436.5,
    "sgst": 436.5,
    "total": 4850
  },
  "driver_assignment": null,
  "estimated_arrival": "2026-02-15T08:50:00Z",
  "webhook": {
    "event": "booking.confirmed",
    "sent_to": "https://api.fleetovo.com/webhooks/razorpay",
    "idempotency_key": "book_abc123xyz"
  }
}`,
    flowNodes: [
      {
        title: "Customer Portal",
        role: "Generates estimate link & initiates booking",
        tech: "React.js",
      },
      {
        title: "Razorpay Webhook",
        role: "Payment success → triggers booking conversion",
        tech: "Node.js, Express.js",
      },
      {
        title: "Booking Service",
        role: "Validates idempotency key, writes booking",
        tech: "Node.js, Express.js",
      },
      {
        title: "Transactional Store",
        role: "Stores booking, invoice & GST ledger",
        tech: "PostgreSQL / MySQL",
      },
      {
        title: "UPI QR Generator",
        role: "Creates dynamic payment QR code",
        tech: "Node.js",
      },
      {
        title: "Invoice Engine",
        role: "Generates CGST/SGST/IGST PDF",
        tech: "Node.js",
      },
    ],
    flowOverview:
      "Customer submits booking via POST /v1/client/bookings with an idempotency key. Razorpay webhook confirms payment, the service deduplicates via the key, persists the booking to the transactional store, generates a dynamic UPI QR, and emits a confirmed event with the invoice PDF URL.",
  },
  {
    id: "businessos-rls",
    title: "BusinessOS PostgreSQL RLS",
    subtitle: "Tenant Isolation & ACID Idempotency Flow",
    category: "SaaS & AI",
    requestLabel: "SQL — RLS Policy + Idempotency",
    responseLabel: "ACID Transaction Result",
    request: `CREATE POLICY tenant_isolation ON invoices
  USING (tenant_id = current_setting('app.current_tenant')::uuid);

BEGIN;
  SELECT pg_advisory_xact_lock('invoice:' || :invoice_id);
  INSERT INTO invoices (tenant_id, idempotency_key, amount, status)
  VALUES (:tenant_id, :idempotency_key, :amount, 'pending')
  ON CONFLICT (idempotency_key) DO NOTHING;
  UPDATE inventory SET stock = stock - 1
  WHERE product_id = :product_id AND stock > 0;
COMMIT;`,
    response: `{
  "tenant_id": "t_7f2a9b1c",
  "invoice_id": "inv_9x2m4p8",
  "idempotency_key": "inv_duplicate_attempt",
  "status": "committed",
  "rows_affected": 1,
  "isolation_level": "Read Committed",
  "rls_enforced": true,
  "acid_compliant": true
}`,
    flowNodes: [
      {
        title: "Tenant Context Middleware",
        role: "Extracts tenant ID, sets RLS session variable",
        tech: "Node.js, Express.js",
      },
      {
        title: "PostgreSQL RLS Policies",
        role: "Row-level tenant isolation enforced on every query",
        tech: "PostgreSQL (RLS)",
      },
      {
        title: "Advisory Lock",
        role: "pg_advisory_xact_lock prevents concurrent writes",
        tech: "PostgreSQL",
      },
      {
        title: "Idempotency Key",
        role: "ON CONFLICT DO NOTHING prevents duplicate invoices",
        tech: "PostgreSQL",
      },
      {
        title: "Redis Session Store",
        role: "Distributed sessions, CSRF tokens & rate limiting",
        tech: "Redis, Docker",
      },
    ],
    flowOverview:
      "Each request carries a tenant context. PostgreSQL RLS injects the tenant ID into every query, guaranteeing cross-tenant isolation. Advisory locks provide ACID row-level concurrency control. Idempotency keys use ON CONFLICT DO NOTHING to prevent duplicate financial transactions under retries.",
  },

  {
    id: "dronaaim-migration",
    title: "DronaAIm Backend & DB Migration",
    subtitle: "Role-Based REST APIs & MongoDB → PostgreSQL Flow",
    category: "Enterprise & Gov",
    requestLabel: "Request (POST /v1/telematics/events)",
    responseLabel: "Response (201 Created — PostgreSQL)",
    request: `{
  "device_id": "gps_unit_4482",
  "fleet_id": "fleet_commercial_01",
  "timestamp": "2026-02-14T14:32:10.123Z",
  "location": {
    "lat": 28.6139,
    "lng": 77.2090,
    "accuracy_m": 5.2
  },
  "telemetry": {
    "speed_kmh": 64.5,
    "hard_braking": false,
    "idle_seconds": 0
  },
  "driver_id": "drv_9x2m4p8"
}`,
    response: `{
  "event_id": "tel_4482_20260214t143210",
  "alert_triggered": false,
  "workflow_state": "logged",
  "persisted_to": "postgres.telematics_events",
  "index_used": "idx_telematics_fleet_ts",
  "role_scope": "fleet_manager",
  "audit_logged": true
}`,
    flowNodes: [
      {
        title: "RBAC Auth Middleware",
        role: "Validates user role & scopes module REST API access",
        tech: "Node.js, Express.js",
      },
      {
        title: "Driving Event Controller",
        role: "Validates & processes incoming driving/telematics events",
        tech: "Node.js, Express.js",
      },
      {
        title: "Alerts & Workflow Service",
        role: "Generates alerts, audit logs & updates system state",
        tech: "Node.js, Express.js",
      },
      {
        title: "PostgreSQL Data Layer",
        role: "Relational storage migrated from MongoDB with SQL indexes",
        tech: "PostgreSQL, MongoDB",
      },
    ],
    flowOverview:
      "Role-scoped REST requests hit Express.js middleware, which validates permissions and routes driving/telematics events to the event and workflow handlers. Alerts, logs, and state transitions are persisted to PostgreSQL after migrating the backend schema from MongoDB.",
  },
  {
    id: "saga-order-rollback",
    title: "Saga Order Rollback Engine",
    subtitle: "Parallel Execution & Compensating Rollback Flow",
    category: "Microservices & DevOps",
    requestLabel: "Saga Start (Order Created)",
    responseLabel: "Saga Outcome (Completed / Compensated)",
    request: `{
  "saga_id": "saga_order_7f2a9b",
  "order_id": "ord_9x2m4p8",
  "customer_id": "cust_3x8y2z",
  "steps": [
    { "service": "order", "action": "reserve", "compensate": "release" },
    { "service": "inventory", "action": "decrement", "compensate": "restock" },
    { "service": "payment", "action": "charge", "compensate": "refund" },
    { "service": "shipping", "action": "schedule", "compensate": "cancel" }
  ],
  "parallel_groups": [
    ["inventory", "payment"],
    ["shipping"]
  ],
  "timeout_seconds": 300,
  "retry_policy": {
    "max_attempts": 3,
    "backoff_ms": 1000
  }
}`,
    response: `{
  "saga_id": "saga_order_7f2a9b",
  "status": "compensated",
  "current_step": 2,
  "completed_steps": ["order.reserve"],
  "failed_step": "payment.charge",
  "compensation_executed": ["order.release"],
  "compensation_pending": [],
  "total_duration_ms": 1247,
  "events": [
    { "step": "order.reserve", "status": "completed" },
    { "step": "payment.charge", "status": "failed", "error": "insufficient_funds" },
    { "step": "order.release", "status": "compensated" }
  ]
}`,
    flowNodes: [
      {
        title: "Order Service",
        role: "Reserve order & trigger compensating release on failure",
        tech: "Node.js, Express.js, MySQL",
      },
      {
        title: "Inventory Service",
        role: "Decrement stock / restock on rollback",
        tech: "Node.js, Express.js",
      },
      {
        title: "Payment Service",
        role: "Charge customer / refund on compensation",
        tech: "Node.js, Express.js",
      },
      {
        title: "Shipping Service",
        role: "Schedule dispatch / cancel on rollback",
        tech: "Node.js, Express.js",
      },
      {
        title: "Saga Orchestrator",
        role: "Coordinates parallel steps, timeouts, retries & rollbacks",
        tech: "Node.js",
      },
    ],
    flowOverview:
      "The Saga orchestrator executes order, inventory, payment, and shipping steps in defined parallel groups. On payment failure, compensating transactions run in reverse order (order.release) to restore consistency. Timeouts and retries with exponential backoff handle transient faults.",
  },
];

