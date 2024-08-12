import { createClient } from '@sanity/client'
import {
	PUBLIC_SANITY_DATASET,
	PUBLIC_SANITY_PROJECT_ID,
} from '$env/static/public'

export default createClient({
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: PUBLIC_SANITY_DATASET,
	apiVersion: '2024-08-01',
	useCdn: true,
	stega: {
		enabled: false,
		studioUrl: '/admin',
	},
})
