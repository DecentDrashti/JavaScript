const path=require('path')
console.log(path.normalize('/foo.././abc./.'))
console.log(path.join('/foo','/abc'))
console.log(path.resolve('Drashti','D.'))
console.log(path.relative('Drashti','R'))
console.log(path.dirname('/Drashti./ruparelia.txt'))
console.log(path.basename('/d.txt'))
console.log(path.extname('r.drashti'))