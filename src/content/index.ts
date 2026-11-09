import type { Lang } from '../site/routes.ts';
import { en } from './en.ts';
import { es } from './es.ts';
import { pt } from './pt.ts';
import type { Dict } from './types.ts';

export const dicts: Record<Lang, Dict> = { pt, en, es };
