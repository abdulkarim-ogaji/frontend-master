import { useState } from "react";
import styles from "./phone.module.css";
import { PhoneNumberUtil } from "google-libphonenumber";

const phoneNumberUtil = PhoneNumberUtil.getInstance();
interface Recipient {
  code: string | undefined;
  number: string | undefined;
}

const parseNumbers = (numbers: string): Recipient[] => {
  const listNum = numbers.trim().split(",");
  const receivers: Recipient[] = [];
  listNum.forEach((num) => {
    try {
      const parsedNum = phoneNumberUtil.parse(num);
      receivers.push({
        code: parsedNum.getCountryCode()?.toString(),
        number: parsedNum.getNationalNumber()?.toString(),
      });
    } catch (error) {
      console.log(error);
    }
  });
  return receivers;
};
const ListofNumbers = () => {
  const [numbers, setNumbers] = useState("");
  const [nums, setNums] = useState<Recipient[]>([]);
  const handleClick = () => {
    if (numbers) {
      const numbs = parseNumbers(numbers);
      setNums(numbs);
    }
  };
  return (
    <div className={styles.phone}>
      <form>
        <textarea
          value={numbers}
          onChange={(e) => setNumbers(e.currentTarget.value)}
          rows={numbers.length / 97 + 1}
        ></textarea>
      </form>
      <button onClick={handleClick}>ParseNumbers</button>
      <div>
        {
          nums.map((n) => (
            <div>
              <strong>{n.code}</strong>
              {n.number}
            </div>
          ))}
      </div>
      <div></div>
    </div>
  );
};

export default ListofNumbers;
