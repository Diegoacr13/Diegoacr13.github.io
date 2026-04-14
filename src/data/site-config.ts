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
        text: "\n \n",

        skills:[
          { name: "Python", icon: "🐍", desc: "Data cleaning, analysis, visualization (Pandas, NumPy, Matplotlib)" },
          { name: "SQL", icon: "🗄️", desc: "Complex queries, database management, data extraction" },
          { name: "Excel", icon: "📊", desc: "Advanced formulas, pivot tables, dashboards" },
          { name: "Data Visualization", icon: "📈", desc: "Turning data into visual insights" },
          { name: "Oracle", icon: "🧩", desc: "Database and data handling" },
          { name: "Problem-Solving", icon: "🧠", desc: "Analytical thinking and accuracy" }
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
