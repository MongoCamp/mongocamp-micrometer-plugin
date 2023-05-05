import Unocss from 'unocss/vite'
import {defineConfig} from 'vitepress'
import {version} from '../../package.json'

export default defineConfig({
    lang: 'en-US',
    title: 'MongoCamp Micrometer Plugin',
    description: 'Plugin for MongoCamp Server to add Micrometer metrics.',

    lastUpdated: true,

    themeConfig: {
        logo: '/logo_without_text.png',

        nav: nav(),

        search: {
            provider: 'local'
        },

        sidebar: {
            '/documentation/': sidebarDocumentation()
            // '/config/': sidebarConfig(),
            // '/plugins/': sidebarPlugins()
        },

        editLink: {
            pattern: 'https://github.com/MongoCamp/mongocamp-micrometer-plugin/edit/master/docs/:path',
            text: 'Edit this page on GitHub'
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/MongoCamp/mongocamp-micrometer-plugin'}
        ],

        footer: {
            message: 'Released under the Apache License 2.0.',
            copyright: 'Copyright © 2023 - MongoCamp Team'
        },

    },
    vite: {
        plugins: [
            Unocss({
                configFile: '../../unocss.config.ts',
            }),
        ],
    },

})

function nav() {
    return [
        {
            text: 'Documentation',
            items: [
                {text: 'Getting Started', link: '/documentation/getting-started'},
                {text: 'Configuration', link: '/documentation/configuration'}
            ]
        },
        {
            text: version,
            items: [
                {
                    text: 'Changelog',
                    link: '/changelog.html'
                },
            ],
        },

    ]
}

function sidebarDocumentation() {
    return [
        {
            text: 'Getting Started',
            link: '/documentation/getting-started'
        },
        {
            text: 'Configuration',
            link: '/documentation/configuration'
        }
    ]
}
