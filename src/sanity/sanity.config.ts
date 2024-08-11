import { defineConfig } from 'sanity'
import { projectId, dataset } from './src/env'
import { structureTool } from 'sanity/structure'
import {
	dashboardTool,
	projectInfoWidget,
	projectUsersWidget,
} from '@sanity/dashboard'
// import { vercelWidget } from 'sanity-plugin-dashboard-widget-vercel'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

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
	},
})
