import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  myDiv: {
    backgroundColor: "blue",

    [`@media print`]: {
      backgroundColor: "red",
    },
  },

  [`@media print`]: {
    myDiv: {
      backgroundColor: "red",
    },
  },
}));

export default function Cv() {
  const { classes } = useStyles();
  return <div className={classes.myDiv}>This is my CV</div>;
}
