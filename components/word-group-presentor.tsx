import { Typography, Card, CardContent, Box, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import xss from 'xss';

type Word = {
    word: string;
    example: string;
}

type WordGroupPresentorProps = {
    wordGroup: string;
    words: Word[];
    notes: string;
}

export default function WordGroupPresentor({ wordGroup, words, notes }: WordGroupPresentorProps) {
    return (
        <>
            <Card>
                <CardContent>
                    <Typography variant="body1" gutterBottom>Words from the group:</Typography>
                    <Typography variant="h6" gutterBottom>{wordGroup}</Typography>
                    <Box my={2}>
                        {words.map((word) =>
                            <Accordion key={word.word}>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                    {word.word}
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant="body2" display="inline" dangerouslySetInnerHTML={{__html: xss(`Example: ${word.example}`)}}></Typography>
                                </AccordionDetails>
                            </Accordion>)}
                    </Box>
                    <Typography variant="body2">Notes :</Typography>
                    <Typography variant="body2" dangerouslySetInnerHTML={{__html: xss(notes)}}></Typography>
                </CardContent>
            </Card>
        </>
    )
}