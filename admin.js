function uploadTrack(){
const title=document.getElementById('title').value;
const file=document.getElementById('file').files[0];
const reader=new FileReader();
reader.onload=()=>{
const tracks=JSON.parse(localStorage.getItem('tracks')||'[]');
tracks.push({title,url:reader.result});
localStorage.setItem('tracks',JSON.stringify(tracks));
alert('Uploaded');
};
reader.readAsDataURL(file);
}