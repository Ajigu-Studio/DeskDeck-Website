import { type NextRequest, NextResponse } from 'next/server';

const manifestURL =
  process.env.DESKDECK_RELEASE_MANIFEST_URL ??
  'https://downloads.ajigu.com/deskdeck/latest.json';

function fallback(request: NextRequest) {
  const locale = request.nextUrl.searchParams.get('lang') ?? 'en';
  const safeLocale = ['en', 'zh-hans', 'ja', 'ko'].includes(locale)
    ? locale
    : 'en';
  return NextResponse.redirect(
    new URL(`/${safeLocale}?download=unavailable`, request.url),
    302,
  );
}

export async function GET(request: NextRequest) {
  try {
    const response = await fetch(manifestURL, {
      cache: 'no-store',
      headers: { accept: 'application/json' },
    });
    if (!response.ok) return fallback(request);

    const manifest = (await response.json()) as {
      downloadURL?: unknown;
      notarized?: unknown;
    };
    if (
      manifest.notarized !== true ||
      typeof manifest.downloadURL !== 'string'
    ) {
      return fallback(request);
    }

    const downloadURL = new URL(manifest.downloadURL);
    if (
      downloadURL.protocol !== 'https:' ||
      downloadURL.hostname !== 'downloads.ajigu.com'
    ) {
      return fallback(request);
    }

    return NextResponse.redirect(downloadURL, 302);
  } catch {
    return fallback(request);
  }
}
