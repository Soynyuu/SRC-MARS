'use client';

import React, { useState, useEffect } from 'react';
import { Input } from "@nextui-org/react";
import localfont from "@next/font/local";

const DynamicSVGStationName = () => {
    const [stationName, setStationName] = useState('');
    const [originalSvgContent, setOriginalSvgContent] = useState('');
    const [updatedSvgContent, setUpdatedSvgContent] = useState('');

    useEffect(() => {
        // Load the SVG file
        fetch('/logo.svg')
            .then(response => response.text())
            .then(svg => {
                setOriginalSvgContent(svg);
                setUpdatedSvgContent(svg); // Set the initial SVG content
            });
    }, []);

    useEffect(() => {
        if (originalSvgContent) {
            // Replace station name in SVG content
            const newSvgContent = originalSvgContent.replace(/{{STATION_NAME}}/g, stationName || 'ここに反映されます');
            setUpdatedSvgContent(newSvgContent);
        }
    }, [stationName, originalSvgContent]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStationName(e.target.value);
    };

    return (
        <div className="flex flex-col items-center space-y-4">
            <Input
                type="text"
                label="駅名"
                placeholder="駅名を入力してください"
                value={stationName}
                onChange={handleInputChange}
            />
            <div dangerouslySetInnerHTML={{ __html: updatedSvgContent }} />
        </div>
    );
};

export default DynamicSVGStationName;
