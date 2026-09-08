import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Home() {
  const acceptLanguage =
    (await headers()).get('accept-language')?.toLowerCase() ?? '';

  if (acceptLanguage.includes('zh')) redirect('/zh-hans');
  if (acceptLanguage.includes('ja')) redirect('/ja');
  if (acceptLanguage.includes('ko')) redirect('/ko');
  redirect('/en');
}
