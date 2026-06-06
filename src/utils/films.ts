import { getCollection, type CollectionEntry } from 'astro:content';

export type FilmEntry = CollectionEntry<'films'>;
export type FilmCategory = 'short' | 'archival';

// TODO: Update sorting and filtering when film metadata is confirmed.
export async function getAllFilms(): Promise<FilmEntry[]> {
  const films = await getCollection('films');

  return films.sort((current, next) => {
    const currentOrder = current.data.sortOrder ?? Number.MAX_SAFE_INTEGER;
    const nextOrder = next.data.sortOrder ?? Number.MAX_SAFE_INTEGER;

    return currentOrder - nextOrder;
  });
}

export async function getFilmsByCategory(category: FilmCategory): Promise<FilmEntry[]> {
  const films = await getAllFilms();

  return films.filter((film) => film.data.category === category);
}
