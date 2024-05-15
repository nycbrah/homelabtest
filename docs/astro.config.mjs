import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom'

// https://astro.build/config
export default defineConfig({
	site: 'https://nycbrah.github.io',
	base: 'homelabtest/docs',
	integrations: [
		starlight({
			plugins: [starlightImageZoom()],
			title: 'Homelab Wiki',
			social: {
				github: 'https://github.com/nycbrah/homelab',
			},
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'What is a Homelab', link: '/getting_started/what_is_homelab/' },
						{ label: 'The roadmap', link: '/getting_started/roadmap/' },
					],
				},
				{
					label: 'Planning a Homelab',
					items: [
						{ label: 'Hardware Selection', link: '/planning/hardware_selection/' },
					],
				},
				{
					label: 'Resources',
					items: [
						{ label: 'Mini PC', link: '/resources/mini_pc/' },
						{ label: 'Raspberry Pi', link: '/resources/raspberry_pi/' },
					],
				},
			],
		}),
	],
});
