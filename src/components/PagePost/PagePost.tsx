/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import React, { useEffect } from 'react';
import { Box, Container, Grid, GridItem, Heading } from '@chakra-ui/react';
import ContentBody from './ContentBody';
import AsideProfile from './AsideProfile';
import Reaction from './Reaction';
import AsideSimilarPost from './AsideSimilarPost';
import { useDispatch } from 'react-redux';
import { fetchNewPost } from '../../../store/reducers/postPageReducer';
import AsideAds from './AsideAds';
import PostComment from '../Comments/PostComment';

const PagePost = (props: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchNewPost({
        id: 'test',
        content: props.data.contentHtml,
        isForceUpdate: true,
      })
    );
  }, [props.data.contentHtml]);

  return (
    <Box>
      <Container as="main" maxWidth="1280" mt={20}>
        <Grid templateColumns="repeat(18, 1fr)" gap={4}>
          <GridItem colSpan={2}>
            <Reaction />
          </GridItem>
          <GridItem colSpan={11}>
            <ContentBody />
          </GridItem>
          <GridItem colSpan={5} position="relative">
            {/* <AsideProfile /> */}
            <AsideSimilarPost />
            <AsideAds mt={4} />
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default React.memo(PagePost);
