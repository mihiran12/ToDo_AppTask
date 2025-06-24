function CheckmarkButton(props){
    return(
        <button
            className="checkmark"
            onClick={() => props.handleCheckmark(props.index)}
            type="button"
        >
            ✓
        </button>
    )
}

export default CheckmarkButton