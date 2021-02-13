import fs from 'fs';
import path from 'path';

const vocabularyListsDirectory = path.join(process.cwd(), 'vocabulary_lists');

export function getAllVocabularyLists() {
    const vocabularyLists = fs.readFileSync(path.join(vocabularyListsDirectory, 'vocabulary-lists.json'));
    return JSON.parse(vocabularyLists.toString());
}