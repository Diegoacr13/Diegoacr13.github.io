import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://diegocontreras1305.github.io',
    
    title: 'Diego A. Contreras Robles',
    subtitle: 'Data Analyst | Project Manager | Process Optimization and Information Visualization | Dashboards',
    description: 'Portafolio de Diego A. Contreras Robles — Analista de Datos y Project Manager especializado en optimización de procesos, dashboards y visualización de información.',
    image: {
        src: '/foto-perfil.png',
        alt: 'Foto de Diego A. Contreras Robles'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        }
    ],
    footerNavLinks: [
        {
            text: 'Contact',
            href: '/contact'
        }

    ],
    socialLinks: [
        {
            text: 'Linkedin',
            href: 'https://www.linkedin.com/in/diego-a-contrerasr/'
        },
        {
            text: 'Resume',
            href: "https://drive.google.com/file/d/1XZux4npa2_3u1Hjd0g3tU4Fezx8yDIoE/view?usp=drive_link"
        },
        {
            text: 'Currículum',
            href: 'https://drive.google.com/file/d/1zsqwqgSjZhl2XD-od-6rgjOeh0pGy4dh/view?usp=drive_link'
        }
    ],
    hero: {
        title: 'Hi There & Welcome to My Portfolio',
        text: "I’m Diego A. Contreras, a Data Analyst specialized in operations and project management. I transform complex datasets into actionable insights that improve efficiency, reduce risks, and accelerate decision-making. My portfolio includes projects where I identified operators with 30% higher call drop rates in telecommunications, validated a 10% uplift in purchases through A/B testing in e‑commerce, and optimized marketing strategies by analyzing publishing trends with SQL.\n \n",

        skills:[
          { name: "Python", icon: "🐍", desc: "Automated workflows and built predictive models (Pandas, NumPy, scikit-learn, XGBoost) to optimize processes and reduce reporting time by 20%)" },
          { name: "SQL", icon: "🗄️", desc: "Designed complex queries and optimized databases (PostgreSQL, MySQL) to extract KPIs and support strategic decisions" },
          { name: "Excel", icon: "📊", desc: "Created dashboards and scenario analyses with advanced formulas and pivot tables to improve cost efficiency" },
          { name: "Data Visualization", icon: "📈", desc: "Developed Tableau and Power BI dashboards that accelerated stakeholder reporting and improved collaboration across teams" },
          { name: "Oracle", icon: "🧩", desc: "Handled infrastructure project data, integrating timelines and risk analysis for construction management" },
          { name: "Problem-Solving", icon: "🧠", desc: "Applied analytical thinking to anticipate risks, reduce delays, and optimize resource allocation" }
        ],
        image: {
            src: "/foto-perfil.png",
            alt: 'Foto Diego A. Contreras Robles'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        enabled: false,
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        form: {
            action: '#'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
