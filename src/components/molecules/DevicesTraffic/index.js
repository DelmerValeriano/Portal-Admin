import React from 'react'
import { colors, Box, Typography } from '@material-ui/core';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import TabletIcon from '@material-ui/icons/Tablet';
const Trafic = () => {
    const devices = [
        {
            title: 'Desktop',
            value: 63,
            icon: LaptopMacIcon,
            color: colors.indigo[500]
        },
        {
            title: 'Tablet',
            value: 15,
            icon: TabletIcon,
            color: colors.red[600]
        }
    ];
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                pt: 2
            }}
        >
            {devices.map(({
                color,
                icon: Icon,
                title,
                value
            }) => (
                <Box
                    key={title}
                    sx={{
                        p: 1,
                        textAlign: 'center'
                    }}
                >
                    <Icon color="action" />
                    <Typography
                        color="textPrimary"
                        variant="body1"
                    >
                        {title}
                    </Typography>
                    <Typography
                        style={{ color }}
                        variant="h2"
                    >
                        {value}
                        %
                    </Typography>
                </Box>
            ))}
        </Box>
    )
}

export default Trafic
