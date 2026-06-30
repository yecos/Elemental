export type Language = "es" | "en";

export const dictionary = {
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      ai: "IA",
      portfolio: "Portafolio",
      blog: "Blog",
      contact: "Contacto",
      cta: "Diagnóstico gratuito",
    },
    hero: {
      badge: "Consultora de crecimiento digital impulsada por IA",
      title: "Construimos sistemas digitales que hacen crecer empresas",
      subtitle:
        "Diseño. Tecnología. Inteligencia. Marketing, automatización e IA aplicada para que vendas más, ahorres tiempo y tomes mejores decisiones.",
      primaryCta: "Agenda diagnóstico",
      secondaryCta: "Ver portafolio",
      stats: [
        { value: "+50", label: "proyectos" },
        { value: "6-8", label: "semanas entrega" },
        { value: "5", label: "áreas de servicio" },
        { value: "24/7", label: "automatización" },
      ],
      dashboardTitle: "Panel de crecimiento",
      dashboardMetrics: [
        { label: "Leads / mes", value: "320" },
        { label: "Conversión", value: "24%" },
        { label: "Horas ahorradas", value: "186h" },
      ],
    },
    services: {
      kicker: "Portafolio de servicios",
      title: "Cinco áreas, un solo objetivo: crecer",
      subtitle:
        "No vendemos servicios sueltos. Diseñamos sistemas integrados que combinan marca, marketing, tecnología e inteligencia para producir resultados medibles.",
      items: [
        {
          icon: "Palette",
          title: "Branding",
          description:
            "Identidad visual, naming, manual de marca, presentaciones, piezas corporativas, packaging y dirección creativa.",
        },
        {
          icon: "Megaphone",
          title: "Marketing",
          description:
            "Estrategia de contenido, redes sociales, Meta Ads, Google Ads, email marketing, SEO y analítica.",
        },
        {
          icon: "Code",
          title: "Desarrollo Web",
          description:
            "Landing pages, páginas corporativas, tiendas online, dashboards, formularios, integración CRM y analítica.",
        },
        {
          icon: "Bot",
          title: "IA & Automatización",
          description:
            "Chatbots, agentes IA, flujos automáticos, documentos inteligentes, WhatsApp, CRM, reportes y atención automática.",
          highlight: true,
        },
        {
          icon: "Lightbulb",
          title: "Consultoría",
          description:
            "Diagnóstico digital, roadmap de IA, optimización de procesos, capacitación y acompañamiento mensual.",
        },
      ],
      packagesTitle: "Paquetes sugeridos",
      packagesSubtitle: "Modelos de colaboración mensual pensados para escalar contigo.",
      packages: [
        {
          name: "Starter",
          price: "$400–800",
          unit: "USD / mes",
          description: "Presencia digital y redes sociales",
          features: [
            "Gestión de redes sociales",
            "Diseño de contenido mensual",
            "Página corporativa básica",
            "Reporte mensual de resultados",
          ],
          popular: false,
        },
        {
          name: "Growth",
          price: "$1,000–2,000",
          unit: "USD / mes",
          description: "Marketing + web + automatizaciones",
          features: [
            "Estrategia de pauta digital",
            "Landing pages optimizadas",
            "Automatización de leads",
            "Dashboard de indicadores",
            "Sesión mensual de estrategia",
          ],
          popular: true,
        },
        {
          name: "Enterprise AI",
          price: "$2,500+",
          unit: "USD / mes",
          description: "Consultoría, agentes IA, CRM, dashboards y capacitación",
          features: [
            "Agente IA personalizado",
            "Integración CRM y WhatsApp",
            "Dashboards en tiempo real",
            "Roadmap trimestral de IA",
            "Capacitación al equipo",
            "Soporte prioritario 24/7",
          ],
          popular: false,
        },
      ],
      popularBadge: "Más popular",
      cta: "Empezar con este plan",
    },
    ai: {
      kicker: "Servicio estrella",
      title: "IA & Automatización",
      subtitle: "La IA no es moda. Es una herramienta para resolver problemas concretos.",
      description:
        "Implementamos agentes de inteligencia artificial y flujos automatizados que se conectan con tus herramientas actuales. El objetivo es claro: menos tareas manuales, más decisiones con datos y más tiempo para lo que importa.",
      processTitle: "Nuestro proceso en 5 pasos",
      process: [
        { step: "01", title: "Diagnóstico", description: "Mapeamos procesos y detectamos dónde se pierde tiempo y dinero." },
        { step: "02", title: "Diseño del flujo", description: "Modelamos el sistema automatizado antes de escribir una línea de código." },
        { step: "03", title: "Conexión", description: "Integramos WhatsApp, CRM, email y herramientas internas." },
        { step: "04", title: "Entrenar", description: "Calibramos los agentes IA con tu voz, tus datos y tus objetivos." },
        { step: "05", title: "Medir", description: "Monitoreamos indicadores y optimizamos cada semana." },
      ],
      solutionsTitle: "Soluciones vendibles",
      solutions: [
        "Asistente IA para WhatsApp y web",
        "Automatización de leads y seguimiento",
        "Copiloto interno para empleados",
        "Generación de propuestas y documentos",
        "Reportes automáticos de ventas",
        "Automatización de contenido para redes",
        "Integración con CRM y email marketing",
        "Dashboards de indicadores comerciales",
      ],
    },
    roi: {
      kicker: "Calculadora de ROI",
      title: "¿Cuánto puedes ahorrar con automatización?",
      subtitle: "Mueve los valores y descubre el impacto estimado de implementar IA en tu operación.",
      inputs: {
        hours: "Horas/semana en tareas repetitivas",
        cost: "Costo hora empleado (USD)",
        processes: "Procesos a automatizar",
      },
      outputs: {
        hoursSaved: "Horas ahorradas / mes",
        monthlySavings: "Ahorro mensual estimado",
        annualRoi: "ROI anual proyectado",
        implementation: "Tiempo de implementación",
      },
      implementationValue: "4–6 semanas",
      cta: "Quiero este ahorro",
      footnote:
        "Estimación basada en automatización del 70% de las tareas repetitivas seleccionadas. Los valores reales dependen del diagnóstico.",
    },
    portfolio: {
      kicker: "Casos de éxito",
      title: "Resultados que se miden, no que se prometen",
      subtitle:
        "Cada proyecto empieza con un diagnóstico y termina con métricas. Estos son algunos de los sistemas que hemos construido.",
      cases: [
        {
          icon: "Utensils",
          category: "Restaurante / Comercio",
          title: "Aumento de reservas con WhatsApp IA",
          tags: ["Branding", "Pauta", "WhatsApp IA"],
          metrics: [
            { value: "+180%", label: "reservas online" },
            { value: "-65%", label: "tiempo de respuesta" },
            { value: "+45%", label: "clientes recurrentes" },
          ],
          contexto:
            "Restaurante con alta demanda nocturna que perdía reservas por demoras en la atención telefónica y de WhatsApp.",
          problema:
            "El equipo atendía cada mensaje de forma manual. Después de las 22:00 no había respuesta y los clientes se iban a la competencia.",
          solucion:
            "Implementamos un agente de IA en WhatsApp que responde en segundos, agenda reservas, recuerda turnos y deriva casos complejos a un humano.",
          proceso:
            "1. Diagnóstico de fricciones · 2. Diseño del flujo conversacional · 3. Integración con el sistema de reservas · 4. Capacitación del agente IA · 5. Lanzamiento y optimización.",
          resultado:
            "En 90 días las reservas online crecieron 180%, el tiempo de respuesta cayó 65% y la recurrencia de clientes subió 45%.",
        },
        {
          icon: "Building",
          category: "Constructora / Inmobiliaria",
          title: "Captación y calificación automática de leads",
          tags: ["Landing", "Renders", "CRM"],
          metrics: [
            { value: "320", label: "leads / mes" },
            { value: "78%", label: "calificación automática" },
            { value: "-42%", label: "costo por lead" },
          ],
          contexto:
            "Constructora de vivienda de interés social con campañas en Meta y Google pero sin un sistema de seguimiento estructurado.",
          problema:
            "Los leads se perdían en WhatsApp, no había calificación previa y los asesores invertían horas en contactos sin intención de compra.",
          solucion:
            "Diseñamos landings por proyecto, integramos un CRM y un agente IA que cualifica leads por presupuesto, zona y plazo antes de pasarlos al asesor.",
          proceso:
            "1. Auditoría de campañas · 2. Landings por proyecto · 3. Conexión con CRM · 4. Agente IA de calificación · 5. Dashboard comercial.",
          resultado:
            "Pasaron de 90 a 320 leads calificados al mes, redujeron 42% el costo por lead y automatizaron el 78% de la calificación inicial.",
        },
        {
          icon: "Briefcase",
          category: "Empresa de servicios",
          title: "Automatización de cotizaciones y seguimiento",
          tags: ["IA", "CRM", "Reportes"],
          metrics: [
            { value: "-85%", label: "tiempo cotizaciones" },
            { value: "+60%", label: "conversión" },
            { value: "24/7", label: "atención" },
          ],
          contexto:
            "Empresa B2B de servicios técnicos que tardaba hasta 3 días en enviar una cotización y perdía oportunidades por demora.",
          problema:
            "Cada cotización era manual, dependía de un solo comercial y no había seguimiento automático después del envío.",
          solucion:
            "Construimos un generador de cotizaciones con IA, conectado al CRM, que entrega propuestas en minutos y hace seguimiento automático.",
          proceso:
            "1. Mapeo del proceso comercial · 2. Modelo de cotización con IA · 3. Integración CRM · 4. Secuencias de seguimiento · 5. Reportes automáticos.",
          resultado:
            "El tiempo de cotización bajó 85%, la conversión subió 60% y el sistema atiende consultas 24/7 sin intervención humana.",
        },
      ],
      viewCase: "Ver caso completo",
      dialog: {
        contexto: "Contexto",
        problema: "Problema",
        solucion: "Solución",
        proceso: "Proceso",
        resultado: "Resultado",
        metricsTitle: "Métricas clave",
      },
    },
    diagnostic: {
      kicker: "Diagnóstico IA gratuito",
      title: "Descubre dónde puedes automatizar tu empresa",
      subtitle:
        "Responde 4 preguntas y recibe un diagnóstico personalizado con oportunidades concretas de IA y automatización. Sin costo, sin compromiso.",
      steps: ["Industria", "Fricciones", "Horas", "Contacto"],
      step1Title: "¿Cuál es tu industria?",
      step1Options: ["Restaurante", "Retail", "Inmobiliaria", "Servicios", "Otro"],
      step2Title: "¿Qué te genera más fricción?",
      step2Subtitle: "Selecciona todas las que apliquen",
      step2Options: [
        "Atención al cliente",
        "Seguimiento de leads",
        "Cotizaciones",
        "Reportes",
        "Redes sociales",
        "Otro",
      ],
      step3Title: "¿Cuántas horas/semana pierdes en tareas repetitivas?",
      step3Unit: "horas / semana",
      step4Title: "Datos de contacto",
      step4Subtitle: "Te enviaremos el diagnóstico a tu WhatsApp en menos de 24 horas.",
      fields: {
        name: "Nombre",
        company: "Empresa",
        whatsapp: "WhatsApp",
        email: "Email",
      },
      placeholders: {
        name: "Tu nombre",
        company: "Nombre de tu empresa",
        whatsapp: "+57 301 4069793",
        email: "tucorreo@empresa.com",
      },
      next: "Continuar",
      back: "Atrás",
      submit: "Enviar diagnóstico",
      success: {
        title: "¡Diagnóstico enviado!",
        description: "Recibirás tu diagnóstico personalizado en menos de 24 horas.",
        cta: "Cerrar",
      },
      validation: {
        nameRequired: "El nombre es obligatorio",
        whatsappRequired: "El WhatsApp es obligatorio",
        emailRequired: "El email es obligatorio",
        emailInvalid: "Email no válido",
        industryRequired: "Selecciona una industria",
        frictionRequired: "Selecciona al menos una fricción",
      },
    },
    blog: {
      kicker: "Recursos",
      title: "Ideas que se pueden ejecutar",
      subtitle:
        "Artículos, guías y casos sobre IA aplicada, automatización y crecimiento digital. Sin humo, sin promesas vacías.",
      posts: [
        {
          category: "IA aplicada",
          title: "5 prompts de IA para vender más en WhatsApp",
          excerpt:
            "Plantillas probadas para responder, calificar y cerrar ventas desde WhatsApp usando un agente de IA.",
        },
        {
          category: "Automatización",
          title: "Cómo automatizar cotizaciones sin perder el toque humano",
          excerpt:
            "El equilibrio entre velocidad y personalización. Diseño de flujos que parecen hechos a mano.",
        },
        {
          category: "Datos",
          title: "Dashboards comerciales: qué medir en 2026",
          excerpt:
            "Los indicadores que de verdad importan para tomar decisiones y dejar de mirar vanity metrics.",
        },
        {
          category: "Estrategia",
          title: "Errores comunes al implementar IA en PYMES",
          excerpt:
            "Las trampas más frecuentes cuando una PYME adopta IA y cómo evitarlas desde el diseño.",
        },
        {
          category: "Elemental",
          title: "De agencia a consultora: la transformación de ELEMENTAL",
          excerpt:
            "Por qué dejamos de vender campañas sueltas y empezamos a construir sistemas de crecimiento.",
        },
        {
          category: "Casos",
          title: "3 empresas que automatizaron su operación",
          excerpt:
            "Historias reales de restaurantes, constructoras y servicios que redujeron costos con IA.",
        },
      ],
      readMore: "Leer más",
      viewAll: "Ver todos los artículos",
    },
    contact: {
      kicker: "Contacto",
      title: "Hablemos de tu próximo sistema",
      subtitle: "Diagnóstico gratuito de 30 minutos. Sin compromiso.",
      form: {
        name: "Nombre",
        company: "Empresa",
        whatsapp: "WhatsApp",
        message: "Mensaje",
        messagePlaceholder: "Cuéntanos brevemente qué quieres resolver.",
        submit: "Enviar mensaje",
        success: {
          title: "¡Mensaje enviado!",
          description: "Te responderemos en menos de 24 horas.",
        },
        validation: {
          nameRequired: "El nombre es obligatorio",
          whatsappRequired: "El WhatsApp es obligatorio",
          messageRequired: "El mensaje es obligatorio",
        },
      },
      info: {
        whatsapp: "WhatsApp",
        whatsappButton: "Escribir por WhatsApp",
        email: "Email",
        hours: "Horario",
        hoursValue: "Lun – Vie · 9:00 – 18:00",
        response: "Tiempo de respuesta",
        responseValue: "< 24 horas",
      },
    },
    footer: {
      slogan: "Automatizamos el crecimiento.",
      description:
        "Consultora de crecimiento digital impulsada por IA. Diseñamos sistemas que venden más, ahorran tiempo y toman mejores decisiones.",
      quickLinks: "Navegación",
      services: "Servicios",
      servicesList: ["Branding", "Marketing", "Desarrollo Web", "IA & Automatización", "Consultoría"],
      connect: "Conecta",
      copyright: "© 2026 ELEMENTAL. Diseño. Tecnología. Inteligencia.",
      lang: "ES",
    },
    common: {
      languageLabel: "Idioma",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      ai: "AI",
      portfolio: "Portfolio",
      blog: "Blog",
      contact: "Contact",
      cta: "Free diagnostic",
    },
    hero: {
      badge: "AI-powered digital growth consultancy",
      title: "We build digital systems that grow companies",
      subtitle:
        "Design. Technology. Intelligence. Marketing, automation and applied AI so you sell more, save time and make better decisions.",
      primaryCta: "Book a diagnostic",
      secondaryCta: "View portfolio",
      stats: [
        { value: "+50", label: "projects" },
        { value: "6-8", label: "weeks delivery" },
        { value: "5", label: "service areas" },
        { value: "24/7", label: "automation" },
      ],
      dashboardTitle: "Growth panel",
      dashboardMetrics: [
        { label: "Leads / month", value: "320" },
        { label: "Conversion", value: "24%" },
        { label: "Hours saved", value: "186h" },
      ],
    },
    services: {
      kicker: "Service portfolio",
      title: "Five areas, one goal: growth",
      subtitle:
        "We don't sell standalone services. We design integrated systems that combine brand, marketing, technology and intelligence to produce measurable results.",
      items: [
        {
          icon: "Palette",
          title: "Branding",
          description:
            "Visual identity, naming, brand manual, presentations, corporate assets, packaging and creative direction.",
        },
        {
          icon: "Megaphone",
          title: "Marketing",
          description:
            "Content strategy, social media, Meta Ads, Google Ads, email marketing, SEO and analytics.",
        },
        {
          icon: "Code",
          title: "Web Development",
          description:
            "Landing pages, corporate websites, online stores, dashboards, forms, CRM integration and analytics.",
        },
        {
          icon: "Bot",
          title: "AI & Automation",
          description:
            "Chatbots, AI agents, automated flows, smart documents, WhatsApp, CRM, reports and automatic support.",
          highlight: true,
        },
        {
          icon: "Lightbulb",
          title: "Consulting",
          description:
            "Digital diagnostic, AI roadmap, process optimization, training and monthly accompaniment.",
        },
      ],
      packagesTitle: "Suggested packages",
      packagesSubtitle: "Monthly collaboration models designed to scale with you.",
      packages: [
        {
          name: "Starter",
          price: "$400–800",
          unit: "USD / month",
          description: "Digital presence and social media",
          features: [
            "Social media management",
            "Monthly content design",
            "Basic corporate site",
            "Monthly results report",
          ],
          popular: false,
        },
        {
          name: "Growth",
          price: "$1,000–2,000",
          unit: "USD / month",
          description: "Marketing + web + automation",
          features: [
            "Digital ad strategy",
            "Optimized landing pages",
            "Lead automation",
            "KPI dashboard",
            "Monthly strategy session",
          ],
          popular: true,
        },
        {
          name: "Enterprise AI",
          price: "$2,500+",
          unit: "USD / month",
          description: "Consulting, AI agents, CRM, dashboards and training",
          features: [
            "Custom AI agent",
            "CRM and WhatsApp integration",
            "Real-time dashboards",
            "Quarterly AI roadmap",
            "Team training",
            "24/7 priority support",
          ],
          popular: false,
        },
      ],
      popularBadge: "Most popular",
      cta: "Start with this plan",
    },
    ai: {
      kicker: "Flagship service",
      title: "AI & Automation",
      subtitle: "AI is not a trend. It's a tool to solve concrete problems.",
      description:
        "We implement AI agents and automated flows that connect with your current tools. The goal is clear: fewer manual tasks, more data-driven decisions and more time for what matters.",
      processTitle: "Our 5-step process",
      process: [
        { step: "01", title: "Diagnostic", description: "We map processes and detect where time and money leak." },
        { step: "02", title: "Flow design", description: "We model the automated system before writing a line of code." },
        { step: "03", title: "Connection", description: "We integrate WhatsApp, CRM, email and internal tools." },
        { step: "04", title: "Train", description: "We calibrate AI agents with your voice, your data and your goals." },
        { step: "05", title: "Measure", description: "We monitor indicators and optimize every week." },
      ],
      solutionsTitle: "Sellable solutions",
      solutions: [
        "AI assistant for WhatsApp and web",
        "Lead automation and follow-up",
        "Internal copilot for employees",
        "Proposal and document generation",
        "Automatic sales reports",
        "Social media content automation",
        "CRM and email marketing integration",
        "Commercial KPI dashboards",
      ],
    },
    roi: {
      kicker: "ROI calculator",
      title: "How much can you save with automation?",
      subtitle: "Move the values and discover the estimated impact of implementing AI in your operation.",
      inputs: {
        hours: "Hours/week on repetitive tasks",
        cost: "Employee hourly cost (USD)",
        processes: "Processes to automate",
      },
      outputs: {
        hoursSaved: "Hours saved / month",
        monthlySavings: "Estimated monthly savings",
        annualRoi: "Projected annual ROI",
        implementation: "Implementation time",
      },
      implementationValue: "4–6 weeks",
      cta: "I want these savings",
      footnote:
        "Estimate based on automating 70% of the selected repetitive tasks. Real values depend on the diagnostic.",
    },
    portfolio: {
      kicker: "Success stories",
      title: "Results that are measured, not promised",
      subtitle:
        "Every project starts with a diagnostic and ends with metrics. These are some of the systems we have built.",
      cases: [
        {
          icon: "Utensils",
          category: "Restaurant / Retail",
          title: "Booking growth with WhatsApp AI",
          tags: ["Branding", "Ads", "WhatsApp AI"],
          metrics: [
            { value: "+180%", label: "online bookings" },
            { value: "-65%", label: "response time" },
            { value: "+45%", label: "returning customers" },
          ],
          contexto:
            "Restaurant with high night demand that lost bookings due to slow phone and WhatsApp responses.",
          problema:
            "The team answered every message manually. After 10pm there was no response and customers went to competitors.",
          solucion:
            "We implemented a WhatsApp AI agent that replies in seconds, books tables, reminds appointments and escalates complex cases to a human.",
          proceso:
            "1. Friction diagnostic · 2. Conversational flow design · 3. Booking system integration · 4. AI agent training · 5. Launch and optimization.",
          resultado:
            "In 90 days online bookings grew 180%, response time dropped 65% and customer recurrence rose 45%.",
        },
        {
          icon: "Building",
          category: "Construction / Real Estate",
          title: "Automatic lead capture and qualification",
          tags: ["Landing", "Renders", "CRM"],
          metrics: [
            { value: "320", label: "leads / month" },
            { value: "78%", label: "automatic qualification" },
            { value: "-42%", label: "cost per lead" },
          ],
          contexto:
            "Affordable housing developer with Meta and Google campaigns but no structured follow-up system.",
          problema:
            "Leads were lost in WhatsApp, there was no pre-qualification and reps spent hours on contacts with no purchase intent.",
          solucion:
            "We designed per-project landings, integrated a CRM and an AI agent that qualifies leads by budget, area and timeline before passing to reps.",
          proceso:
            "1. Campaign audit · 2. Per-project landings · 3. CRM connection · 4. AI qualification agent · 5. Commercial dashboard.",
          resultado:
            "They went from 90 to 320 qualified leads per month, reduced cost per lead by 42% and automated 78% of initial qualification.",
        },
        {
          icon: "Briefcase",
          category: "Services company",
          title: "Quote and follow-up automation",
          tags: ["AI", "CRM", "Reports"],
          metrics: [
            { value: "-85%", label: "quote time" },
            { value: "+60%", label: "conversion" },
            { value: "24/7", label: "support" },
          ],
          contexto:
            "B2B technical services company that took up to 3 days to send a quote and lost opportunities due to delay.",
          problema:
            "Every quote was manual, depended on a single salesperson and there was no automatic follow-up after sending.",
          solucion:
            "We built an AI quote generator connected to the CRM that delivers proposals in minutes and runs automatic follow-up.",
          proceso:
            "1. Sales process mapping · 2. AI quote model · 3. CRM integration · 4. Follow-up sequences · 5. Automatic reports.",
          resultado:
            "Quote time dropped 85%, conversion rose 60% and the system handles inquiries 24/7 without human intervention.",
        },
      ],
      viewCase: "View full case",
      dialog: {
        contexto: "Context",
        problema: "Problem",
        solucion: "Solution",
        proceso: "Process",
        resultado: "Result",
        metricsTitle: "Key metrics",
      },
    },
    diagnostic: {
      kicker: "Free AI diagnostic",
      title: "Discover where you can automate your company",
      subtitle:
        "Answer 4 questions and receive a personalized diagnostic with concrete AI and automation opportunities. No cost, no commitment.",
      steps: ["Industry", "Frictions", "Hours", "Contact"],
      step1Title: "What is your industry?",
      step1Options: ["Restaurant", "Retail", "Real Estate", "Services", "Other"],
      step2Title: "What creates the most friction?",
      step2Subtitle: "Select all that apply",
      step2Options: [
        "Customer support",
        "Lead follow-up",
        "Quotes",
        "Reports",
        "Social media",
        "Other",
      ],
      step3Title: "How many hours/week do you lose on repetitive tasks?",
      step3Unit: "hours / week",
      step4Title: "Contact details",
      step4Subtitle: "We'll send your diagnostic to your WhatsApp in less than 24 hours.",
      fields: {
        name: "Name",
        company: "Company",
        whatsapp: "WhatsApp",
        email: "Email",
      },
      placeholders: {
        name: "Your name",
        company: "Your company name",
        whatsapp: "+1 555 000 0000",
        email: "you@company.com",
      },
      next: "Continue",
      back: "Back",
      submit: "Send diagnostic",
      success: {
        title: "Diagnostic sent!",
        description: "You'll receive your personalized diagnostic in less than 24 hours.",
        cta: "Close",
      },
      validation: {
        nameRequired: "Name is required",
        whatsappRequired: "WhatsApp is required",
        emailRequired: "Email is required",
        emailInvalid: "Invalid email",
        industryRequired: "Select an industry",
        frictionRequired: "Select at least one friction",
      },
    },
    blog: {
      kicker: "Resources",
      title: "Ideas you can execute",
      subtitle:
        "Articles, guides and cases on applied AI, automation and digital growth. No fluff, no empty promises.",
      posts: [
        {
          category: "Applied AI",
          title: "5 AI prompts to sell more on WhatsApp",
          excerpt:
            "Tested templates to reply, qualify and close sales from WhatsApp using an AI agent.",
        },
        {
          category: "Automation",
          title: "How to automate quotes without losing the human touch",
          excerpt:
            "The balance between speed and personalization. Flow design that feels handmade.",
        },
        {
          category: "Data",
          title: "Commercial dashboards: what to measure in 2026",
          excerpt:
            "The indicators that truly matter to make decisions and stop staring at vanity metrics.",
        },
        {
          category: "Strategy",
          title: "Common mistakes when implementing AI in SMBs",
          excerpt:
            "The most frequent traps when an SMB adopts AI and how to avoid them from the design phase.",
        },
        {
          category: "Elemental",
          title: "From agency to consultancy: ELEMENTAL's transformation",
          excerpt:
            "Why we stopped selling one-off campaigns and started building growth systems.",
        },
        {
          category: "Cases",
          title: "3 companies that automated their operation",
          excerpt:
            "Real stories of restaurants, construction and services companies that cut costs with AI.",
        },
      ],
      readMore: "Read more",
      viewAll: "View all articles",
    },
    contact: {
      kicker: "Contact",
      title: "Let's talk about your next system",
      subtitle: "Free 30-minute diagnostic. No commitment.",
      form: {
        name: "Name",
        company: "Company",
        whatsapp: "WhatsApp",
        message: "Message",
        messagePlaceholder: "Tell us briefly what you want to solve.",
        submit: "Send message",
        success: {
          title: "Message sent!",
          description: "We'll reply in less than 24 hours.",
        },
        validation: {
          nameRequired: "Name is required",
          whatsappRequired: "WhatsApp is required",
          messageRequired: "Message is required",
        },
      },
      info: {
        whatsapp: "WhatsApp",
        whatsappButton: "Message on WhatsApp",
        email: "Email",
        hours: "Hours",
        hoursValue: "Mon – Fri · 9:00 – 18:00",
        response: "Response time",
        responseValue: "< 24 hours",
      },
    },
    footer: {
      slogan: "We automate growth.",
      description:
        "AI-powered digital growth consultancy. We design systems that sell more, save time and make better decisions.",
      quickLinks: "Navigation",
      services: "Services",
      servicesList: ["Branding", "Marketing", "Web Development", "AI & Automation", "Consulting"],
      connect: "Connect",
      copyright: "© 2026 ELEMENTAL. Design. Technology. Intelligence.",
      lang: "EN",
    },
    common: {
      languageLabel: "Language",
    },
  },
} as const;

export type Dictionary = typeof dictionary.es;
