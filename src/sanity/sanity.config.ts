import { defineConfig } from 'sanity'
import { projectId, dataset } from './src/env'
import { structureTool } from 'sanity/structure'
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
		visionTool(),
	],

	schema: {
		types: schemaTypes,
	},
})
