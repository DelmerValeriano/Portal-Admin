import React from 'react'
import { Box, CardContent, Divider, CardHeader, Card } from '@material-ui/core';
import { Bar, Button } from '../../atoms';

const CardContentSales = () => {
    return (
        <Card>
            <CardHeader
                action={(
                    <Button size={"small"} variant={"text"} textSales={"Ultimo 7 dias"} />
                )}
                title="Ultimas ventas"
            />
            <Divider />
            <CardContent>
                <Box
                    sx={{
                        height: 330,
                        position: 'relative'
                    }}
                >
                    <Bar />
                </Box>
            </CardContent>
            <Divider />
        </Card>
    )
}

export default CardContentSales
