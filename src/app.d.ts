import type { LoaderLocals } from '@sanity/svelte-loader'
import type { SanityDocument } from 'sanity'
import type { SanityImageObject } from '@sanity/image-url/lib/types/types'

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals extends LoaderLocals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	namespace Sanity {
		// documents

		type Site = SanityDocument & {
			title: string
			subtitle?: string
			logo?: Logo
			ctas?: CTA[]
			copyright?: any
		}

		// pages

		type PageBase = SanityDocument & {
			title?: string
			metadata: Metadata
		}

		type Page = PageBase & {
			readonly _type: 'page'
			modules?: Module[]
		}

		type BlogPost = PageBase & {
			readonly _type: 'blog.post'
			body: any
			readTime: number
			headings?: { style: string; text: string }[]
			categories: BlogCategory[]
			featured: boolean
			hideTableOfContents: boolean
			publishDate: string
		}

		type BlogCategory = SanityDocument & {
			title: string
		}

		// miscellaneous

		type Reputation = SanityDocument & {
			title?: string
			subtitle?: string
			repo?: string
			limit?: number
			avatars?: Image[]
		}

		// objects

		type CTA = {
			link?: Link
			style?: string
		}

		type Image = SanityImageObject &
			Partial<{
				alt: string
				loading: 'lazy' | 'eager'
			}>

		type Link = {
			readonly _type: 'link'
			label: string
			type: 'internal' | 'external'
			internal?: Page | BlogPost
			external?: string
			params?: string
		}

		type LinkList = {
			readonly _type: 'link.list'
			link: Link
			links?: Link[]
		}

		type Metadata = {
			slug: { current: string }
			title: string
			description: string
			image?: Image
			noIndex: boolean
		}

		type Module<T = string> = {
			_type: T
			_key: string
			uid?: string
		}
	}
}

export {}
