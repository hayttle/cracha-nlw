// const socialLinks = document.querySelectorAll('#socialLinks')
// console.log(socialLinks[0].children)

const linksSocialMedia = {
  github: 'hayttle',
  youtube: 'hayttle',
  facebook: 'hayttle',
  instagram: 'hayttle',
  twitter: 'hayttle'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGithubInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.userName
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGithubInfos()
