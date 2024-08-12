import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'site',
	title: 'Site',
	type: 'document',
	groups: [
		{ name: 'general', title: 'General', default: true },
		// { name: 'navigation', title: 'Navigation' },
	],
	fields: [
		defineField({
			name: 'title',
			type: 'string',
			group: 'general',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'copyright',
			type: 'array',
			of: [
				{
					type: 'block',
					styles: [{ title: 'Normal', value: 'normal' }],
				},
			],
			group: 'general',
		}),
	],
	preview: {
		prepare: () => ({
			title: 'Site settings',
		}),
	},
})
