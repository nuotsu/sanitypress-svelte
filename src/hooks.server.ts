import { createRequestHandler, setServerClient } from '@sanity/svelte-loader'
import serverClient from '$lib/sanity/server'

setServerClient(serverClient)

export const handle = createRequestHandler()
