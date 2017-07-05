
let array = [];

const fs = require('fs');

function revert (path, mode) {
	if (fs.existsSync(path)) {
		new Promise((resolve, reject) => {
			resolve();
		}).then(() => {
			walk(path);
		}).then(() => {
			cleanPath(array, mode);
		});
	};
}

module.exports = {
	revert
};



function walk (dir) {
	let files = fs.readdirSync(dir);
	files.forEach((value) => {
		let newPath = dir + "/" + value;
		let tempStats = fs.lstatSync(newPath);
		if (tempStats.isDirectory()) {
			walk(newPath);
		}
		else {
			array.push(newPath);
		}
	});
	
}

function cleanPath (pathList, mode) {
	pathList.forEach((path, index, arr) => {
		if (/\.(html|css)$/.test(path)) {
			console.log(path);
			fs.readFile(path, 'utf8', (err, data) => {
				resertHTML(path, data, mode);
			});
		}
	});
}

function resertHTML (path, data, mode) {
	if (mode == "add") {
		var exp = /((?:['"])|(?:url\())(\/)(.*\.(?:css|png|jpg|js|gif|ico|eot|svg|ttf|woff).*['")])/g;
		data = data.replace(exp, "$1" + "/public/" + "$3");
	}
	else if (mode == "slim") {
		var exp = /((?:['"])|(?:url\())(\/public\/)(.*\.(?:css|png|jpg|js|gif|ico|eot|svg|ttf|woff).*['")])/g;
		data = data.replace(exp, "$1" + "/" + "$3");
	}
	
	fs.writeFile(path, data, "utf8", (err) => {
		if (err) throw err;
	});
}
