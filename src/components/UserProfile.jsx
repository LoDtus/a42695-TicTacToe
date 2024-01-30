import "./style.css"

function userProfile({src, player, active}) {
    return <>
        <div className="profile">
            <img 
                className={active ? "outline" : ""}
                src={src}
                alt={player}
                />
            <p>{player}</p>
        </div>
    </>;
}
export default userProfile;