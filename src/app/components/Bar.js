import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { useTheme } from '@material-ui/core/styles'

export const Bar = props => {
  const theme = useTheme()

  const data = [
    {
      name: 'input',
      [props.factor]: props.input
    }
  ]

  const output = {
    name: 'output',
    [props.factor]: props.output
  }

  if (props.output) {
    data.push(output)
  }

  console.log(theme)

  return (
    <div style={{ height: 200, width: 100 }}>
      <ResponsiveBar
        data={data}
        indexBy="name"
        keys={[props.factor]}
        margin={{ top: 10, right: 0, bottom: 50, left: 0 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: false }}
        colors={{ scheme: 'paired' }}
        colorBy="indexValue"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: props.factor.toUpperCase() + ' [' + props.unit + ']',
          legendPosition: 'middle',
          legendOffset: 40
        }}
        enableGridY={false}
        animate={true}
        motionStiffness={115}
        motionDamping={15}
      />
    </div>
  )
}