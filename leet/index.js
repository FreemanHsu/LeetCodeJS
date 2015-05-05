var fs=require('fs');
var path=require('path');

var dirPath = path.resolve(__dirname);
var statusPath = path.join(dirPath, 'status.json');
var leetDictPath = path.join(dirPath, 'leetDict.json');
var templatePath = path.join(dirPath, 'testTemplate.js');
var status_str = fs.readFileSync(statusPath,{
	encoding: 'utf8'
});
var leetDict_str = fs.readFileSync(leetDictPath,{
	encoding: 'utf8'
});
var status = JSON.parse(status_str);
var leetDict = JSON.parse(leetDict_str);

if (status.current == 189){
	console.log("Wow, you've finished LeetCode!");
}
else{
	status.current = status.current + 1;
	var leet = leetDict[status.current];
	var problemPath = path.join(dirPath, '../problems');
	var name = leet.name.split(' ');
	var id = leet.id;
	if (id<10){
		id='00'+id;
	}
	else if(id<100){
		id='0'+id;
	}
	name.unshift(id);
	var dirName = name.join('-');
	var newDirPath = path.join(problemPath, dirName);
	fs.mkdirSync(newDirPath);
	console.log('Directory ' + newDirPath + ' has been created.');
	var fileNames = ['index.js', 'input', 'output'];
	for (var item in fileNames){
		fs.writeFileSync(path.join(newDirPath, fileNames[item]),'', {
			encoding: 'utf8'
		});
		console.log('File ' + fileNames[item] + ' has been created.');
	}
	var template = fs.readFileSync(templatePath, {
		encoding: 'utf8'
	});
	fs.writeFileSync(path.join(newDirPath, 'test.js'), template,{
		encoding: 'utf8'
	});
	console.log('File test.js has been created.');
	fs.writeFileSync(statusPath, JSON.stringify(status), {
		encoding: 'utf8'
	});
	console.log("Let's Leet!");
}