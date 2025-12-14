const musicList=document.getElementById('musicList');
const tracks=JSON.parse(localStorage.getItem('tracks')||'[]');
tracks.forEach(t=>{
musicList.innerHTML+=`<div class='card'><h3>${t.title}</h3><audio controls src='${t.url}'></audio></div>`;
});