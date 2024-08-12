import { siteQuery } from '$/lib/sanity/queries'
import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async ({
	locals: { preview, loadQuery },
}) => {
	const initial = await loadQuery<Sanity.Site>(siteQuery)

	return {
		initial,
		preview,
	}
}
