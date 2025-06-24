import DateComponent from '../component/DateComponenet';

function ProgressBar(props){

    const totalTasks = props.inputValue.length;
    const completedTasks = props.doneInputs.filter((done) => done).length;
    const progress = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

    return(
        <>
            <div className="progress-bar-wrapper">
                
                <div className="progress-bar">
                    
                    <div className="progress-fill" style={{ width: `${progress}%` }}/>        
                </div>
                <div>
                    
                    <p>{progress}% Completed</p>
                </div>
                
            </div>
        </>
    )
}

export default ProgressBar