const container = document.querySelector('.container')
const nameKeys=['C','D','E','F','G','A','B','C','D','E','F','G','A','B']
const synth = new Tone.Synth().toDestination();

function createKeys(){
    for(let i=0;i<nameKeys.length;i++){
    const keysWhite=document.createElement('div')
    keysWhite.classList.add('white')
    keysWhite.setAttribute('onmousedown','noteDown(this)')
    keysWhite.innerText=nameKeys[i]
    container.append(keysWhite)
    }
    for(let j=0;j<13;j++){
        const keysBlack=document.createElement('div')
        keysBlack.classList.add('black')
        keysBlack.innerText=nameKeys[j]
        keysBlack.setAttribute('onmousedown','noteBlack(this)')
        if(j===2||j===6||j===9){
            keysBlack.style.display='none'
        }
        if(j>0){
            keysBlack.style.left=`${35+50*(j)}px`
        }
        else{
            keysBlack.style.left=`35px`
        }
       
        container.append(keysBlack)
        }

}
createKeys()

function noteDown(elem){
    let note=elem.innerText+'4'
    synth.triggerAttackRelease(note, "16n")
    
}
function noteBlack(elem){
    let noteBlack=elem.innerText+'5'
    synth.triggerAttackRelease(noteBlack, "16n")
   
}
let song=[]

const text = document.querySelector('#text')
function odczyt(){
    x=(text.value) 
   song=  x.split('')

       }
 

let start=0
document.querySelector('button').addEventListener('click',()=>{

 const rhythm =   setInterval(autoPlay,250)
 
function autoPlay(){
    
    if(start>=song.length){

        clearInterval(rhythm);
        start=0
     }
     else{
            synth.triggerAttackRelease(song[start]+4, "16n")
            start++
           
     }
       
    }

})

