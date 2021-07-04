import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

export function LoadMore(props) {
    const { loadMore } = props
    return (
        <Box textAlign='center' p={3}>
            <Button onClick={loadMore} variant='contained'>
                Load More
            </Button>
        </Box>
    );
}

export function NoResult() {
    return (
        <div>
            We're sorry. We cannot find any matches for your search term.
        </div>
    );
}

export function EndOfResult() {
    return (
        <Box textAlign='center' p={3}>
             End of result
        </Box>
    );
}

