import Dropdown from './Dropdown';

export default function Question() {
    return (
      <div className="Question">
        <label for="question">Are you a US resident?</label>
        <input type="checkbox"></input>
        <Dropdown/>
      </div>
    );
  }