export default function getState(){
    const getTeam = document.getElementById('select').value
    const session = sessionStorage.setItem('new', getTeam)
    console.log(sessionStorage.getItem('new'))
}
