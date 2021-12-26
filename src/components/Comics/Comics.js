import './Comics.scss'
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import PropTypes from 'prop-types';
import { Grid, Stack } from '@mui/material';
import DisplayCard from '../Cards/DisplayCard';
import imgSpiderman from '../../assets/images/nguoi-nhen-tro-ve-nha-2017-8524.jpg'
import imgIronman from '../../assets/images/Iron_Man_2_poster_Viet.jpg'
import imgCaption from '../../assets/images/captionamerica.jpg'


function Comics() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [value1, setValue1] = React.useState(0);

    const handleChange1 = (event, newValue) => {
        setValue1(newValue);
    };
    // Subnav1
    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Typography component={'span'}>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    };

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }
    // subnav2
    function TabPanel1(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`vertical-tabpanel-${index}`}
                aria-labelledby={`vertical-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    TabPanel1.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired
    };

    function a11yProps1(index) {
        return {
            id: `vertical-tab-${index}`,
            "aria-controls": `vertical-tabpanel-${index}`
        };
    }

    return (
        <div className='comics'>
            <div className='tabs-ui'>
                <Stack direction="row" >
                    <Box
                        sx={{
                            flexGrow: 1,
                            bgcolor: "background.paper",
                            display: "flex",
                            height: 'auto'
                        }}
                    >
                        <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            value={value}
                            onChange={handleChange}
                            aria-label="Vertical tabs example"
                            sx={{ borderRight: 1, borderColor: "divider" }}
                        >
                            <Tab label="Item One" {...a11yProps(0)} />
                            <Tab label="Item Two" {...a11yProps(1)} />
                            <Tab label="Item Three" {...a11yProps(2)} />
                            <Tab label="Item Four" {...a11yProps(3)} />
                            <Tab label="Item Five" {...a11yProps(4)} />
                            <Tab label="Item Six" {...a11yProps(5)} />
                            <Tab label="Item Seven" {...a11yProps(6)} />
                            <Tab label="Item Four" {...a11yProps(7)} />
                            <Tab label="Item Five" {...a11yProps(8)} />
                            <Tab label="Item Six" {...a11yProps(9)} />
                            <Tab label="Item Seven" {...a11yProps(10)} />
                        </Tabs>
                        <TabPanel value={value} index={0}>
                            <Grid item xs={6} sm={12}>
                                <Box sx={{ width: 'auto', bgcolor: '#f5f6fa' }}>
                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                        <Tabs
                                            variant="scrollable"
                                            scrollButtons="auto"
                                            value={value1}
                                            onChange={handleChange1}
                                            aria-label="basic tabs example">
                                            <Tab className='txt-ui' label="SPIDER-MAN" {...a11yProps1(0)} />
                                            <Tab className='txt-ui' label="IRON MAN" {...a11yProps1(1)} />
                                            <Tab className='txt-ui' label="CAPTAIN AMERICA" {...a11yProps1(2)} />
                                            <Tab className='txt-ui' label="BLACK PANTHER" {...a11yProps1(3)} />
                                            <Tab className='txt-ui' label="ANT-MAN" {...a11yProps1(4)} />
                                            <Tab className='txt-ui' label="CAPTAIN MARVEL" {...a11yProps1(5)} />
                                            <Tab className='txt-ui' label="THE HULK" {...a11yProps1(6)} />
                                            <Tab className='txt-ui' label="THOR" {...a11yProps1(7)} />
                                            <Tab className='txt-ui' label="DOCTOR STRANGE" {...a11yProps1(8)} />
                                            <Tab className='txt-ui' label="Scarlet Witch" {...a11yProps1(9)} />
                                            <Tab className='txt-ui' label="Vision" {...a11yProps1(10)} />
                                            <Tab className='txt-ui' label="Black Widow" {...a11yProps1(11)} />
                                        </Tabs>
                                    </Box>
                                    <TabPanel value={value1} index={0}>
                                        <Grid container>
                                            <Grid item xs>
                                                <DisplayCard imageUrl={imgSpiderman} title="Spider-man" />
                                            </Grid>
                                            <Grid item xs>
                                                <DisplayCard imageUrl={imgSpiderman} title="Spider-man" />
                                            </Grid>
                                            <Grid item xs>
                                                <DisplayCard imageUrl={imgSpiderman} title="Spider-man" />
                                            </Grid>
                                            <Grid item xs>
                                                <DisplayCard imageUrl={imgSpiderman} title="Spider-man" />
                                            </Grid>
                                            <Grid item xs>
                                                <DisplayCard imageUrl={imgSpiderman} title="Spider-man" />
                                            </Grid>
                                            <Grid item xs>
                                                <DisplayCard imageUrl={imgSpiderman} title="Spider-man" />
                                            </Grid>
                                        </Grid>
                                        <br />
                                        <Grid container>
                                            <Grid item xs>
                                                <DisplayCard imageUrl={imgSpiderman} title="Spider-man" />
                                            </Grid>
                                            <Grid item xs>
                                                <DisplayCard imageUrl={imgSpiderman} title="Spider-man" />
                                            </Grid>
                                            <Grid item xs>
                                                <DisplayCard imageUrl={imgSpiderman} title="Spider-man" />
                                            </Grid>
                                            <Grid item xs>
                                                <DisplayCard imageUrl={imgSpiderman} title="Spider-man" />
                                            </Grid>
                                            <Grid item xs>
                                                <DisplayCard imageUrl={imgSpiderman} title="Spider-man" />
                                            </Grid>
                                            <Grid item xs>
                                                <DisplayCard imageUrl={imgSpiderman} title="Spider-man" />
                                            </Grid>
                                        </Grid>
                                        <br />
                                        <Grid container>
                                            <Grid item xs>
                                                <DisplayCard imageUrl={imgSpiderman} title="Spider-man" />
                                            </Grid>
                                            <Grid item xs>
                                                <DisplayCard imageUrl={imgSpiderman} title="Spider-man" />
                                            </Grid>
                                            <Grid item xs>
                                                <DisplayCard imageUrl={imgSpiderman} title="Spider-man" />
                                            </Grid>
                                            <Grid item xs>
                                                <DisplayCard imageUrl={imgSpiderman} title="Spider-man" />
                                            </Grid>
                                            <Grid item xs>
                                                <DisplayCard imageUrl={imgSpiderman} title="Spider-man" />
                                            </Grid>
                                            <Grid item xs>
                                                <DisplayCard imageUrl={imgSpiderman} title="Spider-man" />
                                            </Grid>
                                        </Grid>
                                    </TabPanel>
                                    <TabPanel value={value1} index={1}>
                                        <Grid container>
                                            <Grid item xs>
                                                <DisplayCard imageUrl={imgIronman} title="Iron man" />
                                            </Grid>
                                            <Grid item xs>
                                                <DisplayCard imageUrl={imgIronman} title="Iron man" />
                                            </Grid>
                                            <Grid item xs>
                                                <DisplayCard imageUrl={imgIronman} title="Iron man" />
                                            </Grid>
                                            <Grid item xs>
                                                <DisplayCard imageUrl={imgIronman} title="Iron man" />
                                            </Grid>
                                            <Grid item xs>
                                                <DisplayCard imageUrl={imgIronman} title="Iron man" />
                                            </Grid>
                                            <Grid item xs>
                                                <DisplayCard imageUrl={imgIronman} title="Iron man" />
                                            </Grid>
                                        </Grid>
                                        <br />
                                        <Grid container>
                                            <Grid item xs>
                                                <DisplayCard imageUrl={imgIronman} title="Iron man" />
                                            </Grid>
                                            <Grid item xs>
                                                <DisplayCard imageUrl={imgIronman} title="Iron man" />
                                            </Grid>
                                            <Grid item xs>
                                                <DisplayCard imageUrl={imgIronman} title="Iron man" />
                                            </Grid>
                                            <Grid item xs>
                                                <DisplayCard imageUrl={imgIronman} title="Iron man" />
                                            </Grid>
                                            <Grid item xs>
                                                <DisplayCard imageUrl={imgIronman} title="Iron man" />
                                            </Grid>
                                            <Grid item xs>
                                                <DisplayCard imageUrl={imgIronman} title="Iron man" />
                                            </Grid>
                                        </Grid>
                                        <br />
                                        <Grid container>
                                            <Grid item xs>
                                                <DisplayCard imageUrl={imgIronman} title="Iron man" />
                                            </Grid>
                                            <Grid item xs>
                                                <DisplayCard imageUrl={imgIronman} title="Iron man" />
                                            </Grid>
                                            <Grid item xs>
                                                <DisplayCard imageUrl={imgIronman} title="Iron man" />
                                            </Grid>
                                            <Grid item xs>
                                                <DisplayCard imageUrl={imgIronman} title="Iron man" />
                                            </Grid>
                                            <Grid item xs>
                                                <DisplayCard imageUrl={imgIronman} title="Iron man" />
                                            </Grid>
                                            <Grid item xs>
                                                <DisplayCard imageUrl={imgIronman} title="Iron man" />
                                            </Grid>
                                        </Grid>
                                    </TabPanel>
                                    <TabPanel value={value1} index={2}>
                                        <Grid container>
                                            <Grid item xs>
                                                <DisplayCard imageUrl={imgCaption} title="Caption America" />
                                            </Grid>
                                            <Grid item xs>
                                                <DisplayCard imageUrl={imgCaption} title="Caption America" />
                                            </Grid>
                                            <Grid item xs>
                                                <DisplayCard imageUrl={imgCaption} title="Caption America" />
                                            </Grid>
                                            <Grid item xs>
                                                <DisplayCard imageUrl={imgCaption} title="Caption America" />
                                            </Grid>
                                            <Grid item xs>
                                                <DisplayCard imageUrl={imgCaption} title="Caption America" />
                                            </Grid>
                                            <Grid item xs>
                                                <DisplayCard imageUrl={imgCaption} title="Caption America" />
                                            </Grid>
                                        </Grid>
                                        <br />
                                        <Grid container>
                                            <Grid item xs>
                                                <DisplayCard imageUrl={imgCaption} title="Caption America" />
                                            </Grid>
                                            <Grid item xs>
                                                <DisplayCard imageUrl={imgCaption} title="Caption America" />
                                            </Grid>
                                            <Grid item xs>
                                                <DisplayCard imageUrl={imgCaption} title="Caption America" />
                                            </Grid>
                                            <Grid item xs>
                                                <DisplayCard imageUrl={imgCaption} title="Caption America" />
                                            </Grid>
                                            <Grid item xs>
                                                <DisplayCard imageUrl={imgCaption} title="Caption America" />
                                            </Grid>
                                            <Grid item xs>
                                                <DisplayCard imageUrl={imgCaption} title="Caption America" />
                                            </Grid>
                                        </Grid>
                                        <br />
                                        <Grid container>
                                            <Grid item xs>
                                                <DisplayCard imageUrl={imgCaption} title="Caption America" />
                                            </Grid>
                                            <Grid item xs>
                                                <DisplayCard imageUrl={imgCaption} title="Caption America" />
                                            </Grid>
                                            <Grid item xs>
                                                <DisplayCard imageUrl={imgCaption} title="Caption America" />
                                            </Grid>
                                            <Grid item xs>
                                                <DisplayCard imageUrl={imgCaption} title="Caption America" />
                                            </Grid>
                                            <Grid item xs>
                                                <DisplayCard imageUrl={imgCaption} title="Caption America" />
                                            </Grid>
                                            <Grid item xs>
                                                <DisplayCard imageUrl={imgCaption} title="Caption America" />
                                            </Grid>
                                        </Grid>
                                    </TabPanel>
                                    <TabPanel value={value1} index={3}>
                                        Item One
                                    </TabPanel>
                                    <TabPanel value={value1} index={4}>
                                        Item Two
                                    </TabPanel>
                                    <TabPanel value={value1} index={5}>
                                        Item Three
                                    </TabPanel>
                                    <TabPanel value={value1} index={6}>
                                        Item One
                                    </TabPanel>
                                    <TabPanel value={value1} index={7}>
                                        Item Two
                                    </TabPanel>
                                    <TabPanel value={value1} index={8}>
                                        Item Three
                                    </TabPanel>
                                    <TabPanel value={value1} index={9}>
                                        Item One
                                    </TabPanel>
                                    <TabPanel value={value1} index={10}>
                                        Item Two
                                    </TabPanel>
                                    <TabPanel value={value1} index={11}>
                                        Item Three
                                    </TabPanel>
                                </Box>
                            </Grid>
                        </TabPanel>
                        {/* 1 */}
                        <TabPanel value={value} index={1}>
                            Item Two
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            Item Three
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            Item Four
                        </TabPanel>
                        <TabPanel value={value} index={4}>
                            Item Five
                        </TabPanel>
                        <TabPanel value={value} index={5}>
                            Item Six
                        </TabPanel>
                        <TabPanel value={value} index={6}>
                            Item Seven
                        </TabPanel>
                    </Box>
                </Stack>
            </div>
            <br />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Pagination count={20} variant="outlined" shape="rounded" />
            </div>
            <br />
        </div>
    );
}

export default Comics