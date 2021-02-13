import React from 'react';
import { Card, CardContent, FormControl, InputLabel, Select, MenuItem, Box } from '@material-ui/core';

type WordListSelectorProps = {
    listNos: string[];
    selectedListNo: string;
    onListNoChanged: (selectedListNo: string) => void;
    wordGroups: string[];
    selectedWordGroup: string;
    onWordGroupChanged: (selectedWordGroup: string) => void;
}

export default function WordListSelector({ listNos, selectedListNo, onListNoChanged, wordGroups, selectedWordGroup, onWordGroupChanged }: WordListSelectorProps) {

    const handleListNoChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
        onListNoChanged(event.target.value as string);
    }

    const handleWordGroupChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
        onWordGroupChanged(event.target.value as string);
    }

    return (
        <>
            <Box my={2}>
                <Card>
                    <CardContent>
                        <FormControl fullWidth margin="normal">
                            <InputLabel>List No.</InputLabel>
                            <Select value={selectedListNo} onChange={handleListNoChange}>
                                {listNos.map((listNo) => <MenuItem key={listNo} value={listNo}>{listNo}</MenuItem>)}
                            </Select>
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                            <InputLabel>Word Groups</InputLabel>
                            <Select value={selectedWordGroup} onChange={handleWordGroupChange}>
                                {wordGroups.map((wordGroup) => <MenuItem key={wordGroup} value={wordGroup}>{wordGroup}</MenuItem>)}
                            </Select>
                        </FormControl>
                    </CardContent>
                </Card>
            </Box>
        </>
    )
}