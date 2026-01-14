let currentLang = "pt";

const i18n = {
    pt: {
        // Header
        subtitle: "Engenharia de Dados com foco em pipelines analíticos",
        navProjects: "Projetos",
        navAbout: "Sobre",
        navContact: "Contato",
        // Projects
        projectsTitle: "Projetos em Destaque",
        nibTitle: "Nova Indústria Brasil (NIB)",
        nibDesc: "Projeto de engenharia de dados desenvolvido para o monitoramento analítico da política industrial Nova Indústria Brasil.",
        mpeTitle: "ABDI — Observatório da Micro e Pequena Empresa (MPE)",
        mpeDesc: "Projeto analítico desenvolvido para a ABDI, integrando dados de múltiplas fontes públicas sobre micro e pequenas empresas.",
        // About
        aboutTitle: "Sobre Mim",
        aboutDesc: "Engenheiro de Dados com mais de 4 anos de experiência na construção e otimização de pipelines de dados (ETL/ELT) em ambientes de alta complexidade. Transformo dados brutos em insights estratégicos com soluções escaláveis em Python, SQL e Power BI, com foco em performance, governança e suporte à tomada de decisão.",
        // Skills
        skillsTitle: "Habilidades Técnicas",
        skillsCloud: "Cloud & Big Data",
        skillsLang: "Linguagens",
        skillsBi: "BI & Visualização",
        skillsDevops: "Orquestração & DevOps",
        // Contact
        contactTitle: "Vamos Conversar?",
        contactDesc: "Estou aberto a novas oportunidades e colaborações. Se você gostou do meu trabalho ou tem alguma pergunta, entre em contato!",
        contactBtn: "Enviar E-mail"
    },
    en: {
        // Header
        subtitle: "Data Engineering focused on analytical pipelines",
        navProjects: "Projects",
        navAbout: "About",
        navContact: "Contact",
        // Projects
        projectsTitle: "Featured Projects",
        nibTitle: "New Industry Brazil (NIB)",
        nibDesc: "Data engineering project developed to support analytical monitoring of the New Industry Brazil industrial policy.",
        mpeTitle: "ABDI — Micro and Small Business Observatory",
        mpeDesc: "Analytical project developed for ABDI, integrating data from multiple public sources related to micro and small businesses.",
        // About
        aboutTitle: "About Me",
        aboutDesc: "Data Engineer with over 4 years of experience in building and optimizing data pipelines (ETL/ELT) in high-complexity environments. I transform raw data into strategic insights with scalable solutions in Python, SQL, and Power BI, focusing on performance, governance, and decision support.",
        // Skills
        skillsTitle: "Technical Skills",
        skillsCloud: "Cloud & Big Data",
        skillsLang: "Languages",
        skillsBi: "BI & Visualization",
        skillsDevops: "Orchestration & DevOps",
        // Contact
        contactTitle: "Let's Talk?",
        contactDesc: "I'm open to new opportunities and collaborations. If you liked my work or have any questions, feel free to get in touch!",
        contactBtn: "Send Email"
    }
};

function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.innerText = value;
}

function toggleLanguage() {
    currentLang = currentLang === "pt" ? "en" : "pt";
    const t = i18n[currentLang];

    // Mapeamento de IDs para chaves de tradução
    const translations = {
        "t-subtitle": t.subtitle,
        "nav-projects": t.navProjects,
        "nav-about": t.navAbout,
        "nav-contact": t.navContact,
        "t-projects-title": t.projectsTitle,
        "t-nib-title": t.nibTitle,
        "t-nib-desc": t.nibDesc,
        "t-mpe-title": t.mpeTitle,
        "t-mpe-desc": t.mpeDesc,
        "t-about-title": t.aboutTitle,
        "t-about-desc": t.aboutDesc,
        "t-skills-title": t.skillsTitle,
        "t-skills-cloud": t.skillsCloud,
        "t-skills-lang": t.skillsLang,
        "t-skills-bi": t.skillsBi,
        "t-skills-devops": t.skillsDevops,
        "t-contact-title": t.contactTitle,
        "t-contact-desc": t.contactDesc,
        "t-contact-btn": t.contactBtn
    };

    for (const id in translations) {
        setText(id, translations[id]);
    }

    const btn = document.getElementById("lang-btn");
    if (btn) btn.innerText = currentLang === "pt" ? "EN" : "PT";
}


