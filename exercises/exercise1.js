/*
*
* */

// foo/
// bar/
// Bye.txt -> “a”
// 			 Hello.text -> “a”
// 			Yes.txt -> “b”
// No.txt -> “b”
const directory = 'foo/bar/bye.txt';

// repeated = new Set()
// results = []

// List files and
function test(path) {
  /*
  files = listFiles(path);
  dirQueues = new Queue(); // push & pop
  for(i =0 < i<files.length; i++){
    dirQueues.push(files[i])
  }

  while(dirQ.size!=0){
    element = dirQueue.pop()
    if(!isFile(element){
      dirQ.push(listFiles(element));
    } else {

    // repeated: [{sha256('a'): [files[1], files[2]]}, {sha256('b'): [files[2]]}]
    if(repeated.contains(sha256(readFile(element)))){
      size = getFileMetadata(element);
      const existingFile = repeated.getElement(sha256(readFile(element))))
      equals = true;
      for(let j=0;j<size; j+=1000){
        if(sha256(readFile(element)) !== sha256(readFile(existingFile))){
          equals = false;
        }
      }
      if(!equals) {
        repeated.push(readFile(element))
      } else {
        repeated.sha256(element) = [...repeated.sha256(element), element]
      }
    } else {
      repeated.push(readFile(element))
    }

    repeated.find(r => r.readFile(element) === readFile(element)) ?
    r.readFile(element).push(element) : r.readFile(element) = [element]
    }
  }

    for(i=0 i<repeated.length;i++) {
      results.push(repeated[i])
    }
    return results;

  */
}

console.log(test()); //
