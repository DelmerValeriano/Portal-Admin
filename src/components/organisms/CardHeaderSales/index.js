import React from 'react'
import { Box, Card } from '@material-ui/core';
import CardContentSales from '../../molecules/CardContent';

const CardHead = (props) => {
    return (
        <Card {...props}>
            <CardContentSales />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    p: 2
                }}
            >
            </Box>
        </Card>
    )
}

export default CardHead
