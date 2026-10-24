// Complete section-level study library, chapters 1–16.
// Section titles, subsection outlines and page ranges follow
// 丁明孝等《细胞生物学》第5版 (高等教育出版社, 2020).

import { TEXTBOOK_PART_1 } from './textbook-part1.js';
import { TEXTBOOK_PART_2 } from './textbook-part2.js';

export const TEXTBOOK = [...TEXTBOOK_PART_1, ...TEXTBOOK_PART_2];
export const TEXTBOOK_SECTION_COUNT = TEXTBOOK.reduce((sum, chapter) => sum + chapter.sections.length, 0);

// Visual movement index → textbook chapter index.
export const SCENE_TO_BOOK_CHAPTER = [0, 2, 7, 6, 8, 4, 11];

export function bookChapterForScene(sceneIndex) {
  return SCENE_TO_BOOK_CHAPTER[sceneIndex] ?? 0;
}

export function sceneLabelForChapter(chapter) {
  return chapter.scene === null || chapter.scene === undefined ? '综合' : ['序章', '边界', '张力', '能量', '遗传', '分泌', '分裂'][chapter.scene];
}
