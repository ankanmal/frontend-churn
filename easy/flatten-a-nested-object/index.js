const flattenObj = (obj)=>{
  let returnObj={}
  for(let i in obj){
    if( !obj.hasOwnProperty(i)) continue;

    if (typeof(obj[i]) === 'object') {
        let flatObject = flattenObj(obj[i])

        for (const key in flatObject) {
          if (!flatObject.hasOwnProperty(key)) continue;

          returnObj[i+'.'+key]=flatObject[key]
        }
    } else {
      returnObj[i]=obj[i];
    }
  }
  return returnObj
}

const input = {
  name: 'Manu',
  age: 21,
  characteristics: {
    height: '6 feet',
    complexion: 'dark',
    hair: 'black',
  },
  techStack: {
    language: 'Javascript',
    framework: {
      name: 'Nextjs',
      version: '12',
    },
  },
};
const result =flattenObj(input)
console.log(result)