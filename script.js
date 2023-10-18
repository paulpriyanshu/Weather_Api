const button=document.getElementById("search_button")
const input= document.getElementById("city_input")
const city_name= document.getElementById("city-name")
const city_time= document.getElementById("city-time")
const city_temp= document.getElementById("city-temp")

async function getdata(cityname){
    const weather= await fetch(`http://api.weatherapi.com/v1/current.json?key=6e9cf1a3f144498d8d5180456232509 &q=${cityname}&aqi=yes`)

    return  await weather.json()
}



button.addEventListener("click",async()=>{
    const value=input.value;
    const result = await getdata(value)
    console.log(result)
    city_name.innerText =`${result.location.name},${result.location.region} - ${result.location.country}`
    city_time.innerText = `${result.location.localtime}`
    city_temp.innerText= `${result.current.temp_c}°C`
    
})
