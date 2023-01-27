import React from "react";

import { ResponsivePie } from "@nivo/pie";
import { Card, CardBody } from "@chakra-ui/react";

const TestChart = () => {
  const data = [
    {
      id: "erlang",
      label: "erlang",
      value: 109,
      color: "hsl(53, 70%, 50%)",
    },
    {
      id: "rust",
      label: "rust",
      value: 332,
      color: "hsl(259, 70%, 50%)",
    },
    {
      id: "sass",
      label: "sass",
      value: 95,
      color: "hsl(120, 70%, 50%)",
    },
    {
      id: "stylus",
      label: "stylus",
      value: 267,
      color: "hsl(307, 70%, 50%)",
    },
    {
      id: "hack",
      label: "hack",
      value: 433,
      color: "hsl(101, 70%, 50%)",
    },
  ];

  return (
    <Card w="100" h="300">
      <CardBody>
        <ResponsivePie
          data={data}
          margin={{ top: 40, right: 0, bottom: 80, left: 0 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          borderColor={{
            from: "color",
            modifiers: [["darker", 0.2]],
          }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#333333"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{
            from: "color",
            modifiers: [["darker", 2]],
          }}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          fill={[
            {
              match: {
                id: "ruby",
              },
              id: "dots",
            },
            {
              match: {
                id: "c",
              },
              id: "dots",
            },
            {
              match: {
                id: "go",
              },
              id: "dots",
            },
            {
              match: {
                id: "python",
              },
              id: "dots",
            },
            {
              match: {
                id: "scala",
              },
              id: "lines",
            },
            {
              match: {
                id: "lisp",
              },
              id: "lines",
            },
            {
              match: {
                id: "elixir",
              },
              id: "lines",
            },
            {
              match: {
                id: "javascript",
              },
              id: "lines",
            },
          ]}
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              justify: false,
              translateX: 0,
              translateY: 56,
              itemsSpacing: 0,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: "#999",
              itemDirection: "left-to-right",
              itemOpacity: 1,
              symbolSize: 18,
              symbolShape: "circle",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#000",
                  },
                },
              ],
            },
          ]}
        />
      </CardBody>
    </Card>
  );
};

export default TestChart;
