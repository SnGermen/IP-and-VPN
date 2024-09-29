addEventListener("load", event => {
  fetchData()
})

async function fetchData() {

  const userIP = await fetch("https://api.ipify.org?format=json")
    .then(response => response.json())
    .then(result => result)
    .catch(err => console.error("Couldn't see IP address", err))

  const userInfo = await fetch(`http://ip-api.com/json/${userIP.ip}?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,proxy,hosting,query`)
    .then(response => response.json())
    .then(result => result)
    .catch(err => console.log(err))

  const root = document.getElementById("root");

  if (userInfo.proxy) {
    root.innerHTML += `YOU USE VPN 🌐🌐🌐 YOU ARE FROM ${userInfo.countryCode}<br>`;
  } else {
    root.innerHTML += `You are not using a VPN 😒<br>`;
  }

  root.innerHTML += `Your IP is ${userIP.ip}<br>`


}

