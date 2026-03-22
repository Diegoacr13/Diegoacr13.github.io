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
            href: 'https://www.linkedin.com/in/diego-abraham-contreras-robles-677619252/'
        },
        {
            text: 'Resume',
            href: 'https://instagram.com/'
        },
        {
            text: 'CV',
            href: 'https://instagram.com/'
        }
    ],
    hero: {
        title: 'Hi There & Welcome to My Portfolio',
        text: "I'm Diego A. Contreras, Licensed architect and data analyst specialized in project management and process optimization.\n Expert in information visualization and team coordination, applying project management methodologies in construction and technology.\n Led the management of the Cancún–Nichupté bridge project, implementing dashboards and communication plans that improved collaboration and accelerated construction timelines.",

        skills:[
            "- Data Analysis",
            "- Project Management",
            "- Process Optimization",
            "- Information Visualization",
            "- Dashboard Design"
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
