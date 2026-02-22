import { useState } from "react"




 function Square({last,setLast,nb,arr,setArr,fini,setFini}:{last: string, setLast: React.Dispatch<React.SetStateAction<string>>, nb:number, arr:Map<number,string>,setArr:React.Dispatch<React.SetStateAction<Map<number,string>>>, fini:string, setFini :React.Dispatch<React.SetStateAction<string>>}) {

    function handleClick(){

    if(fini==''){
      if(last=='O'){
          setLast('X');
          arr.set(nb, 'X');
          setArr(new Map(arr));
          if(gagner(arr)){
          setFini('X');
          }
          if(arr.size ==9) setFini("personne");
        }else{
          setLast('O');
          arr.set(nb, 'O');
          setArr(new Map(arr));
          if(gagner(arr)){
          setFini('O');
          }
          if(arr.size ==9) setFini("personne");
        }

        

    }

    };

    return (
      <>
        
          <button className={`h-16 w-16 border border-white font-bold  ${arr.get(nb)==='O' ? "text-blue-300" : "text-red-300"}`} onClick={handleClick} key={nb}>{arr.get(nb)}</button>
      </>
    )
  }

  function gagner(arr:Map<number,string>): boolean{
  const gainArr = [
  [0,1,2],
  [3,4,5], 
  [6,7,8], 
  [0,3,6], 
  [1,4,7], 
  [2,5,8], 
  [6,4,2], 
  [0,4,8],
  ];

  let flag = false;

  gainArr.forEach(e => {

    if(arr.get(e[0]) == arr.get(e[1]) && arr.get(e[1]) == arr.get(e[2]) && arr.get(e[0])!=undefined){
      console.log("Gagné ! Joueur  : " + arr.get(e[1]));
      flag= true;
    }

    
  });

  return flag;

}

function RestartGame({setLast,setFini,setArr}:{setLast:React.Dispatch<React.SetStateAction<string>>,setFini:React.Dispatch<React.SetStateAction<string>>, setArr:React.Dispatch<React.SetStateAction<Map<number,string>>>}){

  function handleClick(){
    setLast('');
    setFini('');
    setArr(new Map<number,string>);
  }

  return( 
  <>

  <button className="bg-blue-400 text-white rounded-2xl py-2 px-3 m-4" onClick={handleClick}>Restart Game 🥲</button>
  
  </>
  )

}

function App() {

  const [last,setLast] = useState<string>('');
  const [fini,setFini] = useState<string>('');
  const [arr,setArr] = useState<Map<number,string>>(new Map<number,string>());

  return (
    <main className='flex flex-col min-h-screen items-center justify-center bg-violet-950'>
      <h1 className="text-[3rem] font-bold text-white"><span className="text-blue-300">Tic</span> <span className="text-red-300">Tac</span> Toe</h1>
      <section className='flex flex-col items-center justify-center rounded-lg  p-2 shadow-2xl p-4 min-w-[25rem]'>
        <div className="flex flex-col">
      <div className='flex'>
        <Square  last={last} setLast={setLast} nb={0} arr={arr} setArr={setArr} fini={fini} setFini={setFini}/>
        <Square  last={last} setLast={setLast} nb={1} arr={arr} setArr={setArr} fini={fini} setFini={setFini}/>
        <Square  last={last} setLast={setLast} nb={2} arr={arr} setArr={setArr} fini={fini} setFini={setFini}/>
      </div>
      <div className='flex '>
        <Square last={last} setLast={setLast} nb={3} arr={arr} setArr={setArr} fini={fini} setFini={setFini}/>
        <Square last={last} setLast={setLast} nb={4} arr={arr} setArr={setArr} fini={fini} setFini={setFini}/>
        <Square last={last} setLast={setLast} nb={5} arr={arr} setArr={setArr} fini={fini} setFini={setFini}/>
      </div>
      <div className='flex '>
        <Square last={last} setLast={setLast} nb={6} arr={arr} setArr={setArr} fini={fini} setFini={setFini}/>
        <Square last={last} setLast={setLast} nb={7} arr={arr} setArr={setArr} fini={fini} setFini={setFini}/>
        <Square last={last} setLast={setLast} nb={8} arr={arr} setArr={setArr} fini={fini} setFini={setFini}/>
      </div>
    </div>

    {fini &&  <p className="m-4 text-white">La partie est terminée ! Gagnant : {fini}</p> } 

    <RestartGame setLast={setLast} setFini={setFini} setArr={setArr} />

      </section>
    </main>
  )
}



export default App
