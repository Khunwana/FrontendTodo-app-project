const person = {
    name: "Monias",
    surname: "Khunwana",
    schools:{
        matric : "Mandisa",
        Tert : "WTC"
    },
    profiles : ['twitter','linkedIn','Instagram']

}

export default function TestingjavaScript()
{
    return (
        <>
            <div>{person.name}</div>
            <div>{person.surname}</div>
            <div>{person.schools.Tert}</div>
            <div>{person.profiles[0]}</div>
        </>
    )
}