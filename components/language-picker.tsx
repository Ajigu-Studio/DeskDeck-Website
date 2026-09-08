'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { type LocalePath, localeTags } from '@/app/content';
import {
  NativeSelect,
  NativeSelectOption,
} from '@/components/ui/native-select';

export function LanguagePicker({
  locale,
  label,
}: {
  locale: LocalePath;
  label: string;
}) {
  const router = useRouter();

  useEffect(() => {
    document.documentElement.lang = localeTags[locale];
  }, [locale]);

  return (
    <NativeSelect
      aria-label={label}
      className="hidden sm:block"
      onChange={(event) => router.push(`/${event.target.value}`)}
      size="sm"
      value={locale}
    >
      <NativeSelectOption value="en">English</NativeSelectOption>
      <NativeSelectOption value="zh-hans">简体中文</NativeSelectOption>
      <NativeSelectOption value="ja">日本語</NativeSelectOption>
      <NativeSelectOption value="ko">한국어</NativeSelectOption>
    </NativeSelect>
  );
}
