import groq from 'groq'

const modulesQuery = groq`
	...,
	_type == 'hero.saas' => { reputation-> },
`

export const siteQuery = groq`*[_type == 'site'][0]`

export const indexQuery = groq`*[_type == 'page' && metadata.slug.current == $slug][0]{ ${modulesQuery} }`
