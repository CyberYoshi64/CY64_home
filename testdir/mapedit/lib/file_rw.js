var fileData
var reader
var fileStr$=""

function loadFileAsBuf(x){
		reader=new FileReader();
		reader.onload=function(){
			fileData=new Uint8Array(reader.result)
			fileStr$=hexout(fileData)
		}
		reader.readAsArrayBuffer(x.files[0]);

		reader.onerror= function() {
			alert(reader.error.toString()+"\n\nIs that, what you dropped in, a file?")
		}
}

function loadFileAsTxt(x){
		reader=new FileReader();
		reader.onload=function(z){
			fileStr$=reader.result
		}
		reader.readAsText(x.files[0]);

		if (reader.error != null){
			alert(reader.error.toString()+"\n\nIs that, what you dropped in, a file?")
		}
}
function hexout(arr){
	var out="",val
	for(var i=0; i<arr.length; i++){
		val=arr[i]
		out += unshifts$(val.toString(16),"0",2)+" "
	}
	return out
}
function unshifts$(s,x,t) {
	s=s.toString()
	x=x.toString()
	while (s.length<t) {
		s=x+s
	}
	return s;
}
function dataDownload(data, type="text/plain") {
	const a = document.createElement("a");
	a.style.display = "none";
	document.body.appendChild(a);
	a.href = window.URL.createObjectURL(
		new Blob([data], { type })
	);
	a.setAttribute("download","Download");
	a.click();
	window.URL.revokeObjectURL(a.href);
	document.body.removeChild(a);
}
function downloadCanvas(){
	saveCanvas("Download","png")
}

/* function intpg(){
	document.getElementById("i0").setAttribute("style","opacity: 1;")
}
function detpg(){
	document.getElementById("i0").setAttribute("style","opacity: 0;")
} */
