import { pageQuery } from '$/lib/sanity/queries'
import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({
	params: { slug },
	locals: { loadQuery },
}) => {
	const page = await loadQuery<Sanity.Page>(pageQuery, { slug })

	if (!page?.data) {
		error(404, 'Page not found')
	}

	return {
		params: { slug },
		page,
	}
}
