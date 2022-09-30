const ControlItem = (props) => {

  console.log(`Name: ${props.name} active: ${props.isActive}`)

  // Manipulate the green circles based on what we are viewing.
  let activeNotActiveColor = ['#2CB67D', '#185A3F'];
  let activeNotActiveSize = ['20px', '15px'];

  let getCircleProperties = () => {
    if (props.isActive) {
      return [activeNotActiveColor[0], activeNotActiveSize[0]];
    } else {
      return [activeNotActiveColor[1], activeNotActiveSize[1]];
    }
  }
  
  let circleProps = getCircleProperties();
  
  return (
    <div>
      <ul className='controlUL'>
        <li className='controlLI'>
          <p className='ControlLabel'>{props.name}</p>
        </li>
        <li className='controlLI'>
          <div className='ControlCircle' style={{
            backgroundColor: circleProps[0],
            width: circleProps[1],
            height: circleProps[1] 
          }}></div>
        </li>
      </ul>
    </div>
  )
}

export default ControlItem;
