export type Word = {
    word: string,
    example: string
}

export type WordGroup = {
    wordGroup: string,
    words: Word[],
    notes: string
}

export type VocabularyList = {
    listNo: string;
    wordGroups: WordGroup[]
}