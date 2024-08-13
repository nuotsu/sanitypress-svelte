import { pageQuery } from '$/lib/sanity/queries'
import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({
	params,
	locals: { loadQuery },
}) => {
	const page = await loadQuery<Sanity.Page>(pageQuery, { slug: params.slug })

	if (!page?.data) {
		error(404, 'Page not found')
	}

	return { params, page }
}
