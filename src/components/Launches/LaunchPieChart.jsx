'use client'
import React from 'react';
import dynamic from 'next/dynamic';
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false, })

const LaunchPieChart = ({ totalLaunches, successfulLaunches, failedLaunches }) => {
    const data = [
        {
            labels: ['Successful Launches', 'Failed Launches'],
            values: [successfulLaunches, failedLaunches],
            type: 'pie',
            marker: {
                colors: ['#000', '#eee'],
            },
            hoverinfo: 'label+percent',
        },
    ];

    const layout = {
        title: {
            text: 'Launch Statistics',
            font: {
                size: 24,
            },
        },
        showlegend: true,
        responsive: true,
    };

    return (
        <div className="flex bg-white">
            <div className="flex flex-col-reverse justify-center w-full h-full">
                <Plot data={data} layout={layout} className='h-[500px] w-[500px]'/>
                <div className="text-center bg-white">
                    <p className="text-black">Successful Launches: {successfulLaunches}</p>
                    <p className="text-gray-200">Failed Launches: {failedLaunches}</p>
                    <p>Total Launches: {totalLaunches}</p>
                </div>
            </div>
        </div>
    );
};

export default LaunchPieChart;
