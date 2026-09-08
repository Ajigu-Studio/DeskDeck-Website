export const localePaths = ['en', 'zh-hans', 'ja', 'ko'] as const;
export type LocalePath = (typeof localePaths)[number];

export const localeTags: Record<LocalePath, string> = {
  en: 'en',
  'zh-hans': 'zh-Hans',
  ja: 'ja',
  ko: 'ko',
};

export function isLocalePath(value: string): value is LocalePath {
  return localePaths.includes(value as LocalePath);
}

export const copy = {
  en: {
    metadataTitle: 'DeskDeck — Switch your whole desktop',
    metadataDescription:
      'Switch complete Desktop Spaces with their files, wallpaper, Finder layout, positions, and custom icons.',
    homeLabel: 'DeskDeck home',
    languageLabel: 'Language',
    download: 'Download',
    eyebrow: 'A complete desktop for every context',
    titleLead: 'Switch your',
    titleAccent: 'whole desktop.',
    description:
      'DeskDeck keeps files, wallpaper, Finder layout, icon positions, and custom icons together in one Desktop Space.',
    downloadMac: 'Download for macOS',
    compatibility: 'macOS 14 or later · Apple silicon and Intel',
    previewLabel: 'DeskDeck Desktop Space previews',
    desktopSpace: 'Desktop Space',
    deepWork: 'Deep Work',
    activeSpace: 'Active space',
    featureEyebrow: 'One switch. The complete context.',
    featureTitle: 'Every part of your desktop, together.',
    featureDescription:
      'Stop rebuilding your desktop for each project. DeskDeck restores the environment you meant to return to.',
    featureOneTitle: 'Complete spaces',
    featureOneBody:
      'Group Desktop files, folders, wallpaper, Finder view settings, item positions, and custom icons.',
    featureTwoTitle: 'Files stay real',
    featureTwoBody:
      'Your items keep their real Desktop paths. DeskDeck does not move them into a private container.',
    featureThreeTitle: 'Reversible by design',
    featureThreeBody:
      'Journaled switching protects each transition and preserves a restore path for inactive content.',
    trustEyebrow: 'Built for the Mac you already use',
    trustTitle: 'Native control, explicit permissions.',
    trustBody:
      'DeskDeck asks for Desktop access, Finder automation, and Screen Recording only to switch content, restore Finder details, and create previews.',
    trustItemOne: 'Developer ID signed and Apple notarized',
    trustItemTwo: 'Hardened Runtime enabled',
    trustItemThree: 'No cloud upload for Desktop files',
    finalTitle: 'Your next workspace is one switch away.',
    finalBody: 'Download DeskDeck and try every feature free for 7 days.',
    unavailable:
      'The first public build is being prepared. Please try again soon.',
    copyright: '© 2026 Ajigu Studio. All rights reserved.',
  },
  'zh-hans': {
    metadataTitle: 'DeskDeck — 一键切换完整桌面',
    metadataDescription:
      '在文件、壁纸、Finder 布局、图标位置与自定义图标之间切换完整桌面空间。',
    homeLabel: 'DeskDeck 首页',
    languageLabel: '语言',
    download: '下载',
    eyebrow: '为每种情境准备一套完整桌面',
    titleLead: '一键切换',
    titleAccent: '整个桌面。',
    description:
      'DeskDeck 将文件、壁纸、Finder 布局、图标位置和自定义图标保存在同一个桌面空间中。',
    downloadMac: '下载 macOS 版',
    compatibility: '需要 macOS 14 或更高版本 · 支持 Apple 芯片与 Intel',
    previewLabel: 'DeskDeck 桌面空间预览',
    desktopSpace: '桌面空间',
    deepWork: '深度工作',
    activeSpace: '当前空间',
    featureEyebrow: '一次切换，完整回到状态',
    featureTitle: '桌面上的一切，始终保持同步。',
    featureDescription:
      '无需为每个项目重新整理桌面。DeskDeck 会恢复你真正想回到的工作环境。',
    featureOneTitle: '完整桌面空间',
    featureOneBody:
      '组合桌面文件、文件夹、壁纸、Finder 显示设置、项目位置和自定义图标。',
    featureTwoTitle: '文件始终真实存在',
    featureTwoBody:
      '项目保留原本的桌面路径。DeskDeck 不会把它们移动到私有容器。',
    featureThreeTitle: '以可逆为设计前提',
    featureThreeBody:
      '日志化切换保护每次转换，并为非活动内容始终保留恢复路径。',
    trustEyebrow: '为你已经在使用的 Mac 而生',
    trustTitle: '原生控制，权限透明。',
    trustBody:
      'DeskDeck 仅为切换内容、恢复 Finder 细节和生成预览，请求桌面访问、Finder 自动化与屏幕录制权限。',
    trustItemOne: '使用 Developer ID 签名并通过 Apple 公证',
    trustItemTwo: '启用 Hardened Runtime',
    trustItemThree: '不会上传桌面文件到云端',
    finalTitle: '下一个工作空间，只差一次切换。',
    finalBody: '下载 DeskDeck，免费试用全部功能 7 天。',
    unavailable: '首个公开版本正在准备中，请稍后再试。',
    copyright: '© 2026 Ajigu Studio。保留所有权利。',
  },
  ja: {
    metadataTitle: 'DeskDeck — デスクトップ全体を切り替える',
    metadataDescription:
      'ファイル、壁紙、Finder レイアウト、位置、カスタムアイコンを含むデスクトップスペースを切り替えます。',
    homeLabel: 'DeskDeck ホーム',
    languageLabel: '言語',
    download: 'ダウンロード',
    eyebrow: '用途ごとに、完全なデスクトップを',
    titleLead: 'デスクトップを',
    titleAccent: 'まるごと切り替える。',
    description:
      'DeskDeck はファイル、壁紙、Finder レイアウト、アイコン位置、カスタムアイコンを一つのデスクトップスペースにまとめます。',
    downloadMac: 'macOS 版をダウンロード',
    compatibility: 'macOS 14 以降 · Apple シリコンと Intel に対応',
    previewLabel: 'DeskDeck デスクトップスペースのプレビュー',
    desktopSpace: 'デスクトップスペース',
    deepWork: '集中作業',
    activeSpace: '現在のスペース',
    featureEyebrow: '一度の切り替えで、文脈まで復元',
    featureTitle: 'デスクトップのすべてを、ひとまとめに。',
    featureDescription:
      'プロジェクトごとにデスクトップを作り直す必要はありません。DeskDeck が戻りたい作業環境を復元します。',
    featureOneTitle: '完全なスペース',
    featureOneBody:
      'デスクトップのファイル、フォルダ、壁紙、Finder 表示設定、位置、カスタムアイコンをまとめます。',
    featureTwoTitle: 'ファイルはそのまま',
    featureTwoBody:
      '項目は実際のデスクトップパスを保ちます。DeskDeck が専用コンテナへ移動することはありません。',
    featureThreeTitle: '元に戻せる設計',
    featureThreeBody:
      'ジャーナル方式の切り替えが各処理を保護し、非表示の内容にも復元経路を残します。',
    trustEyebrow: 'いつもの Mac のために',
    trustTitle: 'ネイティブな操作、明確な権限。',
    trustBody:
      'DeskDeck は内容の切り替え、Finder 情報の復元、プレビュー作成に必要な場合のみ、デスクトップ、Finder オートメーション、画面収録へのアクセスを求めます。',
    trustItemOne: 'Developer ID 署名と Apple 公証済み',
    trustItemTwo: 'Hardened Runtime を有効化',
    trustItemThree: 'デスクトップのファイルをクラウドへ送信しません',
    finalTitle: '次のワークスペースへ、ひと切り替え。',
    finalBody:
      'DeskDeck をダウンロードして、すべての機能を7日間無料でお試しください。',
    unavailable:
      '最初の公開ビルドを準備しています。しばらくしてからもう一度お試しください。',
    copyright: '© 2026 Ajigu Studio. All rights reserved.',
  },
  ko: {
    metadataTitle: 'DeskDeck — 데스크탑 전체를 전환하세요',
    metadataDescription:
      '파일, 배경화면, Finder 레이아웃, 위치와 사용자 지정 아이콘을 포함한 데스크탑 공간을 전환합니다.',
    homeLabel: 'DeskDeck 홈',
    languageLabel: '언어',
    download: '다운로드',
    eyebrow: '상황마다 완전한 데스크탑을 준비하세요',
    titleLead: '데스크탑 전체를',
    titleAccent: '한 번에 전환하세요.',
    description:
      'DeskDeck은 파일, 배경화면, Finder 레이아웃, 아이콘 위치와 사용자 지정 아이콘을 하나의 데스크탑 공간으로 묶습니다.',
    downloadMac: 'macOS용 다운로드',
    compatibility: 'macOS 14 이상 · Apple Silicon 및 Intel 지원',
    previewLabel: 'DeskDeck 데스크탑 공간 미리보기',
    desktopSpace: '데스크탑 공간',
    deepWork: '집중 작업',
    activeSpace: '현재 공간',
    featureEyebrow: '한 번의 전환으로 작업 맥락까지',
    featureTitle: '데스크탑의 모든 요소를 함께.',
    featureDescription:
      '프로젝트마다 데스크탑을 다시 정리하지 마세요. DeskDeck이 돌아가고 싶은 작업 환경을 복원합니다.',
    featureOneTitle: '완전한 공간',
    featureOneBody:
      '데스크탑 파일, 폴더, 배경화면, Finder 보기 설정, 항목 위치와 사용자 지정 아이콘을 함께 관리합니다.',
    featureTwoTitle: '파일은 그대로 유지',
    featureTwoBody:
      '항목은 실제 데스크탑 경로를 유지합니다. DeskDeck은 파일을 전용 컨테이너로 옮기지 않습니다.',
    featureThreeTitle: '되돌릴 수 있는 설계',
    featureThreeBody:
      '저널 기반 전환으로 각 작업을 보호하고 비활성 콘텐츠에도 복원 경로를 유지합니다.',
    trustEyebrow: '지금 사용하는 Mac을 위해',
    trustTitle: '네이티브 제어, 명확한 권한.',
    trustBody:
      'DeskDeck은 콘텐츠 전환, Finder 세부 정보 복원과 미리보기 생성에 필요한 경우에만 데스크탑 접근, Finder 자동화와 화면 기록 권한을 요청합니다.',
    trustItemOne: 'Developer ID 서명 및 Apple 공증 완료',
    trustItemTwo: 'Hardened Runtime 활성화',
    trustItemThree: '데스크탑 파일을 클라우드에 업로드하지 않음',
    finalTitle: '다음 작업 공간까지 단 한 번의 전환.',
    finalBody:
      'DeskDeck을 다운로드하고 모든 기능을 7일간 무료로 사용해 보세요.',
    unavailable:
      '첫 공개 빌드를 준비하고 있습니다. 잠시 후 다시 시도해 주세요.',
    copyright: '© 2026 Ajigu Studio. All rights reserved.',
  },
} as const;
