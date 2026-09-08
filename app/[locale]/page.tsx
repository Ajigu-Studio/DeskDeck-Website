import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  ArrowDownToLine,
  Check,
  Files,
  FolderLock,
  Layers3,
  RotateCcw,
  ShieldCheck,
} from 'lucide-react';

import {
  copy,
  isLocalePath,
  localePaths,
  localeTags,
  type LocalePath,
} from '@/app/content';
import { LanguagePicker } from '@/components/language-picker';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type PageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ download?: string }>;
};

export function generateStaticParams() {
  return localePaths.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: Pick<PageProps, 'params'>): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocalePath(locale)) return {};
  const text = copy[locale];

  return {
    title: text.metadataTitle,
    description: text.metadataDescription,
    alternates: {
      languages: Object.fromEntries(
        localePaths.map((path) => [localeTags[path], `/${path}`]),
      ),
    },
  };
}

const featureIcons = [Layers3, Files, RotateCcw];

export default async function LocalizedHome({
  params,
  searchParams,
}: PageProps) {
  const { locale } = await params;
  if (!isLocalePath(locale)) notFound();
  const text = copy[locale];
  const { download } = await searchParams;
  const downloadURL = `/download?lang=${locale}`;
  const features = [
    [text.featureOneTitle, text.featureOneBody],
    [text.featureTwoTitle, text.featureTwoBody],
    [text.featureThreeTitle, text.featureThreeBody],
  ] as const;

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a
          className="flex items-center gap-3"
          href={`/${locale}`}
          aria-label={text.homeLabel}
        >
          <Image
            alt=""
            className="size-10 rounded-[10px] shadow-[0_8px_24px_rgb(0_0_0/30%)]"
            height={48}
            priority
            src="/deskdeck-icon.png"
            width={48}
          />
          <span className="text-[1.05rem] font-semibold tracking-[-0.02em]">
            DeskDeck
          </span>
        </a>
        <div className="flex items-center gap-3">
          <LanguagePicker
            label={text.languageLabel}
            locale={locale as LocalePath}
          />
          <a
            className={cn(
              buttonVariants({ variant: 'outline' }),
              'h-10 rounded-full border-white/15 bg-white/5 px-5 text-white hover:bg-white/10',
            )}
            href={downloadURL}
          >
            {text.download}
          </a>
        </div>
      </nav>

      {download === 'unavailable' && (
        <p className="mx-auto mt-2 w-fit max-w-[calc(100%-3rem)] rounded-full border border-amber-200/15 bg-amber-200/8 px-5 py-2 text-center text-sm text-amber-100">
          {text.unavailable}
        </p>
      )}

      <section className="mx-auto grid min-h-[calc(100vh-88px)] w-full max-w-7xl items-center gap-14 px-6 pb-20 pt-10 lg:grid-cols-[0.88fr_1.12fr] lg:px-10 lg:pb-24 lg:pt-4">
        <div className="relative z-10 max-w-2xl">
          <p className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-200">
            <span className="size-1.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgb(103_232_249/85%)]" />
            {text.eyebrow}
          </p>
          <h1 className="text-balance text-[clamp(3.5rem,7vw,7.6rem)] font-semibold leading-[0.88] tracking-[-0.075em]">
            {text.titleLead}
            <span className="block bg-[linear-gradient(95deg,#ffffff_10%,#9be7ff_46%,#bda9ff_90%)] bg-clip-text text-transparent">
              {text.titleAccent}
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-pretty text-lg leading-8 text-white/62">
            {text.description}
          </p>
          <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              className={cn(
                buttonVariants(),
                'h-13 rounded-full bg-white px-7 text-base font-semibold text-[#071017] shadow-[0_14px_46px_rgb(91_214_255/22%)] hover:bg-cyan-50',
              )}
              href={downloadURL}
            >
              <ArrowDownToLine className="size-4.5" />
              {text.downloadMac}
            </a>
            <span className="flex items-center gap-2 text-sm text-white/48">
              <Check className="size-4 text-emerald-300" /> {text.compatibility}
            </span>
          </div>
        </div>

        <div
          className="relative mx-auto aspect-[1.02] w-full max-w-[720px]"
          aria-label={text.previewLabel}
        >
          <div className="absolute inset-[6%_3%_9%_10%] rotate-[5deg] overflow-hidden rounded-[30px] border border-white/12 bg-[#101a28] shadow-[0_60px_140px_rgb(0_0_0/55%)]">
            <Image
              alt=""
              className="h-full w-full object-cover opacity-68"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 90vw"
              src="/wallpaper-purple.png"
            />
          </div>
          <div className="absolute inset-[12%_9%_3%_4%] -rotate-[4deg] overflow-hidden rounded-[30px] border border-white/14 bg-[#071017] shadow-[0_45px_110px_rgb(0_0_0/58%)]">
            <Image
              alt=""
              className="h-full w-full object-cover opacity-80"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 90vw"
              src="/wallpaper-cyan.png"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-[linear-gradient(transparent,rgb(3_12_18/88%))] p-7 pt-24">
              <div>
                <p className="text-sm text-white/55">{text.desktopSpace}</p>
                <p className="mt-1 text-2xl font-semibold tracking-tight">
                  {text.deepWork}
                </p>
              </div>
              <div className="flex gap-2" aria-hidden="true">
                <span className="size-2 rounded-full bg-white" />
                <span className="size-2 rounded-full bg-white/30" />
                <span className="size-2 rounded-full bg-white/30" />
              </div>
            </div>
          </div>
          <div className="absolute right-[3%] top-[10%] flex items-center gap-3 rounded-2xl border border-white/14 bg-[#08131d]/78 p-3 pr-5 shadow-2xl backdrop-blur-xl">
            <Image
              alt=""
              className="size-11 rounded-xl"
              height={52}
              src="/deskdeck-icon.png"
              width={52}
            />
            <div>
              <p className="text-xs text-white/45">{text.activeSpace}</p>
              <p className="text-sm font-medium">{text.deepWork}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-white/[0.025]">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="text-sm font-medium text-cyan-200">
            {text.featureEyebrow}
          </p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <h2 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-6xl">
              {text.featureTitle}
            </h2>
            <p className="max-w-xl text-lg leading-8 text-white/54">
              {text.featureDescription}
            </p>
          </div>
          <div className="mt-16 grid gap-px overflow-hidden rounded-[24px] border border-white/10 bg-white/10 md:grid-cols-3">
            {features.map(([title, body], index) => {
              const Icon = featureIcons[index];
              return (
                <article className="min-h-64 bg-[#0a151f] p-8" key={title}>
                  <Icon className="size-6 text-cyan-200" strokeWidth={1.6} />
                  <h3 className="mt-12 text-xl font-semibold tracking-tight">
                    {title}
                  </h3>
                  <p className="mt-3 leading-7 text-white/50">{body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-36">
        <div>
          <p className="text-sm font-medium text-violet-200">
            {text.trustEyebrow}
          </p>
          <h2 className="mt-5 max-w-xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-6xl">
            {text.trustTitle}
          </h2>
        </div>
        <div className="border-l border-white/10 pl-8 lg:pl-14">
          <p className="max-w-2xl text-lg leading-8 text-white/60">
            {text.trustBody}
          </p>
          <ul className="mt-10 space-y-5">
            {[text.trustItemOne, text.trustItemTwo, text.trustItemThree].map(
              (item, index) => {
                const Icon = [ShieldCheck, FolderLock, Check][index];
                return (
                  <li
                    className="flex items-center gap-4 text-white/82"
                    key={item}
                  >
                    <span className="grid size-9 place-items-center rounded-full bg-white/6">
                      <Icon className="size-4 text-emerald-300" />
                    </span>
                    {item}
                  </li>
                );
              },
            )}
          </ul>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-10 lg:px-10">
        <div className="relative overflow-hidden rounded-[32px] border border-white/12 bg-[linear-gradient(125deg,#10263a,#132134_48%,#211d3b)] px-7 py-16 text-center shadow-[0_32px_110px_rgb(0_0_0/35%)] sm:px-12 sm:py-24">
          <h2 className="mx-auto max-w-3xl text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">
            {text.finalTitle}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/58">
            {text.finalBody}
          </p>
          <a
            className={cn(
              buttonVariants(),
              'mt-9 h-13 rounded-full bg-white px-7 text-base font-semibold text-[#071017] hover:bg-cyan-50',
            )}
            href={downloadURL}
          >
            <ArrowDownToLine className="size-4.5" />
            {text.downloadMac}
          </a>
        </div>
      </section>

      <footer className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-6 py-10 text-sm text-white/38 sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <span>{text.copyright}</span>
        <span>DeskDeck · macOS</span>
      </footer>
    </main>
  );
}
