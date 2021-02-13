import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { Container, Typography, Box } from '@material-ui/core';

import AppBar from '../components/app-bar';
import { getAllVocabularyLists } from '../lib/vocabulary-lists';
import WordListSelector from '../components/word-list-selector';
import WordGroupPresentor from '../components/word-group-presentor';
import { VocabularyList } from '../types';

export const getStaticProps : GetStaticProps = async (context) => {
    const allVocabularyData = getAllVocabularyLists();
    return {
        props: {
            allVocabularyData
        }
    }
}

type HomeProps = {
    allVocabularyData: VocabularyList[];
}

export default function Home({ allVocabularyData }: HomeProps) {
    const [selectedListNo, setSelectedListNo] = React.useState(allVocabularyData[0].listNo);
    const [selectedWordGroupName, setSelectedWordGroupName] = React.useState(allVocabularyData[0].wordGroups[0].wordGroup);

    const listNos = allVocabularyData.map((list) => list.listNo);
    const selectedList = allVocabularyData.find((list) => list.listNo === selectedListNo);
    const wordGroups = selectedList!.wordGroups.map((wordGroup) => wordGroup.wordGroup);
    const selectedWordGroup = selectedList!.wordGroups.find((wordGroup) => wordGroup.wordGroup === selectedWordGroupName);

    const handleListNoChange = (listNo: string) => {
        setSelectedListNo(listNo);
        setSelectedWordGroupName(allVocabularyData.find((list) => list.listNo === listNo)!.wordGroups[0].wordGroup);
    }

    return (
        <>
            <Head>
                <title>Vocabulary Builder</title>
            </Head>
            <AppBar />
            <Container maxWidth="sm">
                <Box my={2}>
                    <Typography variant="h5" gutterBottom>Vocabulary</Typography>
                    <Typography variant="h6" gutterBottom>Cram less, Learn MORE!</Typography>
                    <WordListSelector
                        listNos = {listNos}
                        selectedListNo = {selectedListNo}
                        onListNoChanged = {handleListNoChange}
                        wordGroups = {wordGroups}
                        selectedWordGroup = {selectedWordGroupName}
                        onWordGroupChanged = {setSelectedWordGroupName}
                    />
                    <WordGroupPresentor
                        wordGroup={selectedWordGroupName}
                        words = {selectedWordGroup!.words}
                        notes = {selectedWordGroup!.notes}
                    />
                </Box>
            </Container>
        </>
    )
}