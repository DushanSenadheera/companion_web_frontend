import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import '../styles/report.css';

export default function Report(){

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className='reportSection'> 
            <h3>Report</h3>
            <div className="reportContent">
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    <Stack direction="row" alignItems='center' spacing={2}><Avatar>AG</Avatar><span>Amith Gamagedara</span></Stack>
                    </Typography>
                    <Typography sx={{ color: 'text.primary' }}>
                        Regarding post content
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography sx={{ color: 'text.primary' }}>
                I am writing to provide a report on a recent social media post that features content from another source. The purpose of this report is to acknowledge the content's origin, summarize its performance and engagement, and offer insights for future content curation and collaboration.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            </div>
        </div>
    )
}