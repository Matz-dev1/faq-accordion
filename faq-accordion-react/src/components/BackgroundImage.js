import backgroundImg from '../assets/images/background-pattern-desktop.svg';

function Background(){
  return (
    <div style={{
      zIndex: -1, 
      position: 'fixed', 
      width: '100%', 
      top: 0,
      left: 0,
      height: '40%'
    }}>
      <img 
        src={backgroundImg} 
        style={{
          width: '100%', 
          height: '100%', 
          objectFit: 'cover'
        }} 
        alt="background pattern" 
      />
    </div>
  )
}

export default Background;