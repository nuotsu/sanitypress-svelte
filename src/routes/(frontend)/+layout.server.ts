import { redirect } from '@sveltejs/kit'
import groq from 'groq'
import { siteQuery } from '$/lib/sanity/queries'
import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async ({
	url,
	locals: { preview, loadQuery },
}) => {
	const redirects = await loadQuery<
		{
			source: string
			destination: string
		}[]
	>(groq`*[_type == 'redirect']`)

	if (redirects.data.some(({ source }) => source === url.pathname)) {
		const { destination } =
			redirects.data.find(({ source }) => source === url.pathname) ?? {}

		if (destination) redirect(308, destination)
	}

	const site = await loadQuery<Sanity.Site>(siteQuery)

	return {
		preview,
		site,
	}
}
