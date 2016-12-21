import Color from 'color'

export const hyperlineFactory = (React) => {
  const HyperLine = ({ fontFamily, colors, plugins, background}) => {
    const lineStyle = {
      display: 'flex',
      alignItems: 'center',
      position: 'absolute',
      overflow: 'hidden',
      left: 1,
      bottom: 1,
      width: 'calc(100% - 2px)',
      height: '18px',
      font: 'bold 12px Monospace',
      pointerEvents: 'none',
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
      fontFamily,
      background: background || Color(colors.black).darken(0.1).hslString()
    }

    return (
      <div style={lineStyle}>
        {plugins.map((item, index) => {
          const Plugin = item.componentFactory(React, colors)
          return <Plugin key={index} options={item.options} />
        })}
      </div>
    )
  }

  HyperLine.propTypes = {
    fontFamily: React.PropTypes.string.isRequired,
    colors: React.PropTypes.object.isRequired,
    plugins: React.PropTypes.array.isRequired,
    background: React.PropTypes.string
  }

  return HyperLine
}
