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
            text: 'About',
            href: '/about'
        },
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
            href: 'file:///C:/Users/HP%20Victus/Desktop/Sprint/Sprint%209/CV%20DATA%20DACR_eng.pdf'
        },
        {
            text: 'CV',
            href: 'file:///C:/Users/HP%20Victus/Desktop/Sprint/Sprint%209/Diego_Contreras_CV.pdf'
        }
    ],
    hero: {
        title: 'Hi There & Welcome to My Portfolio',
        text: "I'm Diego Comtreras,Licensed architect and data analyst specialized in project management and process optimization. Expert in information visualization and team coordination, applying project management methodologies in construction and echnology. Led the management of the Cancún–Nichupté bridge project, implementing dashboards and communication plans that improved collaboration and accelerated construction timelines."
        image: {
            src: '/foto-perfil.png',
            alt: 'Foto de Diego A. Contreras Robles'
         },
    actions: [
                 { text: 'Contáctame', href: '/contact' }
        ]

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
