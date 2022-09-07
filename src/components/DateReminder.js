import './datereminder.css';


function DateReminder() {
  let today = new Date();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  let year = today.getFullYear();

  return (
    <div className='dateText'>{day.toString().padStart(2,"0") + "." + month.toString().padStart(2,"0")  + "." + year}</div>
  )
}

export default DateReminder