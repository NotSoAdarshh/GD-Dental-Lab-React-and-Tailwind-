const myTeam = [
  { id:1,
    name:"Atharva Deshmukh",
    description:"CAD/CAM & DMLS Department",
    imageUrl: "/images/nightguard.jpg"
  },
  {
    id:2,
    name:"Gopal Deshmukh",
    description:"Ceramics Department",
    imageUrl: "/images/nightguard.jpg"
  },
  {
    id:3,
    name:"Mohan Deshmukh",
    description:"Metals Department",
    imageUrl: "/images/nightguard.jpg"
  },
  {
    id:4,
    name:"Shekhar Deshmukh",
    description:"Waxing Department",
    imageUrl: "/images/nightguard.jpg"
  },
  {
    id:5,
    name:"Yogini Deshmukh",
    description:"Ceramics Department",
    imageUrl: "/images/nightguard.jpg"
  }
];

function Profiles(props){
  return(<>
      <div>
        <div className="h-8 w-8 bg-white/10 backdrop-blur-md border-white/10">
        <img src={props.imageUrl} alt={props.name} />
      </div>
      <div className="bg-white/10 backdrop-blur-md border-white/10 shadow-lg ml-12 mr-12 rounded-3xl">
        <h3 className="text-white p-4">{props.name}</h3>
        <h4 className="text-gray-400 p-4">{props.description}</h4>
      </div>
      </div>
  </>)
}


function MProfiles(){
  return(<>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 ">
        
        {myTeam.map(function(Team)
        { return(
          <Profiles
          key = {Team.id}
            name = {Team.name}
            description = {Team.description}
            imageUrl = {Team.imageUrl}
            />
        )}
        )} 
      </div>
    </>)
}

export default MProfiles;
