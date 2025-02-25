import logo from './logo.svg';
import './App.css';

function App() {

  const data={};
  data["Name"]="Parm"
  data["qwerty[poiuyt"]=21

  console.log(data)

  console.log(data.Name)
  console.log(data['Name'])

  let image={
    beauty: "https://th.bing.com/th/id/OIP.sgEPnH_2ojDLdUEQvk1ykwHaJF?rs=1&pid=ImgDetMain",
  fragrances: "https://th.bing.com/th/id/OIP.prn-4IE5zqMT10pcBmDE2wHaJh?w=183&h=180&c=7&r=0&o=5&dpr=2&pid=1.7g",
  furniture: "https://th.bing.com/th/id/OIP.Xbxgf1tYne0ArGBFyeWN6wHaDj?rs=1&pid=ImgDetMain",
  groceries: "https://th.bing.com/th/id/OIP.pV5ExWWzyHuvkpGPS4u74AHaHa?w=174&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
  "home-decoration": "https://th.bing.com/th/id/OIP.6bniyXfcnArqrURhlsI2DQHaHa?w=171&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
  }
  let array=["beauty","fragrances","furniture","groceries","home-decoration"]

  return<>
{
  array.map((element)=>{
   return <> 
   <div>
    <div>{element}</div>
    <img src={image[element]}></img>
   </div>
   </>

  })
}
  </>
}

export default App;
 