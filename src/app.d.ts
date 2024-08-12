import type { LoaderLocals } from '@sanity/svelte-loader'
import type { SanityDocument } from 'sanity'

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
		type Site = SanityDocument & {
			title: string
			copyright?: any
		}
	}
}

export {}
