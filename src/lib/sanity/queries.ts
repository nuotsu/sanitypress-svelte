import groq from 'groq'

export const siteQuery = groq`*[_type == 'site'][0]`
