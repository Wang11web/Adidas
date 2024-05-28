function init(){
  window.onload = ()=>{
    TweenMax.to(`.breathe_light`,1,{opacity: 0.3, yoyo: true, repeat: -1});
  }

  let click = false;
  document.getElementById('download').addEventListener('click',()=>{
    if(!click) {
      click = true;
      TweenMax.to(`.download_btn`,0.2,{scale: 0.8, ease: Power0.easeNone});
      TweenMax.to(`.download_btn`,0.2,{scale: 1, delay: 0.2, ease: Power0.easeNone});
      setTimeout(()=>{
        const videoBlob = new Blob([vblob], { type: 'video/mp4' });
        navigator.share({
          title: 'adidasZNE',
          files: [
            new File([videoBlob],"adidasZNEugc.mp4",{
              type: "video/mp4"
            })
          ]
        })
          
        click = false;
      },400)
    }
    
  })

  document.getElementById('copy').addEventListener('click',()=>{
    if(!click) {
      click = true;
      TweenMax.to(`.copy_btn`,0.2,{scale: 0.8, ease: Power0.easeNone});
      TweenMax.to(`.copy_btn`,0.2,{scale: 1, delay: 0.2, ease: Power0.easeNone});
      setTimeout(()=>{
        var textarea = document.createElement("textarea");
        textarea.value = '#adidasTaiwan #ZNE只管投入\n#ZNELab #創造專屬互動光影';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        const copyBG = document.getElementById('copyBG');
        copyBG.style.display = 'flex';
        setTimeout(()=>{
          copyBG.style.display = 'none';
        },2000)
        click = false;
      },400)
    }
  })
}
