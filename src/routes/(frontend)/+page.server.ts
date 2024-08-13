import { indexQuery } from '$/lib/sanity/queries'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ locals: { loadQuery } }) => {
	const index = await loadQuery<Sanity.Page>(indexQuery)

	return { index }
}
