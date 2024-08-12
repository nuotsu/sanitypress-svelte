import { SANITY_TOKEN } from '$env/static/private'
import client from '$lib/sanity/client'

export default client.withConfig({
	token: SANITY_TOKEN,
	// Optionally enable stega
	// stega: true
})
