import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grid, Grow} from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts.js';
import foodshare from './images/foodshare.jpg'
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';

require('dotenv').config({ path: '../.env'});

const App = () => {
    const [currentId, setCurrentId] = useState(0);
    const classes = useStyles();
    // hook
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Seattle FoodShare</Typography>
                <img className={classes.image} src={foodshare} alt="foodshare" height="80" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts> setCurrentId={setCurrentId}</Posts>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}>
                            </Form>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;