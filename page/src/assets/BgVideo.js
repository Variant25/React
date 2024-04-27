import Video from '../video/cyber.mp4'

function BgVideo() {
  return (
    
   <div >
    <video autoPlay loop muted className="bg-vid">
  <source src={Video} type="video/mp4" />
    </video>
</div>
      
      

     
    
  );
}

export default BgVideo;