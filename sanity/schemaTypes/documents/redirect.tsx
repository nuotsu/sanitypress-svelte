import * as React from 'react'
import { defineField, defineType } from 'sanity'
import { PiFlowArrow } from 'react-icons/pi'

export default defineType({
	name: 'redirect',
	title: 'Redirect',
	icon: PiFlowArrow,
	type: 'document',
	fields: [
		defineField({
			name: 'source',
			title: 'Redirect from',
			placeholder: 'e.g. /old-path, /old-blog/:slug',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'destination',
			title: 'Redirect to',
			placeholder: 'e.g. /new-path, /blog/:slug',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
	],
	preview: {
		select: {
			title: 'source',
			destination: 'destination',
		},
		prepare: ({ title, destination }) => ({
			title,
			subtitle: `to ${destination}`,
		}),
	},
})
