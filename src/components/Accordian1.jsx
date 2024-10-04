import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

// Styled Accordion with Shadows
const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={4} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Soft shadow effect
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
    '&:hover': {
        boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)', // Hover shadow effect
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor: 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function Accordion1() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div className="">
            {/* Panel 1: Trucking Experience */}
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography><h1 className='text-2xl font-normal text-zinc-700'>Trucking Business in New York</h1></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        With over 10 years of experience in the trucking industry, I specialize in logistics, fleet management, and providing top-tier service across New York. My business has grown to encompass multiple routes and clients in the region, offering safe and timely deliveries.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            {/* Panel 2: Financial Portfolio */}
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography><h1 className='text-2xl font-normal text-zinc-700'>Financial Portfolio and Investments</h1></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Aside from trucking, I have built a strong financial portfolio that includes stocks, bonds, and real estate investments. My approach to diversified investing has yielded solid returns over the years, securing my financial future and opening new business opportunities.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            {/* Panel 3: Trading and Market Analysis */}
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography><h1 className='text-2xl font-normal text-zinc-700'>Expert in Stock Trading</h1></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        As an active trader, I closely monitor market trends and apply strategic analysis to make informed trading decisions. My trading expertise spans various sectors, allowing me to balance risk with potential high returns, making me a trusted advisor for those entering the market.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
