import { useNavigate } from 'react-router-dom'
export default function ErrorComponent()
{
    const navigate = useNavigate();
    function GotoHome()
    {
        navigate('/welcome')
    }
    return (
        <div className="ErrorComponent">
            <h1>We are working very hard to resolve this!</h1>
            <div>
                Page not found. Please reach out to our team.
            </div>
            <div>
            <button  type="button"  onClick={GotoHome} >Goto Home</button>
            </div>
        </div>
    )
}