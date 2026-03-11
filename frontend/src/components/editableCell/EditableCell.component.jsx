import { useState } from "react";

const EditableCell = ({ value, onSave, ...props }) => {

    const [editing, setEditing] = useState(false);
    const [input, setInput] = useState(value);

    const handleKeyDown = async (e) => {
        if (e.key === "Enter") {
            if (input !== value) {
                await onSave(input);
            }
            setEditing(false);
        }

        if (e.key === "Escape") {
            setInput(value);
            setEditing(false);
        }
    };

    const handleBlur = async () => {
        if (input !== value) {
            await onSave(input);
        }
        setEditing(false);
    };

    if (editing) {
        return (
            <input
                {...props}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                onBlur={handleBlur}
                autoFocus
            />
        );
    }

    return (
        <span {...props} onClick={() => setEditing(true)}>
            {value}
        </span>
    );
};

export default EditableCell;