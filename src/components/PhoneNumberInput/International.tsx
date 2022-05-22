import styles from "./phone.module.css"
import countries from "../../assets/countries.json"
const International = () => {
  return <div className={styles.phone}>
    <div>
      <img src={countries[0].image} alt="test"/>
      <select className={styles.selectField}>
        {
          countries.map(c => <option><div><img src={c.image} alt={c.name}/> {c.code} {c.name}</div></option>)
        }
      </select>
    </div>
  </div>
}

export default International