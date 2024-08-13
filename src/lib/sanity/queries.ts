import groq from 'groq'

export const linkQuery = groq`
	...,
	internal->{ _type, title, metadata }
`

const navigationQuery = groq`
	title,
	items[]{
		${linkQuery},
		link{ ${linkQuery} },
		links[]{ ${linkQuery} }
	}
`

export const siteQuery = groq`*[_type == 'site'][0]{
	...,
	headerMenu->{ ${navigationQuery} },
	footerMenu->{ ${navigationQuery} },
	social->{ ${navigationQuery} },
}`

const modulesQuery = groq`
	...,
	_type == 'hero.saas' => { reputation-> },
`

export const indexQuery = groq`*[
	_type == 'page' &&
	metadata.slug.current == 'index'
][0]{
	...,
	modules[]{ ${modulesQuery} }
}`

export const pageQuery = groq`*[
	_type == 'page' &&
	defined(metadata.slug.current) &&
	!(metadata.slug.current in ['index', 'blog/*']) &&
	metadata.slug.current == $slug
][0]{
	...,
	modules[]{ ${modulesQuery} }
}`
