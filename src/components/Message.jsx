import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import '../styles/message.css';

export default function Message() {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className='msgSection'>
            <h3>Messages</h3>
            <div className="msgContent">
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    <Stack direction="row" alignItems='center' spacing={2}><Avatar>JD</Avatar><span>Jhon Doe</span></Stack>
                    </Typography>
                    <Typography sx={{ color: 'text.primary' }}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi ex unde vitae illo sequi dolore illum, quod dicta.
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Message"
                        multiline
                        maxRows={4}
                        fullWidth={true}
                    />
                </AccordionDetails>
            </Accordion>
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    <Stack direction="row" alignItems='center' spacing={2}><Avatar>JD</Avatar><span>Jhon Doe</span></Stack>
                    </Typography>
                    <Typography sx={{ color: 'text.primary' }}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam necessitatibus rerum nemo ducimus cupiditate quo, a perferendis at expedita exercitationem totam alias officiis sint ratione.
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Message"
                        multiline
                        maxRows={4}
                        fullWidth={true}
                        
                    />
                </AccordionDetails>
            </Accordion>
            </div>
        </div>
    )
}