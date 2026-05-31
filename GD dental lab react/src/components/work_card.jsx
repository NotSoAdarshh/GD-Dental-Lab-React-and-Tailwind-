const myServices = [
  {
    id: 1,
    title: "Zirconia Crowns & Bridges",
    description: "Strong, natural-looking metal-free crowns with high biocompatibility.",
    imageUrl: "/images/zirconia.jpg" 
  },
  {
    id: 2,
    title: "Dental Implants & Custom Abutments",
    description: "Precision-milled custom abutments and highly accurate implant-supported prosthetics.",
    imageUrl: "/images/implants.jpg"
  },
  {
    id: 3,
    title: "DMLS (Direct Metal Laser Sintering)",
    description: "Laser-sintered metal frameworks ensuring exceptional marginal fit and durability.",
    imageUrl: "/images/dmls.jpg"
  },
  {
    id: 4,
    title: "All-Ceramic / E.max",
    description: "Highly aesthetic lithium disilicate restorations, perfect for anterior teeth.",
    imageUrl: "/images/ceramic.jpg"
  },
  {
    id: 5,
    title: "PFM Crowns & Bridges",
    description: "Porcelain fused to metal for traditional, durable bridges and crowns.",
    imageUrl: "/images/pfm.jpg"
  },
  {
    id: 6,
    title: "Removable Acrylic Dentures",
    description: "Comfortable, high-quality full and partial acrylic dentures.",
    imageUrl: "/images/dentures.jpg"
  },
  {
    id: 7,
    title: "Cast Partial Dentures (CPD)",
    description: "Lightweight and robust metal framework partial dentures for long-term use.",
    imageUrl: "/images/cpd.jpg"
  },
  {
    id: 8,
    title: "Clear Aligners",
    description: "Custom-thermoformed transparent aligners for precise orthodontic correction.",
    imageUrl: "/images/aligners.jpg"
  },
  {
    id: 9,
    title: "Night Guards & Splints",
    description: "Protective custom-fitted occlusal splints designed to prevent bruxism damage.",
    imageUrl: "/images/nightguard.jpg"
  }
];

function Card(props){
  return(<>
      <div className="bg-white/10 backdrop-blur-md border-white/10 shadow-lg ml-12 mr-12 rounded-3xl">
        <img src={props.imageUrl} alt={props.title} />
        <h3 className="text-white p-4">{props.title}</h3>
        <h4 className="text-gray-400 p-4">{props.description}</h4>
      </div>
  </>)
}
function MCard(){
  return(<>
      <div className="grid grid-cols-3 md:grid-cols-3 gap-6 ">
        
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