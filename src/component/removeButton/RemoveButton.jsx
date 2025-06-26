function RemoveButton(props){
    return(
        <button
            className="remove-button"
            onClick={() => props.handleRemove(props.index)}
            type="button"
        >
            ×
        </button>
    )
}

export default RemoveButton;