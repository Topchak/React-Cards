import styles from './Person.module.css'
function Person({first_name, email,img}) {
  return (
    <div className={styles.card}>
      <h2>{first_name}</h2>
      <a href={`mailto:${email}`}>{email}</a>
      <img src={img} alt={first_name}/>
    </div>
  )
}
export default Person