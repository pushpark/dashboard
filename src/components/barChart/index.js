
  import React, {useRef} from 'react';
  import * as d3 from 'd3';
  import './index.css'
  
  const FollowersComparisonChart = (props) => {
    const {usersData}=props
    const svgRef = useRef();
     const data = usersData.map(user => ({
            fullName: user.userId,
            followers: user.followersCount,
            following: user.followingCount,
          }))
          d3.select(svgRef.current).selectAll('*').remove();
          // D3.js code to create a grouped bar chart
          const margin = { top: 40, right: 30, bottom:100, left: 60 };
          const width =320- margin.left - margin.right;
          const height =300 - margin.top - margin.bottom;
  
          const svg = d3.select(svgRef.current)
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);
  
          const x0 = d3.scaleBand()
            .domain(data.map(d => d.fullName))
            .rangeRound([0, width])
            .paddingInner(0.1);
  
          const x1 = d3.scaleBand()
            .domain(['followers', 'following'])
            .rangeRound([0, x0.bandwidth()])
            .padding(0.05);
  
          const y = d3.scaleLinear()
            .domain([0, d3.max(data, d => Math.max(d.followers, d.following))])
            .nice()
            .range([height, 0]);
  
          const color = d3.scaleOrdinal()
            .range(['steelblue', 'orange']);
  
          svg.append('g')
            .selectAll('g')
            .data(data)
            .enter().append('g')
            .attr('transform', d => `translate(${x0(d.fullName)},0)`)
            .selectAll('rect')
            .data(d => ['followers', 'following'].map(key => ({ key, value: d[key] })))
            .enter().append('rect')
            .attr('x', d => x1(d.key))
            .attr('y', d => y(d.value))
            .attr('width', x1.bandwidth())
            .attr('height', d => height - y(d.value))
            .attr('fill', d => color(d.key));
  
          svg.append('g')
            .attr('class', 'axis')
            .attr('transform', `translate(0,${height})`)
            .call(d3.axisBottom(x0));
  
          svg.append('g')
            .attr('class', 'axis')
            .call(d3.axisLeft(y));

          // Adding main title
          svg.append('text')
            .attr('x', width / 2)
            .attr('y', -20)
            .attr('text-anchor', 'middle')
            .style('font-size', '14px')
            .style('font-weight', 500)
            .text('Followers & Following Comparison');

          // Adding x-axis label
          svg.append('text')
            .attr('x', width / 2)
            .attr('y', height + 30)
            .attr('text-anchor', 'middle')
            .style('font-size', '12px')
            .text('User Ids');

          // Adding y-axis label
          svg.append('text')
            .attr('transform', 'rotate(-90)')
            .attr('x', -height / 2)
            .attr('y', -margin.left + 20)
            .attr('text-anchor', 'middle')
            .style('font-size', '12px')
            .text('Count');
        
          svg.append('g')
            .attr('class', 'legend')
            .selectAll('rect')
            .data(['followers', 'following'])
            .enter().append('rect')
            .attr('x', (d, i) => 20 + i * 100)
            .attr('y', height +40)
            .attr('width', 20)
            .attr('height', 20)
            .attr('fill', d => color(d));
      
          svg.select('.legend')
            .selectAll('text')
            .data(['Followers', 'Following'])
            .enter().append('text')
            .attr('x', (d, i) => 50 + i * 100)
            .attr('y', height+55)
            .text(d => d)
            .attr('fill', 'black');
  
    return (
      <svg ref={svgRef} ></svg>
    );
  };
  
  export default FollowersComparisonChart;