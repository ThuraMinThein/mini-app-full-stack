import "./Avatar.css";

const Avatar = ({ text }) => {
    return (
        <div className="avatar">
            {text?.charAt(0).toUpperCase() || "N/A"}
        </div>
    )
}

export default Avatar;