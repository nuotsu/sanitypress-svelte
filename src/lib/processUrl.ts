import { PUBLIC_BASE_URL } from '$env/static/public'

export default function (
	page: Sanity.PageBase,
	{
		base = true,
		params,
	}: {
		base?: boolean
		params?: string
	} = {},
) {
	const segment = page._type === 'blog.post' ? 'blog' : null

	const slug = page.metadata?.slug?.current
	const path = slug === 'index' ? null : slug

	return (
		(base ? PUBLIC_BASE_URL + '/' : '/') +
		[segment, path, params].filter(Boolean).join('/')
	)
}
