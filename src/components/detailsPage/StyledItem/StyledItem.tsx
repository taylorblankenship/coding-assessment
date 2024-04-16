import styles from "./StyledItem.module.css";

interface StyledItemProps {
  text: string;
  isType?: boolean;
}

const StyledItem = ({ text, isType }: StyledItemProps) => {
  return (
    <div className={styles.styledItem}>
      {text.replace("-", " ")}
      {isType && <>type</>}
      {/* todo add custom colors for types */}
    </div>
  );
};

export default StyledItem;
