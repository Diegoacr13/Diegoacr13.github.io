import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://diegocontreras1305.github.io',
    avatar: {
        src: '/foto-perfil.png',
        alt: 'Foto de Diego A. Contreras Robles'

    },
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
            href: 'https://instagram.com/'
        },
        {
            text: 'CV',
            href: 'https://instagram.com/'
        }
    ],
    hero: {
        title: 'Hi There & Welcome to My Portfolio',
        text: "I'm **Ethan Donovan**, a web developer at Amazing Studio, dedicated to the realms of collaboration and artificial intelligence.\nMy approach involves embracing intuition, conducting just enough research, and leveraging aesthetics as a catalyst for exceptional products.\nI have a profound appreciation for top-notch software, visual design, and the principles of product-led growth.\n\nFeel free to explore some of my coding endeavors on [GitHub](https://github.com/JustGoodUI/dante-astro-theme) or follow me on [Twitter/X](https://twitter.com/justgoodui).",
        image: {
            src: hero,
            alt: 'A person sitting at a desk in front of a computer'
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
