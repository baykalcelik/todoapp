import './loadingscreen.css';



function LoadingScreen() {
  return (
    <div className='loadingscreenCover'>
        <p className='lsheader'>Please Wait !</p>
        <div className='loadingSpinner'></div>
    </div>
  )
}

export default LoadingScreen