import './spinner.sass'

const Spinner = ({selectorId = 'preloader'}) => {
  return (
    <div id={selectorId}>
      <div id='loader'></div>
    </div>
  )
}

export default Spinner;