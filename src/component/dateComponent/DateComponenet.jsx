function DateComponent(){
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;


    return(
        <div className="date">
            {date}
        </div>
    )
}
export default DateComponent;