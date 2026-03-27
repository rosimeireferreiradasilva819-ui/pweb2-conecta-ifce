const KEY_TOKEN = 'access_ token'

function setAccessToken(token: string){
  localStorage.setItem(KEY_TOKEN, token)
}

function getAccessToken(){
  localStorage.gettItem(KEY_TOKEN)
}

function clearAccessToken(){
  localStorage.removetItem(KEY_TOKEN)
}
export {
  setAccessToken,
  getAccessToken,
  clearAccessToken
}
