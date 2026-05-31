const myServices = [
  {
    id: 1,
    title: "Zirconia Crowns",
    description: "Strong, natural-looking metal-free crowns.",
    imageUrl: "/images/zirconia.jpg" 
  },
  {
    id: 2,
    title: "PFM Bridges",
    description: "Porcelain fused to metal for durable bridges.",
    imageUrl: "/images/pfm.jpg"
  },
  {
    id: 3,
    title: "Removable Dentures",
    description: "Comfortable, high-quality acrylic dentures.",
    imageUrl: "/images/dentures.jpg"
  }
];

function Card(props){
  return(<>
      <div className="bg-white/10 backdrop-blur-md border-white/10 shadow-lg ml-12 mr-12 rounded-3xl">
        <img src={props.imageUrl} alt={props.title} />
        <h3 className="text-white">{props.title}</h3>
        <h4 className="text-gray-400">{props.description}</h4>
      </div>
  </>)
}
function MCard(){
  return(<>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        
        {myServices.map(function(service)
        { return(
          <Card
          key = {service.id}
            title = {service.title}
            description = {service.description}
            imageUrl = {service.imageUrl}
            />
        )}
        )} 
      </div>
    </>)
}

export default MCard;