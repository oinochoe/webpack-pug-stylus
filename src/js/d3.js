'use strict';

window.addEventListener('DOMContentLoaded', () => {
    // d3 library
    const { d3 } = window;

    const POINTS = [
        [0, 0],
        [5, -5],
        [10, 0],
        [15, 5],
        [20, 0],
    ];

    const CONTAINER = document.querySelector('.container');
    const PADDING = 40;

    // assignPath
    const assignPath = () => {
        const { height: size } = CONTAINER.getBoundingClientRect();

        // Create an X scale
        const xScale = d3
            .scaleLinear()
            .domain([0, 20])
            .range([PADDING, size - PADDING]);

        // Create an Y scale
        const yScale = d3
            .scaleLinear()
            .domain([-5, 5])
            .range([PADDING, size - PADDING]);

        // Map the POINTS using our scales
        const SCALED_POINTS = POINTS.map((POINT) => [xScale(POINT[0]), yScale(POINT[1])]);

        //Generate PATH string with our points
        const LINE = d3.line().curve(d3.curveBasis)(SCALED_POINTS);

        d3.select('svg').attr('viewBox', `0 0 ${size} ${size}`);
        d3.select('path').attr('d', `${LINE}`);
        // Assign path to animated element
        document.querySelector('.element').style.setProperty('--path', `"${LINE}"`);
    };

    assignPath();

    window.addEventListener('resize', assignPath);
});
