import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';

/** Shared Keystatic reader for all pages — reads content from src/content at build time. */
export const reader = createReader(process.cwd(), keystaticConfig);

export type Settings = NonNullable<Awaited<ReturnType<typeof reader.singletons.settings.read>>>;

let settingsPromise: ReturnType<typeof reader.singletons.settings.read> | undefined;
/** Site-wide settings (nav, footer, header CTA) — cached per build so every page shares one read. */
export function getSettings() {
  settingsPromise ??= reader.singletons.settings.read();
  return settingsPromise;
}

let postsPromise: ReturnType<typeof reader.collections.posts.all> | undefined;
/** All blog posts — cached per build so every page/route that lists posts shares one read. */
export function getAllPosts() {
  postsPromise ??= reader.collections.posts.all();
  return postsPromise;
}
