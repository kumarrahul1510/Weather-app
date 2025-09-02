import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import './Weather.css';
import { green } from '@mui/material/colors';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function InfoBox({info}){
    const INIT_IMG_URL="https://media.istockphoto.com/id/1322717990/photo/thick-dark-black-heavy-storm-clouds-covered-summer-sunset-sky-horizon-gale-speed-wind-blowing.webp?a=1&b=1&s=612x612&w=0&k=20&c=W2-dXNrzqf1Lgo-xL5UYWsvM3q9EzqqpOCWhgC_cklk="
    const RAINY_URL="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sw_CRZcGopaGHDWqtT1M8y64k5uCcq-nro55Bw3YzyQ="
    const HOT_URL="https://media.istockphoto.com/id/1323823418/photo/low-angle-view-thermometer-on-blue-sky-with-sun-shining.webp?a=1&b=1&s=612x612&w=0&k=20&c=JfCdjP7brx9oUlLT6TIx9OTtEgvEGNpxDcDFqEz0Fo0="
    const COLD_URL="https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
    return(
        <div className="WeatherInformation">
        <h1 style={{color:"green"}}>Weather Information</h1>
        <div className='Weather'>
         <Card sx={{ maxWidth: 345 }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={
            info.humidity>80
            ?RAINY_URL
            :info.temp>25
            ?HOT_URL
            :COLD_URL
          }
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city} {
            info.humidity>80
            ? <ThunderstormIcon/>
            :info.temp>25
            ?<SunnyIcon/>
            :<AcUnitIcon/>
          }
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <p>Temperature={info.temp}&deg;C</p>
            <p>Min Temp={info.tempMIn}&deg;C</p>
            <p>Temperature={info.tempMax}&deg;C</p>
            <p>Humidity={info.humidity}</p>
            <p>The weather can be describes as {info.weather} and feels like {info.feelsLike}&deg;C</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
        </div>
    )
}