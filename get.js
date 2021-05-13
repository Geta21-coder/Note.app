function getNoteId() {
    let getNoteObject = getExistingNotes()
    if(!getNoteObject){
        return 1
    }
     const keysArray = Object.keys(getNoteObject) 
     const numberkeys = keysArray.map((key)=>Number(key))
     console.log(numberkeys)
     return Math.max(...numberkeys) + 1 
    }
  
    function getExistingNotes() {
        let notes = localstorage.getItem('notes')
        if(!notes){
            return null
        }
      return JSON.parse(notes)
    }
    