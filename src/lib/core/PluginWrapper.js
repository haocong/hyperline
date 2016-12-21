export default (React) => {
  const PluginWrapper = ({
    color,
    children
  }) => {
    let style = {
      display: 'flex',
      flexShrink: '0',
      alignItems: 'center',
      paddingLeft: '7px',
      paddingRight: '7px',
      paddingBottom: '5px',
      borderLeft: '0px',
      borderTop: '0px',
      borderRight: '0px',
      borderBottom: '0px',
      borderStyle: 'solid',
      borderColor: 'rgba(255, 255, 255, .2)',
    }

    if (color) {
      style.color = color
    }

    return (
      <div style={style}>
        {children}
      </div>
    )
  }

  PluginWrapper.propTypes = {
    color: React.PropTypes.string,
    children: React.PropTypes.any
  }

  return PluginWrapper
}
