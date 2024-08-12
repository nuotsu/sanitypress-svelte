import { defineConfig } from 'sanity'
import { projectId, dataset } from './src/env'
import { structureTool } from 'sanity/structure'
import structure from './src/structure'
import { presentationTool } from 'sanity/presentation'
import { locations } from './src/presentation'
import {
	dashboardTool,
	projectInfoWidget,
	projectUsersWidget,
} from '@sanity/dashboard'
// import { vercelWidget } from 'sanity-plugin-dashboardx	-widget-vercel'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

const singletonTypes = ['site']

export default defineConfig({
	name: 'default',
	title: 'SanityPress',

	projectId,
	dataset,
	basePath: '/admin',

	plugins: [
		structureTool({
			name: 'content',
			title: 'Content',
			structure,
		}),
		presentationTool({
			name: 'editor',
			title: 'Editor',
			previewUrl: {},
			resolve: { locations },
		}),
		dashboardTool({
			name: 'deployment',
			title: 'Deployment',
			// widgets: [vercelWidget()],
		}),
		dashboardTool({
			name: 'info',
			title: 'Info',
			widgets: [projectInfoWidget(), projectUsersWidget()],
		}),
		visionTool(),
	],

	scheduledPublishing: { enabled: false },
	tasks: { enabled: false },

	schema: {
		types: schemaTypes,
		templates: (templates) =>
			templates.filter(
				({ schemaType }) => !singletonTypes.includes(schemaType),
			),
	},

	document: {
		actions: (input, { schemaType }) =>
			singletonTypes.includes(schemaType)
				? input.filter(
						({ action }) =>
							action &&
							['publish', 'discardChanges', 'restore'].includes(action),
					)
				: input,
	},
})
