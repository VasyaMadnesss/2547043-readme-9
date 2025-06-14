// Общие типы
type PublicationType = 'video' | 'text' | 'quote' | 'photo' | 'link';
type PublicationStatus = 'published' | 'draft';

type Tag = string;

// Общий интерфейс публикации
interface BasePublication {
  id: string;
  authorId: string;
  createdAt: Date;
  publishedAt: Date;
  status: PublicationStatus;
  type: PublicationType;
  tags?: Tag[];
  isRepost?: boolean;
  originalAuthorId?: string;
  originalPublicationId?: string;
}

// Публикация «Видео»
interface VideoPublication extends BasePublication {
  type: 'video';
  title: string; // 20–50 символов
  videoUrl: string; // YouTube URL
}

// Публикация «Текст»
interface TextPublication extends BasePublication {
  type: 'text';
  title: string; // 20–50 символов
  announcement: string; // 50–255 символов
  content: string; // 100–1024 символов
}

// Публикация «Цитата»
interface QuotePublication extends BasePublication {
  type: 'quote';
  quoteText: string; // 20–300 символов
  quoteAuthor: string; // 3–50 символов
}

// Публикация «Фото»
interface PhotoPublication extends BasePublication {
  type: 'photo';
  photoUrl: string; // JPG или PNG, до 1 МБ
}

// Публикация «Ссылка»
interface LinkPublication extends BasePublication {
  type: 'link';
  url: string; // валидный URL
  description?: string; // до 300 символов
}

// Универсальный тип публикации
export type BlogPublication =
  | VideoPublication
  | TextPublication
  | QuotePublication
  | PhotoPublication
  | LinkPublication;


