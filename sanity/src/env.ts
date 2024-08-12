import { isDev } from 'sanity'
import {
	PUBLIC_SANITY_PROJECT_ID,
	PUBLIC_SANITY_DATASET,
} from '$env/static/public'

export const projectId = PUBLIC_SANITY_PROJECT_ID
export const dataset = PUBLIC_SANITY_DATASET

export const BASE_URL = isDev
	? 'http://localhost:5173'
	: process.env.PUBLIC_BASE_URL!
