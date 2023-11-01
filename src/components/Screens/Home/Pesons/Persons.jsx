import styles from "./Persons.module.css";
import Person from "../Person/Person";
import persons from "../../../../Data/persons";
function Persons() {
  
  const cardItem = persons.map((person) => (<Person key={person.id} {...person}/>))
  return (
    <div className={styles.persons}>
      
      {cardItem}
    </div>
  );
}
export default Persons;
