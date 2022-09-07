
import './todoprogress.css';
import TodoOpenTasks from './TodoOpenTasks.js';
import DateReminder from './DateReminder.js';
import TodoProgressBar from './TodoProgressBar.js';


export default function TodoProgress(){


    

    return(
        <div className='todoprogressCover'>
            <div className='progress_upperside'>
            <TodoOpenTasks />
            <DateReminder/>
            </div>
            <div className='progress_lowerside'>
            <TodoProgressBar />
            </div>

        </div>
    )


}
