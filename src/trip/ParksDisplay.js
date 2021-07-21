const obj = []
const ParksDisplay = (props) =>{
    props.parks.map((park, index) => {
        return obj.push({
            id: index, 
            //park.name
        })
    })
}

export default ParksDisplay