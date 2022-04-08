import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { colors, useTheme } from '@material-ui/core';

const DoughnutSales = () => {
    const theme = useTheme();

    const data = {
        datasets: [
            {
                data: [63, 15, 22],
                backgroundColor: [
                    colors.indigo[500],
                    colors.red[600],
                    colors.orange[600]
                ],
                borderWidth: 8,
                borderColor: colors.common.white,
                hoverBorderColor: colors.common.white
            }
        ],
        labels: ['Desktop', 'Tablet', 'Mobile']
    };

    const options = {
        animation: false,
        cutoutPercentage: 80,
        layout: { padding: 0 },
        legend: {
            display: false
        },
        maintainAspectRatio: false,
        responsive: true,
        tooltips: {
            backgroundColor: theme.palette.background.paper,
            bodyFontColor: theme.palette.text.secondary,
            borderColor: theme.palette.divider,
            borderWidth: 1,
            enabled: true,
            footerFontColor: theme.palette.text.secondary,
            intersect: false,
            mode: 'index',
            titleFontColor: theme.palette.text.primary
        }
    };
    return (
            <Doughnut
                data={data}
                options={options}
            />
    )
}

export default DoughnutSales
