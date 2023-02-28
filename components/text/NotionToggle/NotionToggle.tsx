import style from "./NotionToggle.module.css";

interface NotionToggleProps {
  value: string;
  children: string[];
}
const NotionToggle = ({ value, children }: NotionToggleProps) => {
  return (
    <label>
      {value}
      <input type="checkbox" className={style.checkbox}></input>
      {children.map((ele) => (
        <li>{ele}</li>
      ))}
    </label>
  );
};

export default NotionToggle;
