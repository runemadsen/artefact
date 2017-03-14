export function makeOptions(array){
  return array.map((v,i)=>{return { label: v, value: v } });
}